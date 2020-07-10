"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// class that's going to take some collection of data and sort
// and the elements inside of it
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // | union operator
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            // we declare -i because we do a full iteration through the array the first time
            // the rightmost element will be in the correct location
            // so we have not so resort that in the future
            for (var j = 0; j < length - i - 1; j++) {
                // comparison logic one pair at the time
                //if collection is an array of numbers
                if (this.compare(j, j + 1)) {
                    // we need to do the swap
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
