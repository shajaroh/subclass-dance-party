var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeSpinnyDancer.prototype.step;
 
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;
makeSpinnyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  // this.$node.fadeOut();
  //this.$node.slideToggle();
  this.$node.animate({
    'margin-top': '50px'}, 'slow').animate({
    'margin-top': '-50px'
  }, 'fast');
};

// makeSpinnyDancer.prototype.lineUp = function() {
//   for(var i = 0; i < window.dancers.length; i++) {
//     if (window.dancers[i] === makeSpinnyDancer) {

//     }
//   }
// };