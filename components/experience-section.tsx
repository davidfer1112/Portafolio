"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, MapPin, Target, TrendingUp, Code2, Lightbulb, Rocket } from "lucide-react"
import { useLanguage, translations } from "@/hooks/useLanguage"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedExperience, setSelectedExperience] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]

  const experiences = [
    {
      id: 0,
      title: t.experience.davisanTitle,
      company: t.experience.davisanCompany,
      period: t.experience.davisanPeriod,
      location: t.experience.davisanLocation,
      type: "Full-time",
      description: t.experience.davisanDescription,
      achievements: t.experience.davisanAchievements,
      technologies: t.experience.davisanTech,
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-purple-700",
      current: true,
    },
    {
      id: 1,
      title: t.experience.globantTitle,
      company: t.experience.globantCompany,
      period: t.experience.globantPeriod,
      location: t.experience.globantLocation,
      type: "Full-time",
      description: t.experience.globantDescription,
      achievements: t.experience.globantAchievements,
      technologies: t.experience.globantTech,
      icon: <Code2 className="w-6 h-6" />,
      color: "from-purple-600 to-purple-800",
      current: false,
    },
    {
      id: 2,
      title: t.experience.electroTitle,
      company: t.experience.electroCompany,
      period: t.experience.electroPeriod,
      location: t.experience.electroLocation,
      type: "Full-time",
      description: t.experience.electroDescription,
      achievements: t.experience.electroAchievements,
      technologies: t.experience.electroTech,
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-500 to-purple-700",
      current: false,
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 relative bg-gray-900">
      {/* Efectos de fondo únicos para esta sección */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/20" />

        {/* Círculos animados de fondo */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/5"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
            {t.experience.title} <span className="text-purple-400">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">{t.experience.subtitle}</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de experiencias - Sidebar interactivo */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedExperience === exp.id
                          ? "bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/25"
                          : "bg-gray-800/30 border-purple-500/20 hover:bg-gray-800/50"
                      }`}
                      onClick={() => setSelectedExperience(exp.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>{exp.icon}</div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">{exp.title}</h3>
                            <p className="text-purple-300 text-xs">{exp.company}</p>
                          </div>
                          {exp.current && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto" />}
                        </div>
                        <p className="text-gray-400 text-xs">{exp.period}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Detalle de la experiencia seleccionada */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border-purple-500/30 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experiences[selectedExperience].title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Building2 size={16} />
                            <span>{experiences[selectedExperience].company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{experiences[selectedExperience].period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{experiences[selectedExperience].location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${experiences[selectedExperience].color}`}>
                        {experiences[selectedExperience].icon}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{experiences[selectedExperience].description}</p>

                    {/* Logros */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Target className="text-purple-400" size={20} />
                        Logros Principales
                      </h4>
                      <ul className="space-y-2">
                        {experiences[selectedExperience].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <TrendingUp className="text-green-400 flex-shrink-0 mt-1" size={16} />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Tecnologías Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[selectedExperience].technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
