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

describe('Flow Container smoke test', function () {

   before(function () {
      cy.visit(pagePath);
      cy.clickEdit();
   })

   const pagePath = '/flow-container/';
   const flowContainer = '//div[text()="Empty FlowContainer"]';
   const h2_default = '//h2[text()="Default FlowContainer"]';
   const h2_50_100 = '//h2[text()="FlowContainer with constrained widths of 50% & 100% only"]';
   const h2_restr_1 = '//h2[text()="FlowContainer restricted to 1 item"]';
   const h2_25 = '//h2[text()="Default Width of 25%"]';
   const h2_33 = '//h2[text()="Default Width of 33% (should round up to 33.33%)"]';
   const h2_50 = '//h2[text()="Default Width of 50%"]';
   const h2_66 = '//h2[text()="Default Width of 66.66% "]';
   const h2_75 = '//h2[text()="Default Width of 75%"]';
   const addComponentIconXpath = '//button[@aria-label="Add"]';
   const swapComponentIconXpath = '//button[@aria-label="Swap"]';
   const deleteComponentIconXpath = '//button[@aria-label="Delete"]';
   const imagesFolderPath = "images";
   const imageName = 'img_615x500.jpg';
   const title = 'AT - Title 1';
   const body = 'AT - Description 1';
   const linkUrl = 'AT-flowContainer';
   const checkmarkIconImageFormXpath = '//form[@aria-label="Context Menu Image Form"]//button[@aria-label="Submit"]';
   const imagePlaceholderXpath = '//div[contains(@class,"md:p-5")]//img';
   const imagePathRegex = new RegExp("images\/pages" + pagePath + "[a-zA-Z0-9]+\/" + imageName, "");
   const altFieldXpath = '//form[@aria-label="Context Menu Image Form"]//input[@id="image-alt"]';
   const imageAltText = 'AT-ImageAltText';
   const titleFirstXpath = '//*[@data-accordion-element="accordion-title"]';
   const bodyFirstXpath = '//*[@data-accordion-element="accordion-body"]';
   const plusIconFirstXpath = '//*[@data-accordion-icon="expand"]';
   const minusIconFirstXpath = '//*[@data-accordion-icon="collapse"]';
   const itemInComponentPicker = '//div[@class="bl-p-grid-2"]';
   const titleInComponentPicker = '//h3[text()="Components"]';
   const imageIconXpath = '//*[@role="toolbar" and @aria-label="Local Context Menu"]//*[@aria-label="Image"]';
   const contentfulToutEdit = '//div[contains(@style,"width: 33.33%")]//*[@data-tout-element="wrapper"]';
   const contentfulToutLinkEdit = '//div[contains(@style,"width: 33.33%")]//a[@href="https://www.jnj.com/"][@data-tout-element="image-link"]';
   const contentfulToutPreview = '//div[contains(@class,"w-1/3")]//*[@data-tout-element="wrapper"]';
   const contentfulToutLinkPreview = '//div[contains(@class,"w-1/3")]//a[@href="https://www.jnj.com/"][@data-tout-element="image-link"]';
   const searchField = '//input[@id="Search"][@placeholder="Search"]';
   const linkIconXpath = '//*[@role="toolbar" and @aria-label="Local Context Menu"]//*[@aria-label="Link"]';
   const urlFieldXpath = '//form[@aria-label="Context Menu Link Form"]//input[@id="link-href"]';
   const checkmarkIconLinkFormXpath = '//form[@aria-label="Context Menu Link Form"]//button[@aria-label="Submit"]';
   const imageLinkXpath = '//div[contains(@class,"md:p-5")]//a'


   it('Flow Container: 1 - checking availability of all flow container sections', () => {
      [h2_default, h2_50_100, h2_restr_1, h2_25, h2_33, h2_50, h2_66, h2_75].forEach((element) => {
         cy.xpath(element);
      })
      cy.xpath(flowContainer)
         .should('have.length', 8);
   })


   it('Flow Container: 2 - checking adding and filling in a Square Image in the Deafult Flow Container', () => {
      cy.xpath(flowContainer)
         .eq(0)
         .click({ force: true });
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(itemInComponentPicker + '[4]')
         .click();
      cy.xpath(titleInComponentPicker)
         .should('not.exist');
      cy.xpath(imagePlaceholderXpath)
         .click();
      cy.xpath(imageIconXpath)
         .click();
      cy.xpath(altFieldXpath)
         .clear()
         .type(imageAltText);
      const imagePath = `${imagesFolderPath}/${imageName}`;
      cy.fixture(imagePath).then(fileContent => {
         cy.get('input[type=file]').upload({ fileContent, fileName: imageName, mimeType: "image/jpeg" });
      })
      cy.wait(3000);
      cy.xpath(checkmarkIconImageFormXpath)
         .click();
      cy.xpath(imagePlaceholderXpath)
         .should('have.attr', 'src')
         .and('match', imagePathRegex);
      cy.isImageVisible(imagePlaceholderXpath);
      cy.xpath(imagePlaceholderXpath)
         .should('have.attr', 'alt', imageAltText);

      [addComponentIconXpath, swapComponentIconXpath, deleteComponentIconXpath].forEach((element) => {
         cy.xpath(element);
      })
   })


   it('Flow Container: 3 - checking adding and filling in an Accordion in the Restricted to 1 item Flow Container', () => {
      cy.xpath(flowContainer)
         .eq(1)
         .click({ force: true });
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(itemInComponentPicker + '[24]')
         .click();
      cy.xpath(titleFirstXpath)
         .type(title)
         .should('have.text', title);
      cy.xpath(plusIconFirstXpath)
         .click();
      cy.xpath(bodyFirstXpath)
         .click()
         .type(body)
         .should('have.text', body);
      cy.xpath(minusIconFirstXpath)
         .click();
      cy.xpath(bodyFirstXpath)
         .should('be.hidden');
      cy.xpath(addComponentIconXpath)
         .should('not.exist');
      cy.xpath(swapComponentIconXpath);
      cy.xpath(deleteComponentIconXpath);
   })


   it('Flow Container: 4 - checking adding and filling in a Contentful Tout in Default Width of 33%', () => {
      cy.xpath(flowContainer)
         .eq(2)
         .click({ force: true });
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(itemInComponentPicker + '[22]')
         .click();
      cy.xpath(contentfulToutEdit);
      cy.xpath(contentfulToutLinkEdit);
   })


   it('Flow Container: 5 - checking Preview', () => {
      cy.wait(3000);
      cy.clickEdit();
      cy.xpath(imagePlaceholderXpath)
         .should('have.attr', 'src')
         .and('match', imagePathRegex);
      cy.isImageVisible(imagePlaceholderXpath);
      cy.xpath(imagePlaceholderXpath)
         .should('have.attr', 'alt', imageAltText);
      cy.xpath(addComponentIconXpath)
         .should('not.exist');
      cy.xpath(swapComponentIconXpath)
         .should('not.exist');
      cy.xpath(deleteComponentIconXpath)
         .should('not.exist');
      cy.xpath(titleFirstXpath)
         .should('have.text', title)
      cy.xpath(bodyFirstXpath)
         .should('be.hidden');
      cy.xpath(plusIconFirstXpath)
         .click();
      cy.xpath(bodyFirstXpath)
         .should('have.text', body);
      cy.xpath(contentfulToutPreview);
      cy.xpath(contentfulToutLinkPreview);
   })


   it('flowContainer: 6 - checking swaping', () => {
      cy.clickEdit();
      cy.xpath(imagePlaceholderXpath + '[not(@data-tout-element)]')
         .click();
      cy.xpath(swapComponentIconXpath)
         .click();
      cy.xpath(searchField)
         .type('Landscape Linkable');
      cy.xpath(itemInComponentPicker + '[1]')
         .click();
      cy.xpath(imagePlaceholderXpath + '[not(@data-tout-element)]')
         .should('have.attr', 'src')
         .and('match', imagePathRegex);
      cy.isImageVisible(imagePlaceholderXpath + '[not(@data-tout-element)]');
      cy.xpath(imagePlaceholderXpath + '[not(@data-tout-element)]')
         .should('have.attr', 'alt', imageAltText);
      cy.xpath(imagePlaceholderXpath + '[not(@data-tout-element)]')
         .click();
      cy.xpath(linkIconXpath)
         .click();
      cy.xpath(urlFieldXpath)
         .type(linkUrl);
      cy.xpath(checkmarkIconLinkFormXpath)
         .click();
      cy.xpath(imageLinkXpath)
         .should('have.attr', 'href', linkUrl);
   })


   it.skip('flowContainer: 7 - checking deleting ', () => {

   })
})