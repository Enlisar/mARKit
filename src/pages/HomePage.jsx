import founderA from "../assets/a.jpeg";
import founderK from "../assets/k.jpg";

export default function HomePage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-border px-4 py-3 flex items-center justify-between">
        <a href="/">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-slate-900">m</span>
            <span className="text-primary">ARK</span>
            <span className="text-slate-900">it</span>
          </div>
        </a>
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider">
          <a className="hover:text-primary" href="#services">
            Services
          </a>
          <a className="hover:text-primary" href="#process">
            Process
          </a>
          <a className="hover:text-primary" href="#impact">
            Impact
          </a>
          <a className="hover:text-primary" href="#aboutus">
            About Us
          </a>
        </div>
        <a
          className="bg-primary text-white px-5 py-2 text-sm font-bold uppercase tracking-widest border border-primary hover:bg-white hover:text-primary transition-colors flex items-center justify-center"
          href="/contact"
        >
          Book a call
        </a>
      </nav>

      <section className="bg-white px-4 py-16 md:py-24 border-b border-neutral-border overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-[-0.05em] mb-8 text-slate-900">
              Your brand.
              <br />
              <span className="text-primary">Our engine.</span>
              <br />
              Everywhere.
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 font-display">
              Stuck in the same place?
            </div>
            <p className="text-lg text-slate-600 mb-10 max-w-md">
              mARKit helps your business stand out, attract attention, and scale
              faster with powerful, high-converting creatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#process">
                <button className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-widest border border-primary text-sm">
                  See how it works
                </button>
              </a>
              <a href="/work">
                <button className="bg-transparent text-primary border border-primary px-8 py-4 font-bold uppercase tracking-widest text-sm">
                  View our work
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square flex items-center justify-center">
            <img
              alt="mARKit Logo"
              className="w-full h-auto max-w-md mx-auto object-contain"
              src="https://www.ijaipuria.com/wp-content/uploads/2022/09/Dats-science.png"
            />
          </div>
        </div>
      </section>

      <div className="bg-primary py-4 overflow-hidden border-y border-primary">
        <div className="ticker-container">
          <div className="ticker-content text-white font-bold uppercase tracking-widest text-sm md:text-base">
            SEO &amp; AEO · Creatives · Reels · Website · Analytics · Social
            Media Handling · Advertisements · SEO &amp; AEO · Creatives · Reels
            · Website · Analytics · Social Media Handling · Advertisements · SEO
            &amp; AEO · Creatives · Reels · Website · Analytics · Social Media
            Handling · Advertisements · SEO &amp; AEO · Creatives · Reels ·
            Website · Analytics · Social Media Handling · Advertisements ·
          </div>
        </div>
      </div>

      <section className="bg-neutral-light py-20 px-4" id="services">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-primary text-xs font-bold tracking-[0.3em] mb-4 uppercase">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 max-w-2xl text-slate-900">
            Choose the engine that powers your growth.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-border flex flex-col h-full relative">
              <div className="text-primary font-bold text-sm mb-4">
                01 · STARTER
              </div>
              <h3 className="text-2xl font-bold mb-1">
                Get your business online
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Best for local shops, cafes, and new businesses.
              </p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-dark-text">
                  ₹7,999
                </span>
                <span className="text-slate-500 text-sm"> – </span>
                <span className="text-3xl font-bold text-dark-text">
                  ₹12,999
                </span>
                <span className="text-slate-400 text-xs block mt-1 uppercase tracking-widest">
                  / Month
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>1 basic website (5 pages — static)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Basic SEO setup (keywords + on-page)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>8 Instagram posts/month (simple designs)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>2 revisions per design</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>WhatsApp/chat integration on website</span>
                </li>
              </ul>
              <a
                className="w-full bg-transparent text-dark-text border-2 border-dark-text py-4 text-center font-bold uppercase tracking-widest text-xs hover:bg-dark-text hover:text-white transition-all"
                href="/contact"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 border-2 border-primary flex flex-col h-full relative scale-105 shadow-2xl z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1">
                Most Popular
              </div>
              <div className="text-primary font-bold text-sm mb-4">
                02 · GROWTH
              </div>
              <h3 className="text-2xl font-bold mb-1">
                Get more leads &amp; visibility
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Best for growing brands and startups.
              </p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-dark-text">
                  ₹18,000
                </span>
                <span className="text-slate-500 text-sm"> – </span>
                <span className="text-3xl font-bold text-dark-text">
                  ₹30,000
                </span>
                <span className="text-slate-400 text-xs block mt-1 uppercase tracking-widest">
                  / Month
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>
                    1 professional website (dynamic + basic animations)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Full SEO (on-page + basic off-page backlinks)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>15 Instagram posts/month (carousels + creatives)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>4 reels/month (simple edits)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Content captions + hashtags</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Monthly performance report</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>4–5 revisions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Google Business Profile optimisation</span>
                </li>
              </ul>
              <a
                className="w-full bg-primary text-white py-4 text-center font-bold uppercase tracking-widest text-xs border-2 border-primary hover:bg-white hover:text-primary transition-all"
                href="/contact"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 border border-neutral-border flex flex-col h-full relative">
              <div className="text-primary font-bold text-sm mb-4">
                03 · PREMIUM
              </div>
              <h3 className="text-2xl font-bold mb-1">Scale your brand</h3>
              <p className="text-slate-500 text-sm mb-6">
                Best for businesses that want serious growth.
              </p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-dark-text">
                  ₹40,000
                </span>
                <span className="text-slate-500 text-sm"> – </span>
                <span className="text-3xl font-bold text-dark-text">
                  ₹70,000
                </span>
                <span className="text-slate-400 text-xs block mt-1 uppercase tracking-widest">
                  / Month
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>High-end website (UI/UX, fast, optimised)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>
                    Advanced SEO (technical + backlinks + blog strategy)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>25+ Instagram posts (carousels + branding)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>8–10 reels (edited + trending style)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Content strategy — what to post &amp; when</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Competitor analysis</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Weekly reporting + insights</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    check
                  </span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 italic">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    add
                  </span>
                  <span>Optional: Meta Ads setup + landing page</span>
                </li>
              </ul>
              <a
                className="w-full bg-transparent text-dark-text border-2 border-dark-text py-4 text-center font-bold uppercase tracking-widest text-xs hover:bg-dark-text hover:text-white transition-all"
                href="/contact"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-12 bg-[#fff5f5] border border-primary p-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-lg shrink-0">
              priority_high
            </span>
            <p className="text-sm text-subtext">
              Pricing may vary based on project complexity. Custom quotes and
              flexible pricing available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4" id="process">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-primary text-xs font-bold tracking-[0.3em] mb-4 text-center uppercase">
            Simple process, real results.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center text-slate-900">
            From topic to posted. In minutes.
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px border-t border-dashed border-primary z-0" />

            <div className="relative z-10 flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center font-bold text-primary mb-4">
                1
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                You Connect
              </h4>
              <p className="text-sm text-slate-500">
                Reach out via website, Instagram DM or WhatsApp — we respond
                within 24 hours
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center font-bold text-primary mb-4">
                2
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                We Analyse
              </h4>
              <p className="text-sm text-slate-500">
                We study your business, audience, competitors and current
                digital presence
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center font-bold text-primary mb-4">
                3
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                Your Needs, Mapped
              </h4>
              <p className="text-sm text-slate-500">
                We identify exactly what services will move the needle for your
                brand
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center font-bold text-primary mb-4">
                4
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                We Build &amp; Execute
              </h4>
              <p className="text-sm text-slate-500">
                Content, ads, automations, websites — we handle everything
                end-to-end
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 bg-primary border-2 border-primary flex items-center justify-center font-bold text-white mb-4">
                5
              </div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-primary">
                You Scale
              </h4>
              <p className="text-sm text-slate-500">
                You see real growth — more reach, more leads, more revenue.
                Every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-4 text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] mb-12 opacity-80">
            Efficiency metrics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h5 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                6+
              </h5>
              <p className="font-bold uppercase tracking-widest text-xs opacity-90">
                Services
              </p>
            </div>
            <div>
              <h5 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                10x
              </h5>
              <p className="font-bold uppercase tracking-widest text-xs opacity-90">
                bETTER
              </p>
            </div>
            <div>
              <h5 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                0
              </h5>
              <p className="font-bold uppercase tracking-widest text-xs opacity-90">
                YOUR Manual work
              </p>
            </div>
          </div>
          <h4 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl mx-auto">
            While you sleep, mARKit is working.
          </h4>
        </div>
      </section>

      <section className="bg-white py-20 px-4" id="impact">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold tracking-[0.3em] mb-4 uppercase">
              IMPACT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-dark-text mb-4">
              What changes when you choose mARKit.
            </h2>
            <p className="text-subtext text-lg max-w-2xl mx-auto">
              The difference isn't just content. It's the entire way your brand
              shows up online.
            </p>
          </div>
          <div className="border border-neutral-border">
            <div className="grid grid-cols-2">
              <div className="bg-neutral-light py-4 px-6 text-center text-subtext font-bold uppercase tracking-widest text-xs md:text-sm">
                Before mARKit
              </div>
              <div className="bg-primary py-4 px-6 text-center text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                After mARKit
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Inconsistent posting, no clear plan
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Consistent, high-quality content every month
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Limited or basic website presence
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Professional website that builds trust
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Little to no visibility on Google
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Improved visibility with proper SEO
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Designs that don’t convert
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Designs focused on engagement &amp; conversion
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Wasted money on unstructured ads
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Structured ad creatives that support growth
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-neutral-border">
              <div className="p-6 md:px-12 flex items-center gap-3 text-subtext text-sm md:text-base border-r border-neutral-border">
                <span className="material-symbols-outlined text-sm shrink-0">
                  close
                </span>{" "}
                Slow and unpredictable growth
              </div>
              <div className="p-6 md:px-12 flex items-center gap-3 text-dark-text font-medium text-sm md:text-base">
                <span className="material-symbols-outlined text-primary text-sm shrink-0">
                  check
                </span>{" "}
                Steady, measurable business growth
              </div>
            </div>
          </div>
          <div className="bg-primary mt-0 py-4 px-6 text-center text-white text-sm md:text-base font-bold tracking-tight">
            "The brands that win online aren’t the biggest. They’re the most
            consistent."
          </div>
        </div>
      </section>

      <section className="bg-neutral-light py-20 px-4" id="aboutus">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-primary text-xs font-bold tracking-[0.3em] mb-4 uppercase">
            Who We Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-dark-text mb-4">
            Built for every brand that wants to grow.
          </h2>
          <p className="text-subtext text-lg max-w-2xl mx-auto mb-16">
            Whether you sell clothes, food, courses or consulting — mARKit
            speaks your industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                apparel
              </span>
              <h3 className="text-xl font-bold mb-3">Fashion &amp; Clothing</h3>
              <p className="text-subtext text-sm">
                Lookbooks, product reels, style content and seasonal campaigns
              </p>
            </div>
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                restaurant
              </span>
              <h3 className="text-xl font-bold mb-3">Food &amp; Restaurants</h3>
              <p className="text-subtext text-sm">
                Menu showcases, chef reels, delivery promos and Google ranking
              </p>
            </div>
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                location_city
              </span>
              <h3 className="text-xl font-bold mb-3">Real Estate</h3>
              <p className="text-subtext text-sm">
                Property walkthroughs, location reels, lead gen automation
              </p>
            </div>
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                school
              </span>
              <h3 className="text-xl font-bold mb-3">
                Education &amp; Coaching
              </h3>
              <p className="text-subtext text-sm">
                Course promos, testimonial reels, lead capture funnels
              </p>
            </div>
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                shopping_bag
              </span>
              <h3 className="text-xl font-bold mb-3">D2C &amp; Ecommerce</h3>
              <p className="text-subtext text-sm">
                AI product shoots, ad creatives, Meta ads and auto-posting
              </p>
            </div>
            <div className="bg-white border border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                storefront
              </span>
              <h3 className="text-xl font-bold mb-3">Local Businesses</h3>
              <p className="text-subtext text-sm">
                SEO, Google Business, WhatsApp automation and social presence
              </p>
            </div>
          </div>
          <p className="text-sm text-subtext">
            Don't see your industry? We work with all businesses.{" "}
            <a
              className="text-primary font-bold hover:underline"
              href="/contact"
            >
              Get in touch
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-primary text-xs font-bold tracking-[0.3em] mb-4 uppercase">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-dark-text mb-4">
            Built by builders. Driven by results.
          </h2>
          <p className="text-subtext text-lg max-w-2xl mx-auto mb-16">
            We're a student-founded AI agency from India — obsessed with making
            brands grow smarter, faster and cheaper than anyone else.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <span className="absolute -top-11 -left-4 text-[9rem] font-black text-primary leading-none select-none z-10">
                A
              </span>
              <div className="bg-white border-[0.5px] border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
                <div>
                  <img src={founderA} alt="@aaronbisht" className="w-[150px] h-[150px] bg-neutral-light border-2 border-primary rounded-full flex items-center justify-center text-xs text-subtext mb-6" />
                </div>
                <h4 className="text-base font-bold text-dark-text mb-1">
                  Founder One
                </h4>
                <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-6">
                  Co-Founder
                </p>
                <div className="flex gap-4 text-[#AAAAAA]">
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    share
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    alternate_email
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    monitoring
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 -left-4 text-[9rem] font-black text-primary leading-none select-none z-10">
                R
              </span>
              <div className="bg-white border-[0.5px] border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
                <div className="w-[150px] h-[150px] bg-neutral-light border-2 border-primary rounded-full flex items-center justify-center text-xs text-subtext mb-6">
                  Photo
                </div>
                <h4 className="text-base font-bold text-dark-text mb-1">
                  Founder Two
                </h4>
                <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-6">
                  Co-Founder
                </p>
                <div className="flex gap-4 text-[#AAAAAA]">
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    share
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    alternate_email
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    monitoring
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-11 -left-4 text-[9rem] font-black text-primary leading-none select-none z-10">
                K
              </span>
              <div className="bg-white border-[0.5px] border-neutral-border p-8 rounded-card flex flex-col items-center text-center">
                <div>
                  <img src={founderK} alt="@kavyasharma" className="w-[150px] h-[150px] bg-neutral-light border-2 border-primary rounded-full flex items-center justify-center text-xs text-subtext mb-6" />
                </div>
                <h4 className="text-base font-bold text-dark-text mb-1">
                  Founder Three
                </h4>
                <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-6">
                  Co-Founder
                </p>
                <div className="flex gap-4 text-[#AAAAAA]">
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    share
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    alternate_email
                  </span>
                  <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">
                    monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-light p-10 max-w-4xl mx-auto relative">
            <span
              className="material-symbols-outlined text-primary text-5xl absolute -top-6 left-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <p className="text-base md:text-xl text-dark-text leading-relaxed italic mb-4">
              "We started mARKit because we were tired of seeing great
              businesses stay invisible online. We’re here to make sure every
              brand gets the attention it deserves"
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              — The mARKit Founders
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-neutral-border pt-16 pb-8 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div>
              <div className="text-2xl font-bold tracking-tighter mb-2">
                <span className="text-slate-900">m</span>
                <span className="text-primary">ARK</span>
                <span className="text-slate-900">it</span>
              </div>
              <p className="text-slate-500 text-sm">
                Your brand. Our engine. Everywhere.
              </p>
            </div>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="text-slate-400 hover:text-primary" href="#">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a className="text-slate-400 hover:text-primary" href="#">
                <span className="material-symbols-outlined">monitoring</span>
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-border pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-slate-400 uppercase tracking-widest">
              © 2024 mARKit Automation. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-400 uppercase tracking-widest">
              <a className="hover:text-primary" href="#">
                Privacy
              </a>
              <a className="hover:text-primary" href="#">
                Terms
              </a>
              <a className="hover:text-primary" href="#">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-border flex justify-around py-3 z-50">
        <a className="flex flex-col items-center gap-1" href="#services">
          <span className="material-symbols-outlined text-slate-900">
            category
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Services
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#process">
          <span className="material-symbols-outlined text-slate-400">
            route
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Process
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#impact">
          <span className="material-symbols-outlined text-slate-400">
            analytics
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            iMPACT
          </span>
        </a>
        <a className="flex flex-col items-center gap-1" href="#aboutus">
          <span className="material-symbols-outlined text-slate-400">mail</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            ABOUT US
          </span>
        </a>
      </div>
    </>
  );
}
