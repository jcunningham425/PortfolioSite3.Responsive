(function(){
    Parse.initialize("Ub9J5DSNrrd4FKS7swTEi4KKzV7s28ysRGpTJ5UY", "O8ipkVrRgDLbP0sJ25wP2YqbnplDXOvsGaOL7GVH");
    $(document).ready(function() {

        setTimeout(function(){
            $(".name").addClass("animated fadeInDown");
            $(".name").attr("hidden", false);
        }, 1000);


        $('.submit').click(function() {
            var contactInfo={
                name: $('#name').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };
            console.log(contactInfo);
            console.log(contactInfo.phone);

            Parse.Cloud.run('sendEmail', contactInfo, {
                success: function(result) {
                    console.log(result);
                    $('#thankyoubox').attr("hidden", false);
                },
                error: function(error) {
                    console.log(error);
                }
            });
            $('#name').val("");
            $('#phone').val("");
            $('#email').val("");
            $('#message').val("");

        });
    });
}());