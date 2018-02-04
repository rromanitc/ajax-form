$('#submit-form').click(function(ev){
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/romaniv01@gmail.com", 
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
				clientEmail: $('#client-email').val(),
				clientPhone: $('#client-phone').val(),
				clientMessage: $('#client-message').val(),
            },
            dataType: "json"
        }).done(function() {
            $('#form')[0].reset();
			alert("Thank you for contacting us. We will call you back soon!");
        }).fail(function(){
            alert("Error");
        });
    }
});


