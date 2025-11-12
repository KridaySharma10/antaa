"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function TeamPage() {
  const leaders = [
    {
      name: "Amresh Anand",
      role: "Chief Executive Officer",
      bio: "18+ years in customer service & operations. Visionary leader with expertise in scaling global enterprises.",
    },
    {
      name: "Niharika Anand",
      role: "Chief Technology Officer",
      bio: "Expert in automation, cloud architecture, and process design. Pioneer in AI-driven operational excellence.",
    },
  ]

  const values = [
    { title: "Innovation", icon: "💡", description: "Continuously pushing boundaries" },
    { title: "Integrity", icon: "🤝", description: "Operating with transparency" },
    { title: "Excellence", icon: "⭐", description: "Delivering exceptional results" },
  ]

  return (
    <>
      <ParticleBackground />
      <Navbar />

      <PageTransition>
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Leadership
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Meet the visionaries driving innovation and excellence at ANTAA.
            </motion.p>

            {/* Leadership Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <GlassCard className="group">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {leader.name}
                    </h3>
                    <p className="text-lg text-accent mb-4">{leader.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <GlassCard className="text-center">
                      <div className="text-5xl mb-4">{value.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
