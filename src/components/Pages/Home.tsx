import LinkComponent from "../Components/LinkComponent";
import ProjectPreview from "../Components/ProjectPreview";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full  relative max-w-[1350px] m-auto p-0 ">
        <div className=" flex flex-col lg:flex-row  w-full ">
          <div className=" font-[roboto-serif] text-[1.4rem] text-grey tracking-wide lg:absolute left-[64px] flex flex-col lg:justify-between lg:h-[100vh] p-[64px] lg:w-[35%] w-[full] lg:pl-0 lg:pr-0 gap-12 ">
            <div className="w-[100%] md:w-[70%] lg:w-[100%]">
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
            <div className="w-[100%] ">
              <LinkComponent title={"CV"} link="https://drive.google.com/file/d/1BezF4S-R8l07r8ZfJPJXmdbsPBxgqmmJ/view?usp=sharing" />
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

          <div className=" w-[100%] lg:h-[100vh] lg:overflow-y-auto no-scrollbar lg:pt-[64px] pr-[64px] pb-[64px] pl-[64px] lg:pl-[45%] grid grid-cols-2 gap-4 grid-flow-row ">
            <ProjectPreview
              aspect="2/1"
              colSpan={2}
              tags={["React", "Express JS", "PostgreSQL"]}
              title="Plantasia"
              link="https://plantasia.annisarachma.com/"
              video="plantasia"
              // slug="plantasia"
              className="col-span-2 aspect-[2/1]"
              description="Developed and designed a mockup e-plant shop website, featuring a clean UI for browsing and purchasing plants online"
            />
            <ProjectPreview
              aspect="2/1"
              tags={["React", "Express JS", "PostgreSQL"]}
              title="Plantasia Admin"
              link="https://plantasia-admin.annisarachma.com/"
              video="plantasiaAdmin"
              // slug="plantasia-admin"
              className="col-span-2 aspect-[2/1]"
              description="Built and designed the admin dashboard for Plantasia to manage products, orders, and user data efficiently."
            ></ProjectPreview>
            <ProjectPreview
              aspect="2/1"
              colSpan={2}
              tags={["Vue", "Express JS"]}
              title="Genshin Info"
              link="https://genshin.annisarachma.com/"
              video="genshin"
              // slug="genshin"
              className="col-span-2 aspect-[2/1]"
              description="Created a Genshin Impact fan website showcasing character information, an interactive map, and mini puzzle games for user engagement."
            />
            {/* <ProjectPreview
              aspect="square"
              tags={["Design"]}
              title="Project B"
              link="#"
              video="projectsB"
              slug="what-to-cook"
            ></ProjectPreview> */}
          </div>
        </div>
      </div>
    </>
  );
}
