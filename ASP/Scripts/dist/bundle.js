(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dialogService = require('./services/dialogService');

var _dialogService2 = _interopRequireDefault(_dialogService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', 'ngRoute']).config(AppConfig).run(AppRun);

root.factory(_dialogService2.default.name, _dialogService2.default);

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/users'
    }).when('/users', {
        templateUrl: 'users.html',
        controller: 'UsersCtrl',
        controllerAs: 'usersVm'
    }).otherwise({
        template: '<h3>No page found</h3>'
    });
}

function AppRun() {}

},{"./services/dialogService":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
dialogService.$inject = ['$uibModal'];

function dialogService($uibModal) {

    var service = {
        openCustomDialogDialog: openCustomDialogDialog,
        openYesNoDialog: openYesNoDialog
    };

    return service;

    function openCustomDialogDialog(templateUrl, controller, resolveData) {
        var modalInstance = $uibModal.open({
            templateUrl: templateUrl,
            controller: controller,
            controllerAs: 'vm',
            resolve: resolveData
        });

        return modalInstance.result;
    };

    function openYesNoDialog(title, message) {
        var modalInstance = $uibModal.open({
            templateUrl: 'yesNoDialog.html',
            controller: 'YesNoDialogCtrl',
            controllerAs: 'vm',
            resolve: {
                content: {
                    title: title,
                    message: message
                }
            }
        });

        return modalInstance.result;
    };
};

exports.default = dialogService;

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
