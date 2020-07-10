interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
// class that's going to take some collection of data and sort
// and the elements inside of it
export abstract class Sorter {
  // we just said that we promise that when eventually we inherit from Sorter
  // the child class will implement this method with this signature
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // | union operator

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // we declare -i because we do a full iteration through the array the first time
      // the rightmost element will be in the correct location
      // so we have not so resort that in the future
      for (let j = 0; j < length - i - 1; j++) {
        // comparison logic one pair at the time
        //if collection is an array of numbers
        if (this.compare(j, j + 1)) {
          // we need to do the swap
          this.swap(j, j + 1);
        }
      }
    }
  }
}
