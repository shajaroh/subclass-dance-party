var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeBouncyDancer.prototype.step;
 
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  // this.$node.fadeOut();
  //this.$node.slideToggle();
  this.$node.animate({
    'margin-top': '50px'}, 'slow').animate({
    'margin-top': '-50px'
  }, 'fast');
};