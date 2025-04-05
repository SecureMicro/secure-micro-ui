import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Projects = () => {
  const projects = [
    {
      title: 'Secure Authentication System',
      description: 'A robust authentication system with JWT and OAuth2 support, featuring role-based access control and multi-factor authentication.',
      image: 'https://source.unsplash.com/random/400x300?security',
      tags: ['Authentication', 'JWT', 'OAuth2', 'RBAC'],
      github: 'https://github.com/securemicro/auth-system',
      demo: 'https://demo.securemicro.com/auth',
    },
    {
      title: 'Encrypted File Storage',
      description: 'Secure file storage system with end-to-end encryption, featuring secure file upload, download, and sharing capabilities.',
      image: 'https://source.unsplash.com/random/400x300?encryption',
      tags: ['Encryption', 'File Storage', 'E2EE'],
      github: 'https://github.com/securemicro/file-storage',
      demo: 'https://demo.securemicro.com/storage',
    },
    {
      title: 'API Security Gateway',
      description: 'Protect your APIs with rate limiting, authentication, and request validation. Includes monitoring and analytics dashboard.',
      image: 'https://source.unsplash.com/random/400x300?gateway',
      tags: ['API', 'Rate Limiting', 'Monitoring'],
      github: 'https://github.com/securemicro/api-gateway',
      demo: 'https://demo.securemicro.com/gateway',
    },
    {
      title: 'Secure Password Manager',
      description: 'A secure password manager with zero-knowledge encryption and secure password generation.',
      image: 'https://source.unsplash.com/random/400x300?password',
      tags: ['Password Manager', 'Encryption', 'Zero-Knowledge'],
      github: 'https://github.com/securemicro/password-manager',
      demo: 'https://demo.securemicro.com/passwords',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Secure Micro Projects
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Discover our collection of secure, modular, and production-ready micro projects
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 4,
        mt: 2 
      }}>
        {projects.map((project, index) => (
          <Box 
            key={index} 
            sx={{ 
              flexBasis: { xs: '100%', md: 'calc(50% - 16px)' },
              minWidth: 0 
            }}
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<SecurityIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects; 