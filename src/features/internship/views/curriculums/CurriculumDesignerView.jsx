"use client";

import Button from "../../components/ui/ButtonVideoList";
import useCurriculumDesignerViewModel from "../../hooks/useCurriculumDesignerViewModel";

const CurriculumDesignerView = () => {
  const { weeks, videoDetails, timeSince, weekVideos, weekTitles, setWeeks } =
    useCurriculumDesignerViewModel();
  const toggleWeek = (index) => {
    const updatedWeeks = weeks.map((isOpen, i) =>
      i === index ? !isOpen : isOpen
    );
    setWeeks(updatedWeeks);
  };
  const renderVideoContent = (weekIndex) => {
    const videoIds = weekVideos[weekIndex] || [];
    const hasValidVideos = videoIds.some((videoId) =>
      videoDetails.find((v) => v.id === videoId)
    );

    return (
      <div
        className={`flex overflow-x-auto space-x-4 py-4 ${
          hasValidVideos ? "justify-start" : "justify-center"
        }`}
      >
        {videoIds.map((videoId) => {
          const video = videoDetails.find((v) => v.id === videoId);
          if (video) {
            return (
              <div
                key={video.id}
                className="flex-none max-w-[15rem] md:max-w-xs bg-[#FFFFFF] p-4 rounded-lg shadow-lg"
              >
                <img
                  className="w-full rounded-xl object-cover"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <a
                  href={`https://youtu.be/${video.id}?feature=shared`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#332C2B] underline line-clamp-1"
                >
                  {video.snippet.title}
                </a>
                <div className="flex mt-4 items-center space-x-1 text-sm">
                  <h4>{video.statistics.viewCount} views</h4>
                  <h4 className="text-gray-300">•</h4>
                  <h6>{timeSince(video.snippet.publishedAt)}</h6>
                </div>
                <h4 className="text-sm">
                  Youtube {">"} Motion Lab Telkom University{" "}
                </h4>
              </div>
            );
          } else {
            return (
              <div key={videoId} className="mt-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/images/internship/error/video-not-found.svg"
                    alt="Video not found graphic"
                  />
                  <h4 className="text-base font-bold">
                    There is no video here :(
                  </h4>
                  <h4>
                    Let’s check{" "}
                    <a
                      href="https://www.youtube.com/@MotionLabTelkomUniversity/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Motion Lab Telkom University
                    </a>{" "}
                    for more contents ;)
                  </h4>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };
  return (
    <>
      <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
          UI/UX Designer
        </h1>
      </section>

      <section className="container mx-auto lg:px-[8rem]">
        <div className="my-24"></div>

        <div className="flex flex-col gap-y-8">
          {weekTitles.map((title, index) => (
            <div
              key={index}
              className="w-full bg-white px-10 py-5 rounded"
              onClick={() => toggleWeek(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                    Week {index + 1} -
                  </h2>
                  <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                    {title}
                  </p>
                </div>
                <Button
                  text="Video List"
                  icon={
                    weeks[index]
                      ? "/svg/list-arrow-up.svg"
                      : "/svg/list-arrow-down.svg"
                  }
                />
              </div>
              {weeks[index] && renderVideoContent(index)}
            </div>
          ))}
        </div>

        <div className="my-20"></div>
      </section>
    </>
  );
};

export default CurriculumDesignerView;
