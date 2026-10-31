import { useRef } from "react";

export const useHomeRefs = () => ({
  homeRef: useRef(null),
  aboutRef: useRef(null),
  divisionRef: useRef(null),
  projectRef: useRef(null),
  peopleRef: useRef(null),
  newsRef: useRef(null),
  contactRef: useRef(null),
});

export const useHandleNavigation = (refs) => {
  return (id) => {
    const sectionRef = refs[`${id}Ref`]; 
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
};

