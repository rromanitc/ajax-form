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
            
			alert("Thank you for contacting us. We will call you back soon!");
			$('#my-form')[0].reset();
        }).fail(function(){
            alert("Error");
        });
    }
});


