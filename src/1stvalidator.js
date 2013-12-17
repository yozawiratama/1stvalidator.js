/**
 * Created by yoza on 12/16/13.
 */

var textPatt = /[`~!#$%^&*()+={[}:;"'<,>?/|\\]/g;
var pwdPatt = /[<>{}]/g;
var emailPatt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;// ref : http://www.jquery4u.com/snippets/javascript-validate-email-address-regex/
firstValidator = function(){
    this.text = function(text){
        return (textPatt.test(text))? false : true;
    };
    this.password = function(pwd){
        return (textPatt.test(pwd))? false : true;
    };
    this.date = function(date){
        return false;
    };
    this.email = function(email){
        return (email == "" || !emailPatt.test(email))? false: true;
    };
    this.repassword = function(pwd,repwd){
        return (pwd === repwd)? true:false;
    }
}


