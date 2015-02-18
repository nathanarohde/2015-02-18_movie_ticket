describe("MovieTicket", function() {
  describe('price', function() {
    it('will output a price given four perameters', function() {
      var testMovieTicket = Object.create(MovieTicket);
      expect(testMovieTicket.calculatePrice("Title", "Monday", "Matinee", "Student")).to.equal(3.50);
    });
  });


});
