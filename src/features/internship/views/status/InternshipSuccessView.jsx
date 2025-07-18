"use client";
import { useRouter } from "next/navigation";

const InternshipSuccessView = () => {
  const router = useRouter();

  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0.8
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 20
  //     }
  //   }
  // };

  // const successIconVariants = {
  //   hidden: {
  //     scale: 0,
  //     rotate: -180
  //   },
  //   visible: {
  //     scale: 1,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 260,
  //       damping: 20,
  //       delay: 0.2
  //     }
  //   }
  // };

  // const textVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 20
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 20,
  //       delay: 0.4
  //     }
  //   }
  // };

  // const buttonVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 20
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 20,
  //       delay: 0.6
  //     }
  //   }
  // };

  // return (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto py-20">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for applying to our internship program. We will review your
          application and get back to you soon.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-[#F82F1E] text-white px-8 py-3 rounded-md hover:bg-[#C1271A] transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  </div>;
};

export default InternshipSuccessView;
