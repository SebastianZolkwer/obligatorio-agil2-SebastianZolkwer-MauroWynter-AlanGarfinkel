'use strict';

var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { browser, element,  } = require('protractor');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given(/^I view the "([^"]*)"$/, function (url) {
    browser.get(url).then(function () {
        browser.sleep(5000);
    });
});

Given('Ingreso el valor {string} en el campo {string}',
    function (inputTextEntry, inputName) {
    browser.sleep(1000);
    browser.driver
        .findElement(by.id(inputName))
        .clear()
    return browser.driver
        .findElement(by.id(inputName))
        .sendKeys(inputTextEntry);
}
);



Given('Selecciono el valor {string} como región', function (text) {
  browser.sleep(1000)
  element(by.tagName('mat-select')).click();

  element(by.cssContainingText('mat-option .mat-option-text', text)).click();
});

When(/^Selecciono el boton borrar del punto de carga "([^"]*)"$/, function (id, callback) {
  browser.sleep(1000);
  element(by.id('Delete'+ id)).click();
  callback();
});

When('Registro el punto de carga', function (callback) {
  browser.sleep(3000);
  element(by.id('Crear')).click();
  callback();
  browser.driver.sleep(3000)
});


Then('Veo el mensaje {string}', async function (mensaje) {
  browser.sleep(3000);
  await browser.waitForAngular().then(function () {
    expect(
      element(by.id('respuesta')).getText()
    ).to.eventually.equal(mensaje);
  });
});


Then('Veo el mensaje de error {string}', async function (mensaje) {
  browser.driver.sleep(3000);
  await browser.waitForAngular().then(function () {
    expect(
      element(by.id('error')).getText()
    ).to.eventually.equal(mensaje);
  });
});
