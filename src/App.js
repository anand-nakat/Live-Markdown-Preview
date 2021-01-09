import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  let markdownCode = "# Markdown Code goes here.";
  if (localStorage.getItem("data")) {
    markdownCode = localStorage.getItem("data");
  }

  const [text, setText] = useState(markdownCode);

  return (
    <main className="min-h-screen flex-col">
      <h1 className="col-span-full font-black text-3xl text-center text-gray-800">
        Live Markdown Preview
      </h1>
      <div
        className="gap-7 grid grid-cols-1 h-screen md:grid-cols-2 pb-16 pt-6 px-10
      "
      >
        <div className="border-b-4 border-black h-96 md:border-0 md:border-r-4 md:h-full md:pb-0 pb-4 pr-6">
          <textarea
            value={text}
            onChange={(e) => {
              localStorage.setItem("data", e.target.value);
              setText(e.target.value);
            }}
            className="bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black min-h-full overflow-hidden p-3 shadow w-full"
          ></textarea>
        </div>
        <div className="bg-gray-100 p-4">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

export default App;
