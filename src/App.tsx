import "./App.css";
// import * as assets from "../src/assets"
import LinkComponent from "./components/LinkComponent";

function App() {
  return (
    <>
      <div className="h-[100vh]  overflow-hidden relative max-w-[1350px] m-auto p-0 ">
        <div
          className=" static w-[100%] flex min-w-[1024px] "
        >
          
          <div className="w-[35%] font-[roboto-serif] text-[1.4rem] text-grey tracking-wide absolute left-[64px] pt-[64px] block ">
            <p className="">
              <span className="text-3xl">🍀</span> <br />
              <br />
              Hello there! My Name is{" "}
              <span className="text-black">Annisa.</span> I like creating{" "}
              <span className="text-black">digital stuff, </span>
              and using the web as a creative playground.
              <br />
              <br />
              In my free time, I enjoy
              <span className="text-black"> wandering</span> around, making{" "}
              <span className="text-black">art,</span> cooking comforting{" "}
              <span className="text-black"> meals,</span> and reading
              <span className="text-black"> books.</span>
            </p>
          </div>
          

          <div className="static w-[100%] h-[100vh] overflow-y-auto no-scrollbar pt-[64px] pr-[64px] pb-[64px] pl-[550px]"
          
          >
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

          <div className="w-[35%] font-[roboto-serif] text-[1.4rem] text-grey tracking-wide absolute left-[64px] bottom-[64px]">
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
      </div>
    </>
  );
}

export default App;
