/* eslint-disable @typescript-eslint/ban-ts-comment */
"use strict";
import assert = require("assert");
import {
  isArray,
  isAnyNullorUndefined,
  isInRange,
  deepEquality,
  isOdd,
  isAnyFrozen,
  howManyCharAtStr,
  mustFind,
} from "../index";

describe("Array", function () {
  describe("#isAnyNullOrUndefined()", function () {
    it("should return true when it has null", function () {
      const exArray = [1, 2, 3, 4, 5, 0, null];
      assert.equal(isAnyNullorUndefined(exArray), true);
    });
    it("should return true when it has undefined", function () {
      const exArray = [1, 2, 3, 4, 5, 0, undefined];
      assert.equal(isAnyNullorUndefined(exArray), true);
    });
    it("should return false when it has zero", function () {
      const exArray = [1, 2, 3, 4, 5, 0];
      assert.equal(isAnyNullorUndefined(exArray), false);
    });
    it("should return false when it has empty string", function () {
      const exArray = [1, 2, 3, 4, 5, ""];
      assert.equal(isAnyNullorUndefined(exArray), false);
    });
  });

  describe("#isArray()", function () {
    it("should return true when it is Array", function () {
      const exArray = [1, 2, 3, 4, 5, 0, null];
      const exArray2: any[] = [];

      assert.equal(isArray(exArray), true);
      assert.equal(isArray(exArray2), true);
    });

    it("should return false when it is not Array", function () {
      const exArray = {};

      assert.equal(isArray(exArray), false);
    });
  });

  describe("#isInRange()", function () {
    it("should return true when it is in range", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];

      assert.equal(isInRange(exArray, 1, 0, 7), true);
    });

    it("should return false when it is not in range", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];

      assert.equal(isInRange(exArray, 4, 6, 7), false);
    });
  });

  describe("#deepEquality()", function () {
    it("should return true when it is equal", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const exArray2 = [1, 2, 3, 4, 5, 6, 7, 8];

      assert.equal(deepEquality(exArray, exArray2), true);
    });

    it("should return false when it is not equal", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const exArray2 = [1, 2, 3, 4, 5, 6, 7, 9];

      assert.equal(deepEquality(exArray, exArray2), false);
    });

    it("should return false when get diffrent numbers", () => {
      assert.equal(deepEquality(1, 2), false);
    });
    it("should return false when get equal numbers", () => {
      assert.equal(deepEquality(1, 1), true);
    });
  });

  describe("#mustFind()", function () {
    it("should return item when it is found", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const item = mustFind<number>(exArray, item => item === 4);
      assert.equal(item, 4);
    });

    it("should return item with Type when it is found", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const item = mustFind<number>(exArray, item => item === 4);
      assert.equal(typeof item, "number");
    });

    it("should return error when it is not found", function () {
      const exArray = [1, 2, 3, 4, 5, 6, 7, 8];

      try {
        mustFind<number>(exArray, item => item === 9);
      } catch (e) {
        assert.equal(e.message, "Item not found");
      }
    });
  });
});

describe("Number", function () {
  describe("#isOdd()", function () {
    it("should return true when it is odd", function () {
      assert.equal(isOdd(1), true);
      assert.equal(isOdd(-5), true);
    });
    it("should return false when it is not odd", function () {
      assert.equal(isOdd(2), false);
      assert.equal(isOdd(-6), false);
    });
    it("should return false when it is zero", function () {
      assert.equal(isOdd(0), false);
    });
    it("should return undefined when it is NaN", function () {
      // @ts-ignore
      assert.equal(isOdd([]), undefined);
      // @ts-ignore
      assert.equal(isOdd({}), undefined);
      // @ts-ignore
      assert.equal(isOdd(NaN), undefined);
    });
  });
});

describe("Object", function () {
  describe("#isAnyFrozen()", function () {
    it("should return false when there is no freez", function () {
      const mockedObject = {
        a: 1,
        b: 2,
        c: 3,
      };
      assert.equal(isAnyFrozen(mockedObject), false);
    });

    it("should return true when it is frozen.", function () {
      const mockedObject = Object.freeze({
        a: 1,
        b: 2,
        c: 3,
      });
      assert.equal(isAnyFrozen(mockedObject), true);
    });

    it("should return true when there is frozen one.", function () {
      const mockedObject = {
        a: 1,
        b: 2,
        c: 3,
        d: Object.freeze({
          a: 1,
        }),
      };

      assert.equal(isAnyFrozen(mockedObject), true);
    });
  });
});

describe("String", function () {
  describe("#howManyCharAtStr()", function () {
    it("should return 0 when empty string comes", function () {
      const mockedString = "";
      assert.equal(howManyCharAtStr(mockedString), 0);
    });

    it("should return 1 when one character comes", function () {
      const mockedString = "a";
      assert.equal(howManyCharAtStr(mockedString), 1);
    });

    it("should return 2 when two character comes", function () {
      const mockedString = "ab";
      assert.equal(howManyCharAtStr(mockedString), 2);
    });

    it("should return count of chars when add options", function () {
      const mockedString = "abccds";
      const mockedResult = {
        count: 6,
        charCounts: {
          a: 1,
          b: 1,
          c: 2,
          d: 1,
          s: 1,
        },
      };
      const testResult = howManyCharAtStr(mockedString, {
        seperate: true,
      });
      assert.deepEqual(mockedResult, testResult);
    });

    it("should return count of chars wo spaces when add options", function () {
      const mockedString = "Kadoraw Hello World";

      assert.equal(howManyCharAtStr(mockedString, { ignoreSpaces: false }), 17);
    });
  });
});
