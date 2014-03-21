var Vector = function (components) {
  var self = this;
  this.components = components;
  
  this.getLength = function () {
    return components.length;
  };
  this.getComponents = function() {
    return self.components;
  };

  function parallelOperation(vect1, vect2, func) {
    if (vect1.getLength() !== vect2.getLength())
      throw "The vectors need to be of the same length";
    var newCompoments = vect1.getComponents().map(function (item, index) {
      return func(item, vect2.getComponents()[index]);
    });
    return new Vector(newCompoments);
  }

  this.add = function (vect) {
    return parallelOperation(self, vect, function (a,b) { return a+b; });
  };
  this.subtract = function (vect) {
    return parallelOperation(self, vect, function (a,b) { return a-b; });
  };
  this.dot = function (vect) {
    var paralledFunc = function (a,b) { return a*b; };
    var reducerFunc = function (prev, curr, index) {
      return prev+curr;
    };
    var product = parallelOperation(self, vect, paralledFunc);
    return product.getComponents().reduce(reducerFunc);
  };
  this.norm = function () {
    var newCompoments = self.getComponents()
      .map(function (item) {
        return item*item;
      }).reduce(function (prev, curr) {
        return prev + curr;
      });
    return Math.sqrt(newCompoments);
  };
  this.equals = function (vect) {
    if (vect.getLength() !== self.getLength())
      return false;
      
    var reducer = function (prev, curr, index) {
      if (prev === false) return false;
      
      return curr === vect.getComponents()[index];
      
    };
    return self.components.reduce(reducer, true);
  };
  this.toString = function () {
    return '(' + self.components.join(',') + ')';
  };
  
};


