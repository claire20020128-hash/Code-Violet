"use client";

import Link from "next/link";
import { useState } from "react";

const SignalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const PlatformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="18" x2="12" y2="20" />
  </svg>
);

const MediaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const quickFacts = [
  "Platform: PlayStation 5 (PS5 Pro Enhanced)",
  "Release Date: 2026-01-10",
  "Developer/Publisher: TeamKill Media",
  "Genre: Horror / Action",
  "Players: 1 (offline)",
  "Rating: ESRB Mature",
  "Languages: English",
  "Price: $49.99",
];

const gameplayCore = [
  "Survival horror with limited resources",
  "Stealth, evasion, and chase sequences",
  "Third-person combat against dinosaurs and enemies",
  "Inventory management with limited slots",
  "Environmental and mechanical puzzles",
];

const engineFeatures = [
  "Unreal Engine",
  "Ray Tracing",
  "Megalights",
  "3D Audio",
  "DualSense Adaptive Triggers",
  "Haptic Feedback",
];

const videos = [
  {
    title: "19 Minutes Of Official Gameplay",
    youtubeId: "XODmmHkMzCo",
  },
  {
    title: "Gameplay Overview Trailer",
    youtubeId: "07MvXaEO4VM",
  },
  {
    title: "Release Date Trailer",
    youtubeId: "dWkjcduzJCQ",
  },
];

const navLinks = [
  { name: "Overview", href: "#overview", icon: <SignalIcon /> },
  { name: "Story", href: "#story", icon: <SignalIcon /> },
  { name: "Gameplay", href: "#gameplay", icon: <SignalIcon /> },
  { name: "Trailers", href: "#trailers", icon: <MediaIcon /> },
  { name: "Platforms", href: "#platforms", icon: <PlatformIcon /> },
  { name: "Reviews", href: "#reviews", icon: <SignalIcon /> },
];

const heroImages = {
  cover: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/f7b78578-d7d4-4ddf-8cd9-8e389d936713/cover_art.png",
  psStore: "https://image.api.playstation.com/vulcan/ap/rnd/202512/0221/19809e3ee91c9070dc692e61da4cdd0eafff9e406f827e5b.png",
  igdbCover: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa6dd.jpg",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0812] text-white">
      <header className="sticky top-0 z-50 bg-[#0a0812]/95 backdrop-blur-sm border-b border-[#2a1f46]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#4c1d95] flex items-center justify-center font-bold">
              CV
            </div>
            <div>
              <div className="text-lg font-bold text-white">Code Violet</div>
              <div className="text-xs text-[#a9a0c8] uppercase tracking-[0.2em]">code-violet.org</div>
            </div>
          </Link>
          <button
            type="button"
            className="md:hidden text-[#b1a7cf] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="flex items-center gap-2 text-[#b1a7cf] hover:text-white transition-colors">
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#0f0a1c] border-t border-[#2a1f46] py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="flex items-center gap-2 text-[#b1a7cf] hover:text-white transition-colors">
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </header>

      <section className="relative py-16 md:py-24 bg-hero-gradient overflow-hidden" id="overview">
        <div className="absolute inset-0 opacity-35">
          <img
            src={heroImages.igdbCover}
            alt="Code Violet cover art"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0812]/40 via-[#0a0812]/70 to-[#0a0812]" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-[#1b1530] text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em]">
              Horror / Action
            </span>
            <span className="px-4 py-1.5 bg-[#4c1d95]/30 text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em]">
              PS5 Exclusive
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-display">
            Code Violet (PS5)
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-violet mb-6 font-display">
            Release Date, Trailers, Gameplay, and Reviews
          </h2>
          <p className="text-lg text-[#c0b7de] max-w-3xl mx-auto">
            Code Violet is a third-person action horror game from TeamKill Media. Set in the 25th century after Earth becomes uninhabitable,
            humanity rebuilds on Trappist 1-E. As Violet Sinclair, you awaken inside the Aion Bioengineering Complex during an evacuation
            protocol, surrounded by prehistoric predators and hostile forces. Manage limited inventory, solve puzzles, fight or evade, and
            uncover the conspiracy behind Aion&apos;s time-travel surrogate program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="https://code-violet.org"
              className="inline-flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-7 py-3 rounded-xl font-medium transition-colors"
            >
              Official Site
              <ArrowRightIcon />
            </Link>
            <Link
              href="#trailers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-medium transition-colors ghost-button"
            >
              Watch Trailers
            </Link>
            <div className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-medium border border-[#3b2b5e] text-[#c0b7de]">
              Release Date: 2026-01-10
            </div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Official Cover Art", image: heroImages.cover },
              { label: "PlayStation Store Key Art", image: heroImages.psStore },
              { label: "IGDB Cover (Logo)", image: heroImages.igdbCover },
            ].map((item) => (
              <div key={item.label} className="panel-card overflow-hidden">
                <div className="aspect-[16/9]">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 text-xs text-[#c0b7de]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-[#2a1f46]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="panel-card stat-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-[#b1a7cf] text-sm uppercase tracking-[0.25em] mb-2">
                <SignalIcon />
                Release Date
              </div>
              <div className="text-3xl font-semibold text-white">2026-01-10</div>
              <p className="text-sm text-[#9a8ec1] mt-2">Worldwide release on PlayStation 5.</p>
            </div>
            <div className="panel-card stat-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-[#b1a7cf] text-sm uppercase tracking-[0.25em] mb-2">
                <PlatformIcon />
                Platform
              </div>
              <div className="text-3xl font-semibold text-white">PS5</div>
              <p className="text-sm text-[#9a8ec1] mt-2">PS5 Pro Enhanced with DualSense features.</p>
            </div>
            <div className="panel-card stat-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-[#b1a7cf] text-sm uppercase tracking-[0.25em] mb-2">
                <SignalIcon />
                Developer
              </div>
              <div className="text-3xl font-semibold text-white">TeamKill Media</div>
              <p className="text-sm text-[#9a8ec1] mt-2">Developer and publisher.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" id="facts">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact} className="panel-card p-4 text-[#c0b7de]">{fact}</div>
            ))}
          </div>
          <p className="text-sm text-[#9a8ec1] mt-4">
            ESRB Mature content descriptors: Blood and Gore, Intense Violence, Suggestive Themes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="story">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-[#1b1530] text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em] mb-4">
                Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
                The Aion Bioengineering Complex
              </h2>
              <p className="text-[#c0b7de] mb-4">
                Set in the 25th century after Earth becomes uninhabitable, humanity relocates to Trappist 1-E. Due to a reproductive crisis,
                the Aion colony uses time technology to retrieve women from the past as part of a surrogate program.
              </p>
              <p className="text-[#c0b7de]">
                You play as Violet Sinclair, who awakens inside the Aion Bioengineering Complex during an evacuation protocol, surrounded by
                prehistoric creatures and hostile forces. Your goal is to survive and uncover the truth behind the colony&apos;s plan.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="panel-card p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Core Gameplay Pillars</h3>
                <ul className="text-sm text-[#b1a7cf] space-y-2">
                  {gameplayCore.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel-card p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Engine Features</h3>
                <div className="flex flex-wrap gap-2">
                  {engineFeatures.map((feature) => (
                    <span key={feature} className="tag-pill">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="gameplay">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Gameplay</h2>
              <p className="text-[#b1a7cf]">Survival horror with stealth, combat, puzzles, and resource pressure.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gameplayCore.map((item) => (
              <div key={item} className="panel-card p-5 text-[#c0b7de]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="trailers">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <MediaIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Trailers & Gameplay</h2>
              <p className="text-[#b1a7cf]">Official videos and gameplay showcases.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.youtubeId} className="panel-card overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm text-[#c0b7de]">{video.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="platforms">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Platforms & Availability</h2>
          <p className="text-[#b1a7cf] mb-8">
            Code Violet launches on PlayStation 5 on 2026-01-10. No official PC or Steam version has been announced.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="panel-card p-5">
              <h3 className="text-lg font-semibold text-white mb-2">PlayStation 5</h3>
              <ul className="text-sm text-[#9a8ec1] space-y-2">
                <li>PS5 Pro Enhanced</li>
                <li>DualSense Adaptive Triggers + Haptic Feedback</li>
                <li>3D Audio</li>
                <li>Single-player only</li>
              </ul>
            </div>
            <div className="panel-card p-5">
              <h3 className="text-lg font-semibold text-white mb-2">PC Status</h3>
              <p className="text-sm text-[#9a8ec1]">
                Code Violet currently has no official PC or Steam release. Availability may change only if the developer announces it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="reviews">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Reviews</h2>
          <p className="text-[#b1a7cf] mb-8">
            We track critic impressions and aggregate links from Metacritic and OpenCritic as they update.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="panel-card p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Critic Impressions</h3>
              <p className="text-sm text-[#9a8ec1]">We will summarize coverage once reviews are published.</p>
            </div>
            <Link href="https://www.metacritic.com/game/code-violet/" target="_blank" className="panel-card p-5 hover:border-[#8b5cf6] transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Metacritic</h3>
              <p className="text-sm text-[#9a8ec1]">View critic scores and summaries.</p>
            </Link>
            <Link href="https://opencritic.com/game/19172/code-violet/reviews" target="_blank" className="panel-card p-5 hover:border-[#8b5cf6] transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">OpenCritic</h3>
              <p className="text-sm text-[#9a8ec1]">Read the review feed as it updates.</p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[#2a1f46]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <Link href="#overview" className="text-[#b1a7cf] hover:text-white transition-colors">Overview</Link>
            <Link href="#story" className="text-[#b1a7cf] hover:text-white transition-colors">Story</Link>
            <Link href="#trailers" className="text-[#b1a7cf] hover:text-white transition-colors">Trailers</Link>
            <Link href="#platforms" className="text-[#b1a7cf] hover:text-white transition-colors">Platforms</Link>
            <Link href="mailto:contact@code-violet.org" className="text-[#b1a7cf] hover:text-white transition-colors">Contact</Link>
          </nav>
          <div className="panel-card p-4 text-xs text-[#9a8ec1] mb-6">
            Visual assets: TeamKill Media cover art, PlayStation Store key art, and IGDB cover image. All trademarks and copyrights
            belong to their respective owners.
          </div>
          <p className="text-sm text-[#7f76a4] max-w-3xl mx-auto mb-4">
            Code Violet is developed and published by TeamKill Media. This site summarizes official information and links to public sources.
          </p>
          <p className="text-sm text-[#7f76a4]">© 2026 Code Violet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
