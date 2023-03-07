function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("validated").innerHTML = "You cannot join the club as per club's terms and conditions";
    } else {
        document.getElementById("validated").innerHTML = "Valid Age";
      }
  } 