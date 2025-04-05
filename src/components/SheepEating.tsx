import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import GrassIcon from '@mui/icons-material/Flare';
import PetsIcon from '@mui/icons-material/Pets';

const SheepEating = () => {
  return (
    <Box sx={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
      {/* Grass background */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(180deg, #81c784 0%, #4caf50 100%)',
          borderRadius: '4px',
        }}
      />

      {/* Grass blades */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          style={{
            position: 'absolute',
            bottom: '40%',
            left: `${20 + index * 15}%`,
            transformOrigin: 'bottom',
          }}
        >
          <GrassIcon sx={{ color: '#2e7d32', fontSize: 30 }} />
        </motion.div>
      ))}

      {/* Sheep */}
      <motion.div
        initial={{ x: -50, y: 40 }}
        animate={{
          x: [null, 50, -50],
          y: 40,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Box
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <PetsIcon sx={{ color: 'primary.main' }} />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SheepEating; 