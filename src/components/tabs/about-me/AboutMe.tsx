"use client";

import { ABOUT_ME } from "@/constants/constants";
import { Mail, Phone, Linkedin, Github, Download, Map } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  const handleDownload = (filename: string, displayName: string) => {
    const link = document.createElement("a");
    link.href = `/assets/documents/${filename}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-8">
        <section className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
          <h2 className="text-2xl sm:text-2xl font-bold text-gray-200 mb-4 uppercase tracking-widest drop-shadow-lg">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg sm:text-lg mb-6 group-hover:text-gray-200 transition-colors">
            {ABOUT_ME.DESCRIPTION}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`mailto:${ABOUT_ME.EMAIL}`}
              className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
              <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors truncate">{ABOUT_ME.EMAIL}</span>
            </Link>
            <Link
              href={`tel:${ABOUT_ME.PHONE}`}
              className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
              <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors">{ABOUT_ME.PHONE}</span>
            </Link>
            <Link
              href={ABOUT_ME.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
              <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors">LinkedIn Profile</span>
            </Link>
            <Link
              href={ABOUT_ME.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
              <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors">GitHub Profile</span>
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-widest drop-shadow-lg">
              {ABOUT_ME.PERSONAL_DETAILS}
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded border border-white/10 hover:border-white/20 transition-all group/item hover:-translate-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">Full Name</p>
                <p className="text-gray-200 font-medium group-hover/item:text-gray-100 transition-colors">{ABOUT_ME.FULL_NAME}</p>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/10 hover:border-white/20 transition-all group/item hover:-translate-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">Birth Date</p>
                <p className="text-gray-200 font-medium group-hover/item:text-gray-100 transition-colors">{ABOUT_ME.BIRTH_DATE}</p>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/10 hover:border-white/20 transition-all group/item hover:-translate-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">Gender</p>
                <p className="text-gray-200 font-medium group-hover/item:text-gray-100 transition-colors">{ABOUT_ME.GENDER}</p>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/10 hover:border-white/20 transition-all group/item hover:-translate-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">Nationality</p>
                <p className="text-gray-200 font-medium group-hover/item:text-gray-100 transition-colors">{ABOUT_ME.NATIONALITY}</p>
              </div>
              <div className="p-3 bg-white/5 rounded border border-white/10 hover:border-white/20 transition-all group/item hover:-translate-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">Languages</p>
                <p className="text-gray-200 font-medium group-hover/item:text-gray-100 transition-colors">{ABOUT_ME.LANGUAGES}</p>
              </div>
            </div>
          </section>

          <section className="animate-card-slide bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-widest drop-shadow-lg">
              Download Documents
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleDownload("resume.pdf", "Sidath Rathnayake - CV.pdf")}
                className="w-full flex items-center justify-between gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group/btn hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-gray-300 group-hover/btn:text-gray-100 transition-colors" />
                  <span className="text-gray-300 group-hover/btn:text-gray-100 transition-colors font-medium">Resume (CV)</span>
                </div>
                <span className="text-xs text-gray-400 group-hover/btn:text-gray-300 transition-colors">PDF</span>
              </button>
              {/* <button
                onClick={() => handleDownload("Sidath_Rathnayake_Cover_Letter.pdf", "Sidath Rathnayake - Cover letter.pdf")}
                className="w-full flex items-center justify-between gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group/btn hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-gray-300 group-hover/btn:text-gray-100 transition-colors" />
                  <span className="text-gray-300 group-hover/btn:text-gray-100 transition-colors font-medium">Cover Letter</span>
                </div>
                <span className="text-xs text-gray-400 group-hover/btn:text-gray-300 transition-colors">PDF</span>
              </button> */}
              <div className="pt-4 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-widest drop-shadow-lg">
                  Contact
                </h2>
                <div className="space-y-2">
                  <Link
                    href={`address:${ABOUT_ME.ADDRESS}`}
                    className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
                  >
                    <Map className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
                    <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors">{ABOUT_ME.ADDRESS}</span>
                  </Link>
                  <Link
                    href={`mailto:${ABOUT_ME.EMAIL}`}
                    className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
                    <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors truncate">{ABOUT_ME.EMAIL}</span>
                  </Link>
                  <Link
                    href={`tel:${ABOUT_ME.PHONE}`}
                    className="group/card flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1"
                  >
                    <Phone className="w-5 h-5 text-gray-300 group-hover/card:text-gray-100 transition-colors" />
                    <span className="text-gray-300 group-hover/card:text-gray-100 transition-colors">{ABOUT_ME.PHONE}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
