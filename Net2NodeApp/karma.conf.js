module.exports = function(config) {
    config.set({
        basePath  : 'tests',
        frameworks: ['jasmine'],
        files	  : ['client/*.js'],
        exclude	  : [],
        reporters : ['spec'],
        port	  : 9876,
        colors	  : true,
        logLevel  : config.LOG_INFO, //LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
        autoWatch : true,
        browsers  : ['PhantomJS'], //Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
		captureTimeout: 60000
    });
};
