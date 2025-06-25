import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

const certificates = [
  {
    title: "AWS Cloud Certification",
    issuer: "Amazon Web Services",
    file: "/certificates/aws-cert.pdf",
    type: "pdf"
  },
  {
    title: "Google DevFest Participation",
    issuer: "Google Developer Groups",
    file: "/certificates/devfest.jpg",
    type: "image"
  },
  {
    title: "IBM SkillsBuild Cloud Program",
    issuer: "IBM",
    file: "/certificates/ibm-cloud.pdf",
    type: "pdf"
  }
];

const Certificates = () => {
  const [preview, setPreview] = useState(null);

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-12 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center">Certificates</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="block p-6 bg-gray-100 shadow-md cursor-pointer dark:bg-gray-800 rounded-2xl hover:shadow-xl"
                onClick={() => cert.type === "image" && setPreview(cert.file)}
              >
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                  Issued by {cert.issuer}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {cert.type === "image" ? "Click to preview" : "Click to view/download"}
                </p>
                {cert.type === "pdf" && (
                  <a href={cert.file} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-purple-600 underline dark:text-purple-300">
                    Open PDF ↗
                  </a>
                )}
              </motion.div>
            ))}
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
                src={preview}
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
