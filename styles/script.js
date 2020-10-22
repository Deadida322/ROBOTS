$(window).on('wheel', function(event){

    // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
    if(event.originalEvent.deltaY < 0){
      console.log("up")
    }
    else {
        console.log("down")
    }
  });