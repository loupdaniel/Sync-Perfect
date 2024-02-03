"use strict";
exports.__esModule = true;
// polyfills
require("core-js/stable");
require("web-animations-js/web-animations.min");
require("element-remove-polyfill");
var analytics_1 = require("@vercel/analytics");
analytics_1.inject();
// styles
require("@styles/index.scss");
// main
require("@js/app");
// PWA
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
            console.log('SW registered: ', registration);
        })["catch"](function (registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
