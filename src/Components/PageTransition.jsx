import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';


function PageTransition({onComplete}) {
    const location = useLocation();
    const prevLocation = useRef(location);
    const [isNavigating, setIsNavigating] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        if (prevLocation.current.pathname !== location.pathname) {
            setIsNavigating(true);

            // Run the animation only after the component has mounted
            setTimeout(() => {
                if (loaderRef.current) {
                    const tl = gsap.timeline();

                    tl.set(loaderRef.current, {
                        opacity: 1,
                        display: 'block',
                    })
                    .to(loaderRef.current, {
                        opacity: 1, // Smooth fade in
                        duration: 2,
                        ease: 'power3.out',
                    })
                    .to(loaderRef.current, {
                        opacity: 0, // Smooth fade out
                        duration: 2,
                        ease: 'power3.out',
                        onComplete: () => {
                            gsap.set(loaderRef.current, { display: 'none' }); // Hide after fade out
                            setIsNavigating(false);
                            onComplete(true) ;
                        },
                    });
                }
            }, 0); // Short delay to ensure the element is mounted

            prevLocation.current = location;
        }
    }, [location]);

    if (!isNavigating) return null; // Don't render loader if not navigating

    return <div ref={loaderRef} className="loader"></div>; // Attach the ref to the loader div
}

export default PageTransition;
