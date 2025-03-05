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
    tl.from("#page1 .load", {
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
}

function page2() {
    let overlay2 = document.querySelector("#overlay2")

    overlay2.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
            scale: 1,
            duration: 1,
        })
    })

    overlay2.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            scale: 0,
            duration: 0.3,
            x: 703,
            y: 357,
        })
    })

    overlay2.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
            x: dets.x - 65,
            y: dets.y - (603),
            duration: 0.1,
        })
        console.log(dets);

    })

    overlay2.addEventListener("click", () => {
        let iframe = document.getElementById("iframe");
        let currentSrc = iframe.src;
        let cur = document.getElementById("cursor")
        if (currentSrc.includes("mute=1")) {
            iframe.src = currentSrc.replace("mute=1", "mute=0"); // Unmute the video
            gsap.from("#cursor", {
                scale: 0,
                duration: 1,
            })
            cur.innerHTML = "x"
        } else {
            iframe.src = currentSrc.replace("mute=0", "mute=1"); // Mute the video again
            gsap.from("#cursor", {
                scale: 0,
                duration: 1,
            })
            cur.innerHTML = "play"
        }

    })
}

page1()
page2()
