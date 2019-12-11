
$('#getAdresses').click(function(){
    var emailRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/igm;
    var message = $('#messageBox').val().replace(/(\r\n|\n|\r)/gm, ' ');
    message = message.replace(/[<>]/g, ' ');
    message = message.replace(',', ' ');
    var partials = message.split(" ");
    
    $.each(partials, function( index, value ) {
        if(emailRegEx.test(value)){
            $('#emailsBox').append(value);
            $('#emailsBox').append('\n');
        }
        else
        {
            var br = value.split("\n");
            $.each(br, function( index, value ) {
                if (emailRegEx.test(value)){
                    $('#emailsBox').append(value);
                    $('#emailsBox').append('\n');
                }
            });
        }
    });

    //removing duplicate

    var allEmails = $('#emailsBox').val().split('\n');
    allEmails = allEmails.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });

    $('#emailsBox').text("");
    $.each(allEmails, function( index, value ) {
        $('#emailsBox').append(value);
        $('#emailsBox').append('\n');
      });
});
