"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/typewriter"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const highlights = [
    {
      title: "Innovation",
      description: "Cutting-edge AI and analytics integrated into every solution",
      icon: "🚀",
    },
    {
      title: "Reliability",
      description: "99.9% uptime with 24/7 support and monitoring",
      icon: "🛡️",
    },
    {
      title: "Empathy",
      description: "Human-centered approach to technology and customer service",
      icon: "❤️",
    },
  ]

  return (
    <>
      <ParticleBackground />
      <Navbar />

      <PageTransition>
        <main className="min-h-screen pt-16">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  <Typewriter text="Empowering Global Enterprises" delay={80} />
                </span>
                <br />
                <span className="text-foreground">Through Intelligent Outsourcing</span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We blend AI, analytics, and human expertise to redefine enterprise operations.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/solution">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(74,158,187,0.5)] transition-all duration-300"
                  >
                    Explore Solutions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 transition-all duration-300 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Quick Highlights */}
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <GlassCard>
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
