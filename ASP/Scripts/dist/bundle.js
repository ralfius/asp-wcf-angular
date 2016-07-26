(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _users = require('./users.module/users.module');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', _users2.default]).config(AppConfig).run(AppRun);

function AppConfig() {}

function AppRun() {}

},{"./users.module/users.module":5}],2:[function(require,module,exports){
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = function () {
    function UsersController(dialogService, displayMessageService, userService) {
        _classCallCheck(this, UsersController);

        this.search = '';
        this.usersPage = { PageNumber: 1 };

        this._dialogService = dialogService;
        this._displayMessageService = displayMessageService;
        this._userService = userService;
    }

    _createClass(UsersController, [{
        key: '$onInit',
        value: function $onInit() {
            this.getUsers();
        }
    }, {
        key: 'getUsers',
        value: function getUsers() {
            var _this = this;

            this._userService.getUsers(this.search, this.usersPage.PageNumber).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'refreshPage',
        value: function refreshPage() {
            var _this = this;

            this._userService.getUsers(this.search, this.usersPage.PageNumber).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'initSearch',
        value: function initSearch() {
            var _this = this;

            this._userService.getUsers(this.search, 1).then(function (result) {
                _this.usersPage = result.Data;
            });
        }
    }, {
        key: 'nextPage',
        value: function nextPage() {
            var _this = this;

            if (!this.usersPage.IsLastpage) {
                this._userService.getUsers(this.search, this.usersPage.PageNumber + 1).then(function (result) {
                    _this.usersPage = result.Data;
                });
            }
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(user) {
            var _this = this;

            this._userService.deleteUser(user).then(function (result) {
                if (result.Message) {
                    _this._displayMessageService.showSuccess(result.Message);
                }
                refreshPage();
            });
        }
    }, {
        key: 'createUser',
        value: function createUser() {
            var _this = this;

            this._userService.createUser().then(function (user) {
                _this.refreshPage();
            });
        }
    }, {
        key: 'edit',
        value: function edit(user) {
            var _this = this;

            this._userService.editUser(user).then(function (data) {
                _this.refreshPage();
            });
        }
    }]);

    return UsersController;
}();

UsersController.$inject = ['dialogService', 'displayMessageService', 'userService'];

exports.default = UsersController;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
userService.$inject = ['$q', 'httpConnectionService', 'dialogService'];

function userService($q, httpConnectionService, dialogService) {

    return {
        getUsers: getUsers,
        deleteUser: deleteUser,
        createUser: createUser,
        editUser: editUser,
        updateUser: updateUser
    };

    function createUser() {
        return openEditUserDialog({});
    };

    function editUser(user) {
        return openEditUserDialog(angular.copy(user));
    };

    function updateUser(user) {
        return httpConnectionService.post(AWA.urls.user.update, user);
    };

    function openEditUserDialog(user) {
        return dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogCtrl', { user: user });
    };

    function getUsers(search, pageNumber) {
        //TODO: create format filter
        var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

        return httpConnectionService.get(url);
    };

    function deleteUser(user) {
        var deferred = $q.defer();
        var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);

        dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message).then(function () {
            var url = AWA.urls.user.delete;

            httpConnectionService.post(url, { userId: user.UserId }).then(function (response) {
                deferred.resolve(response);
            });
        });

        return deferred.promise;
    };
};

exports.default = userService;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./components/users/users.component');

var _users2 = _interopRequireDefault(_users);

var _userService = require('./services/userService');

var _userService2 = _interopRequireDefault(_userService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppUsersModule = angular.module('aspWcfAngular.users', ['ui.router']).config(AppConfig).run(AppRun);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('users', {
        url: '/users',
        component: 'users'
    });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {}

AppUsersModule.component('users', _users2.default).factory('userService', _userService2.default);

exports.default = AppUsersModule.name;

},{"./components/users/users.component":2,"./services/userService":4}]},{},[1])


//# sourceMappingURL=bundle.js.map
