"use client";

import { BeatLoader } from "react-spinners";
import useRecruitmentRegisterViewModel, {
  divisionOptions,
  generationOptions,
  majorOptions,
  linkSoal,
} from "../viewModels/useRecruitmentRegisterViewModel";
import RecruitmentTextInputField from "@/core/components/input/RecruitmentTextInputField";
import RecruitmentSelectInputField from "@/core/components/input/RecruitmentSelectInputField";
import InternshipNavbar from "../components/navbar/InternshipNavbar";
import { useState } from 'react';
import Modal from './InternshipRegisterGuideModal';
import { motion, AnimatePresence } from "framer-motion";


const InternshipRegisterView = () => {
  const { formik } = useRecruitmentRegisterViewModel();

  const [selectedDivision, setSelectedDivision] = useState('');

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    formik.handleChange(e);
  };

  const getOrGenerateLink = () => {
    const storedLink = localStorage.getItem('randomizedLink');
  
    if (storedLink) {
      return storedLink;
    } else {
      const newRandomizedLink = linkSoal[Math.floor(Math.random() * linkSoal.length)];
      localStorage.setItem('randomizedLink', newRandomizedLink);
      return newRandomizedLink;
    }
  };

  const getPortfolioLabel = () => {
    if(selectedDivision == "Digital Business"){
      const link = getOrGenerateLink();
      return { 
        portfolioLabel: 
        (
          <>
            BMC{' '} <span className="text-[#F82F1E]">*</span> (Required for DB){' '}
            <span class="rounded-full bg-red-500 ms-1 px-2 py-1 text-xs font-bold mr-3">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">Soal DB</a>
            </span>
          </>
        ),
        portfolioPlaceholder: 'Link Folder BMC'
      };
    } else if(selectedDivision == "Mobile Programming"){
      return { 
        portfolioLabel: 
        (
          <>
            Portofolio{' '} <span className="text-[#F82F1E]">*</span> (Include github link in the portfolio){' '}
          </>
        ),
        portfolioPlaceholder: 'Link Portfolio'
      };
    } else {
      return {
        portfolioLabel: <>Portofolio <span className="text-[#F82F1E]">*</span></>,
        portfolioPlaceholder: 'Link Portfolio'
      };
    }
  };

  const { portfolioLabel, portfolioPlaceholder } = getPortfolioLabel();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const inputVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: (i) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    })
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InternshipNavbar />
      <div className="container mx-auto py-20">
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Register for Internship
          </motion.h1>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "university", label: "University", type: "text" },
              { name: "major", label: "Major", type: "text" },
              { name: "semester", label: "Current Semester", type: "number" }
            ].map((field, index) => (
              <motion.div 
                key={field.name}
                custom={index}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  name={field.name}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F82F1E] focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>
            ))}
            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="visible"
            >
              <motion.button
                type="submit"
                className="w-full bg-[#F82F1E] text-white py-3 rounded-md hover:bg-[#C1271A] transition duration-300"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Application
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipRegisterView;
