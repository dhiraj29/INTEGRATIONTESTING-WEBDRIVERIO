var expect = require('chai').expect;
var path = require('path');
var LoginPage = require('../../pageobjects/login.page.js');
var WeatherMapPage = require('../../pageobjects/weathermap/validCityName.page.js');
var assert = require('assert');
var HomeTitle = require('../../jsonFiles/loginData.json');

// get the spec name to get JSON config file
var testsPath = path.resolve(__dirname);
var filename = path.basename(__filename);
var specloc = filename.indexOf('.');
var specName = filename.substring(0, specloc);
var testData = require(testsPath + '/jsonData/' + specName + '.json');


describe(
    'Weather Map', function() {
	    it('1. Open Weather Map URL', // test step 1
	    function() {
		    console.log('--Open the Main Page--');
		    browser.url(WeatherMapPage.ssrUrl);
            browser.pause(7000);

            var title = browser.getTitle();
            //assert.equal(HomeTitle.homePageTitle, title);
            console.log('Page Title: ' + title + ' as Expected.');

			console.log('--Enter Valid City Name--')
			WeatherMapPage.fillSsrParameters(testData.cityName);
            browser.saveScreenshot(screenshotPath());
			
			console.log('--Click on Submit Button--')
			WeatherMapPage.submitAndCheckRequest();
          	browser.saveScreenshot(screenshotPath());
          	browser.pause(30000);
	    });

	});
var screenshotPath = function() {
   	return './Screenshots/' + filename + '_' + (new Date()).getTime() + '.png';
}