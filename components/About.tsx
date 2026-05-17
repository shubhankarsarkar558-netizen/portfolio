"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-linear-to-b from-slate-50 via-slate-100/60 to-slate-50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight relative group inline-block pb-3">
            About
            <span className="text-purple-600 dark:text-purple-500 mx-2">
              Me
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I build intelligent systems using Machine Learning and Data
            Analytics to solve real-world problems with data-driven insights.
          </p>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Para 1 */}
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            My journey into technology started with curiosity about how data and
            intelligent systems work. Over time, that curiosity evolved into a
            passion for
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Machine Learning
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Data Analytics
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Artificial Intelligence
            </span>
            .
          </p>

          {/* Para 2 */}
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I focus on building predictive models and extracting meaningful
            insights from data using
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Python
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Pandas
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Scikit-learn
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              TensorFlow
            </span>
            . I’ve worked on projects involving
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Salary Prediction
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Disease Prediction
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Data Visualization
            </span>
            to solve practical business and analytical challenges.
          </p>

          {/* Quote */}
          <div className="rounded-xl border border-slate-200/60 dark:border-slate-800 bg-gray-300/50 dark:bg-slate-900/50 backdrop-blur-md px-6 py-5">
            <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
              &#34;I believe powerful solutions are created when data,
              intelligence and simplicity come together.&#34;
            </p>
          </div>

          {/* Para 3 */}
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Beyond coding, I enjoy exploring modern AI technologies and working
            on innovative projects involving
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Deep Learning
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Data Analysis
            </span>
            ,
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Model Training
            </span>
            and
            <span className="font-medium mx-1.5 text-purple-600 dark:text-purple-400">
              Predictive Analytics
            </span>
            — continuously improving my skills in AI and intelligent systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}