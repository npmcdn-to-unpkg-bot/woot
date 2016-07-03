System.register(['angular2/core', './login-form.component.js', './registration-form.component.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_form_component_js_1, registration_form_component_js_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_form_component_js_1_1) {
                login_form_component_js_1 = login_form_component_js_1_1;
            },
            function (registration_form_component_js_1_1) {
                registration_form_component_js_1 = registration_form_component_js_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(vcRef, resolver) {
                    this.vcRef = vcRef;
                    this.resolver = resolver;
                    this.injectComponent = function (cmp) {
                        var _this = this;
                        if (!document.loginForm) {
                            this.resolver.resolveComponent(cmp)
                                .then(function (factory) {
                                var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.vcRef.parentInjector);
                                _this.loginFormRef.createComponent(factory, 0, injector, []);
                            });
                        }
                    };
                    this.loadLoginForm = function () {
                        this.injectComponent(login_form_component_js_1.LoginFormComponent);
                    };
                    this.authenticated = false;
                }
                __decorate([
                    core_1.ViewChild('loginForm', { read: core_1.ViewContainerRef }), 
                    __metadata('design:type', Object)
                ], MainComponent.prototype, "loginFormRef", void 0);
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'app/main',
                        directives: [registration_form_component_js_1.RegistrationFormComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map