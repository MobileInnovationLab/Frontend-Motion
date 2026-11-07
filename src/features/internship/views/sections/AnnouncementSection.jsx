"use client";

import { motion } from "framer-motion";
import RecruitmentAnnouncementCard from "../InternshipAnnouncementView";
import useStaticOption from "@/features/internship/hooks/useStaticOption";

const AnnouncementSection = ({ announcementRef }) => {
  const { value: isAnnouncementActive } = useStaticOption("is_announcement_active", "1");
  const isHidden = isAnnouncementActive === "0" || isAnnouncementActive === "false" || isAnnouncementActive === false;

  if (isHidden) {
    return null;
  }

  return (
    <section ref={announcementRef} className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RecruitmentAnnouncementCard />
      </motion.div>
    </section>
  );
};

export default AnnouncementSection;
