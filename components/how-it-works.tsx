"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { BsCircle } from "react-icons/bs";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [taskProgress, setTaskProgress] = useState(0);

  const tasks = [
    { id: 1, name: "Design Homepage", completed: false },
    { id: 2, name: "Create Brand Assets", completed: false },
    { id: 3, name: "Develop Components", completed: false },
    { id: 4, name: "Final Review", completed: false },
  ];

  const steps = [
    {
      number: 1,
      title: "Choose Your Plan",
      description: "Select Website Development (starting from $1,499) or Monthly Retainer based on your goals",
      tasksToComplete: 0,
    },
    {
      number: 2,
      title: "Submit Your Request",
      description: "Share your requirements and we'll prioritize your tasks",
      tasksToComplete: 1,
    },
    {
      number: 3,
      title: "Watch Us Deliver",
      description: "Track progress in real-time as we complete your project",
      tasksToComplete: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStep = steps[activeStep];
    const targetProgress = currentStep.tasksToComplete;
    
    // Reset and animate to target progress
    setTaskProgress(0);
    
    if (targetProgress > 0) {
      const taskInterval = setInterval(() => {
        setTaskProgress((prev) => {
          if (prev < targetProgress) {
            return prev + 1;
          }
          clearInterval(taskInterval);
          return prev;
        });
      }, 600);

      return () => clearInterval(taskInterval);
    }
  }, [activeStep]);

  const completedCount = taskProgress;
  const totalTasks = tasks.length;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            From first call to project delivery - see exactly how we work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Tasks Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <HiCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Project Tasks</h3>
                <p className="text-gray-600">Your design backlog</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {tasks.map((task, index) => {
                const isCompleted = index < completedCount;
                return (
                  <motion.div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {isCompleted ? (
                      <motion.div
                        className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <HiCheck className="w-4 h-4 text-white" />
                      </motion.div>
                    ) : (
                      <BsCircle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                    )}
                    <motion.span
                      className={`text-lg ${
                        isCompleted ? "text-gray-500 line-through" : "text-gray-900"
                      }`}
                      animate={{
                        opacity: isCompleted ? 0.6 : 1,
                      }}
                    >
                      {task.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Progress</span>
                <motion.span
                  key={completedCount}
                  className="text-sm font-semibold text-gray-700"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  {completedCount}/{totalTasks}
                </motion.span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-orange-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedCount / totalTasks) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 relative">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              
              return (
                <motion.div
                  key={step.number}
                  className={`bg-white rounded-2xl p-6 border-2 ${
                    isActive
                      ? "border-gray-900 shadow-lg z-10"
                      : "border-gray-200 opacity-50"
                  }`}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1.02 : 1,
                    y: isActive ? 0 : 10,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Step {step.number}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    animate={{
                      color: isActive ? "#111827" : "#6B7280",
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

