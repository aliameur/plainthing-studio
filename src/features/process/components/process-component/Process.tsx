import { Step } from "../step";
import { Heading } from "../heading";

export const Process = () => {
  return (
    <div className="flex pb-[100px]">
      <Heading />
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
