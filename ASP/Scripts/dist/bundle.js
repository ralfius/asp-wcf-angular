(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _users = require('./users.module/users.module');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', 'ngRoute', _users2.default.name]).config(AppConfig).run(AppRun);

function AppConfig() {}

function AppRun() {}

},{"./users.module/users.module":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./users.controller');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = {
    templateUrl: 'users.html',
    controller: _users2.default
};

exports.default = users;

},{"./users.controller":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
UsersController.$inject = ['dialogService', 'displayMessageService', 'userService'];

function UsersController(dialogService, displayMessageService, userService) {
    var vm = this;

    vm.search = '';
    vm.usersPage = { PageNumber: 1 };
    vm.initSearch = initSearch;
    vm.nextPage = nextPage;
    vm.deleteUser = deleteUser;
    vm.createUser = createUser;
    vm.edit = edit;

    activate();

    function activate() {
        getUsers();
    }

    function getUsers() {
        userService.getUsers(vm.search, vm.usersPage.PageNumber).then(function (result) {
            vm.usersPage = result.Data;
        });
    };

    function refreshPage() {
        userService.getUsers(vm.search, vm.usersPage.PageNumber).then(function (result) {
            vm.usersPage = result.Data;
        });
    };

    function initSearch() {
        userService.getUsers(vm.search, 1).then(function (result) {
            vm.usersPage = result.Data;
        });
    };

    function nextPage() {
        if (!vm.usersPage.IsLastpage) {
            userService.getUsers(vm.search, vm.usersPage.PageNumber + 1).then(function (result) {
                vm.usersPage = result.Data;
            });
        }
    };

    function deleteUser(user) {
        userService.deleteUser(user).then(function (result) {
            if (result.Message) {
                displayMessageService.showSuccess(result.Message);
            }
            refreshPage();
        });
    };

    function createUser() {
        userService.createUser().then(function (user) {
            refreshPage();
        });
    };

    function edit(user) {
        userService.editUser(user).then(function (data) {
            refreshPage();
        });
    };
}

exports.default = UsersController;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./components/users/users.component');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppUsersModule = angular.module('aspWcfAngular.users', []).config(AppConfig).run(AppRun);

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    //$routeProvider
    //    .when('/', {
    //        redirectTo: '/users'
    //    })
    //    .when('/users', {
    //        component: 'users'
    //    })
    //    .otherwise({
    //        template: '<h3>No page found</h3>'
    //    });
}

function AppRun() {}

AppUsersModule.component('users', _users2.default);

exports.default = AppUsersModule;

},{"./components/users/users.component":2}]},{},[1])


//# sourceMappingURL=bundle.js.map
