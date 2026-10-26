"use client";

import Button from "../../components/ui/ButtonVideoList";
import useCurriculumMobileProgrammingViewModel from "../../hooks/useCurriculumMobileProgramingViewModel";

const CurriculumMobileProgrammingView = () => {
  const {
    platforms,
    weeks,
    videoDetails,
    weekVideos,
    weekTitles,
    timeSince,
    setPlatforms,
    setWeeks,
  } = useCurriculumMobileProgrammingViewModel();
  const renderVideoContent = (platform, weekIndex) => {
    const videoIds = weekVideos[platform]?.[weekIndex] || [];
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
                className="flex-none max-w-[15rem] md:max-w-xs bg-white dark:bg-[#1E293B] border border-transparent dark:border-[#334155] p-4 rounded-xl shadow-lg transition-colors duration-200"
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
                  className="font-bold text-[#332C2B] dark:text-[#F8FAFC] underline line-clamp-1 mt-2 block"
                >
                  {video.snippet.title}
                </a>
                <div className="flex mt-4 items-center space-x-1 text-sm text-slate-500 dark:text-[#94A3B8]">
                  <h4>{video.statistics.viewCount} views</h4>
                  <h4 className="text-gray-300 dark:text-gray-600">•</h4>
                  <h6>{timeSince(video.snippet.publishedAt)}</h6>
                </div>
                <h4 className="text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
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
                  <h4 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC]">
                    There is no video here :(
                  </h4>
                  <h4 className="text-slate-600 dark:text-[#CBD5E1]">
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
          Mobile Programming
        </h1>
      </section>

      <section className="container mx-auto lg:px-[8rem]">
        <div className="my-24"></div>

        <div className="flex flex-col gap-y-8">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setPlatforms((prev) => ({ ...prev, android: !prev.android }));
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] dark:text-[#F8FAFC] me-2">
              Android
            </h1>
            {platforms.android ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {platforms.android && (
            <>
              {weeks.android.map((week, index) => (
                <div
                  key={index}
                  className="w-full bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] px-10 py-5 rounded-2xl cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    setWeeks((prev) => ({
                      ...prev,
                      android: prev.android.map((w, i) =>
                        i === index ? !w : w
                      ),
                    }));
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <h2 className="text-[16px] font-bold text-[#332C2B] dark:text-[#F8FAFC]">
                        Week {index + 1} -
                      </h2>
                      <p className="text-[16px] text-[inter] text-[#332C2B] dark:text-[#CBD5E1] ms-2">
                        {weekTitles.android[index]}
                      </p>
                    </div>
                    <Button
                      text="Video List"
                      icon={
                        week
                          ? "/svg/list-arrow-up.svg"
                          : "/svg/list-arrow-down.svg"
                      }
                    />
                  </div>

                  {week && renderVideoContent("android", index)}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col gap-y-8 mt-10">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setPlatforms((prev) => ({ ...prev, ios: !prev.ios }));
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] dark:text-[#F8FAFC] me-2">
              IOS
            </h1>
            {platforms.ios ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {platforms.ios && (
            <>
              {weeks.ios.map((week, index) => (
                <div
                  key={index}
                  className="w-full bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] px-10 py-5 rounded-2xl cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    setWeeks((prev) => ({
                      ...prev,
                      ios: prev.ios.map((w, i) => (i === index ? !w : w)),
                    }));
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <h2 className="text-[16px] font-bold text-[#332C2B] dark:text-[#F8FAFC]">
                        Week {index + 1} -
                      </h2>
                      <p className="text-[16px] text-[inter] text-[#332C2B] dark:text-[#CBD5E1] ms-2">
                      {weekTitles.ios[index]}
                      </p>
                    </div>
                    <Button
                      text="Video List"
                      icon={
                        week
                          ? "/svg/list-arrow-up.svg"
                          : "/svg/list-arrow-down.svg"
                      }
                    />
                  </div>

                  {week && renderVideoContent("ios", index)}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col gap-y-8 mt-10">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setPlatforms((prev) => ({ ...prev, flutter: !prev.flutter }));
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] dark:text-[#F8FAFC] me-2">
              Flutter
            </h1>
            {platforms.flutter ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {platforms.flutter && (
            <>
              {weeks.flutter.map((week, index) => (
                <div
                  key={index}
                  className="w-full bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] px-10 py-5 rounded-2xl cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    setWeeks((prev) => ({
                      ...prev,
                      flutter: prev.flutter.map((w, i) =>
                        i === index ? !w : w
                      ),
                    }));
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <h2 className="text-[16px] font-bold text-[#332C2B] dark:text-[#F8FAFC]">
                        Week {index + 1} -
                      </h2>
                      <p className="text-[16px] text-[inter] text-[#332C2B] dark:text-[#CBD5E1] ms-2">
                      {weekTitles.flutter[index]}
                      </p>
                    </div>
                    <Button
                      text="Video List"
                      icon={
                        week
                          ? "/svg/list-arrow-up.svg"
                          : "/svg/list-arrow-down.svg"
                      }
                    />
                  </div>

                  {week && renderVideoContent("flutter", index)}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="my-20"></div>
      </section>
    </>
  );
};

export default CurriculumMobileProgrammingView;
