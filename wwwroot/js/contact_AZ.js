jQuery(document).ready(function ($) {

   var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Mesajınız göndərildi..';

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
                required    : "<span class='alert alert-warning'>Adınızı daxil edin</span>",
                minlength   : "<span class='alert alert-warning'>Adınız ən azı {0} simvoldan ibarət olmalıdır</span>"
            },
			lname: {
                required    : "<span class='alert alert-warning'>Soyadınızı daxil edin</span>",
                minlength   : "<span class='alert alert-warning'>Soyadınız ən azı {0} simvoldan ibarət olmalıdır</span>"
            },
            email: {
                required    : "<span class='alert alert-warning'>E-poçt ünvanınızı daxil edin</span>",
                minlength   : "<span class='alert alert-warning'>Etibarsız e-poçt ünvanı daxil etdiniz</span>"
            },
            message: {
                required    : "<span class='alert alert-warning'>Mesaj daxil edin</span>",
                minlength   : "<span class='alert alert-warning'>Ən azı {0} simvol daxil edin</span>"
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