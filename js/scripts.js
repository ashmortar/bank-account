//back end logic --------------------

function Account(name, password, balance) {
  this.name = name;
  this.password = password;
  this.balance = balance;
}

Account.prototype.deposit = function(deposit) {
  this.balance = this.balance + deposit;
  return this.balance;
}

Account.prototype.withdraw = function(withdrawal) {
  this.balance = this.balance - withdrawal;
  return this.balance;
}




//front end logic ----------------------

$(document).ready(function() {

  //register an account actions
  $("form#register").submit(function(event) {
    event.preventDefault();
    var name = $("#register-name").val();
    var password = $("#resgist-passWord").val();
    var balance = parseInt($("#initial-deposit").val());

  })

  //alter ad account actions
  $("form#alter").submit(function(event) {
    event.preventDefault();
  })

})
