import React, { useState } from 'react';
import { 
  ShieldCheck, Phone, Sparkles, Heart, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';

const HomeSeoContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 bg-zinc-950 text-gray-200 font-body border-t border-zinc-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10 space-y-16">
        
        {/* ── Top Header Badge & Title ── */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-[#f4b827]/30 text-[#f4b827] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Independent Adult Classifieds Directory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Adult Companions &amp; Wellness Services Directory Guide
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Welcome to Koka Site, an open classifieds directory connecting consenting adults with independent companions, escorts, and body massage practitioners across major cities in India. Browse listings by location, compare available service categories, and coordinate directly with independent advertisers.
          </p>
        </div>

        {/* ── Highlight Banner: Safety & Payment Advisory ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" /> Safety Advisory — Avoid Advance Payments
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Direct Contact &amp; Payment Safety Advisory
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Never send advance money, gift cards, or hotel booking deposits online before meeting in person. Independent advertisers manage their own schedules; discuss payment methods directly upon meeting.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="/service-areas" 
              className="px-6 py-3.5 rounded-full bg-[#f4b827] text-black font-bold text-sm hover:bg-amber-400 transition-all shadow-lg flex items-center gap-2 shrink-0"
            >
              Explore Service Areas
            </a>
          </div>
        </div>

        {/* ── Grid of English Content Categories (~1500 words total) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* College Call Girls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">🎓</div>
              <h2 className="text-xl font-bold text-white">College Call Girls (18+ Only)</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              College call girls are among the most sought-after companions for clients who appreciate youthful enthusiasm, modern mindsets, and energetic conversations. All profiles listed in this category are strictly verified 18+ consenting adults who are well-educated, articulate, and socially vibrant. Their friendly demeanor and open-minded attitude allow clients to feel instantly comfortable without any awkwardness or pressure. Many student companions are fluent in English, making communication effortless for both domestic and international travelers.
            </p>
          </div>

          {/* Housewife & Mature Call Girls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">🌹</div>
              <h2 className="text-xl font-bold text-white">Housewife & Mature Companions</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Housewife and mature companions are widely admired for their warmth, empathy, and deep understanding of emotional and physical needs. Bringing life experience, patience, and emotional balance, these companions are the top choice for gentlemen who value comforting intimacy and authentic connection. Their nurturing nature helps establish a serene environment where you can unwind completely after a demanding workday.
            </p>
          </div>

          {/* Model & Air Hostess VIP Call Girls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">👑</div>
              <h2 className="text-xl font-bold text-white">Model & VIP Escorts</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Model companions represent the pinnacle of glamour, elegance, and high-society companionship. Featuring striking looks and poised postures, these VIP escorts cater to clients seeking a high-class experience defined by luxury and prestige. They excel in upscale social environments such as corporate dinners, gala events, and luxury five-star hotel stays.
            </p>
          </div>

          {/* Russian & Foreign Companions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">🌍</div>
              <h2 className="text-xl font-bold text-white">Russian & International Companions</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Russian call girls and international companions offer an exclusive cosmopolitan touch for clients desiring international companionship and cultural charm. Well-traveled and fluent in English, they are adept at interacting with distinguished visitors. Their refined manners and captivating presence make them ideal for private hotel meets and VIP vacations.
            </p>
          </div>

          {/* Independent Call Girls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">💎</div>
              <h2 className="text-xl font-bold text-white">Independent Companions & Direct Booking</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Independent companions are preferred by discerning clients who value direct, transparent communication and personalized service without agency intermediaries. By managing their own schedules, independent escorts foster direct trust, flexible arrangements, and clear terms for an unhurried, attentive session.
            </p>
          </div>

          {/* Local Area Coverage */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#f4b827] font-bold text-lg">📍</div>
              <h2 className="text-xl font-bold text-white">Local Area Coverage & Citywide Availability</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Our directory provides extensive citywide coverage across all primary business, commercial, and residential hubs. Whether you are staying in central business districts, luxury hotel corridors, or private apartments, verified companions provide swift in-call and out-call appointments with complete discretion.
            </p>
          </div>

        </div>

        {/* ── Client Safety & Service Standards Section ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-8">
          <div className="border-b border-zinc-800 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f4b827] mb-1">
              <Heart className="w-4 h-4" /> Client Safety &amp; Verification Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted Directory for Verified Companion Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-300 leading-relaxed">
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <h3 className="font-bold text-amber-400 text-base mb-1">1. <strong>Verified Student &amp; College Companions</strong></h3>
                <p>
                  Youthful, educated, and stylish companions offering modern outlooks and friendly, respectful conversations. Ideal for unwinding after corporate events, private dinners, or hotel visits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <h3 className="font-bold text-amber-400 text-base mb-1">2. <strong>Mature &amp; Housewife Companions</strong></h3>
                <p>
                  Experienced, calm, and attentive companions who prioritize emotional comfort, discreet dates, and a relaxed, judgment-free environment tailored to your pace.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <h3 className="font-bold text-amber-400 text-base mb-1">3. <strong>Elite Models &amp; International Escorts</strong></h3>
                <p>
                  High-profile models and international companions suited for luxury five-star hotel stays, business trips, and VIP events where sophisticated presence is essential.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <h3 className="font-bold text-amber-400 text-base mb-1">4. <strong>100% Cash on Delivery &amp; Safe Delivery</strong></h3>
                <p>
                  Enjoy peace of mind with our strict zero-advance policy. Settle all bookings directly in cash upon meeting in person, with guaranteed 30-minute doorstep arrivals and absolute privacy.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Pricing Table Section ── */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Call Girl Service Pricing & Rates</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Standard indicative price brackets for different companion categories across major metropolitan areas. (Cash Payment Only)
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm text-gray-300">
              <thead className="bg-zinc-900 text-white font-bold uppercase tracking-wider text-[11px] border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-6">Companion Category</th>
                  <th className="py-4 px-6">1 Shot Rate</th>
                  <th className="py-4 px-6">Full Night Rate</th>
                  <th className="py-4 px-6">Service Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">Local Call Girl</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹4,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹10,000</td>
                  <td className="py-4 px-6 text-gray-400">Incall / Outcall</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">Housewife Call Girl</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹5,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹11,000</td>
                  <td className="py-4 px-6 text-gray-400">Incall / Outcall</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">College Call Girl (18+)</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹6,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹12,000</td>
                  <td className="py-4 px-6 text-gray-400">Incall / Outcall</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">Air Hostess Escort</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹9,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹16,000</td>
                  <td className="py-4 px-6 text-gray-400">Hotel Outcall</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">Russian & Foreign Escort</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹10,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹18,000</td>
                  <td className="py-4 px-6 text-gray-400">VIP Hotel Outcall</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="py-4 px-6 font-semibold text-white">High Profile Celebrity Model</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹12,000</td>
                  <td className="py-4 px-6 text-[#f4b827] font-bold">₹25,000</td>
                  <td className="py-4 px-6 text-gray-400">5-Star Outcall Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Step-by-Step Booking Guide Section ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-950 border border-zinc-800 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">5 Easy Steps to Book Your Companion</h2>
            <p className="text-xs sm:text-sm text-gray-400">5 Simple Steps to Book — No Advance, 100% Direct Contact</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4b827] text-black font-bold flex items-center justify-center text-sm shadow-md">1</div>
              <h3 className="font-bold text-white text-sm">Visit & Browse</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Explore verified listings and real unedited photos on our directory.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4b827] text-black font-bold flex items-center justify-center text-sm shadow-md">2</div>
              <h3 className="font-bold text-white text-sm">Select Profile</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Choose 2 to 3 available models matching your preferred budget and timing.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4b827] text-black font-bold flex items-center justify-center text-sm shadow-md">3</div>
              <h3 className="font-bold text-white text-sm">WhatsApp / Call</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Click to contact directly on WhatsApp or Phone to verify availability.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4b827] text-black font-bold flex items-center justify-center text-sm shadow-md">4</div>
              <h3 className="font-bold text-white text-sm">Share Location</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Provide your hotel room number or incall venue address for delivery.</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4b827] text-black font-bold flex items-center justify-center text-sm shadow-md">5</div>
              <h3 className="font-bold text-white text-sm">Meet & Pay Cash</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Enjoy your session and pay cash hand-to-hand upon meeting.</p>
            </div>

          </div>
        </div>

        {/* ── Frequently Asked Questions (FAQ) Section ── */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#f4b827]" /> Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">Everything you need to know about safety, booking, and cash payments.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Is any advance payment required before meeting?",
                a: "Independent advertisers may request different arrangements, but we strongly advise users against sending advance payments or deposits to unknown parties. For safety, arrange payments directly in person upon meeting at verified venues."
              },
              {
                q: "Are profile listings and photos verified?",
                a: "Listing profiles are submitted by independent advertisers. While community moderation and reporting tools are in place to remove abusive and misleading listings, users should always exercise standard personal discretion and report suspicious profiles."
              },
              {
                q: "How does contacting an independent advertiser work?",
                a: "Users can communicate directly with listed providers via the contact channels indicated on their public profiles. As an open classifieds portal, Koka Site does not act as an agency or intermediary."
              },
              {
                q: "Is client confidentiality and privacy respected?",
                a: "Koka Site does not collect unnecessary personal browsing identities or sell user details to third parties. We strongly recommend all visitors maintain their own digital privacy when contacting external numbers."
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-white text-sm sm:text-base hover:text-[#f4b827] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#f4b827]" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSeoContent;
