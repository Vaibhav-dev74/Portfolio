import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

const certificates = [
  {
    title: "IBM SkillsBuild Data Analytics Internship",
    issuer: "IBM SkillsBuild",
    category: "Internship",
    issueDate: "July 2024",
    credentialID: "IBM-DA-2024-07-VAIBHAV",
    verifyLink: "https://www.credly.com/",
    description:
      "Completed Data Analytics internship covering data visualization, business intelligence and analytics fundamentals.",
    file: "/certificates/IBM SkillsBuild Data Analytics Summer Internship Certificate.pdf",
    type: "pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Professional Training Program",
    category: "Course",
    issueDate: "March 2024",
    credentialID: "FSWD-2024-VAIBHAV",
    verifyLink: null,
    description:
      "Comprehensive Full Stack training including React, Node.js, MongoDB, and REST APIs.",
    file: "/certificates/3753_Vaibhav Pratap Mishra _Full Stack Web-Development.jpg",
    type: "image",
  },
  {
    title: "Bhart Intern Internship Program",
    issuer: "Bhart Intern",
    category: "Internship",
    issueDate: "June 2024",
    credentialID: "BHART-INT-0624",
    verifyLink: null,
    description:
      "Industry internship focused on practical development experience.",
    file: "/certificates/bhart intern.pdf",
    type: "pdf",
  },
  {
    title: "Data Fundamentals Badge",
    issuer: "IBM",
    category: "Course",
    issueDate: "July 2024",
    credentialID: "IBM-DF-2024",
    verifyLink: "https://www.credly.com/",
    description:
      "Earned badge demonstrating strong understanding of data concepts.",
    file: "/certificates/DataFundamentals_Badge20240717-7-pzdtn9.pdf",
    type: "pdf",
  },
  {
    title: "Talent Battle Certification",
    issuer: "Talent Battle",
    category: "Workshop",
    issueDate: "May 2024",
    credentialID: "TB-2024-VAIBHAV",
    verifyLink: null,
    description:
      "Certified for performance in technical aptitude and coding assessment.",
    file: "/certificates/Talent batel.pdf",
    type: "pdf",
  },
  {
    title: "Technical Workshop Participation",
    issuer: "Technical Event",
    category: "Workshop",
    issueDate: "April 2024",
    credentialID: "WORKSHOP-0424",
    verifyLink: null,
    description:
      "Awarded for active participation in technical workshop.",
    file: "/certificates/certificate of participation.jpeg",
    type: "image",
  },
];

const categories = ["All", "Internship", "Course", "Workshop"];

const Certificates = () => {
  const [preview, setPreview] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;

      const matchesSearch =
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-20 text-white bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="mb-10 text-4xl font-bold text-center">
            My Certifications
          </h2>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 text-white border bg-white/10 backdrop-blur-md border-white/20 rounded-xl focus:outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-purple-600 border-purple-500"
                    : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificate Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatePresence>
              {filteredCertificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 border shadow-xl bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-purple-300">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    Issued by <span className="font-medium">{cert.issuer}</span>
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    {cert.description}
                  </p>

                  <div className="mt-3 space-y-1 text-xs text-gray-400">
                    <p><strong>Category:</strong> {cert.category}</p>
                    <p><strong>Issued:</strong> {cert.issueDate}</p>
                    <p><strong>Credential ID:</strong> {cert.credentialID}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {cert.type === "pdf" && (
                      <a
                        href={encodeURI(cert.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-300 underline"
                      >
                        View Certificate ↗
                      </a>
                    )}

                    {cert.type === "image" && (
                      <button
                        onClick={() => setPreview(cert.file)}
                        className="text-sm text-purple-300 underline"
                      >
                        Preview Image
                      </button>
                    )}

                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-400 underline"
                      >
                        Verify Credential ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {preview && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
            >
              <motion.img
                src={encodeURI(preview)}
                alt="Certificate Preview"
                className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </PageTransition>
  );
};

export default Certificates;