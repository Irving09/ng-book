module.exports = function() {
    const PATHS = {
        allTS:         './app/**/*.ts',
        appAssets:     './app/**/!(*.ts)',
        indexHTML:     './index.html',
        transpileDest: './dist',
        globalAssets:  './node_modules/semantic-ui-css/themes/default/assets/**/*.*',
        deps: [
            './node_modules/es6-shim/es6-shim.min.js',
            './node_modules/systemjs/dist/system-polyfills.js',
            './node_modules/angular2/bundles/angular2-polyfills.js',
            './node_modules/systemjs/dist/system.src.js',
            './node_modules/rxjs/bundles/Rx.js',
            './node_modules/angular2/bundles/angular2.js',
            './node_modules/angular2/bundles/http.js',
            './system.config.js',
            './node_modules/semantic-ui-css/semantic.min.css'
        ]
    };

    return PATHS;
};