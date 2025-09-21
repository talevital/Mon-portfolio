'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Code } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, value: "3+", label: "Années d'expérience" },
    { icon: Award, value: "15+", label: "Projets réalisés" },
    { icon: Users, value: "10+", label: "Clients satisfaits" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">À propos de moi</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Passionné par le développement et l&apos;innovation
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Développeur full-stack avec plus de 3 ans d&apos;expérience dans la création 
                  d&apos;applications web modernes et performantes. Je me spécialise dans 
                  l&apos;écosystème JavaScript/TypeScript avec React, Next.js, Node.js et Django.
                </p>
                
                <p>
                  Actuellement en poste chez <a href="https://metric-decision.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400  hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">Metric&decision</a>, 
                  je travaille quotidiennement avec les données pour créer des solutions analytiques 
                  et des tableaux de bord interactifs. Mon rôle m'amène à manipuler de gros volumes 
                  de données et à développer des interfaces permettant leur visualisation et leur analyse.
                </p>
                
                <p>
                  Mon approche se concentre sur l&apos;écriture de code propre, maintenable 
                  et sur l&apos;optimisation des performances. Je suis constamment en veille 
                  technologique pour intégrer les dernières innovations dans mes projets.
                </p>
                
                <p>
                  En plus du développement, j&apos;ai une passion pour l&apos;UI/UX design et 
                  l&apos;accessibilité web. Je crois fermement que la technologie doit être 
                  au service de l&apos;utilisateur final.
                </p>
              </div>

            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="glass p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Ma mission
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Créer des solutions technologiques qui résolvent de vrais problèmes 
                et améliorent la vie des utilisateurs. Je m&apos;engage à livrer des 
                produits de qualité avec une attention particulière aux détails.
              </p>
            </div>

            <div className="glass p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Mes valeurs
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Code propre, collaboration efficace, apprentissage continu et 
                innovation responsable. Je crois en l&apos;importance du travail d&apos;équipe 
                et de la transmission de connaissances.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About



