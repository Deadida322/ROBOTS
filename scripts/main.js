    let posY = 0;
    let counter = 0;
if (document.documentElement.clientWidth > 900){   
    let ttt = 0;
    $('.down').on('click', function(event) {
        if(ttt>4){ttt=4;}
        if(ttt<0){ttt=0;}
        console.log(ttt);
        ttt +=1;
        let hh = $('title');
        if (ttt == 1){
            posY = 4;
            $('nav').css({
                backgroundColor: 'rgba(0, 26, 255, 0.202)'
            });
            hh.text('Game');
            var stat = $('title').html();
            document.getElementById('stat').innerHTML = stat;
            $('.navcontainer').css({
                marginTop:'23vh'
            });
  
            $(".brush1").css({
                filter : 'blur(5px)',
                transform: 'scale(1.5)',
                opacity: '0.7'
            });

            $(".hflex").css({
                filter : 'blur(5px)',
                transform: 'scale(0.5)',
                opacity: '0'
            });
            $(".about2").css({
                zIndex: '0'
            });
            $(".about3").css({
                zIndex: '0'
            });
            $(".about05").css({
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
            
    }
    if (ttt == 2){
        hh.text('Team');
        posY = 8;
        stat = $('title').html();
        document.getElementById('stat').innerHTML = stat;
        $('nav').css({
            backgroundColor: 'rgba(132, 0, 255, 0.202)'
        });
        $('.navcontainer').css({
            marginTop:'49vh'
        });
        hh.text('Team');
        $(".brush1").css({
            filter : 'blur(5px)',
            opacity: '0%',
            transform: 'scale(0.95)'
        });
        $(".brush2").css({
            opacity: '60%',
            filter : 'blur(5px)',
            transform: 'scale(1.0)'
        });
        $(".brush3").css({
            opacity: '100%',
            filter : 'blur(0px)',
            transform: 'scale(1.7)'
        });
        $(".about05").css({
            display: 'block',
            filter : 'blur(7px)',
            transform: 'scale(0.5)',
            opacity: '0%'
        });
        $(".about2").css({
            opacity: '100%',
            filter : 'blur(0px)',
            transform: 'scale(1)',
            zIndex : '99999'
        });
        $(".about3").css({
            zIndex : '0'
        });

    }
        if (ttt == 3){
            posY = 16;
            hh.text('Social');
            stat = $('title').html();
            document.getElementById('stat').innerHTML = stat;
            $('nav').css({
                backgroundColor: 'rgba(255, 0, 242, 0.202)'
            });
            $('.navcontainer').css({
                marginTop:'93vh'
            });
            
            $(".brush2").css({
                opacity: '0%',
                filter : 'blur(5px)',
                transform: 'scale(0.8)'
            });
            $(".brush1").css({
                filter : 'blur(5px)',
                opacity: '0%'
            });
            $(".brush3").css({
                opacity: '100%',
                filter : 'blur(5px)',
                transform: 'scale(1.2)'
            });
            $(".brush4").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1.2)'
            });
            $(".about2").css({
                opacity: '00%',
                filter : 'blur(5px)',
                transform: 'scale(0.7)',
                zIndex : '99998'
            });
            $(".about3").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1)',
                zIndex : '99999'
            });
        }
    
    });
    $('.up').on('click', function(event) {
        ttt -=1;
        console.log(ttt);
        let hh = $('title');
        if (ttt == 0){
            posY = 0;
            
            hh.text('Main');
            var stat = $('title').html();
            document.getElementById('stat').innerHTML = stat;
            $('nav').css({
                backgroundColor: 'rgba(0, 183, 255, 0.377)'
            });
            $('.navcontainer').css({
                marginTop:'-3vh'
            });
  
            $(".brush1").css({
                filter : 'blur(0px)',
                transform: 'scale(2)',
                opacity: '1'
            });

            $(".hflex").css({
                filter : 'blur(0px)',
                transform: 'scale(1)',
                opacity: '100'
            });
            $(".about05").css({
                display: 'block',
                filter : 'blur(7px)',
                transform: 'scale(1.5)',
                opacity: '00%'
            });
            $(".about2").css({
                opacity: '00%',
                zIndex : '0'
            });
            $(".about3").css({
                opacity: '00%',
                zIndex : '0'
            });
            $(".brush3").css({
                opacity: '00%'
            });
            $(".arrows").css({
                opacity: '100%'
            });
            $(".brush2").css({
                opacity: '00%',
                filter : 'blur(7px)',
                transform: 'scale(2)'
            });
            
    }
    if (ttt == 1){
        posY = 3;
        $('.navcontainer').css({
            marginTop:'23vh'
        });
        hh.text('Game');
        stat = $('title').html();
        document.getElementById('stat').innerHTML = stat;
        $('nav').css({
            backgroundColor: 'rgba(0, 26, 255, 0.377)'
        });
        $(".brush1").css({
            filter : 'blur(0px)',
            transform: 'scale(1.5)',
            opacity: '0'
        });

        $(".about2").css({
            filter : 'blur(5px)',
            transform: 'scale(1.5)',
            opacity: '0%',
            zIndex : '0'
        });
        
        $(".brush2").css({
            opacity: '100%',
            filter : 'blur(0px)',
            transform: 'scale(1.5)'
        });
        $(".brush3").css({
            opacity: '00%',
            filter : 'blur(5px)',
            transform: 'scale(2)'
        });
        $(".about05").css({
            display: 'block',
            filter : 'blur(0px)',
            transform: 'scale(1)',
            opacity: '100%'
        });

        $(".about3").css({
            zIndex : '99998'
        });
    } 
        if (ttt == 2){
            posY = 9;
            hh.text('team');
            stat = $('title').html();
            document.getElementById('stat').innerHTML = stat;
            $('.navcontainer').css({
                marginTop:'49vh'
            });
            $('nav').css({
                backgroundColor: 'rgba(132, 0, 255, 0.202)'
            });
            
    
            $(".about3").css({
                filter : 'blur(5px)',
                transform: 'scale(1.5)',
                opacity: '0%',
                zIndex : '0'
            });
            
            $(".brush3").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1.5)'
            });
            $(".brush4").css({
                opacity: '00%',
                filter : 'blur(7px)',
                transform: 'scale(2)'
            });
            $(".about2").css({
                opacity: '100%',
                filter : 'blur(0px)',
                transform: 'scale(1)',
                zIndex : '99999'
            });
        }
        
    
    });
    


    
    function scroll1(event){
        k = event.originalEvent.deltaY;
        let hh = $('title');
        if(k != 0){
            posY = Math.floor(posY + k/100);
            if (posY <0){
                posY = 0;
            }
            if (posY>16){
                posY = 16;
            }
            let flag1 = 0;
            
            var stat = $('title').html();
            document.getElementById('stat').innerHTML = stat;
            

            if (posY > 2  && posY <= 8 && k > 0 ){
                flag1 = true;
            }
            
            if (flag1){
                
                ttt = 1;
                console.log(ttt);
                console.log(stat);
                
                hh.text('Game');
                $('.navcontainer').css({
                    marginTop:'23vh'
                });

                $('nav').css({
                    backgroundColor: 'rgba(0, 26, 255, 0.202)'
                });
                
                $(".brush1").css({
                    filter : 'blur(5px)',
                    transform: 'scale(1.5)',
                    opacity: '0.7'
                });
    
                $(".hflex").css({
                    filter : 'blur(5px)',
                    transform: 'scale(0.5)',
                    opacity: '0'
                });
                $(".about05").css({
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
                $(".brush3").css({
                    opacity: '00%',
                });
                $(".brush4").css({
                    opacity: '00%',
                });
                $(".about2").css({
                    opacity: '00%',
                });
                $(".about3").css({
                    opacity: '00%',
                });
                
            }
            if (k < 0 ){
                $('nav').css({
                    backgroundColor: 'rgba(0, 183, 255, 0.377)'
                });
                ttt = 0;
                $('.navcontainer').css({
                    marginTop:'-3vh'
                });
                posY = 0;
                hh.text('Main');
                $(".brush1").css({
                    filter : 'blur(0px)',
                    transform: 'scale(2)',
                    opacity: '100%'
                });
                $(".hflex").css({
                    filter : 'blur(0px)',
                    transform: 'scale(1)',
                    opacity: '100%'
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
                    filter : 'blur(5px)',
                    transform: 'scale(2)'
                });
                $(".brush4").css({
                    opacity: '0%',
                    filter : 'blur(5px)',
                    transform: 'scale(2.0)'
                });
                $(".about05").css({
                    display: 'block',
                    filter : 'blur(7px)',
                    transform: 'scale(1.5)',
                    opacity: '0%'
                });
                $(".about2").css({
                    opacity: '00%',
                    filter : 'blur(5px)',
                    transform: 'scale(1.5)',
                    zIndex : '0'
                });
                $(".about3").css({
                    opacity: '00%',
                    filter : 'blur(5px)',
                    transform: 'scale(1.7)',
                    zIndex : '0'
                });
                
            }
                
            }


            if (posY > 8  && k > 0 ){
                ttt = 2;
                
                $('.navcontainer').css({
                    marginTop:'49vh'
                });
                hh.text('Team');
                $(".brush1").css({
                    filter : 'blur(5px)',
                    opacity: '0%',
                    transform: 'scale(0.95)'
                });
                $(".brush2").css({
                    opacity: '60%',
                    filter : 'blur(5px)',
                    transform: 'scale(1.0)'
                });
                $(".brush3").css({
                    opacity: '100%',
                    filter : 'blur(0px)',
                    transform: 'scale(1.7)'
                });
                $(".brush4").css({
                    opacity: '00%',
                });
                $(".about3").css({
                    opacity: '00%',
                    zIndex : '00'
                });
                $(".hflex").css({
                    opacity: '00%',
                });
                
                $(".about05").css({
                    display: 'block',
                    filter : 'blur(7px)',
                    transform: 'scale(0.5)',
                    opacity: '0%'
                });
                $(".about2").css({
                    opacity: '100%',
                    filter : 'blur(0px)',
                    transform: 'scale(1)',
                    zIndex : '9999999'
                });
                $(".arrows").css({
                    opacity: '0%',
                    transform: 'scale(0.1)',
                });
                $('nav').css({
                    backgroundColor: 'rgba(132, 0, 255, 0.202)'
                });

            }
            if ((posY >= 14)  && (k > 0 )){
                ttt = 3;
                $('nav').css({
                    backgroundColor: 'rgba(255, 0, 242, 0.202)'
                });
                $('.navcontainer').css({
                    marginTop:'93vh'
                });
                hh.text('Social');
                $(".brush2").css({
                    opacity: '0%',
                    filter : 'blur(5px)',
                    transform: 'scale(0.8)'
                });
                $(".brush1").css({
                    filter : 'blur(5px)',
                    opacity: '0%'
                });
                $(".brush3").css({
                    opacity: '100%',
                    filter : 'blur(5px)',
                    transform: 'scale(1.2)'
                });
                $(".brush4").css({
                    opacity: '100%',
                    filter : 'blur(0px)',
                    transform: 'scale(1.2)'
                });
                $(".about2").css({
                    opacity: '00%',
                    filter : 'blur(5px)',
                    transform: 'scale(0.7)',
                    zIndex : '00'
                });
                $(".about3").css({
                    opacity: '100%',
                    filter : 'blur(0px)',
                    transform: 'scale(1)',
                    zIndex : '999900'
                });
                
            }
        }

    $(window).on('wheel', function(event){
        scroll1(event);
        console.log(posY, k);
    });
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
    $('.arrows').on('click', function(event) {
        posY = 3;
        let hh = $('title');
        hh.text('Game');
        var stat = $('title').html();
        document.getElementById('stat').innerHTML = stat;
        
        $('nav').css({
            backgroundColor: 'rgba(0, 26, 255, 0.202)'
        });
        $('.navcontainer').css({
            marginTop:'23vh'
        });
        $(".brush1").css({
            filter : 'blur(5px)',
            transform: 'scale(1.5)'
        });
        $(".hflex").css({
            filter : 'blur(5px)',
            transform: 'scale(0.5)',
            opacity: '00%'
        });
                
        $(".arrows").css({
            opacity: '0%',
            transform: 'scale(0.1)',
        });
        $(".brush2").css({
            opacity: '100%',
            filter : 'blur(0px)',
            transform: 'scale(1.5)'
        });
        $(".about05").css({
            display: 'block',
            filter : 'blur(00px)',
            transform: 'scale(1)',
            opacity: '100%'
        });
    });
}
if (document.documentElement.clientWidth <= 900){ 
    let k = 0;
    $('.arrows').on('click', function(event) {
        console.log(k);
        k +=1;
        if (k == 1){
        $(".brush1").css({
            transform: 'scale(1.1)',
            filter : 'blur(0px)',
        });
        $(".hflex").css({
            transform: 'scale(0.5)',
            opacity: '0%',
            filter : 'blur(0.5px)'
        });
        $(".about05").css({
            display: 'block',
            filter : 'blur(00px)',
            transform: 'scale(1)',
            opacity: '100%'
        });
        
        $(".brush2").css({
            opacity: '100%',
            transform: 'scale(1.3)',
            filter : 'blur(00px)',
        });
        
    }
    if (k == 2){
        $(".brush1").css({
            opacity: '0%',
            transform: 'scale(0.95)'
        });
        $(".brush2").css({
            opacity: '80%',
            filter : 'blur(0px)',
            transform: 'scale(1.0)'
        });
        $(".brush3").css({
            opacity: '100%',
            filter : 'blur(00px)',
            transform: 'scale(1.2)'
        });
        $(".about05").css({
            display: 'block',
            filter : 'blur(00px)',
            transform: 'scale(0.5)',
            opacity: '00%'
        });
        $(".about2").css({
            opacity: '100%',
            filter : 'blur(0px)',
            transform: 'scale(1)'
        });
    }
        if (k == 3){

            $(".brush2").css({
                opacity: '0%',
                transform: 'scale(0.8)'
            });
            $(".brush1").css({
                opacity: '0%'
            });
            $(".brush3").css({
                opacity: '100%',
                transform: 'scale(1.0)',
                filter : 'blur(0px)',
            });
            $(".brush4").css({
                opacity: '100%',
                filter : 'blur(00px)',
                transform: 'scale(1.0)'
            });
            $(".about2").css({
                opacity: '00%',
                transform: 'scale(0.7)'
            });
            $(".about3").css({
                opacity: '100%',
                transform: 'scale(1)',
                filter : 'blur(00px)',
                zIndex : '33000'
            });
            $(".arrows").css({
                zIndex : '999999'
            });
            $(".arrow").attr("src", "assets/svg/ArrowR.png");
            $(".arrow2").attr("src", "assets/svg/ArrowR.png");
        }
        if (k == 4){
            k = 0;
            $(".brush1").css({
                transform: 'scale(1.7)',
                filter : 'blur(00px)',
                opacity: '100%'
            });
            $(".hflex").css({
                transform: 'scale(1)',
                filter : 'blur(00px)',
                opacity: '100%'
            });
            $(".brush2").css({
                opacity: '0%',
                transform: 'scale(1.7)'
            });
            $(".brush3").css({
                opacity: '0%',
                filter : 'blur(0px)',
                transform: 'scale(1.7)'
            });
            $(".brush4").css({
                opacity: '0%',
                filter : 'blur(0px)',
                transform: 'scale(1.7)'
            });
            $(".about05").css({
                display: 'block',
                filter : 'blur(00px)',
                transform: 'scale(1.5)',
                opacity: '0%'
            });
            $(".about2").css({
                opacity: '00%',
                transform: 'scale(1.3)'
            });
            $(".about3").css({
                opacity: '00%',
                transform: 'scale(1.5)',
                zIndex : '0'
            });$(".arrows").css({
                zIndex : '99999'
            });
            $(".arrow").attr("src", "assets/svg/Arrow.png");
            $(".arrow2").attr("src", "assets/svg/Arrow.png");
        }
    
    
    });
    
}