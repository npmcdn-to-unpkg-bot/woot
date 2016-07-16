System.register(['@angular/platform-browser-dynamic', './portal.component.js', '@angular/http', './main.routes.js', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, portal_component_js_1, http_1, main_routes_js_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (portal_component_js_1_1) {
                portal_component_js_1 = portal_component_js_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (main_routes_js_1_1) {
                main_routes_js_1 = main_routes_js_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(portal_component_js_1.PortalComponent, [http_1.HTTP_PROVIDERS, main_routes_js_1.APP_ROUTER_PROVIDERS]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map