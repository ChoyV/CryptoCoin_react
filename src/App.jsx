import Header from "./Components/Header/Header";
import FirstBlock from "./Components/1block/FirstBlock";
import SecondBlock from "./Components/2block/SecondBlock";
import ThirdBlock from "./Components/3block/ThirdBlock";
import FithBlock from "./Components/5block/FithBlock";
import FourthBlock from "./Components/4block/FourthBlock";
import SixthBlock from "./Components/6block/SixthBlock";
import SeventhBlock from "./Components/7block/SeventhBlock";
import EigthBlock from "./Components/8block/EigthBlock";
import Bottom from "./Components/Bottom/Bottom";
import Mobile from "./Components/Mobile/Mobile";

import { motion } from "framer-motion";

function App() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Header />
          <FirstBlock />
          <SecondBlock />
          <ThirdBlock />
          <FourthBlock />
          <FithBlock />
          <SixthBlock />
          <SeventhBlock />
          <EigthBlock />
          <Bottom />
        </motion.div>
      )}
    </>
  );
}

export default App;
