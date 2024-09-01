import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText)

function Hero({ heroTextDelay }) {
  console.log("Sultan", heroTextDelay);
  const homeRef = useRef();
  const textRef = useRef(null);
  const burgerRef = useRef();
  const friesOneRef = useRef();
  const friesTwoRef = useRef();

  useEffect(() => {

      burgerRef.current.style.transformOrigin = "50% 100%";
      burgerRef.current.style.transform = "scale(0)";
      burgerRef.current.style.opacity = 0;
      friesOneRef.current.style.transform = "translateX(-80px)";
      friesTwoRef.current.style.transform = "translateX(250px)";

      const mySplit = new SplitText(textRef.current, { type: "chars"})
      let chars = mySplit.chars;

      chars.forEach((char) => {
        char.classList.add("chars");
      });

      const tl = gsap.timeline();

      tl.to(chars, {
        y: 0,
        stagger: 0.02,
        ease: "back.out",
        delay: heroTextDelay,
        duration: 0.8,
        onStart: () => {
          // Re-initialize the burger's initial state right before the animation
          gsap.set(burgerRef.current, {
            opacity: 0,
            scale: 0,
          });
        },
        onComplete: ()=> {
          gsap.to(burgerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power3.out"
          })
        }
      })

  }, []);

  return (
    <>
        <section className="Home">
          <div className="Home-container">
            <div className="Home-content">
              <div className="Middle-content">
                <div className="Middle-content-text">
                  <h1 ref={textRef} id="my-text">
                    <span id="my-text" className="first-text">
                      Delicious
                    </span>
                    <span id="my-text" className="second-text">
                      Burgers
                    </span>
                  </h1>
                </div>
                <img ref={burgerRef} src="/burger.png" alt="" id="burger" />
              </div>

              <div className="Fries-content">
                <img ref={friesOneRef} className="friesOne" src="/floating_fries_01.png" alt="" />
                <img ref={friesTwoRef} className="friesTwo" src="/floating_fries_02.png" alt="" />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default Hero;