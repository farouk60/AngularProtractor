let homepage = require('../pages/homepage');
var screenshots = require('protractor-take-screenshots-on-demand');
describe('demo calculator tests', function () {

    it('1 addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });
    it('2 addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(2000)

    });

});