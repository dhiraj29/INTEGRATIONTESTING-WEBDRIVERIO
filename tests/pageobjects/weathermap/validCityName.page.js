var WeatherMapPage = require('./weathermap.v5.page')
var expect = require('chai').expect;
var assert = require('assert');

var validCityName = Object.create(
    WeatherMapPage, {
        /**
        *  Define Page Specific Elements
        */                
        ssrUrl : { get : function(){
            return 'https://openweathermap.org/';
        }},
        
        fillSsrParameters : {
            value : function(cityName) {
                browser.waitForVisible(WeatherMapPage.searchField, 10000);
                browser.setValue(WeatherMapPage.searchField, cityName);
                browser.keys("Tab");
                browser.click(WeatherMapPage.submitButton,10000);
                browser.pause(2000);
            }
        },
    }
);
module.exports = validCityName;