import { motion } from "framer-motion";
import {
  FaLaptop,
  FaPrint,
  FaServer,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";

const HeroCards = () => {
  const icons = [
    { icon: FaLaptop, label: "Kompiuteriai" },
    { icon: FaPrint, label: "Spausdintuvai" },
    { icon: FaServer, label: "Serveriai" },
    { icon: FaNetworkWired, label: "Tinklai" },
    { icon: FaCode, label: "Programavimas" },
    { icon: FaFileContract, label: "Nuoma" },
  ];

  return (
    <div className="cards-container mt-8 grid-cols-1 md:grid-cols-3 gap-4 md:grid w-80">
      {icons.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={index}
          className="card mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: index * 0.75, duration: 1 }}
        >
          <Icon size={35} />
          <span className="mx-2">{label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroCards;
