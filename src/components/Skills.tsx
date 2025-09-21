'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Database, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Cloud,
  GitBranch,
  Shield,
  Zap
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Django", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Base de données",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Prisma", level: 85 },
        { name: "Supabase", level: 80 }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Expo", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "Ionic", level: 75 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Python", level: 85 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 75 },
        { name: "Matplotlib", level: 70 },
        { name: "TensorFlow", level: 65 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Kubernetes", level: 70 }
      ]
    }
  ]

  const additionalSkills = [
    { icon: GitBranch, name: "Git & GitHub", category: "Outils de développement" },
    { icon: Shield, name: "Tests unitaires", category: "Qualité du code" },
    { icon: Zap, name: "Performance", category: "Optimisation" }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-4">
                  <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Compétences
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Un éventail de technologies modernes pour créer des solutions complètes et innovantes
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + categoryIndex * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4 shadow-lg`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05, 
                          duration: 0.4 
                        }}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05, 
                              duration: 1.5,
                              ease: "easeOut"
                            }}
                            className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Autres compétences
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Des outils et techniques complémentaires pour des projets d'exception
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-4 shadow-lg">
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



