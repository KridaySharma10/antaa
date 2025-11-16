"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Users } from 'lucide-react'

export default function TeamPage() {
  const founders = [
    {
      name: "Amresh Anand",
      role: "Founder & CEO",
      bio: "A seasoned sales and marketing professional with PGDBA (Marketing & Finance) and over 18 years of experience across:",
      expertise: [
        "Sales & Marketing Leadership",
        "Operations Management",
        "Branch Management",
        "Customer Support Verticals",
      ],
      summary:
        "Rich experience in Retail Finance Industry, transitioned from corporate leadership to entrepreneurship in 2023, establishing ANTAA Intellipro Services in Feb 2025.",
      tags: ["Business Strategy", "Sales Leadership", "Operations", "Client Relations"],
    },
    {
      name: "Niharika Anand",
      role: "Co-Founder & CTO",
      bio: "An IT professional with MCA degree and over 5 years of experience in:",
      expertise: ["Software Development", "Systems Management", "IT-enabled Services", "Domestic & International Projects"],
      summary:
        "Skilled in problem-solving, client support, and emerging technologies, bringing a strong blend of technical expertise and business understanding to deliver scalable solutions and drive process efficiency.",
      tags: ["Technical Leadership", "IT Solutions", "Software Development", "Process Optimization"],
    },
  ]

  return (
    <>
      <ParticleBackground />
      <Navbar />

      <PageTransition>
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-foreground">Meet the Founders</span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-1 w-24 bg-primary rounded-full" />
            </motion.div>

            <motion.p
              className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Leadership team with complementary expertise in business and technology
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Avatar Circle */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-full border-4 border-primary bg-muted/30 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{founder.name}</h3>
                        <p className="text-lg text-muted-foreground">{founder.role}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{founder.bio}</p>

                    <ul className="space-y-2 mb-6">
                      {founder.expertise.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="text-muted-foreground leading-relaxed mb-6">{founder.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      {founder.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full text-sm bg-muted/50 text-muted-foreground border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
