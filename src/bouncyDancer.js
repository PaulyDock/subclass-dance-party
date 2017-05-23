var BouncyDancer = function(top, left, timeBetweenSteps) {
  var randomSpeed = Math.random(); // [0, 0.99990
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = 200;
  this.vertVelocity = 100 * randomSpeed;
  this.horizVelocity = 200 * randomSpeed;
  this.step();
  console.log('I was born today.', this);
};

BouncyDancer.prototype = Object.create(makeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  var width = $('body').width();
  var height = $('body').height();
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  console.log('moving time');
  
  
  console.log(this, this.top, this.vertVelocity, this.left, this.horizVelocity);
  if (this.top > height - 20 || this.top < 0) {
    this.vertVelocity = -this.vertVelocity;
  } 
  if (this.left > width - 20 || this.left < 0) {
    this.horizVelocity = -this.horizVelocity;
  }
  this.top += this.vertVelocity; 
  this.left += this.horizVelocity;
  console.log('About to move', this.top, this.left);
  //makeDancer.prototype.setPosition.call(this, this.top, this.left);
  //this.setPosition(this.top, this.left);
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
  console.log('Finished moving', this.top, this.left);
};