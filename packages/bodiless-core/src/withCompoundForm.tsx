import React, {
  createContext, ComponentType as CT, useRef, useContext,
} from 'react';
import { useFormState, useFormApi } from 'informed';
import { pick } from 'lodash';
import { ContextMenuForm, FormBodyProps, FormBodyRenderer } from './contextMenuForm';
import type { FormProps as ContextMenuFormProps } from './contextMenuForm';
import type { Options } from './types/PageContextProviderTypes';
import PageContextProvider from './PageContextProvider';
import { useEditContext } from './hooks';

/**
 * A collection of form fields (with initial values and submit handler) which can be rendered
 * as part of a compound form.
 */
export type Snippet<D> = {
  /**
   * A unique identifier for this snippet
   */
  id: string,
  /**
   * The function which will render the actual form fields
   */
  render: FormBodyRenderer<D>,
  /**
   * The initial values for each form field. Note that you
   * *must* include a key for each field in the form.
   */
  initialValues: any,
  /**
   * The submit handler.  Will be invoked with form values
   * whose field names match the keys of the specified initialValues.
   */
  submitValues: (values: any) => void,
};

type SnippetRegister<D> = (snippet: Snippet<D>) => void;

const Context = createContext<SnippetRegister<any>>(() => {});

/**
 * Hook to register a form snippet which will be rendered as part of a compound form. Should
 * be invoked within a component wrapped in `withCompoundForm`.
 *
 * @param snippet The snippet to add to the form.
 */
export const useRegisterSnippet = <D extends object>(snippet: Snippet<D>) => (
  useContext(Context)(snippet)
);

/**
 * Type of the props for a compount form.
 */
type FormProps<D> = ContextMenuFormProps & {
  /**
   * An afray of snippets which make up the form body.
   */
  snippets: Snippet<D>[],
};

/**
 * A Form which renders a collection of snippets.
 *
 * @param props Standard context menu form props + an array of snippets to render.
 */
const Form = <D extends object>({ snippets, ...rest }: FormProps<D>) => {
  const submitValues = (values: any) => {
    snippets.forEach(s => {
      // Ensure that we only submit values whose keys were present in the initial values.
      const values$ = pick(values, Object.keys(s.initialValues));
      s.submitValues(values$);
    });
  };
  const initialValues = snippets.reduce(
    (values, snippet) => ({ ...values, ...snippet.initialValues }),
    {},
  );
  const formProps = { submitValues, initialValues };
  const renderProps: FormBodyProps<D> = {
    formState: useFormState(),
    formApi: useFormApi(),
    ...rest,
  };
  return (
    <ContextMenuForm {...rest} {...formProps}>
      {snippets.map(s => s.render(renderProps))}
    </ContextMenuForm>
  );
};

/**
 * HOC to create a menu option which will display a "compound form". Children of this
 * component can contribute "snippets" to the form. Each snippet consists of
 * - a render function (to render the form fields)
 * - initial values to populate the fields
 * - a submit handler which will be passed all submitted values from the form.
 * @param option A context menu option (minus the handler).
 */
const withCompoundForm = <P extends object>(options: Options<P>) => (Component: CT<P>) => {
  const WithCompoundForm = (props:P) => {
    const { useGetMenuOptions, ...rest } = options;
    const context = useEditContext();
    // eslint-disable-next-line max-len
    const getMenuOptionsBase = (useGetMenuOptions && useGetMenuOptions(props, context)) || (() => []);
    // This ref will hold all snippets registered by child components.
    const snippets = useRef<Snippet<any>[]>([]);
    // This callback will be used by child components to contribute their snippets.
    const registerSnippet = (snippet: Snippet<any>) => {
      // Ensure that there is only a single entry for each snippet.
      const existsAt = snippets.current.findIndex(s => s.id === snippet.id);
      if (existsAt >= 0) snippets.current.splice(existsAt, 1, snippet);
      else snippets.current.push(snippet);
    };
    // Render function which passes the current snippets to our Form component.
    const renderForm = (formProps: ContextMenuFormProps) => (
      <Form {...formProps} snippets={snippets.current} />
    );
    const getMenuOptions = () => {
      const baseOptions = getMenuOptionsBase();
      if (baseOptions.length !== 1) {
        throw new Error('Menu option getter for withCompoundForm must return a single item.');
      }
      // Add the handler to the provided menu option.
      const finalOption = {
        ...baseOptions[0],
        handler: () => renderForm,
      };
      return [finalOption];
    };
    // Wrap the original component with
    // - A context containing the register snippet callback
    // - A menu options provider
    return (
      <Context.Provider value={registerSnippet}>
        <PageContextProvider
          getMenuOptions={getMenuOptions}
          {...rest}
        >
          <Component {...props} />
        </PageContextProvider>
      </Context.Provider>
    );
  };
  return WithCompoundForm;
};

export default withCompoundForm;
