import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xvgrwyro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Inquiry",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus("error");
        setErrorMessage(
          errorData.error ||
            `Unable to send message via form endpoint. Please email me directly at ${personalInfo.email}.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `Network connection issue. Please email me directly at ${personalInfo.email}.`
      );
    }
  };

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 radial-ambient bg-grid-slate">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Mail size={14} /> Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Contact Me
              </h1>
              <p className="max-w-xl mx-auto mt-4 text-base text-slate-600 dark:text-slate-400">
                Open to software engineering roles, AI development opportunities, internships, and technical collaboration.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Column: Direct Contact Info & Profiles */}
            <div className="md:col-span-5 space-y-6">
              <RevealOnScroll delay={0.1}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Direct Contact</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Feel free to email me directly or connect via LinkedIn. I respond promptly to inquiries.
                    </p>
                  </div>

                  {/* Email Box with Copy */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm transition"
                      aria-label="Copy email"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check size={16} className="text-emerald-500 dark:text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* Social Profiles */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Verified Profiles
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 dark:hover:border-slate-700 transition group"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          <Linkedin size={18} />
                        </div>
                        <div className="text-left text-xs">
                          <p className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                            LinkedIn Profile
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">in/vaibhav-pratap-mishra</p>
                        </div>
                      </a>

                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 dark:hover:border-slate-700 transition group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                          <Github size={18} />
                        </div>
                        <div className="text-left text-xs">
                          <p className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                            GitHub Repositories
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">github.com/Vaibhav-dev74</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:col-span-7">
              <RevealOnScroll delay={0.15}>
                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                    Fill out the form below to initiate an inquiry or discussion.
                  </p>

                  {/* Live Status Banners */}
                  {status === "success" && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Message Delivered Successfully!</p>
                        <p className="text-emerald-600 dark:text-emerald-400/80 mt-0.5">
                          Thank you for reaching out. I have received your message and will get back to you shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-start gap-2.5">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="text-rose-600 dark:text-rose-400/90 mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                          Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Johnson"
                          className="w-full px-3.5 py-2.5 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                          Email Address <span className="text-cyan-600 dark:text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Job Opportunity / Project Collaboration"
                        className="w-full px-3.5 py-2.5 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1.5">
                        Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello Vaibhav, I came across your portfolio and would like to discuss..."
                        className="w-full px-3.5 py-2.5 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition resize-none shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-50 rounded-xl shadow-lg transition"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
