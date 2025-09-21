'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Solutions Métier - Metric&decision",
      description: "Développement d'applications de gestion de données et tableaux de bord analytiques pour l'aide à la décision.",
      image: "/api/placeholder/600/400",
      technologies: ["Django", "Python", "PostgreSQL", "Chart.js", "Bootstrap"],
      github: null,
      demo: null,
      featured: true,
      status: "Projet professionnel"
    },
    {
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des produits, panier, paiements et dashboard administrateur.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "TypeScript", "Prisma", "Stripe"],
      github: null,
      demo: null,
      featured: true,
      status: "Code source disponible"
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Django", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      github: null,
      demo: null,
      featured: false,
      status: "Projet personnel"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Tableau de bord d'analyse de données avec visualisations interactives et rapports automatisés.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Django", "React", "PostgreSQL", "D3.js"],
      github: null,
      demo: null,
      featured: false,
      status: "Projet académique"
    },
    {
      title: "Mobile Banking App",
      description: "Application mobile bancaire avec authentification biométrique et transactions sécurisées.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Expo", "Firebase", "Biometrics"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "AI Chat Assistant",
      description: "Assistant IA conversationnel avec intégration de modèles de langage et interface moderne.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Mes projets</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Une sélection de projets qui démontrent mes compétences et ma passion pour le développement
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
            >
              Projets en vedette
            </motion.h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status and Action Buttons */}
                    <div className="space-y-4">
                      {project.status && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {project.status}
                        </div>
                      )}
                      <div className="flex gap-4">
                        {project.github ? (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.a>
                        ) : (
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed">
                            <Github className="w-4 h-4" />
                            Code privé
                          </div>
                        )}
                        {project.demo ? (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 glass hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
                          >
                            <Eye className="w-4 h-4" />
                            Démo
                          </motion.a>
                        ) : (
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed">
                            <Eye className="w-4 h-4" />
                            Sur demande
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
            >
              Autres projets
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Status and Action Buttons */}
                    <div className="space-y-3">
                      {project.status && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {project.status}
                        </div>
                      )}
                      <div className="flex gap-2">
                        {project.github ? (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm transition-colors duration-200"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </motion.a>
                        ) : (
                          <div className="flex items-center gap-1 px-3 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded text-sm cursor-not-allowed">
                            <Github className="w-3 h-3" />
                            Code privé
                          </div>
                        )}
                        {project.demo ? (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-2 glass hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm transition-colors duration-200"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Démo
                          </motion.a>
                        ) : (
                          <div className="flex items-center gap-1 px-3 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded text-sm cursor-not-allowed">
                            <Eye className="w-3 h-3" />
                            Sur demande
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Intéressé par mes projets ? Découvrez plus sur mon GitHub
            </p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              Voir tous mes projets
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



