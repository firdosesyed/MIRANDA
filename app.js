

const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});


var tl = gsap.timeline()

function Animatedscroll () {
    tl.to(".container",{
        y:"150vh",
        scale:0.6,
        duration:0.1,
        scrup:true,
    
    })
    tl.to(".container",{
        y:"-10vh",
        duration:2,
        delay:1,
        scrup:true,
    
    })
    tl.to(".container",{
        y:"0vh",
        rotate:-360,
        scale:1,
        duration:1.3,
        scrup:true,
    })
}

Animatedscroll();


