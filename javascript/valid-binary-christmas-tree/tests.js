describe("Valid binary christmas tree tests", function () {

  it('should deal with valid tree 2 children nodes', function() {
    
    var tree = {
      "ornament":"star",
      "color":"yellow",
      "left": {
        "ornament":"candy cane",
        "color":"blue"},
      "right": {
        "ornament":"stocking",
        "color":"blue"}};

     expect(isValidTree(tree)).toBe(true);

  });


  it('the root node should have a star ornament', function() {
    
    var tree = {"ornament":"sled","color":"yellow"};

     expect(isValidTree(tree)).toBe(false);

  });

});
