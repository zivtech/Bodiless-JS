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

describe('All pages are available', function () {


  const adminMenu = '//*[@aria-label="Global Context Menu Left"]';


  it('1 - Home page', () => {
    cy.visit('/');
    checkPageLoads();
  })


  it('2 - /404/', () => {
    cy.visit('/404/');
    checkPageLoads();
  })

  it('3 - /accordion/', () => {
    cy.visit('/accordion/');
    checkPageLoads();
  })


  it('4 - /burger-menu/', () => {
    cy.visit('/burger-menu/');
    checkPageLoads();
  })


  it('5 - /carousel/', () => {
    cy.visit('/carousel/');
    checkPageLoads();
  })


  it('6 - /chameleon/', () => {
    cy.visit('/chameleon/');
    checkPageLoads();
  })


  it('7 - /compound-form/', () => {
    cy.visit('/compound-form/');
    checkPageLoads();
  })


  it('8 - /context/', () => {
    cy.visit('/context/');
    checkPageLoads();
  })


  it('9 - /filter-item/', () => {
    cy.visit('/filter-item/');
    checkPageLoads();
  })


  it('10 - /filter-page/', () => {
    cy.visit('/filter-page/');
    checkPageLoads();
  })


  it('11 - /flow-container/', () => {
    cy.visit('/flow-container/');
    checkPageLoads();
  })


  it('12 - /form-elements/', () => {
    cy.visit('/form-elements/');
    checkPageLoads();
  })


  it('13 - /forms/', () => {
    cy.visit('/forms/');
    checkPageLoads();
  })


  it('14 - /gallery-final/', () => {
    cy.visit('/gallery-final/');
    checkPageLoads();
  })


  it('15 - /images/', () => {
    cy.visit('/images/');
    checkPageLoads();
  })


  it('16 - /link-toggle/', () => {
    cy.visit('/link-toggle/');
    checkPageLoads();
  })


  it('17 - /list/', () => {
    cy.visit('/list/');
    checkPageLoads();
  })


  it('18 - /list2/', () => {
    cy.visit('/list2/');
    checkPageLoads();
  })


  it('19 - /megamenu/', () => {
    cy.visit('/megamenu/');
    checkPageLoads();
  })


  it('20 - /notification/', () => {
    cy.visit('/notification/');
    checkPageLoads();
  })


  it('21 - /rcmenu/', () => {
    cy.visit('/rcmenu/');
    checkPageLoads();
  })


  it('22 - /products/', () => {
    cy.visit('/products/');
    checkPageLoads();
  })


  it('23 - /richtext/', () => {
    cy.visit('/richtext/');
    checkPageLoads();
  })


  it('24 - /sitedatapage2/', () => {
    cy.visit('/sitedatapage2/');
    checkPageLoads();
  })


  it('25 - /sitedatapage/', () => {
    cy.visit('/sitedatapage/');
    checkPageLoads();
  })


  it('26 - /slate-shared-node/', () => {
    cy.visit('/slate-shared-node/');
    checkPageLoads();
  })


  it('27 - /youtube/', () => {
    cy.visit('/youtube/');
    checkPageLoads();
  })


  it('28 - /touts/', () => {
    cy.visit('/touts/');
    checkPageLoads();
  })


  it('29 - /products/product-a/', () => {
    cy.visit('/products/product-a/');
    checkPageLoads();
  })


  it('30 - /products/product-b/', () => {
    cy.visit('/products/product-b/');
    checkPageLoads();
  })


  it('31 - /api/fclasses/', () => {
    cy.visit('/api/fclasses/');
    checkPageLoads();
  })


  function checkPageLoads() {
    cy.xpath(adminMenu)
      .should('be.visible');
  }
})
