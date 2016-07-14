/// <reference path="/Scripts/_references.js" />

// String.format extension method for processing {0}, {1} formating parameters
(function () {
    'use strict';

    if (!String.format) {
        String.format = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? (args[number] === null ? "" : args[number])
                    : match;
            });
        };
    }
})();

(function () {
    'use strict';

    if (!String.join) {
        String.join = function (separator) {
            var result = arguments[1];

            for (var index = 2; index < arguments.length; index++) {
                if (arguments[index]) {
                    result += separator + arguments[index];
                }
            }

            return result;
        };
    }
})();

(function () {
    'use strict';

    if (!String.decodeHtml) {
        String.decodeHtml = function (encodedHtml) {
            return encodedHtml.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        };
    }
})();

(function () {
    'use strict';

    if (!Array.prototype.find) {
        Array.prototype.find = function(predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
})();

(function () {
    'use strict';

    if (!Array.prototype.findLast) {
        Array.prototype.findLast = function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = length - 1; i >= 0; i--) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
})();

(function () {
    'use strict';

    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
})();

(function () {
    'use strict';

    if (!FormData.parse) {
        FormData.parse = function (objectToParse, ignorePropertyNames, namePrefix, formDataObject) {
            if (!ignorePropertyNames) {
                ignorePropertyNames = [];
            }
            if (!namePrefix) {
                namePrefix = '';
            }
            if (!formDataObject) {
                formDataObject = new FormData();
            }

            for (var key in objectToParse) {
                if (objectToParse.hasOwnProperty(key) && ignorePropertyNames.indexOf(key) === -1) {
                    if (Array.isArray(objectToParse[key])) {
                        for (var i = 0; i < objectToParse[key].length; i++) {

                            if (typeof objectToParse[key][i] === 'object') {
                                FormData.parse(objectToParse[key][i], ignorePropertyNames, namePrefix + key + "[" + i + "]" + '.', formDataObject);
                            } else {
                                formDataObject.append(namePrefix + key + "[" + i + "]", objectToParse[key][i]);
                            }

                        }
                    } else if (typeof objectToParse[key] === 'object') {
                        FormData.parse(objectToParse[key], ignorePropertyNames, namePrefix + key + '.', formDataObject);
                    } else {
                        formDataObject.append(namePrefix + key, objectToParse[key]);
                    }
                }
            }

            return formDataObject;
        };
    }
})();