'use client'

import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider
} from '@mui/material'
import { 
  RocketLaunch as RocketLaunchIcon,
  Article as ArticleIcon,
  Speed as SpeedIcon,
  SwapHoriz as SwapHorizIcon,
  CloudUpload as CloudUploadIcon,
  ContentCopy as ContentCopyIcon,
  Extension as ExtensionIcon,
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Security as SecurityIcon,
  Timeline as TimelineIcon,
  Stars as StarsIcon,
  Storage as StorageIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material'

export default function ImplementationPage() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes requirements analysis, technical specification, and project roadmap.",
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes, developing a custom design system that reflects your brand while optimizing user experience.",
    },
    {
      step: 3,
      title: "Development",
      description: "We build your website using Next.js, implementing all features, integrations, and optimizations. Regular updates keep you informed of progress.",
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Comprehensive testing ensures everything works perfectly. We handle deployment, training, and provide launch support for a smooth go-live.",
    },
    {
      step: 5,
      title: "Ongoing Support",
      description: "After launch, we provide maintenance, updates, and support to ensure your website continues to perform at its best.",
    }
  ]

  const specializedServices = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      service: "Discovery & Planning",
      description: "Requirements analysis, Technical specification, Architecture design, Project roadmap",
      investment: "$3,750 - $7,500"
    },
    {
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      service: "UI/UX Design",
      description: "Custom design system, Wireframing, Prototyping, User experience optimization",
      investment: "$5,000 - $15,000"
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      service: "Performance Optimization",
      description: "Code optimization, SEO improvements, Speed enhancements, Lighthouse scoring",
      investment: "$3,000 - $10,000"
    },
    {
      icon: <SwapHorizIcon sx={{ fontSize: 40 }} />,
      service: "Migration Services",
      description: "Platform migration to Next.js, Legacy system modernization, Data migration",
      investment: "$10,000 - $50,000+"
    }
  ]

  const setupServices = [
    {
      icon: <CloudUploadIcon sx={{ fontSize: 32 }} />,
      service: "Domain & Hosting Setup",
      description: "Domain configuration, Vercel/AWS deployment, SSL certificates",
      price: "$500 - $1,500"
    },
    {
      icon: <ContentCopyIcon sx={{ fontSize: 32 }} />,
      service: "Content Migration",
      description: "Transfer existing content, Database setup, SEO preservation",
      price: "$2,000 - $7,500"
    },
    {
      icon: <ExtensionIcon sx={{ fontSize: 32 }} />,
      service: "Third-Party Setup",
      description: "Analytics, Payment gateways, Email services, CRM integration",
      price: "$1,500 - $5,000"
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 32 }} />,
      service: "Training & Documentation",
      description: "Client training, Technical documentation, Admin guides",
      price: "$2,000 - $5,000"
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
      service: "Launch Support",
      description: "Pre-launch testing, Go-live support, Post-launch monitoring",
      price: "$1,500 - $3,500"
    }
  ]

  const maintenancePackages = [
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      tier: "Basic Maintenance",
      description: "Security updates, Dependency updates, Bug fixes, Email support",
      price: "$500 - $1,000"
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 32 }} />,
      tier: "Standard Maintenance",
      description: "Everything in Basic plus: Performance monitoring, Content updates, Priority support",
      price: "$1,000 - $2,500"
    },
    {
      icon: <StarsIcon sx={{ fontSize: 32 }} />,
      tier: "Premium Maintenance",
      description: "Everything in Standard plus: Feature enhancements, 24/7 support, SLA guarantee",
      price: "$2,500 - $5,000"
    },
    {
      icon: <StorageIcon sx={{ fontSize: 32 }} />,
      tier: "Hosting & Infrastructure",
      description: "Server management, CDN, Backups, Database optimization",
      price: "$200 - $1,000"
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
      tier: "Retainer Hours",
      description: "Pre-paid development hours for updates and new features",
      price: "$150 - $200/hour"
    }
  ]

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', color: 'black'}}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        {/* Hero Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 8, sm: 10, md: 12 },
            borderBottom: '2px solid black',
            pb: { xs: 6, sm: 8 }
          }}
        >
          <Chip 
            label="SUPPORT & IMPLEMENTATION" 
            sx={{ 
              mb: 3,
              border: '1px solid black',
              bgcolor: 'transparent',
              fontWeight: 600,
              letterSpacing: 2
            }} 
          />

          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              fontWeight: 700,
              mb: { xs: 3, sm: 4 },
              lineHeight: 1.2
            }}
          >
            How We Support Your Success
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              px: 2
            }}
          >
            Our dedicated implementation support ensures your new website is seamlessly integrated into your business operations, providing you with the tools and assistance needed for a smooth transition and ongoing success.
          </Typography>
        </Box>

        {/* Process Section */}
        <Box sx={{ mb: { xs: 10, sm: 12, md: 14 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 5, sm: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center'
            }}
          >
            Our Process
          </Typography>

          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} key={index}>
                <Card 
                  sx={{ 
                    border: '2px solid black',
                    borderRadius: 0,
                    boxShadow: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .step-number': {
                        bgcolor: 'white',
                        color: 'black'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, sm: 3 } }}>
                      <Box 
                        className="step-number"
                        sx={{ 
                          minWidth: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          border: '2px solid black',
                          bgcolor: 'black',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: { xs: '1.5rem', sm: '2rem' },
                          transition: 'all 0.3s'
                        }}
                      >
                        {step.step}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 700,
                              fontSize: { xs: '1.3rem', sm: '1.5rem' }
                            }}
                          >
                            {step.title}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            lineHeight: 1.6,
                            fontSize: { xs: '0.95rem', sm: '1rem' }
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Specialized Services Section */}
        <Box sx={{ mb: { xs: 10, sm: 12, md: 14 }, borderTop: '2px solid black', pt: { xs: 8, sm: 10 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center'
            }}
          >
            Additional Development Services
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 5, sm: 6 },
              color: '#555',
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Specialized Services
          </Typography>

          <Grid container spacing={{ xs: 4, sm: 5 }}>
            {specializedServices.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: '1px solid black',
                    borderRadius: 0,
                    boxShadow: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .icon-box': {
                        borderColor: 'white'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box 
                      className="icon-box"
                      sx={{ 
                        width: { xs: 56, sm: 64 },
                        height: { xs: 56, sm: 64 },
                        border: '1px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'border-color 0.3s'
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '1.1rem', sm: '1.3rem' }
                      }}
                    >
                      {item.service}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '1rem', sm: '1.1rem' }
                      }}
                    >
                      {item.investment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Setup Services Section */}
        <Box sx={{ mb: { xs: 10, sm: 12, md: 14 }, borderTop: '2px solid black', pt: { xs: 8, sm: 10 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center'
            }}
          >
            Implementation & Support
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 5, sm: 6 },
              color: '#555',
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Project Setup & Launch
          </Typography>

          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {setupServices.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: '1px solid black',
                    borderRadius: 0,
                    boxShadow: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .icon-box': {
                        borderColor: 'white'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
                    <Box 
                      className="icon-box"
                      sx={{ 
                        width: 48,
                        height: 48,
                        border: '1px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'border-color 0.3s'
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: { xs: '1rem', sm: '1.1rem' }
                      }}
                    >
                      {item.service}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        lineHeight: 1.5,
                        mb: 2,
                        fontSize: { xs: '0.85rem', sm: '0.9rem' }
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '0.95rem', sm: '1rem' }
                      }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Maintenance Packages Section */}
        <Box sx={{ mb: { xs: 10, sm: 12, md: 14 }, borderTop: '2px solid black', pt: { xs: 8, sm: 10 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center'
            }}
          >
            Ongoing Maintenance & Support
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 5, sm: 6 },
              color: '#555',
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Monthly Maintenance Packages
          </Typography>

          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {maintenancePackages.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: '1px solid black',
                    borderRadius: 0,
                    boxShadow: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .icon-box': {
                        borderColor: 'white'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
                    <Box 
                      className="icon-box"
                      sx={{ 
                        width: 48,
                        height: 48,
                        border: '1px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'border-color 0.3s'
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: { xs: '1rem', sm: '1.1rem' }
                      }}
                    >
                      {item.tier}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        lineHeight: 1.5,
                        mb: 2,
                        fontSize: { xs: '0.85rem', sm: '0.9rem' }
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: { xs: '0.95rem', sm: '1rem' }
                      }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', borderTop: '2px solid black', pt: { xs: 6, sm: 8 } }}>
          <Paper 
            sx={{ 
              border: '2px solid black',
              borderRadius: 0,
              p: { xs: 4, sm: 6 },
              maxWidth: '800px',
              mx: 'auto',
              boxShadow: 'none'
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Ready to Get Started?
            </Typography>

            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.2rem' }
              }}
            >
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </Typography>

            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'black',
                color: 'white',
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 700,
                borderRadius: 0,
                border: '2px solid black',
                '&:hover': {
                  bgcolor: 'white',
                  color: 'black'
                }
              }}
            >
              Schedule a Consultation
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}