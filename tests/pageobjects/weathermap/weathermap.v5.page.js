var Page = require('../page');
var expect = require('chai').expect;
var assert = require('assert');
var fs = require("fs");

var WeatherMapPage = Object
        .create(
                Page,
                {
                    /**
                     * Define Common Elements appears in each SSR
                     */

                   searchField : {
                        get : function() {
                            return '//input[@placeholder="Your city name"]';
                       }
                   },

                    submitButton : {
                        get : function() {
                            return '//*[@id="searchform"]/button'
                        }
                    },

                    submitAndCheckRequest : {
                        value : function() {
                	        
                	        browser.click(this.submitButton);
                	        console.log("Request submitted.")
                           /* var title1 = browser.getTitle();
                            assert.equal("ATF2 Cloud - Ticket Form", title1);
                		    console.log("Page title for submitted request: " + title1 + "as Expected.")*/                                                   
                   		}
                	}                        
                }
    );
module.exports = WeatherMapPage;