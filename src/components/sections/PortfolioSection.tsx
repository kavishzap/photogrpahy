import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PortfolioCard from "../cards/PortfolioCard";

function PortfolioSection() {
  const portfolioData = [
    {
      id: 0,
      title: "Buildings of Port Louis",
      date: "March 2024",
      imageUrl: "/images/1.png",
    },
    {
      id: 1,
      title: "Sunrise at Mahebourg",
      date: "January 2024",
      imageUrl: "/images/3.png",
    },
    {
      id: 2,
      title: "Grand Baie Hotel;",
      date: "January 2024",
      imageUrl: "/images/5.png",
    },
  ];
  return (
    <section className="">
      <section className="flex justify-between flex-col md:flex-row gap-[1.25rem]">
        <div>
          <Header
            title="Portfolio"
            description="Explore My photography work."
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:inline-flex border border-lightDark rounded-[6.25rem]  justify-between p-[0.62rem] gap-4 w-[170px]">
            <img
              src="/images/left_icon.png"
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src="/images/right_icon.png"
              alt="x icon"
              className="cursor-pointer"
            />
          </div>
          <MainButton
            text="View All Works"
            rightIconComponent={<ArrowRight />}
            classes="w-[13.12rem]"
          />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <div className="flex justify-between gap-[3.12rem] flex-col xl:flex-row">
        {portfolioData.map((portfolio) => (
          <PortfolioCard
            imageUrl={portfolio.imageUrl}
            key={portfolio.id}
            title={portfolio.title}
            date={portfolio.date} link={""}          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
