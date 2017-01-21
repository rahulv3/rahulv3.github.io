$(function() {
  $("form[name='contact-form']").validate({
    rules: {
      name: "required",
      phone: "required",
      subject: "required",
      message: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Please enter your name",
      phone: "Please enter your phone number",
      subject: "Please enter the subject",
      message: "Please enter the message",
      email: {
        required: "Please provide an email address",
        email: "Please enter a valid email address"
      }
    }
  });
});