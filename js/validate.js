/*** HOME VALIDATION ***/
$("#home").submit(function (e) {
    var yourNameEl = $('#yourName');
    var theirNameEl = $('#their-name input');
	var checkbox = $('.form-checkbox input');
    var zipEl = $('#zip');
    var emailEl = $('#comm-email input');
    var phoneEl = $('#comm-phone input');
			
    var yourName = yourNameEl.val().trim();
    var theirName = theirNameEl.val().trim();
    var zip = zipEl.val().trim();
    var email = emailEl.val().trim();
    var phone = phoneEl.val().trim();

    var isEmailCheckboxChecked = $('#form-mail input').is(':checked');
    var isPhoneCheckboxChecked = $('#form-phone input').is(':checked');
    var isTheirCheckboxChecked = $('#radio-2').is(':checked');

    var flag = false;

    if (!yourName) {
      flag = true;
      yourNameEl.addClass('error');
    }
    if (isTheirCheckboxChecked && !theirName) {
		flag = true;
      	theirNameEl.addClass('error');
    }
	 if (isEmailCheckboxChecked && !email) {
		flag = true;
      	emailEl.addClass('error');
    }
	 if (isPhoneCheckboxChecked && !phone) {
		flag = true;
		 phoneEl.addClass('error');
    }
	 if (!isEmailCheckboxChecked && !isPhoneCheckboxChecked) {
		flag = true;
      	checkbox.addClass('error');
    }
	 if (!zip) {
		flag = true;
      	zipEl.addClass('error');
    }
    if (flag) {
      $('#errorMessage').css('display', 'block');
      e.preventDefault();
    }
  });
  $('#home input').change(function () {
    $('#home .form-row input').each(function () {
      $(this).removeClass('error');
      $('#errorMessage').css('display', 'none');
    });
  });


/*** cONTACT US VALIDATION ***/
$("#contact-us").submit(function (e) {
    var yourNameEl = $('#yourName');
    var theirNameEl = $('#their-name input');
	var checkbox = $('.form-checkbox input');
    var zipEl = $('#zip');
    var emailEl = $('#comm-email input');
    var phoneEl = $('#comm-phone input');
			
    var yourName = yourNameEl.val().trim();
    var theirName = theirNameEl.val().trim();
    var zip = zipEl.val().trim();
    var email = emailEl.val().trim();
    var phone = phoneEl.val().trim();

    var isEmailCheckboxChecked = $('#form-mail input').is(':checked');
    var isPhoneCheckboxChecked = $('#form-phone input').is(':checked');
    var isTheirCheckboxChecked = $('#radio-2').is(':checked');

    var flag = false;

    if (!yourName) {
      flag = true;
      yourNameEl.addClass('error');
    }
    if (isTheirCheckboxChecked && !theirName) {
		flag = true;
      	theirNameEl.addClass('error');
    }
	 if (isEmailCheckboxChecked && !email) {
		flag = true;
      	emailEl.addClass('error');
    }
	 if (isPhoneCheckboxChecked && !phone) {
		flag = true;
		 phoneEl.addClass('error');
    }
	 if (!isEmailCheckboxChecked && !isPhoneCheckboxChecked) {
		flag = true;
      	checkbox.addClass('error');
    }
	 if (!zip) {
		flag = true;
      	zipEl.addClass('error');
    }
    if (flag) {
      $('#errorMessage').css('display', 'block');
      e.preventDefault();
    }
  });
  $('#contact-us input').change(function () {
    $('#contact-us .form-row input').each(function () {
      $(this).removeClass('error');
      $('#errorMessage').css('display', 'none');
    });
  });
  
/**** CAREGIVERS VALIDATION ****/
$("#caregivers").submit(function (e) {
    var name = $('#name');
    var email = $('#email');
	var phone = $('#phone');
    var zip = $('#zip');
   
			
    var nameField = name.val().trim();
    var emailField = email.val().trim();
    var phoneField = phone.val().trim();
    var zipField = zip.val().trim();

    var flag = false;

    if (!nameField) {
      flag = true;
      name.addClass('error');
    }
    if (!emailField) {
		flag = true;
      	email.addClass('error');
    }
	 if (!phoneField) {
		flag = true;
      	phone.addClass('error');
    }
	 if (!zipField) {
		flag = true;
		zip.addClass('error');
    }
    if (flag) {
      $('#errorMessage').css('display', 'block');
      e.preventDefault();
    }
  });
  $('#caregivers input').change(function () {
    $('#caregivers input').each(function () {
      $(this).removeClass('error');
      $('#errorMessage').css('display', 'none');
    });
  });
