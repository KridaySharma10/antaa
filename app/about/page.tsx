"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <>
      <ParticleBackground />
      <Navbar />

      <PageTransition>
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Who We Are
              </span>
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">About ANTAA</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    ANTAA Intellipro Services is redefining outsourcing through technology and empathy. We empower
                    enterprises to scale efficiently, maintain compliance, and deliver superior customer experiences.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded with a vision to bridge the gap between technology and human touch, we combine cutting-edge
                    AI solutions with industry-leading expertise to transform how businesses operate globally.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 backdrop-blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌐</div>
                    <p className="text-2xl font-semibold text-foreground">Global Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver world-class outsourcing solutions that combine cutting-edge technology with human
                    empathy, enabling our clients to focus on their core business while we handle the complexity.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard>
                  <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted global partner for digital transformation and intelligent outsourcing,
                    setting new standards for innovation, reliability, and customer satisfaction in the industry.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
