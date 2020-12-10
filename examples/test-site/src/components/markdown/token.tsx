import { flow } from 'lodash';
import { withDesign, addClasses, addProps } from '@bodiless/fclasses';
import { asHeader2, asHeader3, asLink } from '../Elements.token';
import { asBodilessMarkdown } from '.';
import { asStylableMarkdown, withAutoSuperscript as withAutoSuperscriptBase } from './asDesignableMarkdown';

const asEditableMarkdown = asBodilessMarkdown;

const withAutoSupserscript = withAutoSuperscriptBase('©®');

const withTypography = flow(
  asStylableMarkdown,
  withAutoSupserscript,
  withDesign({
    H2: asHeader2,
    H3: asHeader3,
    // @TODO These list style tokens should be exported from imodium_global
    UL: addClasses('list-disc ml-4'),
    OL: addClasses('list-decimal ml-4'),
    A: asLink,
  }),
  addProps({ skipHtml: true }),
);

export {
  withAutoSupserscript, asEditableMarkdown, withTypography,
};
