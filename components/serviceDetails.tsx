import React from 'react'
import { services } from 'data/services';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceDetails({selectedService, setSelectedService}: {selectedService: any, setSelectedService: any}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md border"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center rounded-xl [&>svg]:text-2xl sm:[&>svg]:text-3xl md:[&>svg]:text-4xl"
            style={{ backgroundColor: selectedService.colour }}
          >
            {selectedService.icon}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 truncate">
            {selectedService.name}
          </h2>
        </div>
        <button
          onClick={() => setSelectedService(null)}
          className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold px-2 sm:px-3 py-1 rounded-lg hover:bg-gray-100 transition-all flex-shrink-0"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
        {selectedService.description}
      </p>

      {/* Features */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
          Key Features:
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          {selectedService.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700"
            >
              <span className="text-green-500 text-lg sm:text-xl flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="flex-1">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Pricing */}
      <div className="pt-4 sm:pt-6 border-t border-gray-200">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
          {selectedService.pricing}
        </p>
      </div>
    </motion.div>
  );
}