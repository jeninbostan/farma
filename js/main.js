new WOW().init();

$.scrollIt({
    topOffset: -50
});


// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(``, {
//     interval: 200
// })

const bg=document.querySelector('.bg')
for(var i=0;i<=50;i++){
    const blocks=document.createElement('div');
    blocks.classList.add('block');
    bg.appendChild(blocks);
}
function animateBlocks(){
    anime({
        targets:'.block',
        translateX:function(){
            return anime.random(-600,600);
        },
        translateY:function(){
            return anime.random(-500,500);
        },
        scale:function(){
            return anime.random(1,5);
        },
        easing:'linear',
        duration:3500,
        delay:anime.stagger(10),
        complete:animateBlocks,
    })
}

animateBlocks();


$(window).on("scroll",function(){
    if($(this).scrollTop()>90){
        $(".navbar").addClass("navbar-osama");
    }
    else{
        $(".navbar").removeClass("navbar-osama");
    }
});


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


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    
});

sr.reveal(`.super-bg-serv,.info,.sub-serv,.item-box-serv,.sec-3,.more-serv,.item-box-more-serv`, {
    interval: 200
})