import "./App.css";
// import * as assets from "../src/assets"
import LinkComponent from "./components/LinkComponent";

function App() {
  return (
    <>
      <div className="w-screen max-w-[100vw] h-screen p-12 flex ">
        <div className="w-[35%] font-[roboto-serif] text-[1.4rem] p-6 text-grey flex flex-col justify-between text-left tracking-wide ">
          <p className="">
            <span className="text-3xl">🍀</span> <br />
            <br />
            Hello there! My Name is <span className="text-black">
              Annisa.
            </span>{" "}
            I like creating <span className="text-black">digital stuff, </span>
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
            <LinkComponent title={"CV"} link="" />
            <LinkComponent
              title={"Linkedin"}
              link="https://www.linkedin.com/in/annisa-rachma/"
            />
            <LinkComponent
              title={"Github"}
              link="https://github.com/annisa-rachma/"
            />
            <LinkComponent
              title={"Mail"}
              link="mailto:saa.annisa15@gmail.com"
            />
          </div>
        </div>

        <div className=" w-[65%] p-6 grid grid-cols-2 space-x-4 space-y-4 overflow-y-auto h-screen no-scrollbar">
          <div className="bg-[#F6F6F6] col-span-2 rounded-2xl h-[400px]">
            a
          </div>
          <div className="bg-[#F6F6F6] h-[400px] w-[400px] rounded-2xl">
            a
          </div>
          <div className="bg-[#F6F6F6] h-[400px] w-[400px] rounded-2xl">
            a
          </div>
          <div className="bg-[#F6F6F6] h-[400px] col-span-2 rounded-2xl">
            a
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
