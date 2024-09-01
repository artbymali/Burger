import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Transition({onComplete, Easing}) {
  const LogoImg = useRef();
  const Loader = useRef();



  
  useEffect(() => {
    const tl = gsap.timeline();

    const isMobile = window.innerWidth <= 600;
    const isTablet = window.innerWidth > 600 && window.innerWidth <= 1024;

    const BottomLeftRadius = isMobile || isTablet ? '20%' : '80%';
    const BottomRightRadius = isMobile || isTablet ? '20%' : '80%';

    tl.to(LogoImg.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    })
      .to(LogoImg.current, {
        duration: 1.5,
      })
      .to(LogoImg.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.in',
      })
      .to(Loader.current, {
        height: 0,
        duration: 2.5,
        borderBottomLeftRadius: BottomLeftRadius,
        borderBottomRightRadius: BottomRightRadius,
        ease: Easing || 'Expo.easeInOut',
        onComplete: async ()=> {
          await onComplete(true)
        },

        onStart: async() => {
          await onComplete(true)
        }

      });
  }, []);

  return (
    <>
      <div className="Loader">
        <div ref={Loader} className="Loader-box">
          <div className="Loader-content">
            <img ref={LogoImg} src="/logo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition;
