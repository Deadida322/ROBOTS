    let posY = 0;
    let counter = 0;
    
function scroll1(event, d){
            k = event.originalEvent.deltaY;
        
        if(k != 0){
          posY = Math.floor(posY + k/100);
          if (posY <0){
              posY = 0;
          }
          if (posY>16){
            posY = 16;
        }
          console.log(posY);
         
            if (posY > 2  && k > 0 ){
                    $(".brush1").css({
                        filter : 'blur(7px)',
                        transform: 'scale(1.5)',
                        opacity: '0.7'
                    });
                    $("h1").css({
                        filter : 'blur(10px)',
                        transform: 'scale(0.5)',
                        opacity: '0'

                    });
                    $("h2").css({
                        filter : 'blur(10px)',
                        transform: 'scale(0.5)',
                        opacity: '0'
                    });
                    $(".h31").css({
                        display: 'block',
                        filter : 'blur(00px)',
                        transform: 'scale(1)',
                        opacity: '100%'
                    });
                    
                    $(".arrows").css({
                        opacity: '0%'
                    });
                    $(".brush2").css({
                        opacity: '100%',
                        filter : 'blur(0px)',
                        transform: 'scale(1.5)'
                    });
                    $(".about1").css({
                        opacity: '100%',
                        filter : 'blur(0px)',
                        transform: 'scale(1)'
                    });
            }
            if (posY >= 2  && k < 0 ){
                posY = 0;
                $(".brush1").css({
                    filter : 'blur(0px)',
                    transform: 'scale(2)',
                    opacity: '100%'
                });
                $("h1").css({
                    filter : 'blur(0px)',
                    transform: 'scale(1)',
                    opacity: '100'

                });
                $("h2").css({
                    filter : 'blur(0px)',
                    transform: 'scale(1)',
                    opacity: '100'
                });
                $(".arrows").css({
                    opacity: '100%'
                });
                $(".brush2").css({
                    opacity: '0%',
                    filter : 'blur(10px)',
                    transform: 'scale(2)'
                });
                $(".brush3").css({
                    opacity: '0%',
                    filter : 'blur(10px)',
                    transform: 'scale(2)'
                });
                $(".brush4").css({
                    opacity: '0%',
                    filter : 'blur(10px)',
                    transform: 'scale(2.0)'
                });
                $(".h31").css({
                    filter : 'blur(15px)',
                    transform: 'scale(2)',
                    opacity: '00%'
                });
                $(".about1").css({
                    opacity: '0%',
                    filter : 'blur(15px)',
                    transform: 'scale(1.5)'
                });
                $(".about2").css({
                    opacity: '00%',
                    filter : 'blur(15px)',
                    transform: 'scale(1.5)'
                });

            }
            
        }


        if (posY > 7  && k > 0 ){
            $(".brush1").css({
                filter : 'blur(5px)',
                opacity: '0%'
            });
            $(".brush2").css({
                opacity: '60%',
                filter : 'blur(10px)',
                transform: 'scale(1.0)'
            });
            $(".brush3").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1.7)'
            });
            $(".h31").css({
                filter : 'blur(10px)',
                transform: 'scale(0.7)',
                opacity: '00%'
            });
            $(".about1").css({
                opacity: '0%',
                filter : 'blur(7px)',
                transform: 'scale(0.7)'
            });
            $(".about2").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1)'
            });
        }
        if (posY > 12  && k > 0 ){

            $(".brush2").css({
                opacity: '0%',
                filter : 'blur(25px)',
                transform: 'scale(0.8)'
            });
            $(".brush1").css({
                filter : 'blur(5px)',
                opacity: '0%'
            });
            $(".brush3").css({
                opacity: '100%',
                filter : 'blur(10px)',
                transform: 'scale(1.2)'
            });
            $(".brush4").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1.0)'
            });
            $(".about2").css({
                opacity: '00%',
                filter : 'blur(15px)',
                transform: 'scale(0.7)'
            });
        }
    }

$(window).on('wheel', function(event){
    scroll1(event);
});
$("img, a").on("dragstart", function(event) { event.preventDefault(); });
$('.arrows').on('click', function(event) {
    posY = 4;
     $(".brush1").css({
        filter : 'blur(5px)',
        transform: 'scale(1.5)'
    });
    $("h1").css({
        filter : 'blur(10px)',
        transform: 'scale(0.5)',
        opacity: '0'

    });
    $("h2").css({
        filter : 'blur(10px)',
        transform: 'scale(0.5)',
        opacity: '0'
    });
    $(".h31").css({
        display: 'block',
        filter : 'blur(00px)',
        transform: 'scale(1)',
        opacity: '100%'
    });
    
    $(".arrows").css({
        opacity: '0%'
    });
    $(".brush2").css({
        opacity: '100%',
        filter : 'blur(0px)',
        transform: 'scale(1.5)'
    });
    $(".about1").css({
        opacity: '100%',
        filter : 'blur(0px)',
        transform: 'scale(1)'
    });
});