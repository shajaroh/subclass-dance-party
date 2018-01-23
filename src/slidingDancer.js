var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeSlidingDancer.prototype.step;
  this.$node.html('<img id="nemo" src="nemo.gif" />');
  
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;
makeSlidingDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  this.$node.animate({
    'margin-left': '+=200px'}, 'slow').animate({
    'margin-left': '-=200px'
  }, 'slow');
};

makeSlidingDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left); 
};