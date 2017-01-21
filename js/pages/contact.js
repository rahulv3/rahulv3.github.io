$(function() {
  $("form[name='contact-form']").validate({
    rules: {
      name: {
        required: true,
        maxlength: 100
      },
      phone: {
        required: true,
        number: true,
        maxlength:15,
        minlength:8
      },
      subject: {
        required: true,
        maxlength: 140
      },
      message: {
        required: true,
        maxlength: 1000
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
         required: "Please enter your name",
         maxlength: "Character limit for the name field is 100"
      },
      phone: {
        required: "Please enter your phone number",
        number: "Please enter a valid phone number",
        maxlength: "Please enter a valid phone number",
        minlength: "Please enter a valid phone number"
      },
      subject: {
        required: "Please select the event type",
        maxlength: "Character limit for the subject field is 140"
      },
      message: {
        required: "Please enter the message",
        maxlength: "Character limit for the message field is 1000"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      }
    }
  });
});