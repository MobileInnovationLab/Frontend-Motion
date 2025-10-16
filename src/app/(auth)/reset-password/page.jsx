"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResetPasswordPage() {
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("https://admin.motionlaboratory.com/api/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nim, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send password reset email.");
      }

      setMessage(data.message || "A password reset link has been sent to your email!");
      setNim("");
      setEmail("");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF6F6] flex items-stretch">
      <div className="w-1/2 hidden lg:flex flex-col items-center justify-center p-12">
        <Image
          src="/images/login/ilustrasi.png"
          width={500}
          height={400}
          alt="Reset Password Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="w-px bg-[#000000]" />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 lg:p-10">
          <div className="mb-6">
            <div className="w-12 h-12 relative mb-4">
              <Image
                src="/images/navbar/logo-red-transparent.png"
                fill
                alt="Motion Lab Logo"
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-[#332C2B] mb-2">
              Reset Password
            </h1>
            <p className="text-sm text-gray-600">
              Enter your Student ID (NIM) and email to receive a password reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                {message}
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Student ID (NIM)
              </label>
              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Enter your Student ID"
                required
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C1271A]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C1271A]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#858585] hover:bg-[#C1271A] text-white font-bold py-3 px-4 rounded-full transition duration-300 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-center text-[#6A6A6A]">
            Need help?{" "}
            <a
              href="mailto:motion.laboratory@gmail.com"
              className="text-[#F82F1E] hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
