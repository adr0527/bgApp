import { useState } from "react";
import "./index.css";

function App() {
  const tailwindColors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'purple',
    'pink',
    'orange',
    'teal',
    'cyan',
  ];

  const [bgColor, setBgColor] = useState("gray");

  const setBackgroundColor = (color) => { 
    if (color !== "random") { 
      setBgColor(color);
    } else { 
      const randomIndex = Math.floor(Math.random() * tailwindColors.length);
      const randomColor = tailwindColors[randomIndex];
      setBgColor(randomColor);
    }
  };

  return (
    <div className={`h-screen w-full duration-200 bg-${bgColor}-500`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500" onClick={() => setBackgroundColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-500" onClick={() => setBackgroundColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-500" onClick={() => setBackgroundColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-indigo-500" onClick={() => setBackgroundColor("random")}>Random</button>
          {/* Add buttons for other colors if desired */}
        </div>
      </div>
    </div>
  );
}

export default App;