// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-2xl border border-gray-200">
  <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
    About Resume Skill Extractor
  </h1>

  <p className="text-gray-700 text-lg mb-4">
    <span className="font-semibold text-indigo-600">Resume Skill Extractor</span> is a smart web application that enables users to upload resumes and automatically extract essential job-related skills using advanced Natural Language Processing (NLP) techniques.
  </p>

  <p className="text-gray-700 text-base mb-6">
    This project was created during the GUVI Hackathon to simplify resume screening for recruiters and enhance visibility for job seekers. By uploading a resume in PDF or DOCX format, users can instantly identify skillsets that are relevant and recognized by employers.
  </p>

  <div className="bg-blue-50 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-blue-800 mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
      <li><strong>React + Tailwind CSS</strong> – Frontend Interface</li>
      <li><strong>FastAPI + Python</strong> – Backend API</li>
      <li> <strong>Netlify & Railway</strong> – Deployment Platforms</li>
    </ul>
  </div>

  <div className="bg-green-50 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-green-800 mb-2"> Key Features</h2>
    <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
      <li>Upload PDF or DOCX resumes with ease</li>
      <li>Extract and highlight core technical and soft skills</li>
      <li>Built with modern frameworks for speed and scalability</li>
      <li>Easy-to-use, clean interface with mobile support</li>
    </ul>
  </div>

  <div className="bg-purple-50 p-4 rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-purple-800 mb-2"> Team PIXEL PIRATES</h2>
    <p className="text-gray-700 mb-2">This project is proudly built by:</p>
    <ul className="list-disc list-inside ml-4 text-gray-800 space-y-1">
      <li><strong>Vikas Yadav</strong> </li>
      <li><strong>Sanjeev Kumar</strong></li>
      <li><strong>Vishv Pratap Singh</strong></li>
    </ul>
  </div>

  <div className="text-center text-gray-600 text-sm mt-8">
     Built with passion, innovation, and teamwork by <span className="font-semibold text-indigo-600">PIXEL PIRATES</span>.
  </div>
</div>

  );
}
