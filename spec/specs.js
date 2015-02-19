describe("MovieTicket", function() {
  describe('price', function() {
    it('will output a price given four perameters', function() {
      var testMovieTicket = Object.create(MovieTicket);
      expect(testMovieTicket.calculatePrice("Monday", "Matinee")).to.equal(2);
    });
    it('will output a price for a family of four, 2 adults and 2 children', function() {
      var testMovieTicket =Object.create(MovieTicket);
      var dayprice = testMovieTicket.calculatePrice("Monday", "Matinee");
      expect(testMovieTicket.groupPrice(2, 0, 2, 0, dayprice)).to.equal(12);
    });
  });


});
