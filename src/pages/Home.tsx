import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import NpmIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';

const Home = () => {
  const packages = [
    {
      name: 'secure-auth',
      description: 'A robust authentication system with JWT and OAuth2 support',
      github: 'https://github.com/yourusername/secure-auth',
      npm: 'https://www.npmjs.com/package/secure-auth',
      stars: '1.2k',
      downloads: '50k',
    },
    {
      name: 'encrypted-storage',
      description: 'Secure file storage with end-to-end encryption',
      github: 'https://github.com/yourusername/encrypted-storage',
      npm: 'https://www.npmjs.com/package/encrypted-storage',
      stars: '800',
      downloads: '30k',
    },
    {
      name: 'api-shield',
      description: 'Protect your APIs with rate limiting and authentication',
      github: 'https://github.com/yourusername/api-shield',
      npm: 'https://www.npmjs.com/package/api-shield',
      stars: '500',
      downloads: '20k',
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          flex: '0 0 auto',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <SecurityIcon sx={{ fontSize: 120, color: 'white' }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              SecureMicro
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Secure, modular, and production-ready npm packages
            </Typography>
            <Box
              sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}
            >
              <Button
                component={Link}
                href="https://github.com/securemicro"
                target="_blank"
                variant="contained"
                color="secondary"
                startIcon={<GitHubIcon />}
                sx={{ borderRadius: 2 }}
              >
                GitHub
              </Button>
              <Button
                component={Link}
                href="https://www.npmjs.com/org/securemicro"
                target="_blank"
                variant="outlined"
                color="inherit"
                startIcon={<SecurityIcon />}
                sx={{ borderRadius: 2 }}
              >
                npm
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Packages Section */}
      <Container maxWidth="lg" sx={{ 
        py: { xs: 6, md: 8 },
        flex: '1 0 auto',
      }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Featured Packages
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}>
          {packages.map((pkg) => (
            <Card key={pkg.name} sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {pkg.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {pkg.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    ⭐ {pkg.stars}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📥 {pkg.downloads}/month
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <GitHubIcon /> GitHub
                  </Link>
                  <Link
                    href={pkg.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <NpmIcon /> NPM
                  </Link>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;