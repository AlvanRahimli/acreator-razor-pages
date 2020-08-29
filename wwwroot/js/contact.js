jQuery(document).ready(function ($) {

   var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Your message was sent.';

    // Validate form on keyup and submit
    $contactform.validate({
        rules: {
            fname: {
                required    : true,
                minlength   : 1
            },
			lname: {
                required    : true,
                minlength   : 1
            },
            email: {
                required    : true,
                email       : true
            },
            message: {
                required    : true,
                minlength   : 1
            }
        },
        messages: {
            fname: {
                required    : "<span class='alert alert-warning'>Please enter first name</span>",
                minlength   : "<span class='alert alert-warning'>Your name needs to be at least {0} characters</span>"
            },
			lname: {
                required    : "<span class='alert alert-warning'>Please enter last name</span>",
                minlength   : "<span class='alert alert-warning'>Your name needs to be at least {0} characters</span>"
            },
            email: {
                required    : "<span class='alert alert-warning'>Please enter your email address</span>",
                minlength   : "<span class='alert alert-warning'>You entered an invalid email address</span>"
            },
            message: {
                required    : "<span class='alert alert-warning'>Please enter a message</span>",
                minlength   : "<span class='alert alert-warning'>Enter at least {0} characters</span>"
            }
        },
    });

    // Send the email
    $contactform.submit(function(){
        if ($contactform.valid()){
            $.ajax({
                type: "POST",
                url: "php/contact.php",
                data: $(this).serialize(),
                success: function(msg) {
                    if (msg == 'SEND') {
                        response = '<div class="alert alert-success">'+ $success +'</div>';
                    }
                    else {
                        response = '<div class="alert alert-success">'+ msg +'</div>';
                    }
                    $(".alert-warning,.alert-success").remove();
                    $contactform.prepend(response);
                }
             });
            return false;
        }
        return false;
    });

});