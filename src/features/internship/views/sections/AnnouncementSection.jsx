"use client";

import { motion } from "framer-motion";
import RecruitmentAnnouncementCard from "../InternshipAnnouncementView";

const AnnouncementSection = ({ announcementRef }) => {
  if (process.env.NEXT_PUBLIC_RECRUITMENT_ANNOUNCEMENT === "false") {
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
  }

  return null;
};

export default AnnouncementSection;
