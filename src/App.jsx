import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div className="bg-[#00040F]">
        <Home />
      </div>
    </>
  );
}

export default App;
