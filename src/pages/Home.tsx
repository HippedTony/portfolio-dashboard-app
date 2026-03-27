import toast, { Toaster } from "react-hot-toast";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Home;
