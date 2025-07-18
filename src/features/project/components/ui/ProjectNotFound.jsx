import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectNotFound = ({ onSeeNewestProject }) => (
  <div className="flex flex-col items-center justify-start h-screen text-center">
    <Image
      src="/images/home/notfound-project.png"
      alt="404 Not Found"
      width={200}
      height={200}
    />
    <h2 className="text-2xl lg:text-5xl font-bold font-[inter] mt-2 mb-4 lg:mt-4 lg:mb-6">No Matches Found</h2>
    <p className="text-gray-500 text-lg lg:text-2xl">
      We couldn’t find project you’re searching for. Please come again next time
      👋
    </p>
    <Button
      className="font-[rubik] text-[#C1271A] font-extrabold border-2 border-[#C1271A] hover:bg-[#C1271A] hover:text-white rounded-full px-24 lg:px-80 py-4 mt-4 mb-2 lg:mt-6 lg:mb-4"
      onClick={onSeeNewestProject}
    >
      See our newest project!
    </Button>
    <Link href="/">
      <u className="text-[#C1271A]">Or go to Home</u>
    </Link>
  </div>
);

export default ProjectNotFound;
