/**
 * @file
 * @author cjw
 * Created by cjw on 16/2/24.
 */
define([
    'angular',
    'js/pagination',
    'js/controllers',
    'angular-route',
], function (angular,  controllers) {
    'use strict';
    // Declare app level module which depends on filters, and services
    var app = angular.module('myApp', [
        'ui.router',
        'myApp.controllers',
        'tm.pagination'
    ]);
    return app;
});