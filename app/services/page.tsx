"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom web applications and scalable digital solutions built with cutting-edge technology",
      features: ["Responsive design", "E-commerce platforms", "Progressive web apps", "CMS integration"],
      highlighted: true,
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to amplify your brand presence and drive growth",
      features: ["SEO optimization", "Social media marketing", "Content strategy", "Analytics & reporting"],
      highlighted: true,
    },
    {
      icon: "💬",
      title: "Customer Support",
      description: "24/7 multilingual customer service with AI-powered routing and sentiment analysis",
      features: ["Omnichannel support", "Real-time translation", "Quality assurance", "Performance analytics"],
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      description: "Predictive insights and interactive dashboards powered by advanced machine learning",
      features: ["Custom dashboards", "Predictive modeling", "Real-time reporting", "Business intelligence"],
    },
    {
      icon: "☁️",
      title: "IT & Cloud Solutions",
      description: "Comprehensive infrastructure management with enterprise-grade security",
      features: ["Cloud migration", "24/7 monitoring", "Security management", "DevOps support"],
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
                Our Core Offerings
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive solutions designed to transform your operations and deliver measurable results.
            </motion.p>

            {/* Services Grid */}
            <div className="space-y-8">
              {/* Highlighted Services - Top Row */}
              <div className="grid md:grid-cols-2 gap-8">
                {services
                  .filter((service) => service.highlighted)
                  .map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <GlassCard className="h-full border-2 border-accent/40 shadow-lg shadow-accent/20">
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
                            <span className="text-xs font-semibold text-accent">Featured</span>
                          </div>
                        </div>
                        <div className="text-6xl mb-6">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                        {/* Features List */}
                        <div className="space-y-3 pt-6 border-t border-accent/30">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-amber-400" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>

              {/* Regular Services - Bottom Row */}
              <div className="grid md:grid-cols-3 gap-8">
                {services
                  .filter((service) => !service.highlighted)
                  .map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    >
                      <GlassCard className="h-full">
                        <div className="text-6xl mb-6">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                        {/* Features List */}
                        <div className="space-y-3 pt-6 border-t border-primary/20">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </>
  )
}
