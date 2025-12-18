'use client'

import React from 'react'
import { 
  Code as CodeIcon, 
  Bolt as BoltIcon, 
  Layers as LayersIcon, 
  TrendingUp as TrendingUpIcon, 
  Lock as LockIcon, 
  Rocket as RocketIcon 
} from '@mui/icons-material'

export default function WhyUsPage() {
  const reasons = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Built for Developers, Made for You",
      description: "Next.js gives you complete control. No drag-and-drop limitations—just pure, scalable code that grows with your vision.",
      stat: "100% Custom"
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40 }} />,
      title: "Lightning-Fast Performance",
      description: "Server-side rendering and automatic optimization mean your site loads instantly. Wix's bloated templates can't compete.",
      stat: "3x Faster"
    },
    {
      icon: <LayersIcon sx={{ fontSize: 40 }} />,
      title: "Your Time, Your Business",
      description: "We build. You focus on what matters—growing your business, not wrestling with website builders at 2am.",
      stat: "Zero Hassle"
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "SEO That Actually Works",
      description: "Next.js is built for search engines. Better rankings, more visibility, more customers. Wix SEO is fighting with one hand tied.",
      stat: "Higher Rankings"
    },
    {
      icon: <LockIcon sx={{ fontSize: 40 }} />,
      title: "Own Your Platform",
      description: "No vendor lock-in. Your code, your data, your freedom. Wix holds your site hostage—we set you free.",
      stat: "Full Ownership"
    },
    {
      icon: <RocketIcon sx={{ fontSize: 40 }} />,
      title: "Infinitely Scalable",
      description: "From startup to enterprise, Next.js scales effortlessly. Wix buckles under pressure when you grow.",
      stat: "No Limits"
    }
  ]

  const comparisonRows = [
    { feature: 'Performance', nextjs: 'Blazing Fast', wix: 'Slow & Bloated' },
    { feature: 'Customization', nextjs: 'Unlimited', wix: 'Template Jail' },
    { feature: 'Your Time', nextjs: 'For Your Business', wix: 'Wasted on DIY' },
    { feature: 'Ownership', nextjs: 'You Own It All', wix: 'Locked In' },
  ]

  return (
    <div>

    </div>
  )
}