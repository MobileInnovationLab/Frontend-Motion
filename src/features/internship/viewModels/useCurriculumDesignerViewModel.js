"use client";

import { useEffect, useState } from "react";

export default function useCurriculumDesignerViewModel() {
  const [weeks, setWeeks] = useState(Array(10).fill(false));
  const [videoDetails, setVideoDetails] = useState([]);

  const weekVideos = [
    ["PmKJ3IZtIBk"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ];

  const weekTitles = [
    "Design Sprint",
    "User Research",
    "User Persona + Information Architecture",
    "UX Flow + User Journey Map",
    "Gestalt Principle",
    "UX Writing",
    "Optimizing Design Process with Design System",
    "Interactive Prototyping",
    "Usability Testing",
    "Unspoken Responsibilities of UX Designers in Ethical Design",
  ];

  const videoIdsArray = Object.values(weekVideos)
    .flat(2)
    .filter((id) => id !== "");
  console.log("Video IDs Array:", videoIdsArray);

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
        console.log(data.items);

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
    weeks,
    videoDetails,
    timeSince,
    weekVideos,
    weekTitles,
    setWeeks,
  };
}
