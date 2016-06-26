/// <reference path="/Scripts/_references.js" />

'use strict';

// String.format extension method for processing {0}, {1} formating parameters
(function () {
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
    if (!String.decodeHtml) {
        String.decodeHtml = function (encodedHtml) {
            return encodedHtml.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        };
    }
})();

(function() {
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

(function() {
    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
})();

(function () {
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


function decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(
         0,
         // Number of digits right of decimal point.
         (match[1] ? match[1].length : 0)
         // Adjust for scientific notation.
         - (match[2] ? +match[2] : 0));
};


function digits(n) {
    return 1 + Math.floor(Math.log(n) / Math.log(10));
}


function trimCommaAndWhitespace(str) {
    return str.replace(/,\s*$/, "");
}


function fromCamelcaseToDashed(str) {
    return str.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "-" + y.toLowerCase(); }).replace(/^-/, "");
}