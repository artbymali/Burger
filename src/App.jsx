import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Components/Product";
import MyAccout from "./Pages/MyAccout/MyAccout";
import Transition from "./Components/Transition";
import PageTransition from "./Components/PageTransition";

function App() {
  const [delay, setDelay] = useState(0);
  console.log(delay, "app");
  const PageTransitionTime = 3;
  const TransitionTime = 5;

  const [heroTextDelay, setHeroTextDelay] = useState(0);
  console.log(heroTextDelay, "text");
  const PageTransitionHeroText = 3;
  const TransitionHeroText = 4;


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.009 - Math.pow(2, -11 * t)),
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <PageTransition
            onComplete={() => {
              setDelay(PageTransitionTime);
              setHeroTextDelay(PageTransitionHeroText)
            }}
          />
          <Home TimeDelay={delay} heroTextDelay={heroTextDelay}/>
        </>
      ),
    },

    {
      path: "/About",
      element: (
        <>
          <PageTransition
            onComplete={() => {
              setDelay(PageTransitionTime);
              console.log("PageTransition");
            }}
          />
          <About TimeDelay={delay}/>
        </>
      ),
    },

    {
      path: "/Product/:productId",
      element: (
        <>
          <PageTransition
            onComplete={() => {
              setDelay(PageTransitionTime);
              console.log("PageTransition");
            }}
          />
          <Product />
        </>
      ),
    },

    {
      path: "/MyAccout",
      element: (
        <>
          <PageTransition
            onComplete={() => {
              setDelay(PageTransitionTime);
              console.log("PageTransition");
            }}
          />
          <MyAccout/>
        </>
      ),
    },
  ]);

  return (
    <>
      <Transition
        onComplete={async () => {
          await setDelay(TransitionTime);
          await setHeroTextDelay(TransitionHeroText)
        }}
        Easing='Expo.easeInOut'  // Custom easing
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
