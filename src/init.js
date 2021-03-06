$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    //var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    let height = $('body').height() * Math.random();
    console.log('dancer name', dancerMakerFunctionName);
    if (dancerMakerFunctionName === 'Tornado') {
      height = 125;
    }
    let width = $('body').width() * Math.random();
    let frequency = Math.random() * 25;


    var dancer = new dancerMakerFunction(height, width, frequency);
      // $('body').height() * Math.random(),
      // $('body').width() * Math.random(),
      // Math.random() * 25
    //);
    //console.log('Making a new: ' + dancerMakerFunctionName);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    //console.log(window.dancers);
  });

  // window.dancers;
});

