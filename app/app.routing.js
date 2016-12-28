"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var homeComponent_1 = require('./sidebarComponents/homeComponent');
var skillsComponent_1 = require('./sidebarComponents/skillsComponent');
var contactComponent_1 = require('./sidebarComponents/contactComponent');
var pageNotFoundComponent_1 = require('./sidebarComponents/pageNotFoundComponent');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'skills', component: skillsComponent_1.SkillsComponent },
    { path: 'home', component: homeComponent_1.HomeComponent },
    { path: 'contact', component: contactComponent_1.ContactComponent },
    { path: '**', component: pageNotFoundComponent_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [skillsComponent_1.SkillsComponent, homeComponent_1.HomeComponent, pageNotFoundComponent_1.PageNotFoundComponent, contactComponent_1.ContactComponent];
//# sourceMappingURL=app.routing.js.map