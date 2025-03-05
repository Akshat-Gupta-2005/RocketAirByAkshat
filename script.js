function page1() {
    gsap.to("#page1", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            // markers: true,
            //------------------important--------------------
            // start:"top 0%",
            // end: "top -100%",
            scrub: 1,
            pin: true,
            pinSpacing: false
        }
    })

    let tl = gsap.timeline()
    tl.from("#page1 .load1", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.in"
    })

    tl.from("#page1 svg" , {
        x:"-1000",
        opacity:0,
        duration:0.2,
        ease:"power2.out"
    } , "cool")
    tl.from("#page2 " , {
        y:"10",
        opacity:0,
        duration:0.2,
        ease:"power2.out"
    } , "cool")

    tl.from("#page1 .load2", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.in"
    })

    tl.from("#blink", {
        opacity: 0,
        duration: 0.15,
        ease: "none"
    }, "start")

    tl.from("#img", {
        y: -20,
        opacity: 0,
        duration: 0.15,
    }, "start+=0.2")

    tl.from("#blink", {
        opacity: 0,
        duration: 0.15,
        ease: "none"
    }, "start+=0.2")

    tl.to("#blink", {
        opacity: 1
    })

    let e = document.querySelector("body")
    e.addEventListener("wheel", (dets) => {
        if (dets.deltaY > 0) {
            gsap.to("nav", {
                y: -60,
                // opacity:0,
                duration: 0.5,
            })
        } else {
            gsap.to("nav", {
                y: 0,
                // opacity:1,
                duration: 0.5,
            })
        }

    })

    let getintouch = document.getElementById("getintouch")
    getintouch.addEventListener("mouseenter" , ()=>{
        gsap.to("#getintouch #up" , {
            y:-16,
            duration:0.2,
        })
        gsap.to("#getintouch #down" , {
            y:16,
            duration:0.2,
        })
        gsap.to("#getintouch #text" , {
            color:"white",
            // duration:0.1,
        })
    })
    getintouch.addEventListener("mouseleave" , ()=>{
        gsap.to("#getintouch #up" , {
            y:0,
            duration:0.2,
        })
        gsap.to("#getintouch #down" , {
            y:0,
            duration:0.2,
        })
        gsap.to("#getintouch #text" , {
            color:"black",
            // duration:0.2,
        })
    })

    let fourdots = document.getElementById("fourdots")
    fourdots.addEventListener("mouseenter",()=>{
        document.querySelectorAll("#fourdots circle").forEach(circle => {
            circle.setAttribute("fill", "#dcfe01");
        });
    })
    fourdots.addEventListener("mouseleave",()=>{
        document.querySelectorAll("#fourdots circle").forEach(circle => {
            circle.setAttribute("fill", "white");
        });
    })
}

function page2() {
    let overlay2 = document.querySelector("#overlay2")

    overlay2.addEventListener("mouseenter", () => {
        gsap.to("#cursorthis", {
            scale: 1,
            duration: 1,
        })
    })

    overlay2.addEventListener("mouseleave", () => {
        gsap.to("#cursorthis", {
            scale: 0,
            duration: 0.3,
            x: 703,
            y: 334,
        })
    })

    overlay2.addEventListener("mousemove", (dets) => {
        gsap.to("#cursorthis", {
            x: dets.pageX  - 50,
            y: dets.pageY - 600,
            duration: 0.1,
        })
    })

    overlay2.addEventListener("click", () => {
        let iframe = document.getElementById("iframe");
        let currentSrc = iframe.src;
        let cur = document.getElementById("cursorthis")
        if (currentSrc.includes("mute=1")) {
            iframe.src = currentSrc.replace("mute=1", "mute=0"); // Unmute the video
            gsap.from("#cursorthis", {
                scale: 0,
                duration: 1,
            })
            cur.innerHTML = "x"
        } else {
            iframe.src = currentSrc.replace("mute=0", "mute=1"); // Mute the video again
            gsap.from("#cursorthis", {
                scale: 0,
                duration: 1,
            })
            cur.innerHTML = "play"
        }

    })
}

page1()
page2()
