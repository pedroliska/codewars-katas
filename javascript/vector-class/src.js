var Vector = function (components) {

  var self = this;

  this.toString = function() {
    return '(' + components.join(',') + ')';
  };
  this.equals = function(vect) {
    return self.toString() == vect.toString();
  }
  this.getComponents = function() {
    return components;
  };

  function parallelOperation(vect1, vect2, operation) {
    var comp1 = vect1.getComponents(),
        comp2 = vect2.getComponents();

    if (comp1.length !== comp2.length)
      throw new Error('Both vectors need to be of the same length');

    var newComp = comp1.map(function(item, index) {
      return operation(item, comp2[index]);
    });
    return new Vector(newComp);
  }
  this.add = function(vect) {
    return parallelOperation(self, vect, function(a, b) { return a + b; });
  };
  this.subtract = function(vect) {
    return parallelOperation(self, vect, function(a, b) { return a - b; });
  };

  this.dot = function(vect) {
    var parallelResult = parallelOperation(self, vect, function (a, b) { return a * b; });
    return parallelResult.getComponents().reduce(function(accum, item) {
      return accum + item;
    });
  };
  this.norm = function() {
    var squaredAndAdded = self.getComponents()
      .map(function (item) { return item * item; })
      .reduce(function(accum, item) { return accum + item; });
    return Math.sqrt(squaredAndAdded);
  };
}