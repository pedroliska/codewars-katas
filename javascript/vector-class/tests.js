describe("Vector Class Tests", function () {

  var vect1 = new Vector([1, 2, 3]);
  var vect2 = new Vector([2, 2, 2]);
  var vect3 = new Vector([4, 4, 4, 4]);

  it('should have a toString method', function () {
    expect(vect1.toString()).toEqual('(1,2,3)');
  });

  it('shoudl have an equals method', function() {
    expect(vect1.equals(vect1)).toEqual(true);
  });

  it('should have a getCompoments method', function() {
    expect(vect1.getComponents()).toEqual([1, 2, 3]);
  });

  it('should have an add method', function () {

    expect(vect1.add(vect2).toString()).toEqual('(3,4,5)');

    expect(function () {
      vect1.add(vect3);
    }).toThrowError();

  });

  it('should have a subtract method', function () {

    expect(vect1.subtract(vect2).toString()).toEqual('(-1,0,1)');

    expect(function () {
      vect1.subtract(vect3);
    }).toThrowError();

  });

  it('should have a dot method', function() {
    expect(vect1.dot(vect2)).toEqual(12);
  });

  it('should have a norm method', function() {
    expect(vect1.norm().toFixed(2)).toEqual('3.74');
  });

});
