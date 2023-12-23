var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})
var crsrBlr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsrBlr.style.left=dets.x-250+"px"
    crsrBlr.style.top=dets.y-250+"px"
})

var navBar = document.querySelectorAll("#nav h4")
navBar.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="0.2px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
})
navBar.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.8,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true, 
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutUs img ,#aboutUs-in",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    stagger:0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:1
    }
})

gsap.from("#leftQuote",{
    y:-65,
    x:-65,
    scrollTrigger:{
        trigger:"#leftQuote",
        scroller:"body",
        scrub:4,
        start:"top 65%",
        end:"top 55%"
    }
})
gsap.from("#rightQuote",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#leftQuote",
        scroller:"body",
        scrub:4,
        start:"top 65%",
        end:"top 55%"
    }
})
gsap.from("#page4 h1",{
    y:45,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        scrub:2,
        start:"top 70%",
        end:"top 65%"
    }
})