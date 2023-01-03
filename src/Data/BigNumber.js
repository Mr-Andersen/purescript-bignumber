"use strict";

import * as BigNumber from 'bignumber.js';

export const parseBigNumberImpl = function parseBigNumberImpl (Left,Right,s) {
    var x;
    try {
        x = new BigNumber(s);
    } catch (e) {
        return Left(e);
    }
    return Right(x);
};


export const isBigNumber = function isBigNumber (x) {
    return BigNumber.isBigNumber(x);
};


export const randomBigNumber = function randomBigNumber () {
    return BigNumber.random();
};


export const absImpl = function absImpl (x) {
    return x.abs();
};


export const compareBigNumberImpl = function compareBigNumberImpl (LT,EQ,GT,x,y) {
    var r = x.comparedTo(y);
    if (r === -1) {
        return LT;
    } else if (r === 0) {
        return EQ;
    } else if (r === 1) {
        return GT;
    }
};


export const decimalPlacesImpl = function decimalPlacesImpl (x,y) {
    return x.decimalPlaces(y);
};

export const divBigNumberImpl = function divBigNumberImpl (x,y) {
    return x.div(y);
};

export const idivBigNumberImpl = function idivBigNumberImpl (x,y) {
    return x.idiv(y);
};

export const powBigNumberImpl = function powBigNumberImpl (x,y) {
    return x.pow(y);
};

export const intValue = function intValue (x) {
    return x.integerValue();
};

export const eqBigNumberImpl = function eqBigNumberImpl (x,y) {
    return x.eq(y);
};

export const isFinite = function isFinite (x) {
    return x.isFinite();
};

export const gtBigNumberImpl = function gtBigNumberImpl (x,y) {
    return x.gt(y);
};

export const gteBigNumberImpl = function gteBigNumberImpl (x,y) {
    return x.gte(y);
};

export const isInteger = function isInteger (x) {
    return x.isInteger();
};

export const ltBigNumberImpl = function ltBigNumberImpl (x,y) {
    return x.lt(y);
};

export const lteBigNumberImpl = function lteBigNumberImpl (x,y) {
    return x.lte(y);
};

export const isNaN = function isNaN (x) {
    return x.isNaN();
};

export const isNegative = function isNegative (x) {
    return x.isNegative();
};

export const isPositive = function isPositive (x) {
    return x.isPositive();
};

export const isZero = function isZero (x) {
    return x.isZero();
};

export const minusBigNumberImpl = function minusBigNumberImpl (x,y) {
    return x.minus(y);
};

export const moduloBigNumberImpl = function moduloBigNumberImpl (x,y) {
    return x.modulo(y);
};

export const timesBigNumberImpl = function timesBigNumberImpl (x,y) {
    return x.times(y);
};

export const negateImpl = function negateImpl (x) {
    return x.negated();
};

export const plusBigNumberImpl = function plusBigNumberImpl (x,y) {
    return x.plus(y);
};

export const precisionImpl = function precisionImpl (x,y) {
    return x.precision(y);
};

export const shiftedByImpl = function shiftedByImpl (x,y) {
    return x.shiftedBy(y);
};

export const toNumber = function toNumber (x) {
    return x.toNumber();
};

export const toString = function toString (x) {
    return x.toString();
};

export const toExponential = function toExponential (x) {
    return x.toExponential();
};

export const toFixed = function toFixed (x) {
    return x.toFixed();
};

export const toFormat = function toFormat (x) {
    return x.toFormat();
};

export const toFractionImpl = function (tuple) {
    return function toFractionImpl (x) {
        var fraction = x.toFraction();
        return tuple(fraction[0], fraction[1]);
    };
};

export const valueOf = function valueOf (x) {
    return x.valueOf();
};

export const sqrt = function sqrt (x) {
    return x.sqrt();
};

export const fromNumber = function fromNumber(x) {
    return new BigNumber(x);
};

