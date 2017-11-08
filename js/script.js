

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
	document.getElementById("mask").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mask").style.display = "none";
}

function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " w3-green";
    } else {
        x.className = x.className.replace(" show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-green", "");
    }
}

function myAccFunc1() {
    var x = document.getElementById("demoAcc1");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        x.previousElementSibling.className += " w3-green";
    } else {
        x.className = x.className.replace(" show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-green", "");
    }
}

$('body').click(function(e){
    if(!$(e.target).parents('#mySidenav').length && !$(e.target).hasClass('burger') && $('#mySidenav').is(':visible')){
        closeNav();
    }
});

// Smooth scroll
$(document).ready(function () {
    // check for hash when page has loaded
    if (getHash() != null) {
        checkForScrolling();
    }
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
		history.pushState({}, '', this.href);
        checkForScrolling();
        
    });
});

// return hash if so or null if hash is empty
function getHash() {
    var hash = window.location.hash;
    if (hash != '') {
        return hash;
    } else {
        return null;
    }
}

// this function handles your scrolling
function checkForScrolling() {
    // first get your element by attribute selector
    var elem = $(getHash());

    // cheeck if element exists
    if (elem.length > 0) {
        $('html, body').stop().animate({
            scrollTop: elem.offset().top
        }, 1000);
    }
}


/*jQuery(document).ready(function(){
    jQuery("#home").submit(function() {
            var form_data = jQuery(this).serialize();
            jQuery.ajax({
            type: "POST",
            url: "http://45.79.186.167//platform/api/v1/who-needs-care/",
            data: form_data,
           success: function(){
        		document.getElementById("success").style.display = "block";}
				});
				$( '#newsletterform' ).each(function(){
					this.reset();
				});
      return false;

	});

    jQuery("#contavt-us").submit(function() {
            var form_data = jQuery(this).serialize();
            jQuery.ajax({
            type: "POST",
            url: "http://45.79.186.167//platform/api/v1/who-needs-care/",
            data: form_data,
            success: function(){
        		document.getElementById("success").style.display = "block";}
				});
      return false;

	});
});*/