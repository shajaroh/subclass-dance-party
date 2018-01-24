var makePatrickDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makePatrickDancer.prototype.step;
  this.$node.html('<img id="patrick" src="patrick.gif" />');

};

makePatrickDancer.prototype = Object.create(makeDancer.prototype);
makePatrickDancer.prototype.constructor = makePatrickDancer;
makePatrickDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  this.$node.animate({
    'margin-top': '50px'}, 'slow').animate({
    'margin-top': '-50px'
  }, 'fast');
};

makePatrickDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left); 
};