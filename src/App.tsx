// import { useState } from 'react'

import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen max-w-[100vw] h-screen p-12 flex">
        <div className="w-[30%] font-[roboto-serif] text-[1.4rem] p-6 text-grey flex flex-col justify-between text-left tracking-wide">
          <p className="">
            <span className="text-3xl">🍀</span> <br />
            <br />
            Hello there! My Name is <span className="text-black">
              Annisa.
            </span>{" "}
            I like creating <span className="text-black">digital stuff,</span>
            and using the web as a creative playground.
            <br />
            <br />
            In my free time, I enjoy
            <span className="text-black"> wandering</span> around, making{" "}
            <span className="text-black">art,</span> cooking comforting{" "}
            <span className="text-black"> meals,</span> and reading
            <span className="text-black"> books.</span>
          </p>
          <div>
            <p>CV</p>
            <p>Linkedin</p>
            <p>Github</p>
            <p>Mail</p>
          </div>
        </div>

        <div className=" w-[70%] p-6">

        </div>
      </div>
    </>
  );
}

export default App;
