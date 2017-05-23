var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition();
  this.step();
};


makeDancer.prototype.step = function() {
  // console.log('Dancer steps prebind------------');
  // console.log(this);
  // console.log(this.step.bind(this));
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // console.log('Dancer steps postbind----------');
  // console.log(this.timeBetweenSteps); // do I has value?
  // console.log(this.step);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//  this.setPosition(top, left); //<--- might need to put this back in?








// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   //var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   //dancer.$node = $('<span class="dancer"></span>');

//   // dancer.step = function() {
//   //   // the basic dancer doesn't do anything interesting at all on each step,
//   //   // it just schedules the next step
//   //   setTimeout(dancer.step, timeBetweenSteps);
//   // };
//   // dancer.step();

//   // dancer.setPosition = function(top, left) {
//   //   // Use css top and left properties to position our <span> tag
//   //   // where it belongs on the page. See http://api.jquery.com/css/
//   //   //
//   //   var styleSettings = {
//   //     top: top,
//   //     left: left
//   //   };
//   //   dancer.$node.css(styleSettings);
//   // };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

//   return dancer;
// };