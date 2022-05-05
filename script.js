
var intro_man = document.getElementById('intro-man');

var fallen_man = document.getElementById('fallen-man');

var content = document.getElementById('content');

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

  history.scrollRestoration = "manual";

  $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
  });

function startFall() {
    intro_man.src = "images/man_falling_matte.gif";
    intro_man.classList.add("drop-anim");
    setTimeout(()=>{
        content.scrollIntoView();
        animateFallenMan();
        // console.log('after')
    }, 1000);
}

intro_man.addEventListener("click", startFall);

function animateFallenMan() {
    console.log('out');
    // if (fallen_man.src == "images/man_standing1_speech.png") {
        console.log('in');
        setTimeout(()=>{
            fallen_man.src = "images/man_standing2_speech.png";
            // console.log('1 after');
            setTimeout(()=>{
                fallen_man.src = "images/man_standing3_speech.png";
                setTimeout(()=>{
                    fallen_man.src = "images/poof.png";
                    setTimeout(()=>{
                        fallen_man.src = "images/card.png";
                    }, 2000);
                }, 5000);
            }, 5000);
        }, 5000);
}


function changeSource(elem, url) {
    elem.src = url;
}

var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var project4 = document.getElementById("project4");


// $(project1).hover(function(){
//     $(this).src = "images/thumb1_hover.png";
//     }, function(){
//     $(this).src = "images/thumb1.png";
//   });


//   function onHover()
//   {
//       $("#project1").attr('src', 'images/thumb1_hover.png');
//   }
  
//   function offHover()
//   {
//       $("#project1").attr('src', 'images/thumb1.png');
//   }

  project1.addEventListener("mouseover", function( event ) {
    $("#project1").attr('src', 'images/thumb1_hover.png');
  }, false);

  project1.addEventListener("mouseout", function( event ) {
    $("#project1").attr('src', 'images/thumb1.jpg');
  }, false);

  project2.addEventListener("mouseover", function( event ) {
    $("#project2").attr('src', 'images/thumb2_hover.png');
  }, false);

  project2.addEventListener("mouseout", function( event ) {
    $("#project2").attr('src', 'images/thumb2.jpg');
  }, false);

  project3.addEventListener("mouseover", function( event ) {
    $("#project3").attr('src', 'images/thumb3_hover.png');
  }, false);

  project3.addEventListener("mouseout", function( event ) {
    $("#project3").attr('src', 'images/thumb3.jpg');
  }, false);

  project4.addEventListener("mouseover", function( event ) {
    $("#project4").attr('src', 'images/thumb4_hover.png');
  }, false);

  project4.addEventListener("mouseout", function( event ) {
    $("#project4").attr('src', 'images/thumb4.jpg');
  }, false);

$(window).resize(function() {
    content.scrollIntoView();
  });