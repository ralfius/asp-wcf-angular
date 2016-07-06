//---Inheritance types---
//1. Pseudoclassical pettern
function BasePC() {
    this.baseVar = 'basePC';
    this.baseMethod = function(){
        console.log('Inside PC baseMethod. baseVar = ' + this.baseVar);
    };
};

function DerivedPC() {
    this.derivedVar = 'derivedPC';
    this.derivedMethod = function(){
        console.log('Inside PC derivedMethod. derivedVar = ' + this.derivedVar);
    };
};

DerivedPC.prototype = new BasePC();

const derivedPCObject = new DerivedPC();

//2. Prototypical pettern
var basePr = {
    baseVar: 'basePr',
    baseMethod: function () {
        console.log('Inside Pr baseMethod. baseVar = ' + this.baseVar);
    }
}

var derivedPr = Object.create(basePr);
derivedPr.derivedVar = 'derivedP';
derivedPr.derivedMethod = function () {
    console.log('Inside Pr derivedMethod. derivedVar = ' + this.derivedVar);
};

const derivedPrObject = derivedPr;

//help function to create derived objects
var object = function (baseObject) {
    function F() { }
    F.prototype = baseObject;
    return new F();
};

//3. Parasitic pettern
function basePar() {
    var baseVar = 'basePar';
    var baseMethod = function () {
        console.log('Inside Par baseMethod. baseVar = ' + baseVar);
    };

    return { baseVar: baseVar, baseMethod: baseMethod };
};

function derivedPar() {
    var base = basePar();

    base.derivedVar = 'derivedPar';
    base.derivedMethod = function () {
        console.log('Inside Par derivedMethod. derivedVar = ' + base.derivedVar);
    };

    return base;
};

const derivedParObject = derivedPar();