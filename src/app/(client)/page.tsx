import Banner from "@/components/common/Banner";
import Image from "next/image";
import FeatureCard from "@/components/feature/FeatureCard";
import Courses from "./courses/page";
import CoursesCard from "@/components/courses/CoursesCard";
import LearnAnywhere from "@/components/LearnAnyWhere";

export default function Home() {
  return (
  <div>
    <Banner />
    <FeatureCard />
    <CoursesCard />
    <LearnAnywhere />
    Hello world
  </div>
  );
}
