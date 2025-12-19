'use client'

import React, { useState } from 'react'
import { services } from 'data/services';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceDetails from './serviceDetails';

interface Service {
  name: string;
  colour: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  pricing: string;
}

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = services.filter(
    (service) => service.name !== "Why us?" && service.name !== "Contact"
  );

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      {/* Detail View */}
      <AnimatePresence mode="wait">
        {selectedService && (
          <ServiceDetails
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}
      </AnimatePresence>

      {/* Service Grid */}
      <motion.section
        layout
        className={`grid gap-2 sm:gap-3 md:gap-4 transition-all duration-500 w-full max-w-2xl ${
          selectedService
            ? "grid-cols-2 sm:grid-cols-4 md:grid-cols-6 grid-rows-2 sm:grid-rows-auto"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 grid-rows-3 sm:grid-rows-2"
        }`}
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              layout: { duration: 0.5, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center w-full max-w-[145px] mx-auto text-center cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <motion.div
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[85px] md:h-[85px] text-[#323232] flex items-center justify-center rounded-lg mb-3 sm:mb-4 [&>svg]:text-4xl sm:[&>svg]:text-5xl hover:shadow-lg transition-shadow duration-200"
              style={{ backgroundColor: service.colour }}
            >
              {service.icon}
            </motion.div>
            <h2 className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-black px-1">
              {service.name}
            </h2>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}