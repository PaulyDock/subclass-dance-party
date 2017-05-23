var BouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  debugger;
  this.vertVelocity = 10;
  this.horizVelocity = 20;
  console.log('I was born today.', this);
};

BouncyDancer.prototype = Object.create(makeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  console.log('moving time');
  
  
  console.log(this, this.top, this.vertVelocity, this.left, this.horizVelocity);
  this.top += this.vertVelocity; 
  this.left += this.horizVelocity;
  console.log('About to move', this.top, this.left);
  //makeDancer.prototype.setPosition.call(this, this.top, this.left);
  //this.setPosition(this.top, this.left);
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  console.log('Finished moving', this.top, this.left);
};