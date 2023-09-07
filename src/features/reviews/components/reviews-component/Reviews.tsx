import { FC } from "react";
import { Heading } from "../heading";
import { Card } from "../card";
import { Tape } from "../tape";

interface ReviewsProps {}

export const Reviews: FC<ReviewsProps> = () => {
  return (
    <div className="py-[100px]">
      <Heading />
      <div className="mx-32 mt-[100px] grid grid-cols-2 grid-rows-2 gap-20">
        <Card
          heading="Great Services!"
          client="MH Ventures"
          text="I recently had the pleasure of working with Plainthing Studio on a
          branding project for my company. From start to finish, the team at
          Plainthing was professional, responsive, and incredibly talented. They
          listened to my vision and brought it to life in a way that exceeded my
          expectations. The end result was a stunning and cohesive brand that
          perfectly captured the essence of my business."
          className="-rotate-6"
        >
          <Tape className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/4" />
          <Tape className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/2" />
        </Card>
        <Card
          heading="Good Quality work!"
          client="Sliksafe"
          text="Plainthing Studio completely transformed the user experience on our
          website. Their team of UI/UX designers took the time to understand our
          business and create a design that was not only visually appealing, but
          also intuitive and easy to navigate. We've seen a significant
          increase in website traffic and conversions since the redesign, and we
          couldn't be happier with the results. Thank you, Plainthing
          Studio!&quot;"
          className="-translate-y-8 rotate-6"
        >
          <Tape className="absolute right-1/2 top-2 -translate-y-2/3 translate-x-1/2 -rotate-[26deg]" />
          <Tape className="absolute bottom-0 right-4 translate-y-1/2 -rotate-[24deg]" />
        </Card>
        <Card
          heading="Top Notch!"
          client="Wapel HR"
          text="As a startup, we were looking for a design agency that could not only
          bring our vision to life, but also offer valuable insights and
          suggestions. Plainthing Studio exceeded our expectations in every way.
          They provided top-notch UI/UX design services and helped us create a
          product that our users love. We highly recommend Plainthing Studio to
          anyone looking to improve their online presence."
        >
          <Tape className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/4" />
          <Tape className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/2" />
        </Card>
        <Card
          heading="So Expert!"
          client="Halahi"
          text="We've worked with several design agencies in the past, but none
          have matched the level of professionalism and expertise that we found
          at Plainthing Studio. Their UI/UX design team brought a fresh
          perspective and innovative ideas to the table, and the end result was
          a stunning and intuitive product. We couldn't be happier with the
          work that Plainthing Studio did for us. so great experience for us!"
          className="-rotate-6"
        >
          <Tape className="absolute right-1/2 top-2 -translate-y-2/3 translate-x-1/2 -rotate-[26deg]" />
          <Tape className="absolute bottom-0 right-4 translate-y-1/2 -rotate-[24deg]" />
        </Card>
      </div>
    </div>
  );
};
