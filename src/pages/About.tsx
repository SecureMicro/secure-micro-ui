import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupIcon from '@mui/icons-material/Group';

const About = () => {
  const values = [
    {
      icon: <SecurityIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Security First',
      description: 'We prioritize security in every aspect of our projects, ensuring robust protection against threats.',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Clean Code',
      description: 'Our codebase follows best practices and is well-documented for maintainability.',
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure reliable and secure solutions.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Community Driven',
      description: 'We believe in open source and community collaboration for better security solutions.',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About SecureMicro
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Building a Secure Digital Future
      </Typography>

      {/* Mission Statement */}
      <Paper sx={{ p: 4, mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          At SecureMicro, we are dedicated to creating secure, modular, and production-ready micro projects
          that help developers build safer applications. Our mission is to make security accessible and
          implementable for everyone, from small startups to large enterprises.
        </Typography>
      </Paper>

      {/* Values */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Our Values
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: 4,
        mb: 6 
      }}>
        {values.map((value, index) => (
          <Box 
            key={index}
            sx={{ 
              flexBasis: { xs: '100%', md: 'calc(50% - 16px)' },
              minWidth: 0
            }}
          >
            <Paper sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                {value.icon}
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {value.title}
                </Typography>
                <Typography color="text.secondary">
                  {value.description}
                </Typography>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Story */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Story
        </Typography>
        <Typography paragraph>
          Founded in 2024, SecureMicro emerged from a simple observation: while security is crucial in
          modern software development, many developers struggle to implement it correctly. We set out to
          create a collection of secure, well-tested micro projects that developers can easily integrate
          into their applications.
        </Typography>
        <Typography>
          Today, we continue to grow our collection of secure micro projects, focusing on common security
          challenges and providing solutions that are both secure and easy to implement. Our commitment to
          security and quality has made us a trusted resource for developers worldwide.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About; 