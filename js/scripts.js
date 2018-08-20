// BACKEND LOGIC

function Contact(first, last) {
  this.firstName = (first);
  this.lastName = (last);
}









// FRONT END LOGIC
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contacts'>" + newContact.firstName + "</span></li>");

    $("input#first-name").val("");
    $("input#last-name").val("");

    $(".contacts").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

  });
});
