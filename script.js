
var intro_man = document.getElementById('intro-man');

var fallen_man = document.getElementById('fallen-man');

var demon = document.getElementById('demon');

var content = document.getElementById('content');

var intro = document.getElementById("intro");

var projects = document.getElementById("projects");

var scream = new Audio('sounds/scream.wav');

var impact = new Audio('sounds/impact.wav');

var showCard = false;

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

  history.scrollRestoration = "manual";

  $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
  });


function playAudio() {
  scream.play();

  setTimeout(()=>{
    impact.play();
  }, 6000);
}

function startFall() {
    intro_man.src = "images/man_falling_matte.gif";
    intro_man.classList.add("drop-anim");
    setTimeout(()=>{
        content.scrollIntoView();
        animateFallenMan();
        // console.log('after')
    }, 7000);
}

intro_man.addEventListener("click", ()=>{
   startFall();
   playAudio();
  });

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
                        demon.style.display = "inline";
                        demon.classList.add('animate__animated', 'animate__rollIn');
                        projects.style.display = "grid";
                        projects.classList.add('animate__animated', 'animate__bounceIn');
                        showCard = true;
                    }, 2000);
                }, 5000);
            }, 5000);
        }, 5000);
}


function changeSource(elem, url) {
    elem.src = url;
}

// $(".fancybox").fancybox({'width':400,
//                          'height':200,
//                          'autoSize' : false});

function popAbout() {
  if (showCard) {
    Fancybox.show(
      [
        {
          src: "#about",
          type: "inline",
        },
      ],
      {
        infinite: false,
      }
    );
  }
}

fallen_man.addEventListener("click", popAbout);


function demonReset() {
  intro_man.classList.remove("drop-anim");
  intro_man.src = "images/man_swinging_matte.gif";
  intro.scrollIntoView();
  setTimeout(()=>{
    fallen_man.src = "images/man_standing1_speech.png";
    demon.style.display = "none";
    showCard = false;
}, 300);
}

demon.addEventListener("click", demonReset);


var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var project4 = document.getElementById("project4");

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