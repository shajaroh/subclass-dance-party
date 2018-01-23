var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeBouncyDancer.prototype.step;
  this.$node.html('<img id="dory" src="dory.gif" />');

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  this.$node.animate({
    'margin-top': '50px'}, 'slow').animate({
    'margin-top': '-50px'
  }, 'fast');
};

makeBouncyDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left); 
};