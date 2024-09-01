import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import { MdOutlinePersonOutline } from "react-icons/md";

function Header({ delay }) {
  const headerRef = useRef();
  const menuRef = useRef();
  const navRef = useRef();
  const menuBtnRef = useRef();
  const hamburgerRef = useRef();
  const originalMenuRef = useRef();
  const overlayRef = useRef();
  const bottomBarRef = useRef();

  const [lastScrollTop, setLastScrollTop] = useState(0);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const menuOpen = document.querySelector('.menu-content')?.classList.contains('menu--open');

      if (scrollTop > lastScrollTop && !menuOpen) {
        if (scrollTop >= 80) {
          headerRef.current.classList.add('animateOut');
        }
      } else {
        headerRef.current.classList.remove('animateOut');
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {

      const tl = gsap.timeline();

    // Initial header state
    tl.set(headerRef.current, { marginTop: "-110px", opacity: 0 });

    // Animate the header to its final position
    tl.to(headerRef.current, {
      marginTop: 0,
      opacity: 1,
      delay: delay, // Assuming this delay is related to a loader
      duration: 0.5,
      ease: "power3.out",
    });

    console.log("Alie", delay);
    }
  , [delay]);

  useEffect(()=> {
    const hamburger = hamburgerRef.current;
    const menu = menuRef.current;
    const nav = navRef.current;
    const menuBtn = menuBtnRef.current;
    const originalMenu = originalMenuRef.current;
    const overlay = overlayRef.current;
    

    const handleHamburgerClick = () => {
      menu.classList.toggle("menu--open");
      hamburger.classList.toggle("hamburger--open");
      overlay.classList.toggle("overlay--open");
      originalMenu.classList.toggle("TogMenu");

      if (menu.classList.contains("menu--open")) {
        nav.style.display = "block";
        menuBtn.style.display = "block";

        document.body.style.overflow = "hidden"

        if(!bottomBarRef.current) {
          const bottomBar = document.createElement("div");
          bottomBar.classList.add("bottomBar");
          bottomBarRef.current = bottomBar;
          bottomBar.appendChild(nav);
          bottomBar.appendChild(menuBtn);
          menu.appendChild(bottomBar)
        } else {
          bottomBarRef.current.style.display = "flex"
        }

      } else {
        nav.style.display = "none";
        menuBtn.style.display = "none";
        
        document.body.style.overflow = ""; 

        if(bottomBarRef.current) {
          bottomBarRef.current.style.display = "none"
        }
      }
    };
    
    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
    };

  }, [])

  return (
    <>
    <div className="overlay" ref={overlayRef}></div>
      <header id="HeaderId" ref={headerRef}>
        <menu ref={originalMenuRef}>
          <div className="menu-content" ref={menuRef}>
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
            </div>
            <nav ref={navRef}>
              <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/About">ABOUT</NavLink></li>
                <li><NavLink to="/blog">BLOG</NavLink></li>
                <li><NavLink to="/shop">SHOP</NavLink></li>
              </ul>
            </nav>
            <div className="menu-inner-content" ref={menuBtnRef}>
              <NavLink to="/MyAccout">
                <i>
                  <MdOutlinePersonOutline  className='PersonIcon'/>
                </i>
              </NavLink>
              <div className="menu-btn" >
                <button>VIEW FULL MENU</button>
              </div>
            </div>
          </div>
          
          <div className="hamburger" ref={hamburgerRef}>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </menu>
      </header>
    </>
  );
}

export default Header;
