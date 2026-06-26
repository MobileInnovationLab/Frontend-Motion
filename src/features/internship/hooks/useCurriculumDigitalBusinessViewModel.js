"use client";

import { useEffect, useState } from "react";

export default function useCurriculumDigitalBussinessViewModel() {
  const [weeks, setWeeks] = useState(Array(10).fill(false));
  const [videoDetails, setVideoDetails] = useState([]);

  const weekVideos = [
    ["w-1ZS3lkMJ4"],
    [""],
    [""],
    ["icnEUKBLtMc"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ];

  const weekTitles = [
    "Problem Identification & Validation",
    "User Research + Market Research",
    "Market Size + Market Feasibility",
    "Design Thinking + BMC",
    "MVP & Prototyping + Lean Startup",
    "OKR + Roles in PM & Business Intelligence",
    "Product Roadmap + PRD",
    "Prioritization + Agile & Scrum",
    "User Acceptance & QA",
    "DDLC + SDLC",
  ];

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
    weeks,
    videoDetails,
    timeSince,
    weekVideos,
    weekTitles,
    setWeeks,
  };
}
