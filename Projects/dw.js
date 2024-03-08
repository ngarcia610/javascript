// Use factory functions to create monsters, the player, and locations

let tempObj = {
  _num: 22,
  get num() {
    return this._num;
  }
};

// console.log(tempObj.num()); <-- TypeError: Not a function
console.log(tempObj['num']);
console.log(tempObj._num);
console.log(tempObj.num);