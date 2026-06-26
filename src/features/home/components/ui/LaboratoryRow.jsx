"use client";

import { motion } from "framer-motion";

export default function LaboratoryRow({ rowData }) {
  return (
    <div className="flex flex-row gap-8 px-4 md:px-12 lg:px-4 py-6 overflow-x-auto">
      {rowData.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col w-[350px] min-h-[340px] justify-between rounded-3xl shadow-lg p-6 transition-transform duration-300"
        >
          <div className="w-full text-center">
            <div className="rounded-full inline-block">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-6">
            <h2 className="font-[rubik] font-semibold text-lg text-center line-clamp-2 break-words">
              {member.name}
            </h2>
            <p className="font-[inter] text-base text-center text-[#6A6A6A] mt-3 line-clamp-1 break-words">
              {member.role}
            </p>
            <hr className="w-1/2 my-4 border-[#6A6A6A]" />
            <div className="flex justify-center">
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/svg/linkedln.svg" alt="LinkedIn" />
              </motion.a>
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/svg/instagram.svg" alt="Instagram" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
