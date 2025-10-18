// components/Hero.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero5 from '@/images/hero5.jpeg'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[75vh] md:min-h-[80vh] flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero5}
          alt="Fitness training background"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Dark overlay with soft gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl text-center md:text-left">
          {/* Eyebrow */}
          <p className="inline-block px-3 py-1 rounded-md bg-white/10 text-sm text-green-300 font-medium mb-4">
            Hey Happy to See you Back! ☺️
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-4 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Build Strength.
            <span className="text-green-400">Transform Fitness.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-200 max-w-2xl text-base sm:text-lg">
            Personalized plans, on-demand coaches, and small-group workouts —
            all designed to push you safely toward your goals. Train smarter,
            recover faster, feel better.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-green-400 hover:bg-green-500 text-black font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/Community-post"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/5 transition"
            >
              Community Post
            </Link>
          </div>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="bg-white/5 px-3 py-1 rounded-full text-sm text-gray-100">
              1-on-1 Coaching
            </div>
            <div className="bg-white/5 px-3 py-1 rounded-full text-sm text-gray-100">
              Nutrition Plans
            </div>
            <div className="bg-white/5 px-3 py-1 rounded-full text-sm text-gray-100">
              Community Support
            </div>
            <div className="bg-white/5 px-3 py-1 rounded-full text-sm text-gray-100">
              Flexible Scheduling
            </div>
          </div>

          {/* Small testimonial / card */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-4 bg-black/40 border border-white/6 rounded-2xl px-4 py-3 shadow-sm backdrop-blur-sm">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black font-bold">
                  AY
                </div>
              </div>
              <div className="text-sm text-gray-200">
                <div className="font-medium">Anish yadav</div>
                <div className="text-xs text-gray-300">
                  "Lost 12kg in 2 months — best decision ever. Feeling very
                  confident and happy"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side decorative panel for large screens */}
      <div className="hidden md:block absolute right-8 top-12 w-[320px] rounded-3xl overflow-hidden transform translate-y-8 shadow-2xl">
        <div className="relative h-[420px] bg-gradient-to-tr from-[#071013]/30 to-[#0a1f10]/20 p-4">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00ff99" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#00b388" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#g1)" />
            </svg>
          </div>

          <div className="relative text-white p-4">
            <div className="text-xs uppercase text-green-300">
              Featured Class
            </div>
            <div className="mt-2 text-lg font-semibold">
              Burn Your fat the best way ever
            </div>
            <div className="mt-4 text-xs text-gray-300">
              High intensity session for max calorie burn. Live trainer + music
              + community support.
            </div>

            <div className="mt-6">
              <Link
                href="/classes/hiit-burn"
                className="inline-block px-3 py-2 rounded-md bg-green-400 text-black font-medium"
              >
                Check the Full Slot and timing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#features"
          aria-label="Scroll to features"
          className="flex flex-col items-center text-gray-200 hover:text-white transition"
        >
          <span className="mb-2 text-xs">Scroll</span>
          <div className="w-[28px] h-[44px] rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
