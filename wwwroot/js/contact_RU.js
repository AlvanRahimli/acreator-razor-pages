jQuery(document).ready(function ($) {

   var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Ваше сообщение было отправлено.';

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
                required    : "<span class='alert alert-warning'>Введите имя</span>", /**Please enter first name*/
                minlength   : "<span class='alert alert-warning'>Ваше имя должно содержать не менее {0} символов.</span>" /**Your name needs to be at least {0} characters*/
            },
			lname: {
                required    : "<span class='alert alert-warning'>Введите фамилию</span>", /**Please enter last name */
                minlength   : "<span class='alert alert-warning'>Ваше фамилию должно содержать не менее {0} символов.</span>"/*Your name needs to be at least {0} characters */
            },
            email: {
                required    : "<span class='alert alert-warning'>Введите электронной почты</span>",/**Please enter your email address*/
                minlength   : "<span class='alert alert-warning'>Вы ввели неверный адрес электронной почты</span>"/**You entered an invalid email address */
            },
            message: {
                required    : "<span class='alert alert-warning'>Введите сообщение</span>",/**Please enter a message */
                minlength   : "<span class='alert alert-warning'>Введите не менее {0} символов</span>"/**Enter at least {0} characters */
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