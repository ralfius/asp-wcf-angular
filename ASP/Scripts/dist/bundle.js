(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _users = require('./users.module/users.module');

var _users2 = _interopRequireDefault(_users);

var _capitalize = require('./common/directives/capitalize.directive');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _removeSpaces = require('./common/directives/removeSpaces.directive');

var _removeSpaces2 = _interopRequireDefault(_removeSpaces);

var _unobtrusiveValidatorParse = require('./common/directives/unobtrusiveValidatorParse.directive');

var _unobtrusiveValidatorParse2 = _interopRequireDefault(_unobtrusiveValidatorParse);

var _validateSubmit = require('./common/directives/validateSubmit.directive');

var _validateSubmit2 = _interopRequireDefault(_validateSubmit);

var _DialogService = require('./common/services/DialogService');

var _DialogService2 = _interopRequireDefault(_DialogService);

var _DisplayMessageService = require('./common/services/DisplayMessageService');

var _DisplayMessageService2 = _interopRequireDefault(_DisplayMessageService);

var _ErrorProcessingService = require('./common/services/ErrorProcessingService');

var _ErrorProcessingService2 = _interopRequireDefault(_ErrorProcessingService);

var _HttpConnectionService = require('./common/services/HttpConnectionService');

var _HttpConnectionService2 = _interopRequireDefault(_HttpConnectionService);

var _messageArea = require('./common/controllers/messageArea.controller');

var _messageArea2 = _interopRequireDefault(_messageArea);

var _yesNoDialog = require('./common/controllers/yesNoDialog.controller');

var _yesNoDialog2 = _interopRequireDefault(_yesNoDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = angular.module('aspWcfAngular', ['ui.bootstrap', _users2.default]).directive('capitalize', function () {
    return new _capitalize2.default();
}).directive('removeSpaces', function () {
    return new _removeSpaces2.default();
}).directive('unobtrusiveValidatorParse', function () {
    return new _unobtrusiveValidatorParse2.default();
}).directive('validateSubmit', function () {
    return new _validateSubmit2.default();
}).service('DialogService', _DialogService2.default).service('DisplayMessageService', _DisplayMessageService2.default).service('ErrorProcessingService', _ErrorProcessingService2.default).service('HttpConnectionService', _HttpConnectionService2.default).controller('MessageAreaController', _messageArea2.default).controller('YesNoDialogController', _yesNoDialog2.default);

},{"./common/controllers/messageArea.controller":2,"./common/controllers/yesNoDialog.controller":3,"./common/directives/capitalize.directive":4,"./common/directives/removeSpaces.directive":5,"./common/directives/unobtrusiveValidatorParse.directive":6,"./common/directives/validateSubmit.directive":7,"./common/services/DialogService":8,"./common/services/DisplayMessageService":9,"./common/services/ErrorProcessingService":10,"./common/services/HttpConnectionService":11,"./users.module/users.module":16}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
MessageAreaController.$inject = ['$rootScope'];

function MessageAreaController($rootScope) {
    var vm = this;

    vm.closeAlert = closeAlert;

    $rootScope.alerts = $rootScope.alerts || [];

    function closeAlert(index) {
        $rootScope.alerts.splice(index, 1);
    };
}

exports.default = MessageAreaController;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
YesNoDialogController.$inject = ['$uibModalInstance', 'content'];

function YesNoDialogController($uibModalInstance, content) {

    var vm = this;

    vm.content = content;
    vm.ok = ok;
    vm.cancel = cancel;

    function ok() {
        $uibModalInstance.close();
    };

    function cancel() {
        $uibModalInstance.dismiss();
    };
}

exports.default = YesNoDialogController;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Capitalize = function () {
    function Capitalize() {
        _classCallCheck(this, Capitalize);

        this.scope = {
            model: '=capitalize'
        };
        this.restrict = 'A';
    }

    _createClass(Capitalize, [{
        key: 'link',
        value: function link(scope) {
            scope.$watch('model', function (newVal, oldVal) {
                if (newVal && newVal.length === 1) {
                    scope.model = newVal.toUpperCase();
                }
            });
        }
    }]);

    return Capitalize;
}();

exports.default = Capitalize;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoveSpaces = function () {
    function RemoveSpaces() {
        _classCallCheck(this, RemoveSpaces);

        this.scope = {
            model: '=removeSpaces'
        };
        this.restrict = 'A';
    }

    _createClass(RemoveSpaces, [{
        key: 'link',
        value: function link(scope) {
            scope.$watch('model', function (newVal, oldVal) {
                if (newVal && angular.isString(newVal)) {
                    scope.model = newVal.replace(/\s+/g, '');
                }
            });
        }
    }]);

    return RemoveSpaces;
}();

exports.default = RemoveSpaces;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnobtrusiveValidatorParse = function () {
    function UnobtrusiveValidatorParse() {
        _classCallCheck(this, UnobtrusiveValidatorParse);

        this.scope = {};
        this.restrict = 'A';
    }

    _createClass(UnobtrusiveValidatorParse, [{
        key: 'link',
        value: function link(scope, $el) {
            var form,
                el = angular.element($el);

            if (el.is('form')) {
                form = el;
            } else {
                form = el.closest('form');
            }

            form.removeData("validator");
            $.validator.unobtrusive.parse(form);
        }
    }]);

    return UnobtrusiveValidatorParse;
}();

exports.default = UnobtrusiveValidatorParse;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidateSubmit = function () {
    function ValidateSubmit() {
        _classCallCheck(this, ValidateSubmit);

        this.scope = {};
        this.restrict = 'A';
    }

    _createClass(ValidateSubmit, [{
        key: 'link',
        value: function link(scope, $el) {
            $el.bind('submit', function (event) {
                var form = angular.element(event.target);

                if (form.validate) {
                    //if validation is enabled - process form

                    var validate = form.validate();

                    //this is default settings for unobtrusive validation
                    validate.settings.ignore = ":hidden";

                    if (form.valid()) {
                        scope.$apply(scope.submitCallback);
                        validate.resetForm();
                    }

                    //this disables default validation
                    validate.settings.ignore = "*";
                } else {
                    //if validation is disabled - execute callback

                    scope.$apply(scope.submitCallback);
                }

                //preventing default form submition
                event.preventDefault();

                return false;
            });
        }
    }]);

    return ValidateSubmit;
}();

exports.default = ValidateSubmit;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogService = function () {
    function DialogService($uibModal) {
        _classCallCheck(this, DialogService);

        this._$uibModal = $uibModal;
    }

    _createClass(DialogService, [{
        key: 'openCustomDialogDialog',
        value: function openCustomDialogDialog(templateUrl, controller, resolveData) {
            var modalInstance = this._$uibModal.open({
                templateUrl: templateUrl,
                controller: controller,
                controllerAs: 'vm',
                resolve: resolveData
            });

            return modalInstance.result;
        }
    }, {
        key: 'openYesNoDialog',
        value: function openYesNoDialog(title, message) {
            var modalInstance = this._$uibModal.open({
                templateUrl: 'yesNoDialog.html',
                controller: 'YesNoDialogController',
                controllerAs: 'vm',
                resolve: {
                    content: {
                        title: title,
                        message: message
                    }
                }
            });

            return modalInstance.result;
        }
    }]);

    return DialogService;
}();

;

DialogService.$inject = ['$uibModal'];

exports.default = DialogService;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayMessageService = function () {
    function DisplayMessageService($rootScope) {
        _classCallCheck(this, DisplayMessageService);

        this._$rootScope = $rootScope;
    }

    _createClass(DisplayMessageService, [{
        key: 'showError',
        value: function showError(message) {
            this._$rootScope.alerts.push({ type: 'danger', message: message });
        }
    }, {
        key: 'showSuccess',
        value: function showSuccess(message) {
            this._$rootScope.alerts.push({ type: 'success', message: message });
        }
    }, {
        key: 'showWarning',
        value: function showWarning(message) {
            this._$rootScope.alerts.push({ type: 'warning', message: message });
        }
    }]);

    return DisplayMessageService;
}();

DisplayMessageService.$inject = ['$rootScope'];

exports.default = DisplayMessageService;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorProcessingService = function () {
    function ErrorProcessingService($log, displayMessageService) {
        _classCallCheck(this, ErrorProcessingService);

        this._$log = $log;
        this._displayMessageService = displayMessageService;
    }

    _createClass(ErrorProcessingService, [{
        key: 'processHttpError',
        value: function processHttpError(response) {
            this._$log.error(response.statusText);
        }
    }, {
        key: 'processErrorResponse',
        value: function processErrorResponse(response) {
            this._$log.error('Got server error: status = ' + response.data.Status + ', message = ' + response.data.Message);
            this._displayMessageService.showError(response.data.Message);
        }
    }, {
        key: 'canProcessServerResponse',
        value: function canProcessServerResponse(response) {
            return response.status == 200 && response.data.Status === AWA.enums.status.success;
        }
    }]);

    return ErrorProcessingService;
}();

;

ErrorProcessingService.$inject = ['$log', 'DisplayMessageService'];

exports.default = ErrorProcessingService;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpConnectionService = function () {
    function HttpConnectionService($http, $q, errorProcessingService) {
        _classCallCheck(this, HttpConnectionService);

        this._$http = $http;
        this._$q = $q;
        this._errorProcessingService = errorProcessingService;
    }

    _createClass(HttpConnectionService, [{
        key: 'get',
        value: function get(url) {
            var deferred = this._$q.defer();
            var _this = this;

            this._$http.get(url).then(function (response) {
                if (_this._errorProcessingService.canProcessServerResponse(response)) {
                    return deferred.resolve(response.data);
                } else {
                    _this._errorProcessingService.processErrorResponse(response);
                }
            }, function (response) {
                _this._errorProcessingService.processHttpError(response);
            });

            return deferred.promise;
        }
    }, {
        key: 'post',
        value: function post(url, data) {
            var deferred = this._$q.defer();
            var _this = this;

            this._$http.post(url, data).then(function (response) {
                if (_this._errorProcessingService.canProcessServerResponse(response)) {
                    return deferred.resolve(response.data);
                } else {
                    _this._errorProcessingService.processErrorResponse(response);
                }
            }, function (response) {
                _this._errorProcessingService.processHttpError(response);
            });

            return deferred.promise;
        }
    }]);

    return HttpConnectionService;
}();

;

HttpConnectionService.$inject = ['$http', '$q', 'ErrorProcessingService'];

exports.default = HttpConnectionService;

},{}],12:[function(require,module,exports){
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

},{"./users.controller":13}],13:[function(require,module,exports){
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

UsersController.$inject = ['DialogService', 'DisplayMessageService', 'UserService'];

exports.default = UsersController;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditUserDialogController = function () {
    function EditUserDialogController(userService, $uibModalInstance, user) {
        _classCallCheck(this, EditUserDialogController);

        this._userService = userService;
        this.user = user;
        this._$uibModalInstance = $uibModalInstance;
    }

    _createClass(EditUserDialogController, [{
        key: 'updateInfo',
        value: function updateInfo() {
            this._userService.updateUser(this.user).then(function (result) {
                this._$uibModalInstance.close(result.Data);
            });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this._$uibModalInstance.dismiss();
        }
    }]);

    return EditUserDialogController;
}();

EditUserDialogController.$inject = ['UserService', '$uibModalInstance', 'user'];

exports.default = EditUserDialogController;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService($q, httpConnectionService, dialogService) {
        _classCallCheck(this, UserService);

        this._$q = $q;
        this._httpConnectionService = httpConnectionService;
        this._dialogService = dialogService;
    }

    _createClass(UserService, [{
        key: 'createUser',
        value: function createUser() {
            return this.openEditUserDialog({});
        }
    }, {
        key: 'editUser',
        value: function editUser(user) {
            return this.openEditUserDialog(angular.copy(user));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(user) {
            return this._httpConnectionService.post(AWA.urls.user.update, user);
        }
    }, {
        key: 'openEditUserDialog',
        value: function openEditUserDialog(user) {
            return this._dialogService.openCustomDialogDialog('editUserDialog.html', 'EditUserDialogController', { user: user });
        }
    }, {
        key: 'getUsers',
        value: function getUsers(search, pageNumber) {
            console.log('userService.getUsers called');

            //TODO: create format filter
            var url = AWA.urls.user.list.replace('{0}', search || '').replace('{1}', pageNumber || 1);

            return this._httpConnectionService.get(url);
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(user) {
            var deferred = this._$q.defer();
            var message = String.format(AWA.resources.message.SureToDeleteUser, user.FirstName + ' ' + user.LastName);
            var _this = this;

            this._dialogService.openYesNoDialog(AWA.resources.title.Delete_user, message).then(function () {
                var url = AWA.urls.user.delete;

                _this.HttpConnectionService.post(url, { userId: user.UserId }).then(function (response) {
                    deferred.resolve(response);
                });
            });

            return deferred.promise;
        }
    }]);

    return UserService;
}();

;

UserService.$inject = ['$q', 'HttpConnectionService', 'DialogService'];

exports.default = UserService;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('./components/users/users.component');

var _users2 = _interopRequireDefault(_users);

var _UserService = require('./services/UserService');

var _UserService2 = _interopRequireDefault(_UserService);

var _editUserDialog = require('./controllers/editUserDialog.controller');

var _editUserDialog2 = _interopRequireDefault(_editUserDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppUsersModule = angular.module('aspWcfAngular.users', ['ui.router']).config(AppConfig).run(AppRun).component('users', _users2.default).service('UserService', _UserService2.default).controller('EditUserDialogController', _editUserDialog2.default);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('users', {
        url: '/users',
        template: '<users></users>'
    });
    $urlRouterProvider.otherwise('/users');
}

function AppRun() {}

exports.default = AppUsersModule.name;

},{"./components/users/users.component":12,"./controllers/editUserDialog.controller":14,"./services/UserService":15}]},{},[1])


//# sourceMappingURL=bundle.js.map
