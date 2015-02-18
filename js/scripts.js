var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  }
};

$(document).ready(function(event) {

  var bankAccount;
  var name;

    $("form#createAccount").submit(function(event) {
      var firstDeposit = parseFloat($('input#firstDeposit').val());
      name = $('input#name').val();
      bankAccount = Object.create(BankAccount);

      bankAccount.deposit(firstDeposit);

      $("div#accountBalance").show();
      $('#accountName').text(name);
      $('#balance').text(bankAccount.balance);
      event.preventDefault();
    });

    $('form#modifyAccount').submit(function(event) {
      var deposit = parseFloat($('input#deposit').val());
      var withdraw = parseFloat($('input#withdraw').val());

        if ( (!(/^\d*\.?\d*$/.test(deposit))) || (!(/^\d*\.?\d*$/.test(withdraw))) ) {
            alert('One of the fields contains non-numeric characters.');
        } else {
            bankAccount.deposit(deposit);
            bankAccount.withdraw(withdraw);
            $("#balance").text(bankAccount.balance);
            event.preventDefault();
        }

    });

});
