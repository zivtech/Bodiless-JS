import React, {
  createContext, ComponentType as CT, useRef, useContext, FC,
} from 'react';
import { ContextMenuForm } from './contextMenuForm';
import type { FormProps as ContextMenuFormProps } from './contextMenuForm';
import { TMenuOption } from './PageEditContext/types';
import PageContextProvider from './PageContextProvider';

/**
 * A collection of form fields (with initial values and submit handler) which can be rendered
 * as part of a compound form.
 */
type Snippet = {
  /**
   * A unique identifier for this snippet
   */
  id: string,
  /**
   * The function which will render the actual form fields
   */
  render: () => JSX.Element,
  /**
   * The initial values for each form field.
   */
  initialValues: any,
  /**
   * The submit handler.  Will be invoked with *all* data from the form.
   */
  submitValues: (values: any) => void,
};

type SnippetRegister = (snippet: Snippet) => void;

const Context = createContext<SnippetRegister>(() => {});

export const useRegisterSnippet = (snippet: Snippet) => useContext(Context)(snippet);

type FormProps = ContextMenuFormProps & {
  snippets: Snippet[],
};

/**
 * A Form which renders a collection of snippets.
 *
 * @param props Standard context menu form props + an array of snippets to render.
 */
const Form: FC<FormProps> = ({ snippets, ...rest }) => {
  const submitValues = (values: any) => {
    snippets.forEach(s => s.submitValues(values));
  };
  const initialValues = snippets.reduce(
    (values, snippet) => ({ ...values, ...snippet.initialValues }),
    {},
  );
  const props = { submitValues, initialValues };
  return (
    <ContextMenuForm {...rest} {...props}>
      {snippets.map(s => s.render())}
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
const withCompoundForm = (option: TMenuOption) => <P extends object>(Component: CT<P>) => {
  const WithCompoundForm = (props:P) => {
    // This ref will hold all snippets registered by child components.
    const snippets = useRef<Snippet[]>([]);
    // This callback will be used by child components to contribute their snippets.
    const registerSnippet = (snippet: Snippet) => {
      // Ensure that there is only a single entry for each snippet.
      snippets.current = snippets.current
        .filter(s => s.id !== snippet.id)
        .concat(snippet);
    };
    // Render function which passes the current snippets to our Form component.
    const renderForm = (formProps: ContextMenuFormProps) => (
      <Form {...formProps} snippets={snippets.current} />
    );
    // Add the handler to the provided menu option.
    const finalOption = {
      ...option,
      handler: () => renderForm,
    };
    const getMenuOptions = () => [finalOption];
    // Wrap the original component with
    // - A context containing the register snippet callback
    // - A menu options provider
    return (
      <Context.Provider value={registerSnippet}>
        <PageContextProvider
          getMenuOptions={getMenuOptions}
          name={option.name}
        >
          <Component {...props} />
        </PageContextProvider>
      </Context.Provider>
    );
  };
  return WithCompoundForm;
};

export default withCompoundForm;
