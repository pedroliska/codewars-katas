var Vector = function (components) {
  var self = this;
  this.components = components;
  
  this.getLength = function () {
    return components.length;
  };
  this.getComponents = function() {
    return self.components;
  };
  
  this.add = function (vect) {
    if (vect.getLength() !== self.getLength())
      throw "You cannot add vectors of different lengths";
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



var a = new Vector([1,2]);
var b = new Vector([3,4]);
var c = new Vector([5,6,7,8]);    

Test.assertEquals(a.toString(), '(1,2)');
Test.assertEquals(a.getLength(), 2);
Test.expect((new Vector[1,2, 3]).equals(new Vector[1,2]));
//Test.expect(a.add(b).equals(new Vector([4,6])));