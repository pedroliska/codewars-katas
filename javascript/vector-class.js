var Vector = function(compoments) {

  self = this;
  this.components = compoments;

  function parallelOperation(vect1, vect2, operation) {

    var comp1 = vect1.getComponents(),
        comp2 = vect2.getComponents();

    if (comp1.length != comp2.length)
      throw 'Vectors need to be of the same length';

    var newCompoments comp1.map(function (item, index) {
      return operation(item, comp2[index]);
    });
    return new Vector(newCompoments);
  }
  this.getComponents = function () {
    return self.components;
  };
  this.add = function (vect) {
    return parallelOperation(self, vect, function (a,b) {return a+b;};
  };
  this.subtract = function (vect) {
    return parallelOperation(self, vect, function (a,b) {return a-b;};
  };
  this.dot = function (vect) {
    return parallelReduce(self, vect, 
      function (a,b) {return a*b;}, 
      function (a,b) {return a+b});

    var comp1 = self.getComponents(),
        comp2 = vect.getComponents();

    if (comp1.length != comp2.length)
      throw 'Vectors need to be of the same length';

    var newCompoments comp1.reduce(function (accum, curr1, index) {
      var curr2 = comp2[index];
      accum = reduceOp(accum, parallelOp(curr1, curr2));
    });
    return new Vector(newCompoments);
  };
  this.norm = function () {
    var temp = self.getComponents()
      .map (function (item) {return item*item;})
      .reduce(function (accum, curr) { return accum+curr; });
    return Math.sqrt(temp);
  };
}


































































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


