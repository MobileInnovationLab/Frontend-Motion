"use client";

import { useState, useEffect } from "react";

export default function useCurriculumMobileProgrammingViewModel() {
  const [platforms, setPlatforms] = useState({
    android: true,
    ios: true,
    flutter: true,
  });
  const [weeks, setWeeks] = useState({
    android: Array(10).fill(false),
    ios: Array(9).fill(false),
    flutter: Array(10).fill(false),
  });
  const [videoDetails, setVideoDetails] = useState([]);

  const weekTitles = {
    android: [
      "Version Control (Git)",
      "Recycler View ",
      "Tab View and Bottom Navigation View",
      "Working with Library",
      "Move Activity with Intent",
      "Working With Local Database",
      "Working With Firebase Tools",
      "Working With Retrofit",
      "How to give Notifications",
      "Create Testing and Launching Apps",
    ],
    ios: [
      "Version Control (Git)",
      "Introduction IDE XCode & Human Interface Guidelines",
      "Slicing UI and Navigation",
      "Animation and Package",
      "Concurrency",
      "Core Data",
      "Networking",
      "Architecture Pattern Aplikasi iOS (MVVM)",
      "Testing",
    ],
    flutter: [
      "Version Control (Git)",
      "Basic Dart & Intro Flutter",
      "Slicing UI, Navigation, & Assets",
      "Package & Widget Lifecycle",
      "State Management",
      "Architecture Pattern (MVC)",
      "Working with API",
      "Working with Local Storage",
      "Working with Firebase",
      "Debugging & Testing",
    ],
  };

  const weekVideos = {
    android: [
      [""],
      ["dHhnKiA_1Tc", "B189jseW8Wo"],
      [""],
      [""],
      [""],
      ["YGZ0t9RLQT8"],
      [""],
      [""],
      [""],
      ["py1I8t9cKm4"],
    ],
    ios: [
      [""],
      ["K3q7fwjotrY", "--pKxWk1K0Q"],
      ["SQKbTdDCio0"],
      [""],
      [""],
      [""],
      [""],
      [""],
      ["py1I8t9cKm4"],
    ],
    flutter: [
      [""],
      ["bjuC3YXQ4co"],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      ["py1I8t9cKm4"],
    ],
  };

  const videoIdsArray = Object.values(weekVideos)
    .flat(2)
    .filter((id) => id !== "");

  const videoIds = videoIdsArray.join(",");
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${apiKey}&part=snippet,statistics`;

  function timeSince(date) {
    const now = new Date();
    const publishedDate = new Date(date);
    const seconds = Math.floor((now - publishedDate) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (let unit in intervals) {
      const interval = Math.floor(seconds / intervals[unit]);
      if (interval > 1) {
        return `${interval} ${unit}s ago`;
      } else if (interval === 1) {
        return `1 ${unit} ago`;
      }
    }

    return "just now";
  }

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.items && data.items.length > 0) {
          setVideoDetails(data.items);
        } else {
          console.log("No videos found or no items in the response");
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    fetchVideoDetails();
  }, [apiUrl]);

  return {
    platforms,
    weeks,
    videoDetails,
    timeSince,
    weekVideos,
    weekTitles,
    setPlatforms,
    setWeeks,
  };
}
