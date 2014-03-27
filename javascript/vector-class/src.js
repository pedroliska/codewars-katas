var Vector = function (components) {

    var self = this;
    this.components = components;

    function parallelOperation(vect1, vect2, operation) {

        var comp1 = vect1.getComponents(),
            comp2 = vect2.getComponents();

        if (comp1.length != comp2.length)
            throw new Error('Vectors need to be of the same length');

        var newCompoments = comp1.map(function (item, index) {
            return operation(item, comp2[index]);
        });
        return new Vector(newCompoments);
    }
    this.getComponents = function () {
        return self.components;
    };
    this.add = function (vect) {
        return parallelOperation(self, vect, function (a, b) { return a + b; });
    };
    this.subtract = function (vect) {
        return parallelOperation(self, vect, function (a, b) { return a - b; });
    };
    this.dot = function (vect) {

        var product,
            comp1 = self.getComponents(),
            comp2 = vect.getComponents();
        parallelOp = function (a, b) { return a * b; },
        reduceOp = function (a, b) { return a + b; };

        if (comp1.length != comp2.length)
            throw 'Vectors need to be of the same length';

        product = parallelOperation(self, vect, parallelOp);

        return product.getComponents().reduce(function (accum, curr) {
            return reduceOp(accum, curr);
        });
    };
    this.norm = function () {
        var temp = self.getComponents()
          .map(function (item) { return item * item; })
          .reduce(function (accum, curr) { return accum + curr; });
        return Math.sqrt(temp);
    };
    this.equals = function(vect) {
        var comp1 = self.getComponents(),
            comp2 = vect.getComponents();
        if (comp1.length != comp2.length)
            return false;
        return comp1.reduce(function(aggregate, curr, index) {
            if (!aggregate) return false;
            return curr == comp2[index];
        }, true);

    };
    this.toString = function() {
        return '(' + self.getComponents().join(',') + ')';
    };
}

// ---------------------------------

var vect1 = new Vector([1, 2]);
var vect2 = new Vector([2, 2]);

console.log(vect1.toString());

console.log(vect1.equals(vect2));
console.log(vect1.equals(vect1));
console.log(vect1.equals(new Vector(2,3,4)));

console.log(vect1.add(vect2).toString());
console.log(vect1.dot(vect2).toString());
