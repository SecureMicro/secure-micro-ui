import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SunglassesIcon from '@mui/icons-material/DarkMode';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AnimatedSheep = () => {
  return (
    <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
      {/* Cloud background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      />

      {/* Sheep 1 - With Shield */}
      <motion.div
        initial={{ x: -100, y: 50 }}
        animate={{
          x: [null, 300, -100],
          y: 50,
        }}
        transition={{
          duration: 8,
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
          <SecurityIcon sx={{ color: 'primary.main' }} />
        </Box>
      </motion.div>

      {/* Sheep 2 - With Sunglasses */}
      <motion.div
        initial={{ x: -100, y: 80 }}
        animate={{
          x: [null, 300, -100],
          y: 80,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2
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
          <SunglassesIcon sx={{ color: 'primary.main' }} />
        </Box>
      </motion.div>

      {/* Sheep 3 - With Laser Eye */}
      <motion.div
        initial={{ x: -100, y: 110 }}
        animate={{
          x: [null, 300, -100],
          y: 110,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 4
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
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <VisibilityIcon sx={{ color: 'error.main' }} />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AnimatedSheep; 