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

  // const downloadPDF = () => {
  //   const doc = new jsPDF();
  //   doc.setFontSize(20);
  //   doc.text(form.name || "Your Name", 20, 20);
  //   doc.setFontSize(12);
  //   doc.text("Summary:", 20, 35);
  //   doc.text(form.intro || "-", 20, 42, { maxWidth: 170 });
  //   doc.text("Skills:", 20, 70);
  //   doc.text(form.skills || "-", 20, 77, { maxWidth: 170 });
  //   doc.text("Experience:", 20, 105);
  //   doc.text(form.experience || "-", 20, 112, { maxWidth: 170 });
  //   doc.save("resume.pdf");
  // };
  const downloadPDF = () => {
  const doc = new jsPDF();

  if (template === "simple") {
    // Header
    doc.setFontSize(20);
    doc.text(form.name, 20, 20);

    doc.setFontSize(12);
    doc.text("Professional Summary", 20, 35);
    doc.text(improvedIntro || form.intro, 20, 42, { maxWidth: 170 });

    doc.text("Skills", 20, 65);
    doc.text(form.skills, 20, 72, { maxWidth: 170 });

    doc.text("Experience", 20, 95);
    doc.text(form.experience, 20, 102, { maxWidth: 170 });
  }

  if (template === "modern") {
    // Sidebar background
    doc.setFillColor(230, 230, 230);
    doc.rect(0, 0, 60, 297, "F");

    doc.setFontSize(16);
    doc.text(form.name, 70, 20);

    doc.setFontSize(12);
    doc.text("Summary", 70, 35);
    doc.text(improvedIntro || form.intro, 70, 42, { maxWidth: 120 });

    doc.text("Skills", 10, 40);
    doc.text(form.skills, 10, 47, { maxWidth: 40 });

    doc.text("Experience", 70, 80);
    doc.text(form.experience, 70, 87, { maxWidth: 120 });
  }

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
