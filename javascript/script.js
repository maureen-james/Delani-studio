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
    // $("p").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "grey");
    //   });
    $(document).ready(function(){
        $("#work1").mouseover(function(){
          $("#cover1").show();
        }).mouseout(function(){
          $("#cover1").hide();
        });
    });  
    $(document).ready(function(){
        $("#work2").mouseover(function(){
          $("#cover2").show();
        }).mouseout(function(){
          $("#cover2").hide();
        });
    });
    $(document).ready(function(){
        $("#work3").mouseover(function(){
          $("#cover3").show();
        }).mouseout(function(){
          $("#cover3").hide();
        });
    });    $(document).ready(function(){
        $("#work4").mouseover(function(){
          $("#cover4").show();
        }).mouseout(function(){
          $("#cover4").hide();
        });
    });    $(document).ready(function(){
        $("#work5").mouseover(function(){
          $("#cover5").show();
        }).mouseout(function(){
          $("#cover5").hide();
        });
    });    $(document).ready(function(){
        $("#work6").mouseover(function(){
          $("#cover6").show();
        }).mouseout(function(){
          $("#cover6").hide();
        });
    });    $(document).ready(function(){
        $("#work7").mouseover(function(){
          $("#cover7").show();
        }).mouseout(function(){
          $("#cover7").hide();
        });
    });    $(document).ready(function(){
        $("#work8").mouseover(function(){
          $("#cover8").show();
        }).mouseout(function(){
          $("#cover8").hide();
        });
    });      

