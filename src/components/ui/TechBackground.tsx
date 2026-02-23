import { motion } from "framer-motion";

interface TechBackgroundProps {
  variant?: "grid" | "particles" | "circuit";
  className?: string;
}

const TechBackground = ({ variant = "grid", className = "" }: TechBackgroundProps) => {
  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl bg-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl bg-secondary/10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    );
  }

  if (variant === "circuit") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute inset-0 circuit-pattern opacity-50" />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${20 + i * 15}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  // Default: grid
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 data-lines opacity-30" />
      
      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default TechBackground;
