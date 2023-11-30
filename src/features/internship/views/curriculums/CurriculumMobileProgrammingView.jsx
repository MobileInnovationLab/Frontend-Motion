"use client";

import InternshipNavbar from "../../components/navbar/InternshipNavbar";
import useCurriculumMobileProgrammingViewModel from "../../viewModels/useCurriculumMobileProgramingViewModel";

const CurriculumMobileProgrammingView = () => {
  const { android, ios, flutter, setAndroid, setIos, setFlutter } =
    useCurriculumMobileProgrammingViewModel();

  return (
    <>
      <InternshipNavbar isFixed={false} />
      <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
          Mobile Programming
        </h1>
      </section>

      <section className="container mx-auto px-[18rem]">
        <div className="my-24"></div>

        <div className="flex flex-col gap-y-8">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setAndroid(!android);
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] me-2">
              Android
            </h1>
            {android ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {android && (
            <>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 1 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Recycler View
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 2 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Tab View and Bottom Navigation View
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 3 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Working with Library and Move activity with Intent
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 4 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Working With Local Database
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 5 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Working With Firebase Tools
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 6 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Working With Firebase Tools
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 7 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  How to give notification
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 8 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Create Testing and Launching Apps
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-y-8 mt-10">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setIos(!ios);
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] me-2">
              IOS
            </h1>
            {ios ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {ios && (
            <>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 1 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Introduction IDE XCode and Human Interface Guidelines
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 2 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Slicing UI and Navigation
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 3 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Animation and Package
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 4 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Concurrency
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 5 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Core Data
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 6 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Networking
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 7 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Architecture Pattern Aplikasi iOS (MVVM)
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 8 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Testing
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-y-8 mt-10">
          <div
            className="flex hover:cursor-pointer"
            onClick={() => {
              setFlutter(!flutter);
            }}
          >
            <h1 className="text-[32px] text-[inter] font-bold text-[#332C2B] me-2">
              Flutter
            </h1>
            {flutter ? (
              <img src="/svg/arrow-down.svg" alt="arrow down" />
            ) : (
              <img src="/svg/arrow-right.svg" alt="arrow right" />
            )}
          </div>
          {flutter && (
            <>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 1 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Introduction to Flutter Widgets
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 2 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Playing with Widget Menu
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 3 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Animation and Package
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 4 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Concurrency
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 5 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Core Data
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 6 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Networking
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 7 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Architecture Pattern Aplikasi iOS (MVVM)
                </p>
              </div>
              <div className="flex w-full bg-white px-10 py-5 rounded">
                <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
                  Week 8 -
                </h2>
                <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
                  Testing
                </p>
              </div>
            </>
          )}
        </div>

        <div className="my-20"></div>
      </section>
    </>
  );
};

export default CurriculumMobileProgrammingView;
