// BACKEND LOGIC


  var addressBook = [];

  function Contact(first, last, email, phone) {
    this.firstName = (first);
    this.lastName = (last);
    this.email = (email);
    this.phone = (phone);
    this.addresses = [];
  }

  function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }


  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

  function resetFields() {
    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#email").val("");
    $("input#phone").val("");
  }








// FRONT END LOGIC
$(document).ready(function(){
  var addressCount = 2;
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Address ' + addressCount + '</label>' +
                                   '<input type="text" class="form-control new-street" placeholder="Street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<input type="text" class="form-control new-city" placeholder="City">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<input type="text" class="form-control new-state" placeholder="State">' +
                                 '</div>' +
                               '</div>');
                               addressCount++;
                             });

  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmail = $("input#new-email").val();
    console.log(inputtedEmail);
    var inputtedPhone = $("input#new-phone").val();
    console.log(inputtedPhone);
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPhone);

    $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(newAddress);
      });
    addressBook.push(newContact);

    $("ul#contacts").append("<li><span class='contacts'>" + newContact.fullName() + "</span></li>");

    $(".contacts").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);

      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
      });



    });
    resetFields();



   });
});
