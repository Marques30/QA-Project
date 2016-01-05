function check(form) {
  if (form.userid.value == "crash" && form.pswrd.value == "Bandicoot") {
    window.open('google.com')
  } else {
    alert("Error incorrect Password or Username")
  }
}