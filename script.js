function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("waForm");

  if(!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let message = `New Registration - Lord of Languages
Name: ${name}
Phone: ${phone}
Email: ${email}
Course: ${course}`;

    let encodedMessage = encodeURIComponent(message);

    let whatsappURL = `https://wa.me/918925856553?text=${encodedMessage}`;

    window.location.href = whatsappURL;
  });

});