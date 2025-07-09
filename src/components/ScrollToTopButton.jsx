import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 md:bottom-6 right-6 md:right-2 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
       <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
