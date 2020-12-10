import React, {
  FC, useMemo, ReactNode, HTMLProps,
} from 'react';
import type { ComponentType as CT } from 'react';
import {
  asComponent, DesignableComponentsProps, designable, stylable, withDesign,
} from '@bodiless/fclasses';
import { ReactMarkdownProps } from 'react-markdown';
import { flow } from 'lodash';
import { withRenderers, Renderers } from '.';

// @TODO Move this to a library somewhere
export const withAutoSuperscript = (charset: string) => {
  const renderers: Renderers = {
    text: (node: { children: string; }) => {
      const { children } = node;
      const newChildren = [...children].map(c => (charset.includes(c) ? <sup>{c}</sup> : c));
      return <>{newChildren}</>;
    },
  };
  return withRenderers(renderers);
};

type MarkdownHeaderComponents = {
  H1: CT,
  H2: CT,
  H3: CT,
  H4: CT,
  H5: CT,
  H6: CT,
};

const markdownHeaderComponents: MarkdownHeaderComponents = {
  H1: asComponent('h1'),
  H2: asComponent('h2'),
  H3: asComponent('h3'),
  H4: asComponent('h4'),
  H5: asComponent('h5'),
  H6: asComponent('h6'),
};

type MarkdownHeadingNode = {
  children: ReactNode,
  level: number,
};

const createHeaderRenderer = (components: MarkdownHeaderComponents) => ({
  heading: (node: MarkdownHeadingNode) => {
    const { level, children } = node;
    const componentKey = `H${level}` as keyof MarkdownHeaderComponents;
    const Heading = components[componentKey];
    return <Heading>{children}</Heading>;
  },
});

type MarkdownListNode = {
  depth: number,
  children: ReactNode,
  ordered: boolean,
  tight: boolean,
};

type MarkdownListComponents = {
  UL: CT,
  OL: CT,
};

const MarkdownListComponents = {
  UL: asComponent('ul'),
  OL: asComponent('ol'),
};

const createListRenderer = (components: MarkdownListComponents) => ({
  list: (node: MarkdownListNode) => {
    const { children, ordered } = node;
    const { UL, OL } = components;
    const List = ordered ? OL : UL;
    return <List>{children}</List>;
  },
});

type MarkdownLinkComponents = {
  A: CT<HTMLProps<HTMLAnchorElement>>,
};

type MarkdownLinkNode = {
  href: string,
  children: ReactNode,
};

const markdownLinkComponents: MarkdownLinkComponents = {
  A: asComponent('a'),
};

const createLinkRenderer = (components: MarkdownLinkComponents) => ({
  link: (node: MarkdownLinkNode) => {
    const { A } = components;
    const { href, children } = node;
    return <A href={href}>{children}</A>;
  },
});

type MarkdownComponents = MarkdownHeaderComponents
& MarkdownListComponents
& MarkdownLinkComponents;

const markdownComponents: MarkdownComponents = {
  ...markdownHeaderComponents,
  ...MarkdownListComponents,
  ...markdownLinkComponents,
};

type DesignableMarkdownProps = ReactMarkdownProps & DesignableComponentsProps<MarkdownComponents>;

const asDesignableMarkdown = (Markdown: CT<ReactMarkdownProps>) => {
  const DesignableMarkdown: FC<DesignableMarkdownProps> = props => {
    const { components, renderers, ...rest } = props;
    const finalRenderers = useMemo(() => ({
      ...createHeaderRenderer(components),
      ...createListRenderer(components),
      ...createLinkRenderer(components),
      ...renderers,
    }), [components, renderers]);
    return <Markdown {...rest} renderers={finalRenderers} />;
  };
  return designable(markdownComponents, 'Markdown')(DesignableMarkdown);
};

const stylableMarkdownDesign = Object.keys(markdownComponents).reduce(
  (design, key) => ({
    ...design,
    [key]: stylable,
  }),
  {},
);

export const asStylableMarkdown = flow(
  asDesignableMarkdown,
  withDesign(stylableMarkdownDesign),
);

export default asDesignableMarkdown;
