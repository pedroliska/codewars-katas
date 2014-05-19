describe("Guess the Gifts!", function () {

  it('kata example', function () {
    
    var wishlist = [
        {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
        {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
        {name: "Card Game", size: "small", clatters: "no", weight: "light"}
    ];

    var presents = [
        {size: "medium", clatters: "a bit", weight: "medium"},
        {size: "small", clatters: "yes", weight: "light"}
    ];
    var result = guessGifts(wishlist, presents);

    expect(result).toContain('Toy Car');
    expect(result).toContain('Mini Puzzle');
  });

});
