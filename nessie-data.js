// Examples from github
$(function(){
    require(['account'], function (account) {
        var apikey = '772ee0859fcf9079669d1863f2ec9352';
        accountDemo(apikey, account);
    });
});

function accountDemo (apikey, account) {
    console.log('Account Demo');
    var custAccount = account.initWithKey(apikey);
    console.log("[Account - Get All] : Sample Account Nickname: (" + custAccount.getAllAccounts()[0].nickname + ")");
}

