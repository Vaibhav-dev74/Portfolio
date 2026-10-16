import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Eye, Search, X, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";
import PageTransition from "../components/PageTransition";
import { certificationsData } from "../data/portfolioData";

const categories = ["All", "Internship", "Course", "Badge"];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [previewFile, setPreviewFile] = useState(null);

  const filteredCertificates = useMemo(() => {
    return certificationsData.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;

      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-20 bg-slate-950 text-slate-100 radial-ambient bg-grid-slate">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Award size={14} /> Verified Credentials
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Certifications & Badges
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-base text-slate-400">
                Industry-recognized certifications and structured learning programs in Full-Stack Development, Data Analytics, Python, and Artificial Intelligence.
              </p>
            </div>
          </RevealOnScroll>

          {/* Search & Filter Controls */}
          <div className="mb-12 space-y-5">
            <div className="max-w-md mx-auto relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search certificate by title, issuer, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-400 placeholder:text-slate-500 transition shadow-inner"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all ${
                    selectedCategory === cat
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Certificate Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCertificates.map((cert, idx) => (
                <motion.div
                  layout
                  key={cert.title + idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {cert.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mb-3">
                      Issued by <span className="font-semibold text-white">{cert.issuer}</span>
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-slate-500 mb-4 truncate">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                    {cert.file && (
                      <button
                        onClick={() => setPreviewFile(cert.file)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition"
                      >
                        <Eye size={13} />
                        <span>View Certificate</span>
                      </button>
                    )}

                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition ml-auto"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {previewFile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setPreviewFile(null)}
            >
              <div
                className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-2 shadow-2xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setPreviewFile(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-slate-300 hover:text-white bg-slate-950/80 rounded-full border border-slate-700"
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>

                {previewFile.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={encodeURI(previewFile)}
                    title="Certificate Document"
                    className="w-full h-[75vh] rounded-xl border border-slate-800"
                  />
                ) : (
                  <img
                    src={encodeURI(previewFile)}
                    alt="Certificate"
                    className="max-h-[80vh] w-auto object-contain rounded-xl"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
};

export default Certificates;