    let posY = 0;
    let counter = 0;
    
function scroll1(event){
        if(event.originalEvent.deltaY != 0){
          posY = Math.floor(posY + event.originalEvent.deltaY/100);
          if (posY <0){
              posY = 0;
          }
          if (posY>16){
            posY = 16;
        }
          console.log(posY);
            if (posY > 3  && event.originalEvent.deltaY > 0 ){
                    $(".brush1").css({
                        filter : 'blur(10px)',
                        transform: 'scale(1.5)'
                    });
                    $("h1").css({
                        filter : 'blur(20px)',
                        transform: 'scale(0.5)',
                        opacity: '0'

                    });
                    $("h2").css({
                        filter : 'blur(20px)',
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
                        transform: 'scale(2)'
                    });
                    $(".about1").css({
                        opacity: '100%',
                        filter : 'blur(0px)',
                        transform: 'scale(1)'
                    });
            }
            if (posY > 3  && event.originalEvent.deltaY < 0 ){
                posY = 0;
                $(".brush1").css({
                    filter : 'blur(0px)',
                    transform: 'scale(2)',
                    opacity: '30000%'
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
                    filter : 'blur(200px)',
                    transform: 'scale(2)'
                });
                $(".brush3").css({
                    opacity: '0%',
                    filter : 'blur(20px)',
                    transform: 'scale(2)'
                });
                $(".brush4").css({
                    opacity: '0%',
                    filter : 'blur(20px)',
                    transform: 'scale(2.0)'
                });
                $(".h31").css({
                    filter : 'blur(40px)',
                    transform: 'scale(2)',
                    opacity: '00%'
                });
                $(".about1").css({
                    opacity: '0%',
                    filter : 'blur(30px)',
                    transform: 'scale(1.5)'
                });
                $(".about2").css({
                    opacity: '00%',
                    filter : 'blur(20px)',
                    transform: 'scale(1.5)'
                });

            }
            
        }


        if (posY > 7  && event.originalEvent.deltaY > 0 ){
            $(".brush1").css({
                filter : 'blur(10px)',
                opacity: '0%'
            });
            $(".brush2").css({
                opacity: '100%',
                filter : 'blur(10px)',
                transform: 'scale(1.5)'
            });
            $(".brush3").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1.7)'
            });
            $(".h31").css({
                filter : 'blur(10px)',
                transform: 'scale(0.5)',
                opacity: '00%'
            });
            $(".about1").css({
                opacity: '0%',
                filter : 'blur(10px)',
                transform: 'scale(0.5)'
            });
            $(".about2").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1)'
            });
        }
        if (posY > 12  && event.originalEvent.deltaY > 0 ){

            $(".brush2").css({
                opacity: '100%',
                filter : 'blur(10px)',
                transform: 'scale(1)'
            });
            $(".brush1").css({
                filter : 'blur(10px)',
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
                filter : 'blur(10px)',
                transform: 'scale(0.5)'
            });
        }
    }

$(window).on('wheel', function(event){
    scroll1(event);
});