// BACKEND LOGIC

function Contact(first, last, email, phone) {
  this.firstName = (first);
  this.lastName = (last);
  this.email = (email);
  this.phone = (phone);
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}









// FRONT END LOGIC
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedPhone = $("input#phone").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPhone);

    $("ul#contacts").append("<li><span class='contacts'>" + newContact.fullName() + "</span></li>");

    $("input#first-name").val("");
    $("input#last-name").val("");

    $(".contacts").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
    });

  });
});
