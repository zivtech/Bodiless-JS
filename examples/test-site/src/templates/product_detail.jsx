/**
 * Copyright © 2020 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { flow } from 'lodash';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { BVRatingsSummary, BVReviews } from '@bodiless/bv';
import { withNode } from '@bodiless/core';
import {
  addProps,
  withDesign,
  replaceWith,
  removeClasses, HOC,
} from '@bodiless/fclasses';
import {
  AccordionClean,
  asTestableAccordion,
} from '@bodiless/organisms';
import {
  withDataLayerItem,
  withDefaultDataLayer,
} from '@bodiless/components';
import Helmet from 'react-helmet';
import { withGlobalGTMForm } from '../components/GTM';
import Layout from '../components/Layout';
import {
  ProductTitle,
  ProductImage,
  SectionMargin,
  SectionNegXMargin,
  ProductDetailImageWrapper,
  ProductDetailAccWrapper,
} from '../components/Product';
import { FlowContainerDefault } from '../components/FlowContainer';
import { withEditorBasic } from '../components/Editors';
import asAccordionDefaultStyle from '../components/SingleAccordion/token';

// Example of datalayer information on specific for a product page.
const productDefaultDataLayer = {
  dataLayerName: 'DigitalData',
  dataLayerData: [
    {
      event: 'Product Viewed',
      product: [
        {
          productInfo: {
            productCustomAttribute: 'Product Static Value',
          },
        },
      ],
    },
  ],
};

// // Override the page Type defined for the default global dataLayer by excluding.
// const withDataLayerPageType = withDataLayerItem({
//   name: 'pagetype',
//   label: 'Page Type',
//   // if you are overriding a global item do't add a path
//   path: '1.page.pageType',
// });
//
// const withDataLayerSku = withDataLayerItem({
//   name: 'sku',
//   label: 'SKU',
//   path: '0.product.0.productInfo.sku',
// });
// // Add a product sku editable field:
// const withDataLayerUPC = withDataLayerItem({
//   name: 'upc',
//   label: 'Product UPC',
//   path: '0.product.0.productInfo.upc',
// });
// // Add a product sku editable field:
// const withDataLayerProductName = withDataLayerItem({
//   name: 'productName',
//   label: 'Product Name',
//   path: '0.product.0.productInfo.name',
// });
//
// // Add a product sku editable field:
// const withDataLayerProductVariant = withDataLayerItem({
//   name: 'variant',
//   label: 'Product Variant',
//   // The path relevant to you default datalayer defined above.
//   path: '0.product.0.productInfo.variant',
// });

const GTMDataLayerProductHelmet = withGlobalGTMForm(
  withDefaultDataLayer(productDefaultDataLayer),
  // withDataLayerSku('product-sku', 'bar'),
  // withDataLayerUPC('product-upc', 'baz'),
  // withDataLayerProductName('product-name', 'bing'),
  // withDataLayerProductVariant('product-variant', 'bang'),
)(Helmet);

// Do not allow editors to set accordion titles.
const NonEditableTitle = ({ producttitle, ...rest }) => (
  <h2 {...rest}>
    {producttitle}
  </h2>
);

const asTestableProductAccordion = label => flow(
  asTestableAccordion,
  withDesign({
    Wrapper: addProps({ 'aria-label': label }),
  }),
);

const asProductAccordion = title => flow(
  withNode,
  asAccordionDefaultStyle,
  withDesign({
    Wrapper: removeClasses('p-1'),
    Title: withDesign({
      Wrapper: removeClasses('text-2xl'),
      Label: replaceWith(props => <NonEditableTitle {...props} producttitle={title} />),
    }),
    Body: withDesign({
      Content: withEditorBasic(
        'body',
        'Enter Product Information',
      ),
    }),
  }),
  asTestableProductAccordion(title),
);

const ProductOverAcc = asProductAccordion('Overview')(AccordionClean);
const ProductDirsAcc = asProductAccordion('Directions')(AccordionClean);
const ProductHowAcc = asProductAccordion('How To Use')(AccordionClean);
const ProductNutAcc = asProductAccordion('Nutrition')(AccordionClean);
const ProductActIngAcc = asProductAccordion('Active Ingredients')(AccordionClean);
const ProductInactIngAcc = asProductAccordion('Inactive Ingredients')(AccordionClean);
const ProductStorAcc = asProductAccordion('Storage')(AccordionClean);
const ProductWarnAcc = asProductAccordion('Warnings')(AccordionClean);

const asTestableRatingsSummary = addProps({ 'data-product-element': 'ratings-summary' });
const ProductRatingsSummary = asTestableRatingsSummary(BVRatingsSummary);

const asTestableProductReviews = addProps({ 'data-product-element': 'reviews' });
const ProductReviews = asTestableProductReviews(BVReviews);

const asTestableFlowContainer = withDesign({
  Wrapper: addProps({ 'data-product-element': 'flow-container' }),
});
const ProductFlowContainer = asTestableFlowContainer(FlowContainerDefault);

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <GTMDataLayerProductHelmet />
      <SectionMargin>
        <div className="flex flex-wrap md:items-end md:flex-row-reverse">
          <div className="w-full md:flex-1 md:flex-grow-0 md:flex-shrink-0 text-right"><p>Placeholder_for_Share</p></div>
          <div className="w-full md:flex-1">
            <ProductTitle />
          </div>
        </div>
      </SectionMargin>
      <SectionMargin>
        <ProductRatingsSummary />
      </SectionMargin>
      <SectionMargin>
        <div className="flex flex-wrap">
          <ProductDetailImageWrapper>
            <ProductImage />
          </ProductDetailImageWrapper>
          <ProductDetailAccWrapper>
            <ProductOverAcc expanded nodeKey="accordion-1" />
            <ProductDirsAcc nodeKey="accordion-2" />
            <ProductHowAcc nodeKey="accordion-3" />
            <ProductNutAcc nodeKey="accordion-4" />
            <ProductActIngAcc nodeKey="accordion-5" />
            <ProductInactIngAcc nodeKey="accordion-6" />
            <ProductStorAcc nodeKey="accordion-7" />
            <ProductWarnAcc nodeKey="accordion-8" />
          </ProductDetailAccWrapper>
        </div>
      </SectionMargin>
      <SectionMargin>
        <ProductReviews />
      </SectionMargin>
      <SectionNegXMargin>
        <ProductFlowContainer
          nodeKey="product_touts"
          maxComponents={3}
        />
      </SectionNegXMargin>
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;
