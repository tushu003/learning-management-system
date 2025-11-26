import React from "react";
import Image from "next/image";
import { courses } from "../../features/student/mock/courses";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium">
    {children}
  </span>
);

const CoursesCard: React.FC<{ course: typeof courses[number] }> = ({ course }) => {
  return (
    <article className="bg-white max-w-5xl mx-auto rounded-xl shadow-sm overflow-hidden ring-1 ring-gray-100">
      {/* Top image: fills the card width and has a fixed height */}
      <div className="relative w-full h-44 md:h-48 lg:h-56 bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 568px) 100vw, 33vw"
        />
        {/* small top-right decorative badge (optional) */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 shadow-sm">
          <span className="text-xs font-semibold text-slate-700">★</span>
        </div>
      </div>

      {/* Text block below the image */}
      <div className="p-5">
        <h3 className="text-[24px] font-[700] text-[#1E293B]">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-[#4B5563]">{course.description}</p>
        <a
          className="inline-block mt-4 text-sm font-medium text-[#003466] hover:underline"
          href="#"
        >
          Explore more →
        </a>
      </div>
    </article>
  );
};

export default function HeroFeatures() {
  return (
    <section className="max-w-6xl mx-auto lg:px-19 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <Badge>Why Choose Evolve</Badge>
        <h1 className="mt-3 text-xl sm:text-4xl lg:text-3xl font-extrabold text-[#1E293B]">
          The Future of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#DB2777]">
            {" "}
            Personalized Learning
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          We’re not just another tutoring platform. We’re revolutionizing
          education with <br /> cutting-edge technology and human expertise.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CoursesCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
