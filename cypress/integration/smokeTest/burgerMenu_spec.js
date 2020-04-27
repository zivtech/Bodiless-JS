describe('Burger Menu smoke tests', function () {

  before(function () {
    cy.visit('/burger-menu/');
    cy.clickEdit();
  })

  const menuItemLabel = 'AT - Menu Item'
  const submenuItemLabel = 'AT - Submenu Item'
  const menuItemUrl = 'AT-menuItemUrl'
  
  const menuItem = [
    '//*[contains(@class,"ml-10")]//ul[contains(@class,"rc-menu")]//li[contains(@class,"leading-loose")][1]',
    '//*[contains(@class,"ml-10")]//ul[contains(@class,"rc-menu")]//li[contains(@class,"leading-loose")][2]' 
  ]
  const menuItemNoLink = [
    menuItem[0] + '/span/span',
    menuItem[1] + '/span/span'
  ]
  const menuItemWithLink = [
    menuItem[0] + '//a',
    menuItem[1]
  ]
  const menuItemBM = [
    '//div[@class="ml-10"]//ul[contains(@class,"bm-item p-3 text-black")]/li[1]',
    '//div[@class="ml-10"]//ul[contains(@class,"bm-item p-3 text-black")]/li[2]'
  ]
  const menuItemNoSubmenuBM = [
    menuItemBM[0] + '/a',
    menuItemBM[1]
  ]
  const menuItemWithSubmenuBM = [
    menuItemBM[0] + '/div[contains(@class,"justify-between")]/span[1]',
    menuItemBM[1] + '/div[contains(@class,"justify-between")]/span[1]'
  ]
  const expandIcon = '//*[@data-accordion-icon="expand"]'
  const collapseIcon = '//*[@data-accordion-icon="collapse"]'
  const menuItem1SubmenuBM = [
    menuItemBM[0] + '//a[text()="Overview"]',
    menuItemBM[0] + '//li[1]/a',
    menuItemBM[0] + '//li[2]/a'
  ]
  const menuItem2SubmenuBM = [
    menuItemBM[1] + '//a[text()="Overview"]',
    menuItemBM[1] + '//li[1]/a',
    menuItemBM[1] + '//li[2]/a'
  ]
  const menuItem1SubmenuNoLink = [
    '//div[contains(@class,"rc-menu-submenu")]//li[contains(@class,"leading-loose")][1]/span/span',
    '//div[contains(@class,"rc-menu-submenu")]//li[contains(@class,"leading-loose")][2]/span/span'
  ]
  const menuItem2SubmenuNoLink = [
    '//div[contains(@style,"position")][2]//div[contains(@class,"rc-menu-submenu")]//li[contains(@class,"leading-loose")][1]/span/span',
    '//div[contains(@style,"position")][2]//div[contains(@class,"rc-menu-submenu")]//li[contains(@class,"leading-loose")][2]/span/span'
  ]
  const addListItemIcon = '//*[@role="toolbar" and @aria-label="Local Context Menu"]//*[@aria-label="Add"]'
  const addSubListItemIcon = '//*[@role="toolbar" and @aria-label="Local Context Menu"]//*[@aria-label="Toggle"]'
  const linkIcon = '//*[@role="toolbar" and @aria-label="Local Context Menu"]//*[@aria-label="Link"]'
  const urlField = '//form[@aria-label="Context Menu Link Form"]//input[@id="link-href"]'
  const checkmarkIcon = '//form[@aria-label="Context Menu Link Form"]//button[@aria-label="Submit"]'
  const burgerMenuXpath = '//div[@class="ml-10"]//*[@class="bm-burger-button"]//button[text()="Open Menu"]'
  const closeBurgerMenuXpath = '//div[@class="ml-10"]//*[contains(@class,"bg-burger-menu")]//button[text()="Close Menu"]'
  const itemCount = 2

  it('Burger Menu: 1 - checking the menu items without a link in Edit Mode', () => {
    addMenuItems(menuItemNoLink, menuItemLabel, itemCount);
    cy.setTabletView();
    cy.xpath(burgerMenuXpath)
      .click();
    var i;
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemBM[i])
        .should('have.text', menuItemLabel + ' ' + (i + 1).toString());
      cy.xpath(menuItemBM[i] + '//*[text()="Overview"]')
        .should('not.exist');
      cy.xpath(menuItemBM[i] + '//a')
        .should('not.exist');
    }
    cy.xpath(closeBurgerMenuXpath)
      .click();
  })


  it('Burger Menu: 2 - checking the menu items without a link in Preview Mode', () => {
    cy.setTabletView();
    cy.clickEdit();
    cy.xpath(burgerMenuXpath)
      .click();
    var i;
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemBM[i])
        .should('have.text', menuItemLabel + ' ' + (i + 1).toString());
      cy.xpath(menuItemBM[i] + '//*[text()="Overview"]')
        .should('not.exist');
      cy.xpath(menuItemBM[i] + '//a')
        .should('not.exist');
    }
    cy.xpath(closeBurgerMenuXpath)
      .click();
  })


  it('Burger Menu: 3 - checking menu items with a link in Edit Mode', () => {
    cy.clickEdit();
    addUrlInMenuItem(menuItemNoLink[0], menuItemUrl + '-1');
    cy.setTabletView();
    cy.xpath(burgerMenuXpath)
      .click();
    cy.xpath(menuItemNoSubmenuBM[0])
      .should('have.attr', 'href', '#' + menuItemUrl + '-1');
    cy.xpath(closeBurgerMenuXpath)
      .click();
  })


  it('Burger Menu: 4 - checking menu items with a link in Preview Mode', () => {
    cy.setTabletView();
    cy.clickEdit();
    cy.xpath(burgerMenuXpath)
      .click();
    cy.xpath(menuItemNoSubmenuBM[0])
      .should('have.text', menuItemLabel + ' 1');
    cy.xpath(menuItemNoSubmenuBM[0])
      .click();
    cy.url().should('eq', Cypress.config().baseUrl + '/burger-menu/#' + menuItemUrl + '-1');
    cy.xpath(menuItemNoSubmenuBM[1])
      .should('have.text', menuItemLabel + ' 2');
    cy.xpath(menuItemBM[1] + '//a')
      .should('not.exist');
    cy.xpath(closeBurgerMenuXpath)
      .click();
  })


  it('Burger Menu: 5 - checking a submenu for an item with a link and an item without a link in Edit Mode', () => {
    cy.visit('/burger-menu/');
    cy.clickEdit();
    
    addSubmenuItems(menuItemWithLink[0], menuItem1SubmenuNoLink, submenuItemLabel, 2);
    var i;
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemWithLink[0])
        .trigger('mouseover');
      addUrlInMenuItem(menuItem1SubmenuNoLink[i], menuItemUrl + '-1.' + (i + 1).toString());
    }
    addSubmenuItems(menuItemWithLink[1], menuItem2SubmenuNoLink, submenuItemLabel, 2);
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemWithLink[1])
        .trigger('mouseover');
      addUrlInMenuItem(menuItem2SubmenuNoLink[i], menuItemUrl + '-1.' + (i + 1).toString());
    }
    cy.setTabletView();
    
    cy.xpath(burgerMenuXpath)
      .click();
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemWithSubmenuBM[i])
        .should('have.text', menuItemLabel + ' ' + (i + 1).toString());
    }
    cy.xpath(menuItemBM[0] + expandIcon)
      .click();
    cy.xpath(menuItem1SubmenuBM[0])
      .should('have.attr', 'href', '#' + menuItemUrl + '-1');
    for (i = 1; i < itemCount + 1; i++) {
      cy.xpath(menuItem1SubmenuBM[i])
        .should('have.text', submenuItemLabel + ' 1.' + (i).toString())
        .should('have.attr', 'href', '#' + menuItemUrl + '-1.' + (i).toString());
    }
    cy.xpath(menuItemBM[1] + expandIcon)
      .click();
    cy.xpath(menuItem2SubmenuBM[0])
      .should('not.exist');
    for (i = 1; i < itemCount + 1; i++) {
      cy.xpath(menuItem2SubmenuBM[i])
        .should('have.text', submenuItemLabel + ' 1.' + (i).toString())
        .should('have.attr', 'href', '#' + menuItemUrl + '-1.' + (i).toString());
    }
    
    for (i = 0; i < itemCount; i++) {
    cy.xpath(menuItemBM[i] + collapseIcon)
      .click();
    }
    cy.xpath(closeBurgerMenuXpath)
      .click();
  })


  it('Main Menu: 6 - checking the menu items and the submenu items in Preview Mode', () => {
    cy.setTabletView();
    cy.clickEdit();
    cy.xpath(burgerMenuXpath)
      .click();
    var i;
    for (i = 0; i < itemCount; i++) {
      cy.xpath(menuItemWithSubmenuBM[i])
        .should('have.text', menuItemLabel + ' ' + (i + 1).toString());
      cy.xpath(menuItemBM[i] + expandIcon)
        .should('be.visible');
    }

    cy.xpath(menuItemBM[0] + expandIcon)
      .click();
    cy.xpath(menuItem1SubmenuBM[0])
      .click();
    cy.url().should('eq', Cypress.config().baseUrl + '/burger-menu/#' + menuItemUrl + '-1');
    for (i = 1; i < itemCount + 1; i++) {
      cy.xpath(menuItem1SubmenuBM[i])
        .should('have.text', submenuItemLabel + ' 1.' + (i).toString())
        .should('have.attr', 'href', '#' + menuItemUrl + '-1.' + (i).toString());
    }
    cy.xpath(menuItemBM[1] + '/div[contains(@class,"justify-between")]/span[1]')
      .click();
    cy.xpath(menuItem2SubmenuBM[0])
      .should('not.exist');
    for (i = 1; i < itemCount + 1; i++) {
      cy.xpath(menuItem2SubmenuBM[i])
        .should('have.text', submenuItemLabel + ' 1.' + (i).toString())
        .should('have.attr', 'href', '#' + menuItemUrl + '-1.' + (i).toString());
    }
    cy.xpath(closeBurgerMenuXpath)
      .click();
    cy.xpath(burgerMenuXpath)
      .should('be.visible');
  })


  function addMenuItems(itemXpath, label, count) {
    cy.xpath(itemXpath[0])
      .click();
    cy.xpath(addListItemIcon)
      .click();
    cy.hideContextMenu();
    var i;
    for (i = 0; i < count; i++) {
      cy.xpath(itemXpath[i])
        .type(label + ' ' + (i + 1).toString());
      cy.hideContextMenu();
    }
  }

  function addUrlInMenuItem(itemXpath, url) {
    cy.xpath(itemXpath)
      .click();
    cy.xpath(linkIcon)
      .click();
    cy.xpath(urlField)
      .type(url);
    cy.xpath(checkmarkIcon)
      .click();
    cy.hideContextMenu();
  }


  function addSubmenuItems(itemXpath, submenuItemXpath, label, count) {
    cy.xpath(itemXpath)
      .click();
    cy.xpath(addSubListItemIcon)
      .click();
    cy.xpath(itemXpath)
      .trigger('mouseover');
    cy.xpath(submenuItemXpath[0])
      .click();
    cy.xpath(addListItemIcon)
      .click();
    cy.hideContextMenu();
    var i;
    for (i = 0; i < count; i++) {
      cy.xpath(itemXpath)
        .trigger('mouseover');
      cy.xpath(submenuItemXpath[i])
        .type(label + ' 1.' + (i + 1).toString());
      cy.hideContextMenu();
    }
  }
})    