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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // dancerMakerFunction(height, width, time)

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.lineUpButton').on('click', function(event) {
    var top = 400;
    var left = 50;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top, left);
      left += 200;
    }
  });

  $('.danceOff').on('click', function(event) {
    var len = window.dancers.length;
    var mainDancer1 = window.dancers[Math.floor(Math.random() * len)];
    var mainDancer2 = window.dancers[Math.floor(Math.random() * len)];
    
    mainDancer1.setPosition(400, 400);
    mainDancer2.setPosition(400, 400);
    
  });

  $(document).on('mouseover', '.dancer', function(event) {
    $(this).animate({
      'margin-left': '+=1000px'}, 'slow').animate({
      'margin-left': '-=1000px'
    }, 'slow');
  });
});

