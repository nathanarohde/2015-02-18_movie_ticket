var MovieTicket = {

  price: 0,
  calculatePrice: function(title, day, timeOfDay, age) {

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

    if (age === "Child") {
      var costAge = 0
    } else if (age === "Adult") {
      costAge = 2.00
    } else if (age === "Student") {
      costAge = 1.50
    } else { costAge = 1.00

    }


   return this.price + costDay + costTimeOfDay + costAge;
  }

};
