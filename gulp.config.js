module.exports = function() {
    const PATHS = {
        allTS:         './app/**/*.ts',
        allAssets:     './app/**/!(*.ts)',
        indexHTML:     './index.html',
        dist: './dist',
        globalAssets:  './node_modules/semantic-ui-css/themes/default/assets/**/*.*',
        dependencies: [
            './node_modules/semantic-ui-css/semantic.min.css',

            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.js',
            './node_modules/angular2/bundles/http.js',

            './system.config.js'
        ]
    };

    return PATHS;
};