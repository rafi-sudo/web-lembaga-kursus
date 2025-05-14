import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("0");

  const handleClick = (value: string) => {
    if (value === "AC") return setInput("0");
    if (value === "+/-") return setInput((prev) => (parseFloat(prev) * -1).toString());
    if (value === "%") return setInput((parseFloat(input) / 100).toString());
    if (value === "=") {
      try {
        const result = eval(input.replace("^", "**")); // simplifikasi
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }
    if (value === "√") return setInput(Math.sqrt(parseFloat(input)).toString());

    setInput((prev) =>
      prev === "0" || prev === "Error" ? value : prev + value
    );
  };

  const buttons = [
    "AC", "+/-", "%", "√",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "^", "+",
    "="
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl w-80 shadow-lg">
        <div className="text-right text-3xl mb-4 p-2 bg-gray-700 rounded">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="bg-gray-600 hover:bg-gray-500 p-4 rounded text-lg font-semibold"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
