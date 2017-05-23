var Tornado = function(top, left, timeBetweenSteps) {
  var randomSpeed = Math.random(); // [0, 0.99990
  var tornadoFilePath = 'lib/images/tornado.gif';
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.horizVelocity = 8 * randomSpeed;
  this.$node = this.$node.append($('<img class="animated infinite tornado" src=' + tornadoFilePath + '> '));
  this.step();// might need to use pure jQuery for rotation
};

Tornado.prototype = Object.create(makeDancer.prototype);
Tornado.prototype.constructor = Tornado;

Tornado.prototype.step = function () {
  var width = $('body').width();
  var height = $('body').height();
  makeDancer.prototype.step.call(this);

  if (this.left > width - 20 || this.left < 0) {
    this.horizVelocity = -this.horizVelocity;
  }

  this.left += this.horizVelocity;
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
};

