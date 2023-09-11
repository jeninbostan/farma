new WOW().init();

$.scrollIt({
    topOffset: -50
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    
});

sr.reveal(`.sec-3,.sec-4,.sec-2,.sec-5,.about,.ex,.home,.sec-7,.sec-6,.work,.port,.port-2,.exp`, {
    interval: 200
})

$(window).on("scroll",function(){
    if($(this).scrollTop()>90){
        $(".navbar").addClass("navbar-osama");
    }
    else{
        $(".navbar").removeClass("navbar-osama");
    }
});



const menuBtn=document.querySelector('.menu-btn');
let menuOpen=false;
menuBtn.addEventListener('click',()=>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        
    }
});



// Show Or Hide Element Based on ScrollTop
$(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.top').fadeIn();
    } 
    else {
        $('.top').fadeOut();
    }
})

$('.top').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1500);

})



/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play();
        // We change the icon
        videoIcon.classList.add('fa-pause');
        videoIcon.classList.remove('fa-play');
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('fa-pause');
        videoIcon.classList.add('fa-play');

    }
}

videoButton.addEventListener('click', playPause);

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('fa-pause');
    videoIcon.classList.add('fa-play');
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);


$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});


// set up text to print, each item in array is new line
var aText = new Array("<i class='fas fa-quote-left'></i> We are a custom Web & Mobile development company based in Abu Dhabi, United Arab Emirates. Our work features innovative designs that creatively utilize cutting-edge features, solid information architecture, and intuitive websites and web solutions development. <i class='fas fa-quote-right'></i>");
    var iSpeed = 50;// time delay of print out 
    var iIndex = 0;// start printing array at this posision
    var iArrLength= aText[0].length; // the length of the text array
    var iScrollAt = 20;// start scrolling up at this many lines
    var iTextPos = 0; // initialise text position 
    var sContents = ''; // initialise contents variable 
    var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br/>';
    }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
        
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
        } else {
            setTimeout("typewriter()", iSpeed);
            }
        }

typewriter();



const counters = document.querySelectorAll('.counter');
		const speed = 500;

		counters.forEach(counter => {
			const updCount = () =>{
				const target = parseInt(counter.getAttribute('data-target'));
				const count = +counter.innerText;
				const score = parseInt(target / speed);

				if(count < target) {
					counter.innerText = count + score;
					setTimeout(updCount, 1);
				} else {
					counter.innerText = target;
				}
			};
			updCount();
		});




        $('.sec-5-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }

        });

        $('.ex-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });

        $('.sec-6-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:6,
                }
            }
        });

        $('.sec-7-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                }
            }
        });
        // const btnn=document.querySelector('.btn-3');
        // btnn.onmousemove=function(e){
        //     const x =e.pageX-btnn.offsetLeft;
        //     const y =e.pageY-btnn.offsetTop;

        //     btnn.style.setProperty('--x', x + 'px');
        //     btnn.style.setProperty('--y', y + 'px');
        // }


        function toggleTeme(){
            if(localStorage.getItem("shala-theme")!==null){
                if(localStorage.getItem("shala-theme")==="dark"){
                    $("body").addClass("dark");
                }
                else{
                    $("body").removeClass("dark");
                }
            }
            updateIcon();
        }
        
        toggleTeme();
        
        $(".toggle-theme").on("click",function(){
            $("body").toggleClass("dark");
            if($("body").hasClass("dark")){
                localStorage.setItem("shala-theme","dark");
            }
            else{
                localStorage.setItem("shala-theme","light");
            }
            updateIcon();
        })
        
        function updateIcon(){
            if($("body").hasClass("dark")){
                $(".toggle-theme i").removeClass("fa-moon");
                $(".toggle-theme i").addClass("fa-sun");
            }
            else{
                $(".toggle-theme i").removeClass("fa-sun");
                $(".toggle-theme i").addClass("fa-moon");
            }
        }
        


        $(window).on("load",function(){
            $(".preloader").fadeOut("slow");
        });
        

        // $(".nav-link").on("click",function(){
        //     $(".navbar-collapse").collapse("hide")
        // });


        "use strict";

        // ——————————————————————————————————————————————————
        // TextScramble
        // ——————————————————————————————————————————————————
        class TextScramble {
          constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
          }
        
          setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => this.resolve = resolve);
            this.queue = [];
        
            for (let i = 0; i < length; i++) {
              const from = oldText[i] || '';
              const to = newText[i] || '';
              const start = Math.floor(Math.random() * 40);
              const end = start + Math.floor(Math.random() * 40);
              this.queue.push({
                from,
                to,
                start,
                end
              });
            }
        
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
          }
        
          update() {
            let output = '';
            let complete = 0;
        
            for (let i = 0, n = this.queue.length; i < n; i++) {
              let {
                from,
                to,
                start,
                end,
                char
              } = this.queue[i];
        
              if (this.frame >= end) {
                complete++;
                output += to;
              } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                  char = this.randomChar();
                  this.queue[i].char = char;
                }
        
                output += `<span class="dud">${char}</span>`;
              } else {
                output += from;
              }
            }
        
            this.el.innerHTML = output;
        
            if (complete === this.queue.length) {
              this.resolve();
            } else {
              this.frameRequest = requestAnimationFrame(this.update);
              this.frame++;
            }
          }
        
          randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
          }
        
        } 
        

        $('.exp-owl').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:3,
                }
            }
        });
        