function validateLogin () {
  var valid = true;

  //Validate the name field
  if (
    document.getElementById ('name').value.search (/^(?!.*\.\.)[\w.-]{4,}$/) !=
    0
  ) {
    valid = false;
    document.getElementById ('errName').innerHTML =
      'ERROR: Please enter a name with at least 4 characters';
    document.getElementById ('errName').style.display = 'inline';
  } else {
    document.getElementById ('errName').innerHTML = '';
    document.getElementById ('errName').style.display = 'none';
  }

  //Validate the password field
  if (document.getElementById ('password').value.length < 6) {
    valid = false;
    document.getElementById ('errPass').innerHTML =
      'ERROR: Please enter a password with at least 6 characters';
    document.getElementById ('errPass').style.display = 'inline';
  } else {
    document.getElementById ('errPass').innerHTML = '';
    document.getElementById ('errPass').style.display = 'none';
  }
  if (valid == false) {
    return false; // don't submit the form data to the server because of any validation error(s)
  } else {
    return true; // submit the form data to the server because all data looks correct without errors
  }
}

function validate () {
  var valid = true;

  //Validate the name field
  if (
    document.getElementById ('nameFB').value.search (/^[A-Za-z'\-\._ ]{6,}$/) !=
    0
  ) {
    //name should be at least 6 characters. Not complete regex. Each character should be a-z OR A-Z OR ' or - or _ or space
    valid = false;
    document.getElementById ('errNameFB').innerHTML =
      'ERROR: Name is mandatory and should be at least 6 characters !';
    document.getElementById ('errNameFB').style.display = 'inline';
  } else {
    document.getElementById ('errNameFB').innerHTML = '';
    document.getElementById ('errNameFB').style.display = 'none';
  }

  //Validate the phone field
  if (
    document
      .getElementById ('phoneFB')
      .value.search (/^(05\d{8}|9665\d{8})$/) != 0
  ) {
    valid = false;
    document.getElementById ('errPhone').innerHTML =
      'ERROR: Phone number is wrong (05xxxxxxxx or 9665xxxxxxxx) !';
    document.getElementById ('errPhone').style.display = 'inline';
  } else {
    document.getElementById ('errPhone').innerHTML = '';
    document.getElementById ('errPhone').style.display = 'none';
  }

  //Validate the email field
  if (
    document
      .getElementById ('emailFB')
      .value.search (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != 0
  ) {
    valid = false;
    document.getElementById ('errEmail').innerHTML =
      'ERROR: Provide a correct email address !';
    document.getElementById ('errEmail').style.display = 'inline';
  } else {
    document.getElementById ('errEmail').innerHTML = '';
    document.getElementById ('errEmail').style.display = 'none';
  }

  //Validate the Subject  field
  if (document.getElementById ('subject_in').value == '') {
    valid = false;
    document.getElementById ('errSubject_in').innerHTML = 'ERROR: Is Empty !';
    document.getElementById ('errSubject_in').style.display = 'inline';
  } else {
    document.getElementById ('errSubject_in').innerHTML = '';
    document.getElementById ('errSubject_in').style.display = 'none';
  }

  //Validate the errMessage  field
  if (document.getElementById ('message').value == '') {
    valid = false;
    document.getElementById ('errMessage').innerHTML = 'ERROR: Is Empty !';
    document.getElementById ('errMessage').style.display = 'inline';
  } else {
    document.getElementById ('errMessage').innerHTML = '';
    document.getElementById ('errMessage').style.display = 'none';
  }

  //Validate the Select the subject field
  if (document.getElementById ('subject').value == 'Choose Subject...') {
    valid = false;
    document.getElementById ('errSubject').innerHTML =
      'ERROR: Choose a subject !';
    document.getElementById ('errSubject').style.display = 'inline';
  } else {
    document.getElementById ('errSubject').innerHTML = '';
    document.getElementById ('errSubject').style.display = 'none';
  }

  if (valid == false) {
    return false; // don't submit the form data to the server because of any validation error(s)
  } else {
    return true; // submit the form data to the server because all data looks correct without errors
  }
}

function focusFunction (x) {
  // Focus = Changes the background color of input to yellow
  x.style.background = 'yellow';
}

function blurFunction (x) {
  // No focus = Changes the background color of input to white
  x.style.background = 'white';
}

function nodigit () {
  if (document.getElementById ('nameFB').value.search (/^([^0-9]*)$/) != 0) {
    document.getElementById ('errNameFB').innerHTML =
      'ERROR: Name Field Should Not Include Any Digit';
    document.getElementById ('errNameFB').style.display = 'inline';
  } else {
    document.getElementById ('errNameFB').innerHTML = '';
    document.getElementById ('errNameFB').style.display = 'none';
  }
}
