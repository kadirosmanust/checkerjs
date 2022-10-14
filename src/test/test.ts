"use strict";
import assert = require("assert");
import { isArray, isAnyNullorUndefined, isInRange, deepEquality } from "../index";

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
      const exArray ={};


      assert.equal(isArray(exArray), false);
    });
  });


  describe("#isInRange()", function () {
    it("should return true when it is in range", function () {
      const exArray = [1,2,3,4,5,6,7,8];

      assert.equal(isInRange(exArray,1,0,7), true);

    });

    it("should return false when it is not in range", function () {
      const exArray = [1,2,3,4,5,6,7,8];

      assert.equal(isInRange(exArray,4,6,7), false);

    });

  });

  describe("#deepEquality()", function () { 
    it("should return true when it is equal", function () {
      const exArray = [1,2,3,4,5,6,7,8];
      const exArray2 = [1,2,3,4,5,6,7,8];

      assert.equal(deepEquality(exArray,exArray2), true);

    });

    it("should return false when it is not equal", function () {
      const exArray = [1,2,3,4,5,6,7,8];
      const exArray2 = [1,2,3,4,5,6,7,9];

      assert.equal(deepEquality(exArray,exArray2), false);

    });

    it("should return false when get diffrent numbers",()=>{
      assert.equal(deepEquality(1,2), false);
    })
    it("should return false when get equal numbers",()=>{
      assert.equal(deepEquality(1,1), true);
    })

  });




});
