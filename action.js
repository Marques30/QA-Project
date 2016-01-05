function check(form) {
  if (form.userid.value == "crash" && form.pswrd.value == "x") {
    window.open('YU.html')
  } else {
    alert("Error incorrect Password or Username")
  }
}
