describe("bottlesOfBeer", function() {
  it("returns the lyrics for the song with the numbers filled in; for 1 the output is '<li>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall.</li><li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 1 bottles of beer on the wall.</li>'", function() {
    expect(bottlesOfBeer(1,1)).to.equal("<li>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, No more bottles of beer on the wall.</li><li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 1 bottles of beer on the wall.</li>");
  });
});
