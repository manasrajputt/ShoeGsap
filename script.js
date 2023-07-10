// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl=gsap.timeline();

tl.from("#nav #nav-in1",{
    y:"-100%",
    opacity:0,
    duration:.75,
})

tl.from("#nav-in2",{
    y:"-100%",
    opacity:0,
    duration:.75,
})

tl.from("#nav2",{
    opacity:0,
    scale:.3,
    duration:.75,
})

tl.from("#nav3 i",{
    y:"-100%",
    opacity:0,
    duration:.75,
    stagger:.25
})

tl.from("#nav3-in1",{
    y:-100,
    opacity:0,
    duration:.75,
    delay:-.7
})
tl.from("#nav3-in2 ",{
    y:-100,
    opacity:0,
    duration:.75,
    delay:-.6
})

tl.from("#c1 h1",{
    x:-200,
    opacity:0,
    durattion:1,
})

tl.from("#c1 p",{
    x:-200,
    opacity:0,
    durattion:1,
},"-=.2")

tl.from("#c1 button",{
    scale:.3,
    opacity:0,
    durattion:1,
})

tl.from("#c2 img",{
    x:"100%",
    opacity:0,
    durattion:1,
})

tl.from("#c2 h1",{
    opacity:0,
    scale:.1,
    duration:1.5,
})

tl.from("#bottom div",{
    scale:.3,
    opacity:0,
    duration:1,
    stagger:.33
},"-=2")

gsap.from("#page2 #div2 h2",{
    x:"200%",
    // scale:
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page2 #div2 h2",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page2 #div2 p",{
    // x:"200%",
    scale:.3,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page2 #div2 p",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page2 #div2 button",{
    x:"200%",
    // scale:.3,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page2 #div2 button",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 95%",
        scrub:3
    }
},"-=.2")

gsap.from("#page2 #div1",{
    x:"-200%",
    // scale:
    opcaity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page2 #div1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2
    }
})

gsap.from("#page3 h1",{
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page3 img",{
    // y:-50,
    scale:.3,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 35%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page3 #p3",{
    x:"200%",
    // scale:.3,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 50%",
        scrub:2
    }
})

gsap.from("#page4 h3",{
    y:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h3",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page4 #divp",{
    y:10,
    scale:.3,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 #divp",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page4 #card1",{
    scale:.3,
    opacity:0,
    // duration:1,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page4 #card1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page5 h1",{
    y:100,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page6 h1",{
    x:-500,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page6 h1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page6 button",{
    x:500,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page6 button",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page7 h1",{
    scale:.4,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page7 h1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})


