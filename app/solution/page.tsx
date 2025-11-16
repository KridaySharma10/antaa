"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Clock, Ticket, Handshake } from 'lucide-react'

export default function SolutionPage() {
  const advantages = [
    {
      icon: "🤖",
      title: "Technology + Talent Integration",
      description: "Seamlessly blend AI automation with skilled professionals for optimal results",
    },
    {
      icon: "🌐",
      title: "Omnichannel Engagement",
      description: "Unified customer experience across voice, chat, email, and social media",
    },
    {
      icon: "🔒",
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with full regulatory compliance across regions",
    },
  ]

  const benefits = [
    "Real-time analytics and predictive insights",
    "Seamless system integration with existing infrastructure",
    "Dedicated account management and support",
    "Deep industry expertise across multiple sectors",
  ]

  const revenueModels = [
    {
      icon: Users,
      title: "Per Seat / FTE Model",
      description: "Fixed monthly fee per agent deployed on client project. Ideal for call center and back-office operations.",
    },
    {
      icon: Clock,
      title: "Per Hour Billing Model",
      description: "Revenue based on total agent hours worked. Best for international BPO and customer support projects.",
    },
    {
      icon: Ticket,
      title: "Per Transaction / Ticket Model",
      description: "Charges based on resolved customer tickets or completed transactions. Optimal for e-commerce and BFSI sectors.",
    },
    {
      icon: Handshake,
      title: "Project-Based Pricing",
      description: "Fixed cost for defined project scope like data migration or CRM implementation. Suitable for short-term ITES projects.",
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
              className="text-5xl md:text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                The ANTAA Advantage
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We've reimagined outsourcing for the modern enterprise. Our intelligent platform combines human expertise
              with AI-powered automation.
            </motion.p>

            {/* Main Advantages Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <GlassCard>
                    <div className="text-6xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <p className="text-lg text-muted-foreground leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
                Business Model & Revenue Streams
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
              
              <h3 className="text-3xl font-semibold mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Our Revenue Models
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {revenueModels.map((model, index) => {
                  const IconComponent = model.icon
                  return (
                    <motion.div
                      key={model.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard className="border-l-4 border-l-secondary h-full">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-3 text-foreground">{model.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(74,158,187,0.5)] transition-all duration-300"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
