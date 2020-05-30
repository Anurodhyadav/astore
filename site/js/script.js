$(function(){
    $("#navbarToggle").blur(function(event){
        var screenWidth=window.innerWidth;
        if (screenWidth<768){
            $("#navbarNavAltMarkup").collapse('hide');
        }
        //This below code is only needed when bluris not working in some browser
        //we are forcefully focusing on button so that blur will work.
    $('#navbarToggle').click(function(event){
        $(event.target).focus()
    }
    )
    });
});

