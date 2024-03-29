"use client";

import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { useProgress } from "./use-progress";

export default function Page() {
  let { reset, start, done, value } = useProgress();

  return (
    <div className="min-h-screen flex flex-col px-8 gap-8 justify-center items-center">
      <div className="max-w-3xl grid grid-cols-3 w-full gap-8">
        <div className="flex items-center">
          <svg viewBox="0 0 120 120" className="-rotate-90 p-10">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              className="text-gray-700"
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
            />
            <motion.circle
              style={{
                pathLength: useTransform(value, [1, 100], [0, 1]),
                opacity: useTransform(value, [0, 1, 100], [0, 1, 1]),
              }}
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              className="text-red-500"
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <div className="relative overflow-hidden bg-gray-700 rounded-full h-2 w-full">
            <motion.div
              style={{ width: useMotionTemplate`${value}%` }}
              className="absolute inset-0 bg-sky-500"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="overflow-hidden relative px-4 py-1 bg-gray-600 rounded-lg text-white font-medium text-lg">
            <motion.div
              style={{
                clipPath: useMotionTemplate`xywh(0 0 ${value}% 100%)`,
              }}
              className="absolute inset-0 bg-green-600"
            />
            <span className="relative">Save</span>
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <button className="text-gray-400 hover:text-gray-200" onClick={reset}>
          Reset
        </button>
        <button className="text-gray-400 hover:text-gray-200" onClick={start}>
          Start
        </button>
        <button className="text-gray-400 hover:text-gray-200" onClick={done}>
          Done
        </button>
      </div>
    </div>
  );
}
