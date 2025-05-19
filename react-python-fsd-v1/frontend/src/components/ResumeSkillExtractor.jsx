import React, { useState } from "react";
import axios from "axios";

export default function ResumeSkillExtractor() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Tracks if form was submitted

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSkills([]);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setSubmitted(false);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/extract-skills`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSkills(response.data.skills || []);
    } catch (err) {
      console.error("Error extracting skills:", err);
      // alert("Skill extraction failed. See console for more info.");
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Resume Skill Extractor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          disabled={!file}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Extracting..." : "Upload & Extract Skills"}
        </button>
      </form>

      {submitted && !loading && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Extracted Skills:</h3>
          {skills.length > 0 ? (
            <ul className="list-disc list-inside text-green-700">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-red-600 font-medium">No skills found.</p>
          )}
        </div>
      )}
    </div>
  );
}
