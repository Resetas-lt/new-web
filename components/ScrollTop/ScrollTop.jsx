// LIBRARIES
import ScrollToTop from "react-scroll-to-top";

// ICONS
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  return (
    <div title="Grįžti į viršų">
      <ScrollToTop
        className="flex justify-center items-center transition ease-in-out dark:!bg-slate-600 hover:bg-red-600 dark:hover:bg-red-800 hover:text-white"
        smooth
        component={<FaArrowUp size={30} />}
      />
    </div>
  );
};

export default ScrollTop;
