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

var accounts = [];
var accounter = 0;

//front end logic ----------------------

$(document).ready(function() {
  var resetFields = function() {
    $("#register-name").val("");
    $("#register-passWord").val("");
    $("#initial-deposit").val("");
    $("#alter-name").val("");
    $("#alter-passWord").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");
  }

  //register an account actions
  $("form#register").submit(function(event) {
    event.preventDefault();
    var name = $("#register-name").val();
    var password = $("#register-passWord").val();
    var balance = parseFloat($("#initial-deposit").val());
    console.log(name);
    accounts.push(new Account(name, password, balance));

    $("#current-balance").append('<div class="well"><h4>Name: ' + accounts[accounter].name + '</h4><br>' + '<h4>Balance: $<span  id="account' + accounter + '">' + accounts[accounter].balance + '</span>');
    accounter++;
    resetFields();
  })

  //alter ad account actions
  $("form#alter").submit(function(event) {
    event.preventDefault();

    var name = $("#alter-name").val();
    var password = $("#alter-passWord").val();
    var deposit = parseFloat($("#deposit").val());
    var withdrawal = parseFloat($("#withdrawal").val());
    console.log(name);
    console.log(password);
    console.log(deposit);
    console.log(withdrawal);
    for (var i = 0; i < accounts.length; i ++) {
    console.log(accounts.length);
      if((name === accounts[i].name) && (password === accounts[i].password)) {
        accounts[i].deposit(deposit);
        accounts[i].withdraw(withdrawal);
        var updateBalance = eval("'#account" + i + "'"); //'#account4'
        $(updateBalance).text(accounts[i].balance);
      } else if((name === accounts[i].name) && (password !== accounts[i].password)) {
        alert("Wrong usename/password combination");
      } else {
        console.log("asdfasdf")
      }
    }
    resetFields();
  })

})
