import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// NOTE: StrictMode is intentionally disabled. This app relies on imperative
// GSAP ScrollSmoother / ScrollTrigger pins and a Three.js WebGL renderer that
// are not safe under StrictMode's dev-only double-mounting (it creates duplicate
// smoothers/pins, which collapses the Work pin and overlaps the sections).
createRoot(document.getElementById("root")!).render(<App />);
