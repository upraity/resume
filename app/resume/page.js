"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function Resume() {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: "",
    intro: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(form.name || "Your Name", 20, 20);
    doc.setFontSize(12);
    doc.text("Summary:", 20, 35);
    doc.text(form.intro || "-", 20, 42, { maxWidth: 170 });
    doc.text("Skills:", 20, 70);
    doc.text(form.skills || "-", 20, 77, { maxWidth: 170 });
    doc.text("Experience:", 20, 105);
    doc.text(form.experience || "-", 20, 112, { maxWidth: 170 });
    doc.save("resume.pdf");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Resume Builder (Basic Demo)</h1>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <textarea name="intro" placeholder="Professional Summary" onChange={handleChange} /><br /><br />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} /><br /><br />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} /><br /><br />

      <button onClick={downloadPDF}>Download PDF</button>

      <hr />
      <h2>Live Preview</h2>
      <h3>{form.name}</h3>
      <p><b>Summary:</b> {form.intro}</p>
      <p><b>Skills:</b> {form.skills}</p>
      <p><b>Experience:</b> {form.experience}</p>
    </div>
  );
}
