$(document).ready(function(){
    $(".design-image").click(function(){
      $(".design-image").hide(500);
      $(".design").toggle(500);
      $(".design").show(500);
    })
    $(".design").click(function(){
      $(".design").hide(500);
      $(".design-image").toggle(500);
      $(".design-image").show(500);
    });
  });
$(document).ready(function(){
    $(".development-image").click(function(){
      $(".development-image").hide(500);
      $(".development").toggle(500);
      $(".development").show(500);
    })
    $(".development").click(function(){
      $(".development").hide(500);
      $(".development-image").toggle(500);
      $(".development-image").show(500);
    });
});
$(document).ready(function(){
    $(".product-image").click(function(){
      $(".product-image").hide(500);
      $(".product").toggle(500);
      $(".product").show(500);
    })
    $(".product").click(function(){
      $(".product").hide(500);
      $(".product-image").toggle(500);
      $(".product-image").show(500);
    });
});
// function validate(){
//     var email = document.getElementById ("email");
//     if(email.value(). == "")
// }
$(document).ready(function(){
    $("form#submission").on('submit',function(event){
        event.preventDefault();
        let name = $("input:first").val();
        let email = $("input#mail").val();
        let message = $("textarea#message").val();

        if ($("input:first").val() && $("input#mail").val()){
            alert ( name + ",we have received your message. Thank you for reaching out to us.");
        }
        else {
            alert("insert valid information");
        }
        event.preventDefault();
      })
    });

