var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step; // <-- stepStore
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  // console.log('blinky step------------');
  // console.log(this);
  // console.log(this.$node); // node span class dancer
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step; // same as oldStep = dancer.prototype.step;
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };