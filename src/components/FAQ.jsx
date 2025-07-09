import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasiLorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasiLorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
  {
    question: "What is your return policy?",
    answer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia itaque harum quasi debitis nostrum obcaecati autem sint corporis fuga odit."
  },
 

];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-5xl text-white mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {activeIndex === index ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-100 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
