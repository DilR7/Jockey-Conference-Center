function validate(event) {
event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var phone1 = document.getElementById("phone1");
  var email1 = document.getElementById("email1");

  if (name.length < 5) {
    alert("name length must at least be 5 character");
  } else if (!email.endsWith("@gmail.com")) {
    alert("email must end with @gmail.com");
  } else if (phone.length != 14 || isNaN(phone.value)) {
    alert("Phone number must contain 13 number");
  } else if (!phone.startsWith("+62")) {
    alert("Phone number must start from +62");
  } else if (message.split(" ").length < 5) {
    alert("message must at least be 5 word");
  } else if (!phone1.checked && !email1.checked) {
    alert("please select prefered Contact Method");
  }
}
