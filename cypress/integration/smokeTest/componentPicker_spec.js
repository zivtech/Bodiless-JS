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

describe('Component Picker smoke test', function () {

   before(function () {
      cy.visit(pagePath);
      cy.clickEdit();
   })

   const pagePath = '/flow-container/';
   const flowContainer = '//div[text()="Empty FlowContainer"]';
   const addComponentIconXpath = '//button[@aria-label="Add"]';
   const itemInComponentPicker = '//div[@class="bl-p-grid-2"]';
   const accordionIteminComponentPicker = '//*[@class="bl-p-grid-2"]//*[text()="Accordion Title"]';
   const allCheckbox = '//*[@id="All"]';
   const allLabel = '//*[@for="All"]';
   const typeLabelArrow = '//*[text()="expand_less"]//following-sibling::label[text()="Type"]';
   const orientationLabelArrow = '//*[text()="expand_less"]//following-sibling::label[text()="Orientation"]';
   const imageLabelArrow = '//*[text()="expand_less"]//following-sibling::label[text()="Image"]';
   const arrowFilter = '//*[text()="expand_less"]';
   const richTextCheckbox = '//*[@id="Rich Text"]';
   const richTextLabel = '//*[@for="Rich Text"]';
   const imageCheckbox = '//*[@id="Image"]';
   const imageLabel = '//*[@for="Image"]';
   const toutCheckbox = '//*[@id="Tout"]';
   const toutLabel = '//*[@for="Tout"]';
   const contentfulCheckbox = '//*[@id="Contentful"]';
   const contentfulLabel = '//*[@for="Contentful"]';
   const accordionCheckbox = '//*[@id="Accordion"]';
   const accordionLabel = '//*[@for="Accordion"]';
   const naCheckbox = '//*[@id="N/A"]';
   const naLabel = '//*[@for="N/A"]';
   const horizCheckbox = '//*[@id="Horizontal"]';
   const horizLabel = '//*[@for="Horizontal"]';
   const vertCheckbox = '//*[@id="Vertical"]';
   const vertLabel = '//*[@for="Vertical"]';
   const searchField = '//input[@id="Search"][@placeholder="Search"]';
   const searchTerm = 'rich text';
   const squareCheckbox = '//*[@id="Square"]';
   const squareLabel = '//*[@for="Square"]';
   const landscapeCheckbox = '//*[@id="Landscape"]';
   const landscapeLabel = '//*[@for="Landscape"]';
   const linkableCheckbox = '//*[@id="Linkable"]';
   const linkableLabel = '//*[@for="Linkable"]';
   const simpleRTEItem = '//*[text()="Simple Rich Text"]//following-sibling::*//i[text()="format_size"]';
   const basicRTEItem = '//*[text()="Basic Rich Text"]//following-sibling::*//i[text()="format_bold"]';
   const fullRTEItem = '//*[text()="Full Rich Text"]//following-sibling::*//i[text()="format_quote"]';
   const closeIcon = '//*[text()="cancel"]';
   const titleInComponentPicker = '//h3[text()="Components"]';


   it('Component Picker: 1 - checking availability of the Component Picker Filter and Search elements', () => {
      cy.xpath(flowContainer)
         .eq(0)
         .click({ force: true });
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(allCheckbox + '[not(@disabled)]');
      [allLabel, typeLabelArrow, orientationLabelArrow].forEach((element) => {
         cy.xpath(element);
      })
      cy.xpath(imageLabelArrow)
         .should('not.exist');
      cy.xpath(arrowFilter)
         .should('have.length', 2);
      [richTextLabel, imageLabel, toutLabel, contentfulLabel, accordionLabel, naLabel,
         horizLabel, vertLabel, searchField].forEach((element) => {
            cy.xpath(element);
         })
      cy.xpath(richTextCheckbox + '[not(@disabled)]');
      cy.xpath(imageCheckbox + '[not(@disabled)]');
      cy.xpath(toutCheckbox + '[not(@disabled)]');
      cy.xpath(contentfulCheckbox + '[not(@disabled)]');
      cy.xpath(accordionCheckbox + '[not(@disabled)]');
      cy.xpath(naCheckbox + '[not(@disabled)]');
      cy.xpath(horizCheckbox + '[not(@disabled)]');
      cy.xpath(vertCheckbox + '[not(@disabled)]');
   })


   it('Component Picker: 2 - checking Component Picker Filter functionality', () => {
      cy.xpath(accordionCheckbox)
         .click();
      cy.xpath(itemInComponentPicker)
         .should('have.length', 1);
      cy.xpath(accordionIteminComponentPicker);
      cy.xpath(richTextCheckbox + '[@disabled]');
      cy.xpath(imageCheckbox + '[@disabled]');
      cy.xpath(toutCheckbox + '[@disabled]');
      cy.xpath(contentfulCheckbox + '[@disabled]');
      cy.xpath(accordionCheckbox + '[not(@disabled)]');
      cy.xpath(naCheckbox + '[not(@disabled)]');
      cy.xpath(horizCheckbox + '[@disabled]');
      cy.xpath(vertCheckbox + '[@disabled]')
      cy.xpath(accordionLabel)
         .click();
      cy.xpath(imageCheckbox)
         .click();
      cy.xpath(imageLabelArrow)
         .should('exist');
      cy.xpath(arrowFilter)
         .should('have.length', 3);
      [squareLabel, landscapeLabel, linkableLabel, squareCheckbox + '[not(@disabled)]',
         landscapeCheckbox + '[not(@disabled)]', linkableCheckbox + '[not(@disabled)]'].forEach((element) => {
            cy.xpath(element);
         })
      cy.xpath(imageLabel)
         .click();
      cy.xpath(imageLabelArrow)
         .should('not.exist');
      cy.xpath(arrowFilter)
         .should('have.length', 2);
      [squareCheckbox, squareLabel, landscapeCheckbox, landscapeLabel, linkableCheckbox,
         linkableLabel].forEach((element) => {
            cy.xpath(element)
               .should('not.exist');
         })
   })


   it('Component Picker: 3 - checking Component Picker Search functionality', () => {
      cy.xpath(searchField)
         .type(searchTerm);
      cy.xpath(itemInComponentPicker)
         .should('have.length', 3);
      [simpleRTEItem, basicRTEItem, fullRTEItem].forEach((element) => {
         cy.xpath(element);
      })
      cy.xpath(richTextCheckbox + '[not(@disabled)]');
      cy.xpath(imageCheckbox + '[@disabled]');
      cy.xpath(toutCheckbox + '[@disabled]');
      cy.xpath(contentfulCheckbox + '[@disabled]');
      cy.xpath(accordionCheckbox + '[@disabled]');
      cy.xpath(naCheckbox + '[not(@disabled)]');
      cy.xpath(horizCheckbox + '[@disabled]');
      cy.xpath(vertCheckbox + '[@disabled]');
   })


   it('Component Picker: 4 - checking closing Component Picker form', () => {
      cy.xpath(closeIcon)
         .click();
      cy.xpath(titleInComponentPicker)
         .should('not.exist');
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(titleInComponentPicker);
      cy.xpath(addComponentIconXpath)
         .click();
      cy.xpath(titleInComponentPicker)
         .should('not.exist');
   })

   
   it.skip('Component Picker: 4 - checking availability of all components', () => {
      //tbc
   })

})