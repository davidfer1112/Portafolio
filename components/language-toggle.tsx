"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-[101]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900/90 backdrop-blur-xl border border-purple-500/30 rounded-full p-1 shadow-2xl shadow-purple-500/10"
      >
        <div className="flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage("es")}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
              language === "es"
                ? "bg-purple-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            ES
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
              language === "en"
                ? "bg-purple-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            EN
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
