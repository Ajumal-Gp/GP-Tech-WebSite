import { motion } from "framer-motion";

const TechLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center gap-8">
        {/* New CSS Loader */}
        <div className="loader" />

        {/* Decorative circuit lines */}
        <div className="absolute -inset-20 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              style={{
                left: `${25 + i * 20}%`,
                top: 0,
                bottom: 0,
              }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechLoader;
