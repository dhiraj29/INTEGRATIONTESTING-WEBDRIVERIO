var page = require('./page');
var path = require('path');

// map file locations correctly 
var curPath = path.resolve(__dirname);

// working on Windows only? 
var testsPath = curPath.substring(0,curPath.lastIndexOf("\\"));
var loginData = require(testsPath+'/jsonFiles/loginData.json');
var accountData = require(testsPath+'/jsonFiles/loginAccounts.json');

var formPage = Object.create(page, {
/*
    username: { get: function () { return $(loginData.usernamefield); } },
    password: { get: function () { return $(loginData.passwordfield); } },
    submitButton: {
      get: function () { return $(loginData.loginButton); }
    },
*/
    /**
     * define or overwrite page methods
     */
/*
    login: { value: function(account) {

        var username;
        var password;
        
        
        for (index = 0; index < accountData.accounts.length; ++index) {

            if (account == accountData.accounts[index].account){

                username = accountData.accounts[index].accountData.username;
                password = accountData.accounts[index].accountData.password;

            }
        }

        page.open.call(this, '');
        browser.waitForVisible(loginData.usernamefield, 5000);
        formPage.username.setValue(username);
        formPage.password.setValue(password);
        this.submitButton.click();
        browser.pause(2000);
    } },
    */

     getBaseURL : {
        value : function (account) {
            
            var baseURL;
            for (index = 0; index < accountData.accounts.length; ++index) {

                if (account == accountData.accounts[index].account){

                    baseURL = accountData.accounts[index].accountData.baseurl;
                    
                }
                }
            return baseURL;
            } },

});

module.exports = formPage;
