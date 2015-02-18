describe("MovieTicket", function() {
  describe('price', function() {
    it('will output a price given four perameters', function() {
      var testMovieTicket = Object.create(MovieTicket);
      expect(testMovieTicket.calculatePrice("Title", "Monday", "Matinee", 0,1,0,0)).to.equal(3.50);
    });
    it('will output a price for a family of four, 2 adults and 2 children', function() {
      var testMovieTicket =Object.create(MovieTicket);
      expect(testMovieTicket.calculatePrice('Title','Monday','Matinee', 2, 0, 2, 0)).to.equal(12);
    });
  });


});
