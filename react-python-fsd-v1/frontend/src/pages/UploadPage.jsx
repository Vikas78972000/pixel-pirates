import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [skills, setSkills] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/extract-skills/`,
        formData
      );
      setSkills(res.data.skills);
    } catch (err) {
      console.error(err);
      alert("Error extracting skills");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Resume Skill Extractor</h1>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>

      <div className="mt-6">
        <h2 className="font-semibold">Extracted Skills:</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
