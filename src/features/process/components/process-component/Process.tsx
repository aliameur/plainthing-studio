import { Twinkle } from "@/components/twinkle";
import { Step } from "../step";

export const Process = () => {
  return (
    <div className="flex pb-[100px]">
      <div className="sticky top-0 flex h-screen w-1/2 flex-col pt-[200px]">
        <h2 className="relative flex max-w-[500px] flex-col font-inktrap text-[90px] font-extrabold leading-none text-white">
          <span>How We</span>
          <span className="-translate-y-4 -rotate-6 font-migra text-[100px] font-bold italic text-[#30BCD6]">
            Work?
          </span>
          <Twinkle className="absolute left-1/4 top-0 -translate-x-full  rotate-[36deg] scale-110 stroke-pink-400" />
          <Twinkle className="absolute bottom-6 right-1/4  -rotate-[24deg] scale-150 fill-pink-400" />
        </h2>
        <p className="max-w-[500px] pt-4 font-inktrap text-[22px] font-light text-white">
          Some of the processes that usually we use when we have a project with
          our client
        </p>
      </div>
      <div className="w-1/2 space-y-28 pt-[200px]">
        <Step number="01" titleStart="Discussion" titleEnd="With Us">
          Understand the client&apos;s business, goals, and challenges for
          building relationships.
        </Step>
        <Step number="02" titleStart="Ideation" titleEnd="& Brainstorm">
          Gather ideas and create the first concept for the future product. Its
          crucial but still having fun!
        </Step>
        <Step number="03" titleStart="Creating" titleEnd="a Timeline!">
          After we understand the brief and everything, we decided to give you
          an estimated timeline for the project
        </Step>
        <Step number="04" titleStart="Start" titleEnd="Designing">
          We start to visualize the design from our idea and brainstorming,
          based on our timeline
        </Step>
        <Step number="05" titleStart="Feedback" titleEnd="Loop!">
          You can give us a feedback or insight while we working on it,
          collaboration is a key!
        </Step>
        <Step number="06" titleStart="Job" titleEnd="Finish!">
          Finish with everything and deliver the best thing for you and your
          company!
        </Step>
        <div className="h-[180px]" />
      </div>
    </div>
  );
};
