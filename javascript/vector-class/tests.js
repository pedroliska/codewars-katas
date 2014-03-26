describe("Vector Class Tests", function () {

  var vect1 = new Vector([1, 2, 3]);
  var vect2 = new Vector([2, 2, 2]);

  it('should have a toString method', function() {
    expect(vect1.toString()).toEqual('(1,2,3)');
  });

  it('should have an add method', function() {
    expect(vect1.add(vect2).toString()).toEqual('(3,4,5)');
  });

});
