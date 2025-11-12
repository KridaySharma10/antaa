"use client"

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient with animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0d1425] to-[#0a0f1c] animate-gradient-shift" />

      {/* Blob 1 - Teal - Large circular motion */}
      <div
        className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] rounded-full blur-[150px] animate-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(74, 158, 187, 0.5) 0%, rgba(74, 158, 187, 0.2) 40%, transparent 70%)",
        }}
      />

      {/* Blob 2 - Violet - Diagonal floating */}
      <div
        className="absolute top-[40%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[130px] animate-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(157, 78, 221, 0.45) 0%, rgba(157, 78, 221, 0.15) 40%, transparent 70%)",
        }}
      />

      {/* Blob 3 - Gold - Wave motion */}
      <div
        className="absolute bottom-[-15%] left-[30%] w-[750px] h-[750px] rounded-full blur-[140px] animate-blob-3"
        style={{
          background:
            "radial-gradient(circle, rgba(207, 175, 110, 0.35) 0%, rgba(207, 175, 110, 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Additional floating particles for more dynamism */}
      <div
        className="absolute top-[20%] left-[60%] w-[300px] h-[300px] rounded-full blur-[80px] animate-float-1"
        style={{
          background: "radial-gradient(circle, rgba(74, 158, 187, 0.3) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute bottom-[30%] right-[40%] w-[250px] h-[250px] rounded-full blur-[70px] animate-float-2"
        style={{
          background: "radial-gradient(circle, rgba(157, 78, 221, 0.25) 0%, transparent 60%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
