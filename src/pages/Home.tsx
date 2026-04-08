import toast, { Toaster } from "react-hot-toast";
import About from "@/features/portfolio/sections/About";
import Hero from "@/features/portfolio/sections/Hero";
import Projects from "@/features/portfolio/sections/Projects";
import { useEffect, useRef } from "react";

function Home() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const navEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    const isReload = navEntries[0]?.type === "reload";

    if (isReload) {
      sessionStorage.removeItem("portfolio-toast");
    }

    if (!sessionStorage.getItem("portfolio-toast")) {
      toast("🚧 This portfolio is a work in progress. Updates coming soon!", {
        duration: 5000,
        style: {
          width: "300px",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "18px",
          textAlign: "center",
        },
      });
      sessionStorage.setItem("portfolio-toast", "true");
    }
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default Home;
