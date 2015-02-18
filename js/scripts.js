var MovieTicket = {

  price: 0,
  orderPrice:0,

  calculatePrice: function(movie, day, timeOfDay, child, student, adult, senior) {

    if (day === "Monday" || "Tuesday" || "Wednesday" || "Thursday") {
      var costDay = 2.00
    } else if (day === "Friday") {
      costDay = 2.50
    } else  {
      costDay = 3.00
    }
    this.price += costDay;

    if (timeOfDay === "Matinee") {
      var costTimeOfDay = 0
    } else { costTimeOfDay = 3.00

    }
    this.price += costTimeOfDay;

    this.orderPrice += (child*(this.price));
    this.orderPrice += (student*(this.price+1.5));
    this.orderPrice += (adult*(this.price + 2));
    this.orderPrice += (senior*(this.price + 1));


    // if (age === "Child") {
    //   var costAge = 0
    // } else if (age === "Adult") {
    //   costAge = 2.00
    // } else if (age === "Student") {
    //   costAge = 1.50
    // } else { costAge = 1.00
    //
    // }


   return this.orderPrice;
  }

};

$(document).ready(function(event) {

  $('form#orderTicket').submit(function(event) {
    var movie = $('select#movie').val();
    var day = $('select#day').val();
    var timeOfDay = $('select#timeOfDay').val();
    var child= parseInt($('input#child').val());
    var student= parseInt($('input#student').val());
    var adult= parseInt($('input#adult').val());
    var senior= parseInt($('input#senior').val());

    // var age = $('select#age').val();

    var movieTicket = Object.create(MovieTicket);

    $("ul.purchasedTickets").append("<li><span class='ticket'>" + "$" + movieTicket.calculatePrice(movie, day, timeOfDay, child, student, adult, senior) + "</span></li>");
    event.preventDefault();
  });

});
