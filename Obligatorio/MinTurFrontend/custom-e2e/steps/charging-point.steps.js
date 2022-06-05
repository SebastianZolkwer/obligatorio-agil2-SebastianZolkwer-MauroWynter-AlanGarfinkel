'use strict';

var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { browser, element,  } = require('protractor');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given(/^I view the "([^"]*)"$/, function (url, callback) {
  browser.get(url).then(function () {
    callback();
  });
});

When('Ingreso el valor {string} en el campo {string}',
  function (inputTextEntry, inputName) {
    browser.driver
        .findElement(by.id(inputName))
        .clear();
    return browser.driver
        .findElement(by.id(inputName))
        .sendKeys(inputTextEntry);
  }
);

When('Selecciono el valor en la posicion {int} como región', function (int) {
  browser.driver
    .findElement(by.id('regiones'))
    .click();
  return browser.driver
   .findElement(by.id('region'+ int))
    .click();
});

When(/^Selecciono el boton borrar del punto de carga "([^"]*)"$/, function (id) {
  return browser.driver
    .findElement(by.id('Delete'+ id))
    .click();
});

When('Registro el punto de carga', function () {
  return browser.driver
  .findElement(by.id('Crear'))
  .click();
});

Then('Veo el mensaje {string}', async function (mensaje) {
  await browser.waitForAngular().then(function () {
    expect(
      element(by.id('respuesta')).getText()
    ).to.eventually.equal(mensaje);
  });
});


Then('Veo el mensaje de error {string}', async function (mensaje) {
  await browser.waitForAngular().then(function () {
    expect(
      element(by.id('error')).getText()
    ).to.eventually.equal(mensaje);
  });
});
