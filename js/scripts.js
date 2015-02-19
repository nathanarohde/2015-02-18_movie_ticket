var MovieTicket = {

  price: 0,
  orderPrice:0,
  groupPrice: function(child, student, adult, senior, calculateprice) {

    this.orderPrice += (child*(calculateprice));
    this.orderPrice += (student*(calculateprice+1.5));
    this.orderPrice += (adult*(calculateprice+2));
    this.orderPrice += (senior*(calculateprice+1));

    return this.orderPrice
  },
  calculatePrice: function(day, timeOfDay) {

    if (day === "Monday" || "Tuesday" || "Wednesday" || "Thursday") {
      var costDay = 2.00
    } else if (day === "Friday") {
      costDay = 2.50
    } else  {
      costDay = 3.00
    }

    if (timeOfDay === "Matinee") {
      var costTimeOfDay = 0
    } else { costTimeOfDay = 3.00
    }

    return this.price += costDay + costTimeOfDay;

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

    var movieTicket = Object.create(MovieTicket);

    var dayPrice = movieTicket.calculatePrice(day, timeOfDay);
    var totalPrice = movieTicket.groupPrice(child,student,adult,senior,dayPrice);


    $("ul.purchasedTickets").append("<li><span class='ticket'>" + "$" + totalPrice + "</span></li>");
    event.preventDefault();
  });

});
