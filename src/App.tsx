import "./App.css";
import homeImage from "./assets/home.svg";
import githubImage from "./assets/github.svg";
import linkedinImage from "./assets/linkedin.svg";
import blogImage from "./assets/blog.svg";
import mailImage from "./assets/mail.svg";
import darkModeImage from "./assets/darkmode.svg";
import buildingImage from "./assets/building.svg";
import jogjaFoodie from "./assets/jogjafoodie.svg";
import plantImage from "./assets/plant.svg";
import planetImage from "./assets/planet.svg";
import photography from "./assets/photography.svg";
import textEditorImage from "./assets/texteditor.svg";
import paintingImage from "./assets/painting.svg";
import artImage from "./assets/art.svg";
import wordlBuilding from "./assets/worldbuilding.svg";
import fishImage from "./assets/fish.svg";
import travelImage from "./assets/travel.svg";
import threeDImage from "./assets/3d.svg";
import profile from './assets/profile.svg'

function App() {
  return (
    <>
      {/**1 */}
      <div className="border-[1.5px] rounded-tl-lg bg-purple grid place-items-center ">
        <img src={homeImage} alt="" className="w-[60%]" />
      </div>
      <div className="border-[1.5px] bg-green grid place-items-center">
        <img src={githubImage} alt="" className="w-[60%]" />
      </div>
      <div className="border-[1.5px] bg-darkblue grid place-items-center">
        <img src={linkedinImage} alt="" className="w-[55%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-lightblue"></div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-green grid place-items-center">
        <img src={blogImage} alt="" className="w-[60%]" />
      </div>
      <div className="border-[1.5px] bg-purple grid place-items-center">
        <img src={mailImage} alt="" className="w-[60%]" />
      </div>
      <div className="border-[1.5px] rounded-tr-lg bg-red grid place-items-center">
        <img src={darkModeImage} alt="" className="w-[55%]" />
      </div>

      {/**2 */}
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-red grid place-items-center">
        <img src={buildingImage} alt="" className="w-[55%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] "></div>
      <div className="border-[1.5px] col-span-2 bg-yellow grid place-items-center">
        <img src={jogjaFoodie} alt="" className="w-[65%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] row-span-2 bg-yellow grid place-items-center">
        <img src={plantImage} alt="" className="w-[55%]" />
      </div>

      {/**3 */}
      <div className="border-[1.5px] bg-yellow grid place-items-center">
        <img src={planetImage} alt="" className="w-[75%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] col-span-2 row-span-2 bg-lightblue">
      <img src={profile} alt="" className="w-[85%]" />
      </div>
      <div className="border-[1.5px] col-span-3 font-[Silkscreen] text-[4.85rem] grid place-items-center">
        ANNISA
      </div>
      <div className="border-[1.5px] bg-lightblue grid place-items-center">
        <img src={photography} alt="" className="w-[65%]" />
      </div>

      {/**4 */}
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-purple grid place-items-center">
        <img src={textEditorImage} alt="" className="w-[55%]" />
      </div>
      <div className="border-[1.5px] font-[Silkscreen] text-[1.30rem] grid place-items-center">
      Digital
      Crafter
      </div>
      <div className="border-[1.5px] font-[Silkscreen] text-[1.30rem] grid place-items-center">Designer</div>
      <div className="border-[1.5px] font-[Silkscreen] text-[1.30rem] grid place-items-center">
        Artist
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-darkblue"></div>

      {/**5 */}
      <div className="border-[1.5px] rounded-bl-lg row-span-2 bg-lightblue grid place-items-center">
        <img src={paintingImage} alt="" className="w-[55%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-darkblue grid place-items-center">
        <img src={artImage} alt="" className="w-[55%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] col-span-3 bg-lightblue grid place-items-center ">
        <img src={wordlBuilding} alt="" className="ww-full h-full object-contain " />
      </div>
      <div className="border-[1.5px]"></div>

      {/**6 */}

      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] col-span-2 bg-green grid place-items-center">
        <img src={fishImage} alt="" className="w-[70%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] bg-red grid place-items-center">
        <img src={travelImage} alt="" className="w-[60%]" />
      </div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px]"></div>
      <div className="border-[1.5px] rounded-br-lg bg-purple grid place-items-center">
        <img src={threeDImage} alt="" className="w-[60%]" />
      </div>
    </>
  );
}

export default App;
