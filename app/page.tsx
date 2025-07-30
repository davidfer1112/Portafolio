"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Zap,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Briefcase,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExperienceSection as MyExperienceSection } from "@/components/experience-section"
import { useLanguage, translations } from "@/hooks/useLanguage"
import { LanguageToggle } from "@/components/language-toggle"

// Cursor personalizado
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']"),
      )
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-5 h-5 bg-purple-400 rounded-full" />
      </motion.div>

      {/* Cursor secundario (anillo) */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          scale: isClicking ? 1.2 : isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-10 h-10 border border-purple-400/50 rounded-full" />
      </motion.div>

      {/* Partículas del cursor */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              animate={{
                x: [0, Math.cos((i * 60 * Math.PI) / 180) * 20],
                y: [0, Math.sin((i * 60 * Math.PI) / 180) * 20],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  )
}

// Efectos de fondo animados
function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Líneas animadas */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              width: "100%",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Texto flotante de código */}
      <div className="absolute inset-0">
        {["React", "TypeScript", "Next.js", "Node.js", "Python"].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-purple-500/5 text-6xl font-mono font-bold select-none"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.02, 0.08, 0.02],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Partículas sutiles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Componente animado alternativo sin Three.js
function AnimatedSphere() {
  return (
    <div className="relative w-96 h-96 mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-500/30 to-purple-700/30 backdrop-blur-md"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-bl from-purple-600/40 to-purple-800/40 backdrop-blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

// Navegación flotante
function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#roadmap" },
    { name: t.nav.contact, href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100]"
    >
      <div className="bg-gray-900/90 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-3 shadow-2xl shadow-purple-500/10">
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-full mt-2 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 md:hidden shadow-2xl shadow-purple-500/10"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 py-3 text-sm font-medium border-b border-gray-700/50 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

// Sección Hero
function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Esfera animada sin Three.js */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <AnimatedSphere />
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">{t.hero.title}</h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-8">
            {t.hero.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">{t.hero.description}</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-purple-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Sección About
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            {t.about.title} <span className="text-purple-400">{t.about.titleHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden">
                    <img src="/profile-photo.jpeg" alt="Perfil" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{t.about.description1}</p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">{t.about.description2}</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                  <Code className="text-purple-400" size={20} />
                  <span className="text-gray-300">{t.about.cleanCode}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                  <Zap className="text-purple-400" size={20} />
                  <span className="text-gray-300">{t.about.performance}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                  <Palette className="text-purple-400" size={20} />
                  <span className="text-gray-300">{t.about.uiux}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Sección Skills
function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-400",
      description: "Biblioteca de JavaScript para interfaces de usuario",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "🟢",
      color: "from-green-400 to-emerald-400",
      description: "Entorno de ejecución para JavaScript del lado del servidor",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: "🔷",
      color: "from-blue-500 to-blue-600",
      description: "Superset tipado de JavaScript",
    },
    {
      name: "JavaScript",
      category: "Language",
      icon: "🟨",
      color: "from-yellow-400 to-orange-400",
      description: "Lenguaje de programación dinámico",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "🐘",
      color: "from-blue-600 to-indigo-600",
      description: "Sistema de gestión de bases de datos relacional",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: "🐬",
      color: "from-orange-400 to-orange-600",
      description: "Sistema de gestión de bases de datos",
    },
    {
      name: "Java",
      category: "Language",
      icon: "☕",
      color: "from-red-500 to-orange-500",
      description: "Lenguaje de programación orientado a objetos",
    },
    {
      name: "Spring Boot",
      category: "Framework",
      icon: "🍃",
      color: "from-green-500 to-green-600",
      description: "Framework para aplicaciones Java",
    },
    {
      name: "Git",
      category: "Tools",
      icon: "📝",
      color: "from-orange-500 to-red-500",
      description: "Sistema de control de versiones",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: "🐙",
      color: "from-gray-600 to-gray-800",
      description: "Plataforma de desarrollo colaborativo",
    },
    {
      name: "Angular",
      category: "Frontend",
      icon: "🅰️",
      color: "from-red-500 to-red-600",
      description: "Framework para aplicaciones web",
    },
    {
      name: "HTML",
      category: "Frontend",
      icon: "🌐",
      color: "from-orange-500 to-red-500",
      description: "Lenguaje de marcado para páginas web",
    },
    {
      name: "CSS",
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-purple-500",
      description: "Lenguaje de estilos para páginas web",
    },
    {
      name: "Python",
      category: "Language",
      icon: "🐍",
      color: "from-blue-400 to-yellow-400",
      description: "Lenguaje de programación versátil",
    },
    {
      name: "n8n",
      category: "Tools",
      icon: "🔗",
      color: "from-pink-400 to-rose-500",
      description: "Plataforma de automatización de flujos de trabajo",
    },
  ]

  const categories = ["Frontend", "Backend", "Language", "Database", "Framework", "Tools"]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative bg-gray-900">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
            {t.skills.title} <span className="text-purple-400">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>

          {/* Grid de habilidades */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-800/30 backdrop-blur-sm border-purple-500/20 p-6 h-full hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    {/* Icono con gradiente de fondo */}
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {skill.icon}
                    </div>

                    {/* Nombre de la tecnología */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Categoría */}
                    <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 mb-3">
                      {skill.category}
                    </span>

                    {/* Descripción (aparece en hover) */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      className="text-xs text-gray-400 leading-relaxed overflow-hidden"
                    >
                      {skill.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Filtros por categoría */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-full text-sm text-gray-300 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 cursor-pointer"
              >
                {category}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Sección Roadmap
function RoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const education = [
    {
      title: t.education.systemsEngineering,
      institution: t.education.javeriana,
      period: "Enero 2021 - Julio 2025",
      location: t.education.colombia,
      type: t.education.undergraduate,
      skills: ["Desarrollo de Software", "Diseño y Arquitectura de Software", "Solución de Problemas"],
      current: true,
    },
    {
      title: t.education.mobileApps,
      institution: t.education.uis,
      period: "Enero 2021 - diciembre 2021",
      location: t.education.colombia,
      type: t.education.course,
      skills: ["Android"],
      current: false,
    },
    {
      title: t.education.technician,
      institution: t.education.sena,
      period: "Enero 2018 - diciembre 2020",
      location: t.education.colombia,
      type: t.education.technical,
      skills: ["SQL", "Sistemas", "Bases de Datos"],
      current: false,
    },
  ]

  return (
    <section id="roadmap" className="min-h-screen flex items-center py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              {t.education.title}
              <span className="text-green-400 text-4xl">🎓</span>
            </h2>
          </div>

          <div className="relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-purple-700 h-full rounded-full" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-center"
                >
                  {/* Punto en la línea */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${edu.current ? "bg-green-400" : "bg-purple-500"} border-4 ${edu.current ? "border-green-600" : "border-purple-700"} shadow-lg`}
                    />
                  </div>

                  {/* Card - alternando lados pero conectado a la línea */}
                  <div className={`w-full flex ${index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
                    <Card className="bg-gray-800/40 backdrop-blur-sm border-purple-500/30 p-6 max-w-md w-full">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                          {edu.current && <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />}
                        </div>
                        <p className="text-purple-300 font-medium mb-2">{edu.institution}</p>

                        <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span>{edu.type}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Línea conectora desde el punto al card */}
                  <div
                    className={`absolute top-1/2 w-8 h-px bg-purple-500/50 ${
                      index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Sección Contact
function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { language } = useLanguage()
  const t = translations[language]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-david-fernando.pdf"
    link.download = "CV-David-Fernando-Perez-Medina.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            {t.contact.title} <span className="text-purple-400">{t.contact.titleHighlight}</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{t.contact.description}</p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white border-0 px-8 py-4 text-lg"
              onClick={() => (window.location.href = "mailto:davidfernando1112@gmail.com")}
            >
              <Mail className="mr-2" size={20} />
              {t.contact.sendEmail}
            </Button>

            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-purple-500/10 p-4 bg-transparent"
                onClick={() => window.open("https://github.com/davidfer1112", "_blank")}
              >
                <Github size={24} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-purple-500/10 p-4 bg-transparent"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/david-fernando-pérez-medina-287451268", "_blank")
                }
              >
                <Linkedin size={24} />
              </Button>
            </div>
          </motion.div>

          {/* Botón de descarga de CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-green-500/30 text-green-300 hover:bg-green-500/10 hover:border-green-500/50 px-8 py-4 text-lg bg-transparent"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2" size={20} />
              Descargar CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            © 2024 Mi Portafolio. Hecho con ❤️
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Cursor personalizado */}
      <CustomCursor />

      {/* Language Toggle */}
      <LanguageToggle />

      {/* Efectos de fondo */}
      <BackgroundEffects />

      {/* Scroll personalizado */}
      <style jsx global>{`
        /* Cursor personalizado */
        * {
          cursor: none !important;
        }

        /* Asegurar que la navegación esté por encima del canvas 3D */
        nav {
          position: relative;
          z-index: 100;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #9333ea);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: #030712;
        }
      `}</style>

      <FloatingNav />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <MyExperienceSection />
      <RoadmapSection />
      <ContactSection />
    </div>
  )
}
