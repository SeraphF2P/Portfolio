import type { NextPage } from "next";
import { siteConfig } from "../configs/site";
import { MotionElement } from "../lib/framer-motion";
import { Icon, NextImage } from "../ui/server";
import { MagicCard } from "./_component/MagicCard";

const Page: NextPage = () => {
  return (
    <>
      <section id="home" className=" relative  grid min-h-svh py-8 ">
        <div className=" m-auto">
          <div className=" text-shadow my-4 font-outfit">
            <h2 className="   text-4xl capitalize">web developer </h2>
            <p className="   pl-1 text-base">ready for work</p>
          </div>
        </div>
      </section>
      {/* skills */}
      <section  id="skills" className=" relative  grid min-h-svh py-8  ">
        <div className="   flex flex-col items-center   justify-center">
          <MotionElement.PopUp className=" my-4">
            <h2>my skills</h2>
          </MotionElement.PopUp>
          <div className="w-full bg-neutral/80">
            <div className="  container mx-auto flex flex-col items-center justify-center gap-2  p-4 md:flex-row  md:items-start">
              <div className="  select-none   p-4  md:order-3 ">
                <h3 className=" mb-2 w-full text-center text-3xl">core</h3>
                <div className=" flex  justify-center gap-4 ">
                  <div>
                    <h4 className=" text-xl">frontEnd</h4>
                    {siteConfig.skills.core.frontEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <h4 className="text-xl">backEnd</h4>
                    {siteConfig.skills.core.backEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" flex  items-center justify-center gap-2 md:order-4 md:my-auto md:flex-col">
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
              </div>
              <div className="  select-none p-4  md:order-1  ">
                <h3 className=" mb-2 w-full text-center text-3xl">
                  intermediate
                </h3>
                <div className=" flex  justify-center gap-4  ">
                  <div>
                    <h4 className=" text-xl">frontEnd</h4>
                    {siteConfig.skills.intermediate.frontEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <h4 className="text-xl">backEnd</h4>
                    {siteConfig.skills.intermediate.backEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center gap-2 md:order-2 md:my-auto md:flex-col">
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
                <Icon.star className="size-2" />
              </div>
              <div className="select-none  p-4   md:order-5  ">
                <h3 className=" mb-2 w-full text-center text-3xl">beginner</h3>
                <div className=" flex  justify-center gap-4 ">
                  <div>
                    <h4 className=" text-xl">frontEnd</h4>
                    {siteConfig.skills.beginner.frontEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <h4 className="text-xl">backEnd</h4>
                    {siteConfig.skills.beginner.backEnd.map((skill) => {
                      return (
                        <p key={skill} className="capitalize">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* experiances */}
      <section  id="experiances"  className="  grid min-h-svh py-8  ">
        <div className="  m-auto flex flex-col items-center   justify-center">
          <MotionElement.PopUp className=" my-4">
            <h2>experiances</h2>
          </MotionElement.PopUp>
          <div className="  flex  flex-wrap items-center justify-center gap-4  p-4">
            {siteConfig.experiances.map(exp => {
              return <div key={exp.id} className=" relative  w-72  " >
                <NextImage imageClassName=" object-contain" className=" aspect-video  w-full  overflow-hidden   rounded " src={"/" + exp.image} sizes="240px 160px" alt={exp.title} />
                <div className=" text-center">
                  <p>{exp.duration}</p>
                  <p>{exp.info}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
      {/* certifications */}
      <section  id="certifications" className=" relative  grid min-h-svh py-8    ">
        <div className="  flex flex-col items-center   justify-center">
          <MotionElement.PopUp className=" my-4">
            <h2>certifications</h2>
          </MotionElement.PopUp>
          <div className="w-full bg-neutral/80">
            <div className=" container mx-auto flex flex-wrap  gap-2  p-4">
              {siteConfig.certificates.map((certificate) => {
                return (
                  <div
                    key={certificate.id}
                    className=" relative   select-none  flex-1    p-4 text-xl capitalize "
                  >
                    <div className=" absolute z-0 inset-0 hover:bg-secondary rounded-md  border-2 border-secondary hover:scale-105 cursor-pointer transition-transform "></div>
                    <div className=" relative z-10  pointer-events-none">
                       <h2 className="">{certificate.name}</h2>
                    <p className="">{certificate.Issuing_organization}</p>
                   </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section  id="projects" className=" relative  grid min-h-svh py-8    ">
        <div className=" m-auto">
          <div>
       <h2 className=" capitalize  text-center  my-8  text-shadow text-5xl">next</h2>
        <div
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
          className="container  m-auto flex flex-wrap items-center justify-center gap-4"
        >
          {siteConfig.projects.next.map((project) => {
            return (
              <MagicCard key={project.id} {...project} />
            );
          })}
        </div>
      </div>
          <div>
       <h2 className=" capitalize  text-center  my-8  text-shadow text-5xl">react</h2>
        <div
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d",
          }}
          className="container  m-auto flex flex-wrap items-center justify-center gap-4"
        >
          {siteConfig.projects.react.map((project) => {
            return (
              <MagicCard key={project.id} {...project} />
            );
          })}
        </div>
      </div>
       </div>
      </section>
      {/* footer */}
     <section   className=" grid relative  h-svh  py-8    ">
        <div className=" m-auto">
            <div className="text-shadow relative hover:scale-105 hover:bg-primary-hover  transition-all duration-300 flex items-center justify-center gap-4 rounded-full border-4 border-primary  px-4 py-2 capitalize ">
              <a download target="_blank" href="Jaffar.ali.cv.pdf"
              className=" absolute inset-0"
              />
              
             
             <p className=" text-2xl"> download CV</p>
              
</div>

        </div>
      </section>
    
    </>
  );
};

export default Page;
