// ==UserScript==
// @license      MIT License
// @name         qqsg查询自动登录
// @namespace    https://github.com/wanglz111/qqsg-tampermonkey
// @version      1.0
// @description  自动登录qqsg查询，用本人提供的key
// @author       Lucas
// @match        https://qqsg.pc9527.vip/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pc9527.vip
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    if (!unsafeWindow.localStorage || !unsafeWindow.localStorage.saveData || JSON.parse(unsafeWindow.localStorage.saveData).isLogin == false){
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://jsonbase.com/lucascool/saveData",
            onload: function(response) {
                unsafeWindow.localStorage.saveData = response.responseText;
                unsafeWindow.location.reload();
            }
        });
    } else {
        console.log("已经登陆")
    }

})();