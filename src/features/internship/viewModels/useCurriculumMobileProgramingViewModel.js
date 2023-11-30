"use client";

import { useState } from "react";

export default function useCurriculumMobileProgrammingViewModel() {
  const [android, setAndroid] = useState(true);
  const [ios, setIos] = useState(true);
  const [flutter, setFlutter] = useState(true);

  return {
    android,
    ios,
    flutter,
    setAndroid,
    setIos,
    setFlutter,
  };
}
