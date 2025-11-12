"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function ProblemPage() {
  const stats = [
    { challenge: "High Costs", percentage: 43, description: "Struggle with operational costs" },
    { challenge: "Poor CX", percentage: 68, description: "Fail customer experience metrics" },
    { challenge: "Compliance", percentage: 71, description: "Cite data & compliance risks" },
  ]

  const chartData = [
    { name: "High Costs", value: 43 },
    { name: "Poor CX", value: 68 },
    { name: "Compliance Risk", value: 71 },
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
                The Global Challenge
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Enterprises today face increasing operational complexity, customer dissatisfaction, and security risks.
              The traditional outsourcing model is broken.
            </motion.p>

            {/* Statistics Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.challenge}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <GlassCard>
                    <div className="text-6xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stat.percentage}%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{stat.challenge}</h3>
                    <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Chart Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Enterprise Challenges Overview</h2>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 158, 187, 0.1)" />
                    <XAxis dataKey="name" stroke="#E0E0E0" tick={{ fill: "#E0E0E0" }} />
                    <YAxis
                      stroke="#E0E0E0"
                      tick={{ fill: "#E0E0E0" }}
                      label={{ value: "Percentage (%)", angle: -90, position: "insideLeft", fill: "#E0E0E0" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 15, 28, 0.9)",
                        border: "1px solid rgba(74, 158, 187, 0.3)",
                        borderRadius: "8px",
                        color: "#E0E0E0",
                      }}
                    />
                    <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4a9ebb" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#9d4edd" stopOpacity={0.8} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </GlassCard>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-muted-foreground mb-6">Ready for a smarter model?</p>
              <Link href="/solution">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(74,158,187,0.5)] transition-all duration-300"
                >
                  Discover Our Solution
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
