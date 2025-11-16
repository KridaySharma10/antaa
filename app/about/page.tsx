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
                About Us
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <GlassCard>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    At ANTAA Intellipro Services, we are committed to delivering reliable, scalable, and cost-efficient
                    Business Process Outsourcing solutions that empower organizations to focus on what they do best.
                    With a strong foundation in excellence and innovation, we provide end-to-end support services
                    designed to enhance productivity, improve customer satisfaction, and drive sustainable business
                    growth.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our team of trained professionals, backed by advanced technology and streamlined processes, ensures
                    exceptional performance across customer support, back-office operations, technical assistance, data
                    management, and more. We understand that every business is unique, which is why we tailor our
                    solutions to meet your specific needs, industry standards, and long-term goals.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Integrity, quality, and continuous improvement form the core of who we are. We believe in creating
                    value—not just completing tasks. Our client-first approach, transparent communication, and
                    commitment to delivering measurable results have earned us long-standing partnerships across
                    multiple sectors.
                  </p>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    At ANTAA Intellipro Services, we don't just support your operations—we elevate them. Together,
                    let's build a smarter, more efficient future for your business.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

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
