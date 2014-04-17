describe("Human friendly tests", function () {

  var upper = 3;

  it('should return a number ', function () {
    var rand = new RNG(upper);
    expect(rand.rand()).toMatch(/^[01234]$/);
  });

  it('should use all numbers', function () {

    var i, results = [], rand = new RNG(upper);
    
    for (i = 0; i < upper; i++) {
      results.push(rand.rand());
    }
    for (i = 0; i < upper; i++) {
      expect(results).toContain(i);
    }

  });

});
