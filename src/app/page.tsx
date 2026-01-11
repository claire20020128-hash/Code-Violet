"use client";

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

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const quickFacts = [
  "Game Title: Code Violet",
  "Developer / Publisher: TeamKill Media",
  "Genre: Third-person action horror / survival horror",
  "Platform: PlayStation 5 (PS5 Pro Enhanced)",
  "Release Date: 2026-01-10",
  "Price (Standard): $49.99",
  "Players: 1 (offline)",
  "ESRB: Mature 17+",
  "Average Rating (PlayStation Store): 2.95 / 5",
  "Rating Count (PlayStation Store): 1825 ratings",
  "Voice Language: English",
  "Screen Languages: English, French, German, Italian, Japanese, Spanish, Turkish, Arabic, Chinese (Simplified)",
];

const coreLoop = [
  "Survival gameplay: scarce resources + stealth",
  "Inventory management: limited slots, strategic choices",
  "Combat: third-person battles vs dinosaurs",
  "Puzzles: environmental/mechanical puzzles",
];

const keySystems = [
  "Armories: upgrade weapon stats; change weapon skins",
  "Dressing Room: save progress; customize Violet's appearance; global storage; collectibles",
];

const performanceStats = [
  { label: "Base PS5", value: "Near-locked 30FPS at 4K (TSR upscaling)" },
  { label: "PS5 Pro", value: "Up to 60FPS at 4K (higher internal res + extra tweaks)" },
  { label: "HDR", value: "Not supported (HDR off)" },
];

const techHighlights = [
  "Ray-traced visuals with Unreal Engine's Megalights",
  "PS5 Pro Enhanced performance profile",
  "Hardware Lumen GI tweaks noted in official updates",
];

const trailers = [
  {
    title: "Announcement Trailer (PS5 Games)",
    url: "https://www.youtube.com/watch?v=gDFBxMOcp4k",
    thumbnail: "https://i.ytimg.com/vi/gDFBxMOcp4k/maxresdefault.jpg",
    badge: "PS5",
  },
  {
    title: "Official Release Date Trailer",
    url: "https://www.youtube.com/watch?v=dWkjcduzJCQ",
    thumbnail: "https://i.ytimg.com/vi/dWkjcduzJCQ/maxresdefault.jpg",
    badge: "PS5",
  },
  {
    title: "Extended Gameplay (TeamKill)",
    url: "https://www.youtube.com/watch?v=U7f71SQBa9E",
    thumbnail: "https://i.ytimg.com/vi/U7f71SQBa9E/maxresdefault.jpg",
    badge: "TeamKill",
  },
];

const heroImages = {
  cover: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/f7b78578-d7d4-4ddf-8cd9-8e389d936713/cover_art.png",
  screenshot1: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/6052431a-52da-4fcc-af6b-b79d290256a7/HighresScreenshot00112.jpg",
  screenshot2: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/05dd9e2b-6e49-4d5f-811a-119a9d0a4a5c/HighresScreenshot00110.jpg",
  screenshot3: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/bbc31438-8119-4ca4-9461-31facdde429e/HighresScreenshot00113.jpg",
  screenshot4: "https://images.squarespace-cdn.com/content/v1/6702de08d12f5e30416fc2af/399dea28-3a6d-4f99-acef-d89e4acceb1f/HighresScreenshot00114.jpg",
};

const links = {
  official: "https://www.teamkillmedia.com/codeviolet",
  buy: "https://store.playstation.com/en-us/product/UP5503-PPSA26528_00-0656994000407395",
  psStoreSource: "https://store.playstation.com/en-us/product/UP5503-PPSA26528_00-0656994000407395",
  releaseSourceTimeline: "https://www.gamesradar.com/upcoming-ps5-games/",
  releaseSourceAnnouncement: "https://www.pushsquare.com/news/2025/07/dino-crisis-inspired-shooter-code-violet-gets-a-ps5-exclusive-release-date",
  imdb: "https://www.imdb.com/title/tt37694073/",
  metacritic: "https://www.metacritic.com/game/playstation-5/code-violet/",
  metacriticPost: "https://x.com/metacritic/status/2009622108486283674",
  psLifestyle: "https://www.playstationlifestyle.net/review/999916-code-violet-review-ps5/",
  pushSquare: "https://www.pushsquare.com/news/2025/07/dino-crisis-inspired-shooter-code-violet-gets-a-ps5-exclusive-release-date",
  gamespew: "https://www.gamespew.com/2025/07/code-violet-gets-a-release-date/",
  psprices: "https://psprices.com/region-us/game/8890120/code-violet-digital-deluxe-edition",
  teamkillYouTube: "https://www.youtube.com/@teamkillmedia/videos",
  playstationYouTubeSearch: "https://www.youtube.com/@PlayStation/search?query=Code%20Violet",
};

const ExternalButton = ({ href, label, variant = "primary" }: { href: string; label: string; variant?: "primary" | "ghost" }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-colors ${
      variant === "primary" ? "bg-[#8b5cf6] hover:bg-[#7c3aed] text-white" : "ghost-button"
    }`}
  >
    {label}
    <ArrowRightIcon />
  </a>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0812] text-white">
      <header className="sticky top-0 z-50 bg-[#0a0812]/95 backdrop-blur-sm border-b border-[#2a1f46]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#4c1d95] flex items-center justify-center font-bold">
              CV
            </div>
            <div>
              <div className="text-lg font-bold text-white">Code Violet</div>
              <div className="text-xs text-[#a9a0c8] uppercase tracking-[0.2em]">code-violet.org</div>
            </div>
          </div>
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
          <div className="hidden md:flex items-center gap-3">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0a1c] border-t border-[#2a1f46] py-4 px-4 flex flex-col gap-3">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
          </div>
        )}
      </header>

      <section className="relative py-16 md:py-24 bg-hero-gradient overflow-hidden" id="overview">
        <div className="absolute inset-0 opacity-35">
          <img
            src={heroImages.cover}
            alt="Code Violet cover art"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0812]/40 via-[#0a0812]/70 to-[#0a0812]" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-[#1b1530] text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em]">
              Third-person action horror
            </span>
            <span className="px-4 py-1.5 bg-[#4c1d95]/30 text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em]">
              PS5 Pro Enhanced
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-display">
            Code Violet (PS5)
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-violet mb-6 font-display">
            Release Date, Trailers, Gameplay, and Reviews
          </h2>
          <p className="text-lg text-[#c0b7de] max-w-3xl mx-auto">
            Code Violet is a third-person action horror / survival horror game from TeamKill Media. Set in the 25th century after Earth becomes
            uninhabitable, survivors rebuild on Trappist 1-E. As Violet Sinclair, you awaken inside the Aion Bioengineering Complex during an
            evacuation protocol, surrounded by prehistoric predators and hostile forces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Official Cover Art", image: heroImages.cover },
              { label: "Screenshot 1", image: heroImages.screenshot1 },
              { label: "Screenshot 2", image: heroImages.screenshot2 },
              { label: "Screenshot 3", image: heroImages.screenshot3 },
              { label: "Screenshot 4", image: heroImages.screenshot4 },
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
              <p className="text-sm text-[#9a8ec1] mt-2">Release on PlayStation 5.</p>
            </div>
            <div className="panel-card stat-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-[#b1a7cf] text-sm uppercase tracking-[0.25em] mb-2">
                <PlatformIcon />
                Platform
              </div>
              <div className="text-3xl font-semibold text-white">PS5</div>
              <p className="text-sm text-[#9a8ec1] mt-2">PS5 Pro Enhanced.</p>
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
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="release-date">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Release Date Timeline</h2>
              <p className="text-[#b1a7cf]">Key milestones for the official release schedule.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Initial Target", date: "2025-11-14" },
              { label: "Delay Update", date: "2025-12-12" },
              { label: "Final Release", date: "2026-01-10" },
            ].map((item) => (
              <div key={item.label} className="panel-card p-5">
                <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">{item.label}</div>
                <div className="text-2xl font-semibold text-white mt-3">{item.date}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.releaseSourceTimeline} label="Source" variant="ghost" />
            <ExternalButton href={links.releaseSourceAnnouncement} label="Source" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16" id="actress">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Actress & Cast</h2>
              <p className="text-[#b1a7cf]">Verified roles and source links for the voice cast.</p>
            </div>
          </div>
          <div className="panel-card p-6">
            <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em] mb-2">Protagonist</div>
            <div className="text-2xl font-semibold text-white">Violet Sinclair</div>
            <p className="text-[#c0b7de] mt-3">
              Awakens in the Aion Bioengineering Complex during evacuation protocol as prehistoric threats close in.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.imdb} label="Source" />
            <ExternalButton href={links.official} label="Official" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="trailers">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-[#1b1530] text-[#c4b5fd] text-xs font-medium rounded-full uppercase tracking-[0.3em] mb-4">
                Trailers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
                Official Videos
              </h2>
              <p className="text-[#c0b7de]">
                Official trailers and extended gameplay from PlayStation and TeamKill Media channels.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <ExternalButton href={links.official} label="Official" />
                <ExternalButton href={links.teamkillYouTube} label="Source" variant="ghost" />
                <ExternalButton href={links.playstationYouTubeSearch} label="Source" variant="ghost" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {trailers.map((video) => (
                <div key={video.url} className="panel-card overflow-hidden">
                  <div className="aspect-video">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">{video.badge}</div>
                      <div className="text-base font-semibold text-white">{video.title}</div>
                    </div>
                    <ExternalButton href={video.url} label="Source" variant="ghost" />
                  </div>
                </div>
              ))}
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
              <p className="text-[#b1a7cf]">Core loop, key systems, and performance targets.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreLoop.map((item) => (
              <div key={item} className="panel-card p-5 text-[#c0b7de]">{item}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {keySystems.map((item) => (
              <div key={item} className="panel-card p-5 text-[#c0b7de]">{item}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {performanceStats.map((item) => (
              <div key={item.label} className="panel-card p-5">
                <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">{item.label}</div>
                <div className="text-base text-[#c0b7de] mt-3">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="reviews">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Reviews</h2>
              <p className="text-[#b1a7cf]">Scores and sources from public review outlets.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="panel-card p-6">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Metacritic</div>
              <div className="text-3xl font-semibold text-white mt-3">40</div>
              <div className="text-sm text-[#9a8ec1] mt-2">PS5 Metascore</div>
            </div>
            <div className="panel-card p-6">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">PlayStation Store</div>
              <div className="text-3xl font-semibold text-white mt-3">2.95 / 5</div>
              <div className="text-sm text-[#9a8ec1] mt-2">1825 ratings</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.metacritic} label="Source" />
            <ExternalButton href={links.metacriticPost} label="Source" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
            <ExternalButton href={links.pushSquare} label="Source" variant="ghost" />
            <ExternalButton href={links.psLifestyle} label="Source" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16" id="physical-release">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <PlatformIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Physical Release Status</h2>
              <p className="text-[#b1a7cf]">Current status and edition comparison.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Status</div>
              <div className="text-lg text-white mt-3">No confirmed physical edition page</div>
              <div className="text-sm text-[#9a8ec1] mt-2">As of 2026-01-11</div>
            </div>
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Standard</div>
              <div className="text-lg text-white mt-3">$49.99 (Digital)</div>
              <div className="text-sm text-[#9a8ec1] mt-2">PlayStation Store</div>
            </div>
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Digital Deluxe</div>
              <div className="text-lg text-white mt-3">Outfits + Soundtrack + Avatar</div>
              <div className="text-sm text-[#9a8ec1] mt-2">See deluxe listing</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.buy} label="Buy" />
            <ExternalButton href={links.official} label="Official" variant="ghost" />
            <ExternalButton href={links.gamespew} label="Source" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="skins">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Skins & Outfits</h2>
              <p className="text-[#b1a7cf]">Pre-order bonuses and Digital Deluxe cosmetics.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="panel-card p-5">
              <h3 className="text-lg font-semibold text-white mb-3">Digital Deluxe Outfits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "DinoMatrix",
                  "Ms. Sassy Sinclair",
                  "Star Shadow Siren",
                  "Big Sky Cowgirl",
                  "Sugar and Spice",
                ].map((item) => (
                  <div key={item} className="panel-card p-3 text-sm text-[#c0b7de]">{item}</div>
                ))}
              </div>
            </div>
            <div className="panel-card p-5">
              <h3 className="text-lg font-semibold text-white mb-3">Pre-order Bonus Items</h3>
              <ul className="text-sm text-[#c0b7de] space-y-2">
                <li>Retro American Bombshell Pinup Set</li>
                <li>Military Pinup outfit</li>
                <li>Pinup Swimsuit outfit</li>
                <li>Annihilator Sub-Machine Gun</li>
                <li>Retro Cherry Pie Earrings (10% boost in Mites for upgrading weapons)</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Armories</div>
              <div className="text-sm text-[#c0b7de] mt-3">Change weapon skins.</div>
            </div>
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Dressing Room</div>
              <div className="text-sm text-[#c0b7de] mt-3">Customize Violet's appearance.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.psprices} label="Source" />
            <ExternalButton href={links.official} label="Official" variant="ghost" />
            <ExternalButton href={links.releaseSourceTimeline} label="Source" variant="ghost" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16" id="engine">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Engine & Tech</h2>
              <p className="text-[#b1a7cf]">Technical highlights and PS5 Pro performance.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techHighlights.map((item) => (
              <div key={item} className="panel-card p-5 text-[#c0b7de]">{item}</div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {performanceStats.map((item) => (
              <div key={item.label} className="panel-card p-5">
                <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">{item.label}</div>
                <div className="text-base text-[#c0b7de] mt-3">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1c]" id="protagonist">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#2a1f46] flex items-center justify-center text-[#c4b5fd]">
              <SignalIcon />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Protagonist & Story</h2>
              <p className="text-[#b1a7cf]">Character, setting, and core conflict.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Character</div>
              <div className="text-lg text-white mt-3">Violet Sinclair</div>
              <div className="text-sm text-[#c0b7de] mt-2">Awakens during evacuation protocol inside Aion.</div>
            </div>
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Setting</div>
              <div className="text-sm text-[#c0b7de] mt-3">
                25th century; Earth uninhabitable; survivors rebuild on Trappist 1-E.
              </div>
            </div>
            <div className="panel-card p-5">
              <div className="text-sm text-[#b1a7cf] uppercase tracking-[0.2em]">Conflict</div>
              <div className="text-sm text-[#c0b7de] mt-3">
                Aion uses time-travel surrogates; Violet must survive dinosaurs and uncover the conspiracy.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.releaseSourceTimeline} label="Source" variant="ghost" />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[#2a1f46]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <ExternalButton href={links.official} label="Official" />
            <ExternalButton href={links.buy} label="Buy" variant="ghost" />
            <ExternalButton href={links.psStoreSource} label="Source" variant="ghost" />
          </div>
          <div className="panel-card p-4 text-xs text-[#9a8ec1] mb-6">
            Visual assets: TeamKill Media cover art and official screenshots. All trademarks and copyrights belong to their respective owners.
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
