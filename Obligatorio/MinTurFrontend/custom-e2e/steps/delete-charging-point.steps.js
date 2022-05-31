'use strict';

var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');

// Use the external Chai As Promised to deal with resolving promises in
// expectations
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given(/^I view the "([^"]*)"$/, function (url, callback) {
    browser.get(url).then(function () {
        callback();
    });
});

When(/^Selecciono el boton borrar del punto de carga "([^"]*)"$/, function (id, callback) {
    element(by.id('delete'+ id)).click();
    callback();
});


Then('Veo el mensaje {string}', async function (mensaje) {
    browser.driver.sleep(1000);
    await browser.waitForAngular().then(function () {
      expect(
        element(by.id('respuesta')).getText()
      ).to.eventually.equal(mensaje);
    });
  });
