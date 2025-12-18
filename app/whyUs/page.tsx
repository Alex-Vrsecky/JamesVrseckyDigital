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
import Header from "components/header";

export default function WhyUsPage() {
  const reasons = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Built for Developers, Made for You",
      description:
        "Next.js gives you complete control. No drag-and-drop limitations—just pure, scalable code that grows with your vision.",
      stat: "100% Custom",
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40 }} />,
      title: "Lightning-Fast Performance",
      description:
        "Server-side rendering and automatic optimization mean your site loads instantly. Wix's bloated templates can't compete.",
      stat: "3x Faster",
    },
    {
      icon: <LayersIcon sx={{ fontSize: 40 }} />,
      title: "Your Time, Your Business",
      description:
        "We build. You focus on what matters—growing your business, not wrestling with website builders at 2am.",
      stat: "Zero Hassle",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "SEO That Actually Works",
      description:
        "Next.js is built for search engines. Better rankings, more visibility, more customers.",
      stat: "Higher Rankings",
    },
    {
      icon: <LockIcon sx={{ fontSize: 40 }} />,
      title: "Own Your Platform",
      description: "No vendor lock-in. Your code, your data, your freedom.",
      stat: "Full Ownership",
    },
    {
      icon: <RocketIcon sx={{ fontSize: 40 }} />,
      title: "Infinitely Scalable",
      description: "From startup to enterprise, Next.js scales effortlessly.",
      stat: "No Limits",
    },
  ];

  const comparisonRows = [
    { feature: "Performance", nextjs: "Blazing Fast", wix: "Slow & Bloated" },
    { feature: "Customization", nextjs: "Unlimited", wix: "Template Jail" },
    { feature: "Your Time", nextjs: "For Your Business", wix: "Wasted on DIY" },
    { feature: "Ownership", nextjs: "You Own It All", wix: "Locked In" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-5 sm:p-20">
      {/* Header */}
      <Header />
      <h1 className="text-4xl font-bold mb-12 text-center text-black">
        Why Choose Next.js Over Wix for Your Website?
      </h1>
      {/* Reasons */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="border rounded-md p-6 hover:shadow-md transition"
          >
            <div className="mb-4 text-black">{reason.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
            <p className="text-md text-gray-600 mb-4">{reason.description}</p>
            <span className="text-lg font-semibold text-[#ABE188] underline">
              {reason.stat}
            </span>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Next.js vs Wix
        </h2>

        <div className="overflow-x-auto bg-gray-800">
          <table className="w-full borderrounded-lg overflow-hidden ">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-4">Feature</th>
                <th className="text-left p-4">Our Next.js Sites</th>
                <th className="text-left p-4">Wix</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-[#ABE188]">{row.nextjs}</td>
                  <td className="p-4 text-[#F78E69]">{row.wix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
