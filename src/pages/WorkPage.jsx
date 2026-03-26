import React, { useEffect } from "react";

export default function WorkPage() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-5");
            e.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-fade]")
      .forEach((el) => fadeObserver.observe(el));

    const perCardObservers = [];
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-4");
            e.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll("[data-card-reveal]").forEach((card) => {
      perCardObservers.push(cardObserver);
      cardObserver.observe(card);
    });

    const unsubscribers = [];

    document.querySelectorAll("[data-cafe-menu-item]").forEach((item) => {
      const handler = () => {
        document.querySelectorAll("[data-cafe-menu-item]").forEach((i) => {
          i.classList.remove("bg-[#c4663a]");
          i.classList.add("bg-transparent");
          const name = i.querySelector("[data-cafe-menu-name]");
          if (name) name.classList.remove("text-white");
          if (name) name.classList.add("text-[rgba(245,237,224,0.7)]");
        });
        item.classList.remove("bg-transparent");
        item.classList.add("bg-[#c4663a]");
        const name = item.querySelector("[data-cafe-menu-name]");
        if (name) name.classList.remove("text-[rgba(245,237,224,0.7)]");
        if (name) name.classList.add("text-white");
      };
      item.addEventListener("click", handler);
      unsubscribers.push(() => item.removeEventListener("click", handler));
    });

    document.querySelectorAll("[data-cl-cat-item]").forEach((item) => {
      const handler = () => {
        document.querySelectorAll("[data-cl-cat-item]").forEach((i) => {
          i.classList.remove("text-[#f0ede8]", "border-b-[#b8965a]");
          i.classList.add(
            "text-[rgba(240,237,232,0.4)]",
            "border-b-transparent",
          );
        });
        item.classList.remove(
          "text-[rgba(240,237,232,0.4)]",
          "border-b-transparent",
        );
        item.classList.add("text-[#f0ede8]", "border-b-[#b8965a]");
      };
      item.addEventListener("click", handler);
      unsubscribers.push(() => item.removeEventListener("click", handler));
    });

    document.querySelectorAll("[data-cl-filter-btn]").forEach((btn) => {
      const handler = () => {
        document.querySelectorAll("[data-cl-filter-btn]").forEach((b) => {
          b.classList.remove(
            "bg-[#070707]",
            "text-[#f0ede8]",
            "border-[#070707]",
          );
          b.classList.add(
            "bg-transparent",
            "text-[#070707]",
            "border-[rgba(0,0,0,0.12)]",
          );
        });
        btn.classList.remove(
          "bg-transparent",
          "text-[#070707]",
          "border-[rgba(0,0,0,0.12)]",
        );
        btn.classList.add("bg-[#070707]", "text-[#f0ede8]", "border-[#070707]");
      };
      btn.addEventListener("click", handler);
      unsubscribers.push(() => btn.removeEventListener("click", handler));
    });

    return () => {
      fadeObserver.disconnect();
      perCardObservers.forEach((o) => o.disconnect());
      unsubscribers.forEach((u) => u());
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&family=Italiana&family=Josefin+Sans:wght@100;200;300;400&display=swap"
        rel="stylesheet"
      />

      <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0c0c0c] text-white [font-family:'DM_Sans',sans-serif]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

        <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-[60px] py-8">
          <a href="/">
            <div className="text-[18px] font-extralight tracking-[0.35em] [font-family:'Josefin_Sans',sans-serif]">
              m<span className="text-primary">ARK</span>it
            </div>
          </a>
        </nav>

        <div className="relative z-[2] text-center">
          <div className="mb-7 text-[11px] font-light uppercase tracking-[0.5em] text-[#c9a84c] [font-family:'Josefin_Sans',sans-serif]">
            Selected Work — 2025 / 2026
          </div>
          <h1 className="mb-8 text-[clamp(64px,9vw,130px)] font-light leading-[0.95] tracking-[-0.02em] [font-family:'Cormorant_Garamond',serif]">
            Websites that
            <br />
            <em className="font-normal italic text-[#c9a84c]">convert</em>
          </h1>
          <p className="mx-auto mb-[60px] max-w-[440px] text-[15px] font-light leading-[1.8] tracking-[0.05em] text-[rgba(255,255,255,0.45)]">
            We design and build premium digital experiences for brands that
            demand excellence. Two industries, one standard of quality.
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.4)]">
            <span className="h-px w-10 bg-[rgba(255,255,255,0.2)]" />
            Explore Projects
            <span className="h-px w-10 bg-[rgba(255,255,255,0.2)]" />
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-5">
          <a
            href="#cafe"
            className="cursor-pointer rounded-full border border-[rgba(255,255,255,0.12)] px-7 py-2.5 text-[11px] uppercase tracking-[0.25em] text-[rgba(255,255,255,0.5)] transition-colors hover:border-[#c9a84c] hover:text-[#c9a84c]"
          >
            ☕ Café &amp; Dining
          </a>
          <a
            href="#clothing"
            className="cursor-pointer rounded-full border border-[rgba(255,255,255,0.12)] px-7 py-2.5 text-[11px] uppercase tracking-[0.25em] text-[rgba(255,255,255,0.5)] transition-colors hover:border-[#c9a84c] hover:text-[#c9a84c]"
          >
            👔 Fashion &amp; Apparel
          </a>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-[#0e0d0b] pt-[100px]"
        id="cafe"
      >
        <div
          data-fade
          className="flex flex-wrap items-end justify-between gap-[30px] px-[60px] pb-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-[10px] text-[10px] font-light uppercase tracking-[0.5em] text-[#c9a84c] [font-family:'Josefin_Sans',sans-serif]">
              <span className="h-px w-6 bg-[#c9a84c]" />
              Project 01
            </div>
            <h2 className="text-[clamp(40px,6vw,80px)] font-light leading-none tracking-[-0.02em] text-white [font-family:'Cormorant_Garamond',serif]">
              Café &amp;
              <br />
              <em className="italic text-[#c9a84c]">Dining</em>
            </h2>
          </div>
          <div className="max-w-[320px]">
            <p className="text-[13px] font-light leading-[1.9] text-[rgba(255,255,255,0.4)]">
              A complete digital presence for a premium café brand — from the
              first impression to the last sip. Warm, inviting, and built to
              fill tables.
            </p>
          </div>
        </div>

        <div
          data-fade
          className="mb-[60px] flex items-stretch gap-0 px-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="mr-6 self-center text-[10px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.3)] [writing-mode:vertical-rl] [font-family:'Josefin_Sans',sans-serif]">
            Color Palette
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { hex: "#2C1810", name: "Espresso", bg: "bg-[#2c1810]" },
              { hex: "#C4663A", name: "Terracotta", bg: "bg-[#c4663a]" },
              { hex: "#8B5E3C", name: "Mocha", bg: "bg-[#8b5e3c]" },
              { hex: "#F5EDE0", name: "Cream", bg: "bg-[#f5ede0]" },
              { hex: "#7A8C6E", name: "Sage", bg: "bg-[#7a8c6e]" },
              { hex: "#FAF7F2", name: "Warm White", bg: "bg-[#faf7f2]" },
            ].map((s) => (
              <div key={s.hex} className="flex flex-col items-center gap-2">
                <div
                  className={`h-14 w-14 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${s.bg}`}
                />
                <div className="text-[9px] tracking-[0.15em] text-[rgba(255,255,255,0.35)] [font-family:'Josefin_Sans',sans-serif]">
                  {s.hex}
                </div>
                <div className="text-[9px] tracking-[0.1em] text-[rgba(255,255,255,0.2)]">
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-fade
          className="mb-[60px] flex flex-wrap gap-10 px-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Display / Headings
            </div>
            <div className="text-[26px] italic text-[#f5ede0] [font-family:'Cormorant_Garamond',serif]">
              Aa Bb Cc
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              Cormorant Garamond
            </div>
          </div>
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Body / UI Text
            </div>
            <div className="text-[22px] font-light text-[#f5ede0] [font-family:'DM_Sans',sans-serif]">
              Aa Bb Cc
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              DM Sans Light
            </div>
          </div>
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Labels / Accents
            </div>
            <div className="text-[20px] font-extralight tracking-[0.2em] text-[#f5ede0] [font-family:'Josefin_Sans',sans-serif]">
              AA BB CC
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              Josefin Sans Thin
            </div>
          </div>
          <div className="min-w-[200px] flex-none rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Tone
            </div>
            <div className="mt-1 flex flex-col gap-1.5">
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                ☕ Warm &amp; Inviting
              </span>
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                🌿 Artisan &amp; Organic
              </span>
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                ✨ Premium &amp; Refined
              </span>
            </div>
          </div>
        </div>

        <div
          data-fade
          className="mx-10 overflow-hidden rounded-t-2xl border border-[rgba(255,255,255,0.06)] border-b-0 shadow-[0_-20px_80px_rgba(0,0,0,0.6)] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="flex items-center gap-3.5 border-b border-[rgba(255,255,255,0.05)] bg-[#1e1d1a] px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c940]" />
            </div>
            <div className="mx-auto max-w-[400px] flex-1 rounded-md bg-[rgba(255,255,255,0.05)] px-3.5 py-1.5 text-center text-[11px] tracking-[0.05em] text-[rgba(255,255,255,0.3)]">
              www.beanstory.com
            </div>
          </div>

          <div className="bg-[#faf7f2] text-[#2c1810] [font-family:'DM_Sans',sans-serif]">
            <nav className="relative flex items-center justify-between border-b border-[rgba(44,24,16,0.08)] bg-[#faf7f2] px-[60px] py-[22px]">
              <div className="text-[24px] font-normal tracking-[0.05em] [font-family:'Cormorant_Garamond',serif]">
                Bean Story
              </div>
              <ul className="flex list-none gap-9">
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-100"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-60 transition-opacity hover:opacity-100"
                  >
                    Our Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-60 transition-opacity hover:opacity-100"
                  >
                    Reservations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-60 transition-opacity hover:opacity-100"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-60 transition-opacity hover:opacity-100"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#2c1810] opacity-60 transition-opacity hover:opacity-100"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="rounded-full bg-[#2c1810] px-6 py-[11px] text-[11px] font-medium uppercase tracking-[0.15em] text-[#f5ede0] no-underline"
              >
                Book a Table
              </a>
            </nav>

            <div className="grid min-h-[520px] grid-cols-2">
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#2c1810] px-[60px] py-[70px] after:absolute after:bottom-[-40px] after:left-[-40px] after:h-[220px] after:w-[220px] after:rounded-full after:border-[60px] after:border-[rgba(196,102,58,0.12)]">
                <div className="text-[10px] font-extralight uppercase tracking-[0.4em] text-[#c4663a] [font-family:'Josefin_Sans',sans-serif]">
                  Est. 2018 · Hand-crafted with love
                </div>
                <div>
                  <h1 className="text-[clamp(44px,5vw,68px)] font-light leading-[1.1] tracking-[-0.01em] text-[#f5ede0] [font-family:'Cormorant_Garamond',serif]">
                    Where Every
                    <br />
                    Sip Tells a
                    <br />
                    <em className="italic text-[#c4663a]">Story</em>
                  </h1>
                </div>
                <p className="max-w-[340px] text-[13px] font-light leading-[1.8] text-[rgba(245,237,224,0.55)]">
                  Locally sourced beans, slow brewed to perfection. A sanctuary
                  for those who believe great coffee deserves great company.
                </p>
                <div className="flex flex-wrap gap-3.5">
                  <a
                    href="#"
                    className="inline-block rounded bg-[#c4663a] px-[30px] py-[13px] text-[12px] font-medium uppercase tracking-[0.12em] text-white no-underline"
                  >
                    View Our Menu
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded border border-[rgba(245,237,224,0.25)] px-[30px] py-[13px] text-[12px] font-normal uppercase tracking-[0.12em] text-[#f5ede0] no-underline"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#d4956a_0%,#c4663a_40%,#8b5e3c_100%)]">
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 text-[rgba(255,255,255,0.4)]">
                  <div className="text-[64px] opacity-60">☕</div>
                </div>
                <div className="absolute bottom-[30px] right-[30px] flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-[#faf7f2] text-center">
                  <span className="text-[24px] font-semibold leading-none text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                    4.9
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#8b5e3c]">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center bg-[#2c1810]">
              <div
                data-cafe-menu-item
                className="cursor-pointer border-r border-[rgba(245,237,224,0.08)] bg-[#c4663a] px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">☕</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-white"
                >
                  Espresso Bar
                </div>
              </div>
              <div
                data-cafe-menu-item
                className="cursor-pointer border-r border-[rgba(245,237,224,0.08)] bg-transparent px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">🍵</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,237,224,0.7)]"
                >
                  Specialty Teas
                </div>
              </div>
              <div
                data-cafe-menu-item
                className="cursor-pointer border-r border-[rgba(245,237,224,0.08)] bg-transparent px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">🥐</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,237,224,0.7)]"
                >
                  Pastries
                </div>
              </div>
              <div
                data-cafe-menu-item
                className="cursor-pointer border-r border-[rgba(245,237,224,0.08)] bg-transparent px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">🥗</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,237,224,0.7)]"
                >
                  Light Bites
                </div>
              </div>
              <div
                data-cafe-menu-item
                className="cursor-pointer border-r border-[rgba(245,237,224,0.08)] bg-transparent px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">🍰</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,237,224,0.7)]"
                >
                  Desserts
                </div>
              </div>
              <div
                data-cafe-menu-item
                className="cursor-pointer bg-transparent px-9 py-[18px] text-center transition-colors hover:bg-[rgba(196,102,58,0.15)]"
              >
                <div className="mb-1 text-[18px]">🧃</div>
                <div
                  data-cafe-menu-name
                  className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,237,224,0.7)]"
                >
                  Cold Drinks
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-[rgba(44,24,16,0.08)]">
              <div className="relative border-r border-[rgba(44,24,16,0.07)] px-9 py-10">
                <div className="mb-2.5 text-[52px] font-light leading-none text-[rgba(44,24,16,0.07)] [font-family:'Cormorant_Garamond',serif]">
                  01
                </div>
                <div className="mb-3.5 text-[28px]">🌱</div>
                <div className="mb-2.5 text-[22px] font-medium text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                  Sustainably Sourced
                </div>
                <p className="text-[12px] leading-[1.8] text-[rgba(44,24,16,0.5)]">
                  Single-origin beans from ethical farms. Every cup supports
                  fair trade communities across three continents.
                </p>
              </div>
              <div className="relative border-r border-[rgba(44,24,16,0.07)] px-9 py-10">
                <div className="mb-2.5 text-[52px] font-light leading-none text-[rgba(44,24,16,0.07)] [font-family:'Cormorant_Garamond',serif]">
                  02
                </div>
                <div className="mb-3.5 text-[28px]">👨‍🍳</div>
                <div className="mb-2.5 text-[22px] font-medium text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                  Master Roasted
                </div>
                <p className="text-[12px] leading-[1.8] text-[rgba(44,24,16,0.5)]">
                  Our in-house roastery ensures every batch reaches its peak
                  flavour profile. Freshness you can taste.
                </p>
              </div>
              <div className="relative px-9 py-10">
                <div className="mb-2.5 text-[52px] font-light leading-none text-[rgba(44,24,16,0.07)] [font-family:'Cormorant_Garamond',serif]">
                  03
                </div>
                <div className="mb-3.5 text-[28px]">🏡</div>
                <div className="mb-2.5 text-[22px] font-medium text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                  Cosy Atmosphere
                </div>
                <p className="text-[12px] leading-[1.8] text-[rgba(44,24,16,0.5)]">
                  Designed to make you linger. Curated playlists, warm lighting,
                  and spaces built for conversation.
                </p>
              </div>
            </div>

            <div className="bg-[#f5ede0] p-[60px]">
              <div className="mb-12 text-center">
                <p className="mt-0 text-[12px] uppercase tracking-[0.3em] text-[#8b5e3c]">
                  Explore Our
                </p>
                <h3 className="text-[42px] font-light italic text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                  Popular Picks
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-5">
                {[
                  {
                    name: "Signature Latte",
                    desc: "Double shot, steamed oat milk, house vanilla syrup",
                    price: "₹280",
                    icon: "☕",
                    bg: "bg-[linear-gradient(135deg,#3d2010,#8b5e3c)]",
                    delay: "delay-[0ms]",
                  },
                  {
                    name: "Matcha Cloud",
                    desc: "Ceremonial grade matcha, frothy milk, honey drizzle",
                    price: "₹320",
                    icon: "🍵",
                    bg: "bg-[linear-gradient(135deg,#7a8c6e,#4a5e40)]",
                    delay: "delay-[80ms]",
                  },
                  {
                    name: "Butter Croissant",
                    desc: "Freshly baked, laminated dough, flaky layers",
                    price: "₹180",
                    icon: "🥐",
                    bg: "bg-[linear-gradient(135deg,#d4a76a,#c4663a)]",
                    delay: "delay-[160ms]",
                  },
                  {
                    name: "Red Velvet Slice",
                    desc: "House baked, cream cheese frosting, cocoa base",
                    price: "₹240",
                    icon: "🍰",
                    bg: "bg-[linear-gradient(135deg,#c0392b,#8b1a1a)]",
                    delay: "delay-[240ms]",
                  },
                ].map((card) => (
                  <div
                    key={card.name}
                    data-card-reveal
                    className={`overflow-hidden rounded-lg bg-[#faf7f2] shadow-[0_2px_20px_rgba(44,24,16,0.08)] opacity-0 translate-y-4 transition-[opacity,transform] duration-500 ease-out ${card.delay}`}
                  >
                    <div
                      className={`flex h-[120px] items-center justify-center text-[40px] ${card.bg}`}
                    >
                      {card.icon}
                    </div>
                    <div className="px-[18px] py-4">
                      <div className="mb-1 text-[18px] font-medium text-[#2c1810] [font-family:'Cormorant_Garamond',serif]">
                        {card.name}
                      </div>
                      <p className="mb-3 text-[11px] leading-[1.6] text-[rgba(44,24,16,0.45)]">
                        {card.desc}
                      </p>
                      <div className="text-[18px] font-semibold text-[#c4663a] [font-family:'Cormorant_Garamond',serif]">
                        {card.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[2fr_1fr_1fr] gap-10 bg-[#2c1810] px-[60px] py-10">
              <div>
                <div className="mb-3 text-[28px] text-[#f5ede0] [font-family:'Cormorant_Garamond',serif]">
                  Bean Story
                </div>
                <p className="text-[12px] font-light leading-[1.7] text-[rgba(245,237,224,0.4)]">
                  A place where coffee is crafted with care and served with
                  warmth. Come for the coffee, stay for the story.
                </p>
              </div>
              <div>
                <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c4663a]">
                  Visit Us
                </div>
                <ul className="flex list-none flex-col gap-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Our Location
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Opening Hours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Parking Info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Private Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c4663a]">
                  Quick Links
                </div>
                <ul className="flex list-none flex-col gap-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Full Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Book a Table
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Loyalty Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[12px] text-[rgba(245,237,224,0.45)] no-underline"
                    >
                      Catering
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-[60px] h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)]" />

      <section className="relative bg-[#070707] pt-[120px]" id="clothing">
        <div
          data-fade
          className="flex flex-wrap items-end justify-between gap-[30px] px-[60px] pb-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-[10px] text-[10px] font-light uppercase tracking-[0.5em] text-[#c9a84c] [font-family:'Josefin_Sans',sans-serif]">
              <span className="h-px w-6 bg-[#c9a84c]" />
              Project 02
            </div>
            <h2 className="text-[clamp(40px,6vw,80px)] font-light leading-none tracking-[-0.02em] text-white [font-family:'Cormorant_Garamond',serif]">
              Fashion &amp;
              <br />
              <em className="italic text-[#c9a84c]">Apparel</em>
            </h2>
          </div>
          <div className="max-w-[320px]">
            <p className="text-[13px] font-light leading-[1.9] text-[rgba(255,255,255,0.4)]">
              An editorial-grade e-commerce experience for a modern clothing
              brand. Built to showcase collections, drive conversions, and
              elevate the brand.
            </p>
          </div>
        </div>

        <div
          data-fade
          className="mb-[60px] flex items-stretch gap-0 px-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="mr-6 self-center text-[10px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.3)] [writing-mode:vertical-rl] [font-family:'Josefin_Sans',sans-serif]">
            Color Palette
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { hex: "#070707", name: "Jet Black", bg: "bg-[#070707]" },
              { hex: "#1C1C1C", name: "Charcoal", bg: "bg-[#1c1c1c]" },
              { hex: "#B8965A", name: "Antique Gold", bg: "bg-[#b8965a]" },
              { hex: "#F0EDE8", name: "Off White", bg: "bg-[#f0ede8]" },
              { hex: "#8A8070", name: "Stone", bg: "bg-[#8a8070]" },
              { hex: "#C4B8A8", name: "Taupe", bg: "bg-[#c4b8a8]" },
            ].map((s) => (
              <div key={s.hex} className="flex flex-col items-center gap-2">
                <div
                  className={`h-14 w-14 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${s.bg}`}
                />
                <div className="text-[9px] tracking-[0.15em] text-[rgba(255,255,255,0.35)] [font-family:'Josefin_Sans',sans-serif]">
                  {s.hex}
                </div>
                <div className="text-[9px] tracking-[0.1em] text-[rgba(255,255,255,0.2)]">
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-fade
          className="mb-[60px] flex flex-wrap gap-10 px-[60px] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Brand / Hero Type
            </div>
            <div className="text-[26px] tracking-[0.1em] text-[#f0ede8] [font-family:'Bebas_Neue',sans-serif]">
              AA BB CC
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              Bebas Neue
            </div>
          </div>
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Elegant Subheadings
            </div>
            <div className="text-[26px] font-light italic text-[#f0ede8] [font-family:'Cormorant_Garamond',serif]">
              Aa Bb Cc
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              Cormorant Garamond
            </div>
          </div>
          <div className="min-w-[180px] flex-1 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Body / Navigation
            </div>
            <div className="text-[22px] font-light text-[#f0ede8] [font-family:'DM_Sans',sans-serif]">
              Aa Bb Cc
            </div>
            <div className="mt-2 text-[10px] tracking-[0.1em] text-[rgba(255,255,255,0.3)]">
              DM Sans
            </div>
          </div>
          <div className="min-w-[200px] flex-none rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-[30px] py-6">
            <div className="mb-2.5 text-[9px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.25)]">
              Tone
            </div>
            <div className="mt-1 flex flex-col gap-1.5">
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                🖤 Dark &amp; Editorial
              </span>
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                ✦ Luxury &amp; Minimal
              </span>
              <span className="text-[11px] tracking-[0.1em] text-[rgba(255,255,255,0.5)]">
                ⚡ Bold &amp; Confident
              </span>
            </div>
          </div>
        </div>

        <div
          data-fade
          className="mx-10 mt-0 overflow-hidden rounded-t-2xl border border-[rgba(255,255,255,0.06)] border-b-0 shadow-[0_-20px_80px_rgba(0,0,0,0.6)] opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-out"
        >
          <div className="flex items-center gap-3.5 border-b border-[rgba(255,255,255,0.05)] bg-[#1e1d1a] px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c940]" />
            </div>
            <div className="mx-auto max-w-[400px] flex-1 rounded-md bg-[rgba(255,255,255,0.05)] px-3.5 py-1.5 text-center text-[11px] tracking-[0.05em] text-[rgba(255,255,255,0.3)]">
              www.arcveil.com
            </div>
          </div>

          <div className="bg-[#f0ede8] text-[#070707] [font-family:'DM_Sans',sans-serif]">
            <div className="flex flex-col bg-[#070707] px-[60px]">
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] py-2.5">
                <div className="text-[10px] tracking-[0.3em] text-[rgba(255,255,255,0.3)]">
                  Free shipping on orders above ₹2,999
                </div>
                <div className="flex gap-6 text-[10px] tracking-[0.2em] text-[rgba(255,255,255,0.35)]">
                  <span>Track Order</span>
                  <span>Store Locator</span>
                  <span>Help</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-5">
                <div className="text-[32px] tracking-[0.2em] text-[#f0ede8] [font-family:'Bebas_Neue',sans-serif]">
                  ARCVEIL
                </div>
                <ul className="flex list-none gap-9">
                  <li>
                    <a
                      href="#"
                      className="text-[11px] uppercase tracking-[0.2em] text-[#f0ede8] no-underline"
                    >
                      New In
                    </a>
                  </li>
                  {["Men", "Women", "Collections", "Lookbook", "Sale"].map(
                    (t) => (
                      <li key={t}>
                        <a
                          href="#"
                          className="text-[11px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.55)] no-underline"
                        >
                          {t}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
                <div className="flex items-center gap-[22px] text-[14px] text-[rgba(240,237,232,0.6)]">
                  <span title="Search" className="cursor-pointer">
                    🔍
                  </span>
                  <span title="Wishlist" className="cursor-pointer">
                    ♡
                  </span>
                  <span title="Account" className="cursor-pointer">
                    👤
                  </span>
                  <span title="Cart" className="cursor-pointer">
                    🛍
                    <sup className="ml-[-6px] mt-[-8px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#b8965a] text-[9px] font-bold text-[#070707] align-top">
                      3
                    </sup>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid min-h-[560px] grid-cols-[55%_45%] bg-[#070707]">
              <div className="relative flex items-end overflow-hidden bg-[linear-gradient(160deg,#1a1614_0%,#0d0b09_100%)] p-[60px]">
                <div className="absolute inset-0 flex items-center justify-center text-[200px] opacity-[0.04]">
                  👔
                </div>
                <div className="relative z-[2]">
                  <div className="mb-5 text-[10px] font-extralight uppercase tracking-[0.5em] text-[#b8965a] [font-family:'Josefin_Sans',sans-serif]">
                    Spring / Summer 2026 Collection
                  </div>
                  <h1 className="mb-6 text-[clamp(60px,8vw,100px)] leading-[0.9] tracking-[0.05em] text-[#f0ede8] [font-family:'Bebas_Neue',sans-serif]">
                    Wear
                    <br />
                    Your
                    <br />
                    Story
                  </h1>
                  <p className="mb-9 max-w-[340px] text-[13px] font-light leading-[1.8] text-[rgba(240,237,232,0.4)]">
                    Crafted for the ones who move with intention. Premium
                    fabrics, considered silhouettes, timeless design.
                  </p>
                  <div className="flex gap-3.5">
                    <a
                      href="#"
                      className="inline-block bg-[#f0ede8] px-9 py-[14px] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#070707] no-underline"
                    >
                      Shop Collection
                    </a>
                    <a
                      href="#"
                      className="inline-block border border-[rgba(240,237,232,0.2)] px-9 py-[14px] text-[11px] font-normal uppercase tracking-[0.2em] text-[#f0ede8] no-underline"
                    >
                      View Lookbook
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-0.5">
                <div className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#2a2520_0%,#1a1410_100%)]">
                  <div className="pointer-events-none absolute text-[140px] tracking-[0.1em] text-[rgba(255,255,255,0.025)] [font-family:'Bebas_Neue',sans-serif]">
                    SS '26
                  </div>
                  <span className="relative z-[1] text-[10px] uppercase tracking-[0.4em] text-[#c4b8a8] [font-family:'Josefin_Sans',sans-serif]">
                    SS '26 Lookbook
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 bg-[#b8965a] p-[30px] text-center">
                  <span className="text-[36px] font-light italic text-[#070707] [font-family:'Cormorant_Garamond',serif]">
                    50+ Styles
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[rgba(0,0,0,0.5)] [font-family:'Josefin_Sans',sans-serif]">
                    New Drop Weekly
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center overflow-x-auto bg-[#1c1c1c]">
              {[
                "All Items",
                "Shirts & Tops",
                "Outerwear",
                "Bottoms",
                "Dresses",
                "Knitwear",
                "Accessories",
                "Footwear",
              ].map((t, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${t}-${idx}`}
                  data-cl-cat-item
                  className={`cursor-pointer whitespace-nowrap border-b-2 px-[30px] py-4 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    idx === 0
                      ? "border-b-[#b8965a] text-[#f0ede8]"
                      : "border-b-transparent text-[rgba(240,237,232,0.4)] hover:text-[#f0ede8]"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="bg-[#f0ede8] p-[60px]">
              <div className="mb-10 flex items-end justify-between">
                <h2 className="text-[38px] font-light tracking-[-0.01em] text-[#070707] [font-family:'Cormorant_Garamond',serif]">
                  New <em className="italic text-[#8a8070]">Arrivals</em>
                </h2>
                <div className="flex gap-2.5">
                  {["All", "Men", "Women", "Unisex"].map((t, idx) => (
                    <button
                      key={t}
                      data-cl-filter-btn
                      className={`cursor-pointer border px-5 py-2 text-[10px] uppercase tracking-[0.2em] ${
                        idx === 0
                          ? "border-[#070707] bg-[#070707] text-[#f0ede8]"
                          : "border-[rgba(0,0,0,0.12)] bg-transparent text-[#070707]"
                      }`}
                      type="button"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-5">
                {[
                  {
                    label: "New",
                    labelBg: "bg-[#070707] text-[#f0ede8]",
                    icon: "🧥",
                    imgBg: "bg-[linear-gradient(160deg,#2a2520,#3d3530)]",
                    name: "Structured Overcoat",
                    cat: "Outerwear · Unisex",
                    price: "₹8,499",
                    old: null,
                    dots: ["bg-[#2c2c2c]", "bg-[#c4b8a8]", "bg-[#8b6a4a]"],
                  },
                  {
                    label: "Bestseller",
                    labelBg: "bg-[#b8965a] text-[#070707]",
                    icon: "👕",
                    imgBg: "bg-[linear-gradient(160deg,#f0ede8,#d4cfc8)]",
                    name: "Linen Relaxed Shirt",
                    cat: "Tops · Men",
                    price: "₹2,799",
                    old: null,
                    dots: ["bg-[#f0ede8]", "bg-[#8a8070]", "bg-[#4a5e40]"],
                  },
                  {
                    label: "Sale",
                    labelBg: "bg-[#c0392b] text-white",
                    icon: "👗",
                    imgBg: "bg-[linear-gradient(160deg,#1a2a3a,#0d1a28)]",
                    name: "Midi Slip Dress",
                    cat: "Dresses · Women",
                    price: "₹3,199",
                    old: "₹4,499",
                    dots: ["bg-[#0d1a28]", "bg-[#c4b8a8]", "bg-[#c0392b]"],
                  },
                  {
                    label: "New",
                    labelBg: "bg-[#070707] text-[#f0ede8]",
                    icon: "🧣",
                    imgBg: "bg-[linear-gradient(160deg,#3d3028,#2a1e14)]",
                    name: "Merino Turtleneck",
                    cat: "Knitwear · Unisex",
                    price: "₹4,299",
                    old: null,
                    dots: ["bg-[#2c2c2c]", "bg-[#8b6a4a]", "bg-[#f0ede8]"],
                  },
                  {
                    label: null,
                    labelBg: "",
                    icon: "🧶",
                    imgBg: "bg-[linear-gradient(160deg,#4a5e40,#2a3820)]",
                    name: "Wide-Leg Trousers",
                    cat: "Bottoms · Women",
                    price: "₹3,699",
                    old: null,
                    dots: ["bg-[#4a5e40]", "bg-[#c4b8a8]", "bg-[#2c2c2c]"],
                  },
                  {
                    label: "Bestseller",
                    labelBg: "bg-[#b8965a] text-[#070707]",
                    icon: "🧤",
                    imgBg: "bg-[linear-gradient(160deg,#5a4a3a,#3a2a1a)]",
                    name: "Leather Moto Jacket",
                    cat: "Outerwear · Unisex",
                    price: "₹12,999",
                    old: null,
                    dots: ["bg-[#2c1810]", "bg-[#2c2c2c]"],
                  },
                  {
                    label: "New",
                    labelBg: "bg-[#070707] text-[#f0ede8]",
                    icon: "👚",
                    imgBg: "bg-[linear-gradient(160deg,#e8e0d4,#c8c0b4)]",
                    name: "Crop Blazer",
                    cat: "Tops · Women",
                    price: "₹5,499",
                    old: null,
                    dots: ["bg-[#c4b8a8]", "bg-[#2c2c2c]", "bg-[#8b5e3c]"],
                  },
                  {
                    label: "Sale",
                    labelBg: "bg-[#c0392b] text-white",
                    icon: "👖",
                    imgBg: "bg-[linear-gradient(160deg,#2a2a3a,#1a1a2a)]",
                    name: "Slim Chino Pants",
                    cat: "Bottoms · Men",
                    price: "₹2,499",
                    old: "₹3,499",
                    dots: ["bg-[#2a2a3a]", "bg-[#8a8070]", "bg-[#4a5e40]"],
                  },
                  {
                    label: null,
                    labelBg: "",
                    icon: "👟",
                    imgBg: "bg-[linear-gradient(160deg,#b8965a,#8a6a30)]",
                    name: "Suede Chelsea Boots",
                    cat: "Footwear · Unisex",
                    price: "₹6,999",
                    old: null,
                    dots: ["bg-[#b8965a]", "bg-[#2c1810]"],
                  },
                  {
                    label: "Bestseller",
                    labelBg: "bg-[#b8965a] text-[#070707]",
                    icon: "🧢",
                    imgBg: "bg-[linear-gradient(160deg,#e04040,#a02020)]",
                    name: "Canvas Bucket Hat",
                    cat: "Accessories · Unisex",
                    price: "₹1,299",
                    old: null,
                    dots: ["bg-[#e04040]", "bg-[#f0ede8]", "bg-[#2c2c2c]"],
                  },
                ].map((p, i) => {
                  const delayClasses = [
                    "delay-[0ms]",
                    "delay-[60ms]",
                    "delay-[120ms]",
                    "delay-[180ms]",
                    "delay-[240ms]",
                    "delay-[300ms]",
                    "delay-[360ms]",
                    "delay-[420ms]",
                    "delay-[480ms]",
                    "delay-[540ms]",
                  ];

                  return (
                    <div
                      key={p.name}
                      data-card-reveal
                      className={`cursor-pointer opacity-0 translate-y-4 transition-[opacity,transform] duration-500 ease-out ${
                        delayClasses[i] ?? "delay-[0ms]"
                      }`}
                    >
                      <div
                        className={`relative mb-3.5 flex aspect-[3/4] items-center justify-center overflow-hidden text-[52px] ${p.imgBg}`}
                      >
                        {p.label ? (
                          <span
                            className={`absolute left-2.5 top-2.5 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.3em] ${p.labelBg}`}
                          >
                            {p.label}
                          </span>
                        ) : null}
                        {p.icon}
                      </div>
                      <div className="mb-1 text-[13px] font-medium tracking-[0.02em] text-[#070707]">
                        {p.name}
                      </div>
                      <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#8a8070]">
                        {p.cat}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-[18px] font-medium text-[#070707] [font-family:'Cormorant_Garamond',serif]">
                          {p.price}
                        </div>
                        {p.old ? (
                          <div className="text-[12px] text-[#8a8070] line-through">
                            {p.old}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-2 flex gap-1.5">
                        {p.dots.map((d) => (
                          <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${p.name}-${d}`}
                            className={`h-3 w-3 rounded-full border border-[rgba(0,0,0,0.1)] ${d}`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-4 bg-[#070707]">
              {[
                {
                  icon: "🚚",
                  title: "Free Delivery",
                  sub: "On orders above ₹2,999",
                },
                {
                  icon: "↩️",
                  title: "Easy Returns",
                  sub: "30-day hassle-free returns",
                },
                {
                  icon: "🔒",
                  title: "Secure Payment",
                  sub: "100% encrypted checkout",
                },
                {
                  icon: "✦",
                  title: "Premium Quality",
                  sub: "Ethically crafted fabrics",
                },
              ].map((u, idx) => (
                <div
                  key={u.title}
                  className={`flex items-center gap-4 px-[30px] py-8 ${
                    idx !== 3 ? "border-r border-[rgba(255,255,255,0.05)]" : ""
                  }`}
                >
                  <div className="text-[22px] opacity-70">{u.icon}</div>
                  <div>
                    <div className="mb-0.5 text-[12px] font-medium tracking-[0.05em] text-[#f0ede8]">
                      {u.title}
                    </div>
                    <div className="text-[10px] tracking-[0.1em] text-[rgba(240,237,232,0.3)]">
                      {u.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-[30px] bg-[#b8965a] px-[60px] py-[50px]">
              <div>
                <h4 className="mb-1.5 text-[36px] tracking-[0.1em] text-[#070707] [font-family:'Bebas_Neue',sans-serif]">
                  Join the Inner Circle
                </h4>
                <p className="text-[12px] text-[rgba(0,0,0,0.55)]">
                  Get early access to new drops, exclusive offers, and style
                  guides.
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  className="w-[280px] bg-[rgba(0,0,0,0.08)] px-6 py-[14px] text-[12px] text-[#070707] outline-none placeholder:text-[rgba(0,0,0,0.4)]"
                  placeholder="Your email address"
                />
                <button
                  className="cursor-pointer bg-[#070707] px-7 py-[14px] text-[11px] uppercase tracking-[0.25em] text-[#f0ede8]"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 bg-[#0a0908] px-[60px] pb-[30px] pt-[50px]">
              <div>
                <div className="mb-3.5 text-[36px] tracking-[0.2em] text-[#f0ede8] [font-family:'Bebas_Neue',sans-serif]">
                  ARCVEIL
                </div>
                <p className="max-w-[260px] text-[12px] font-light leading-[1.8] text-[rgba(240,237,232,0.3)]">
                  Designed for the quietly confident. Each piece is a statement
                  without a word. Premium fashion for those who know.
                </p>
              </div>
              {[
                {
                  title: "Shop",
                  links: [
                    "New Arrivals",
                    "Men's Edit",
                    "Women's Edit",
                    "Collections",
                    "Sale",
                  ],
                },
                {
                  title: "Help",
                  links: [
                    "Size Guide",
                    "Shipping Policy",
                    "Returns",
                    "Track Order",
                  ],
                },
                {
                  title: "Brand",
                  links: ["Our Story", "Sustainability", "Stockists", "Press"],
                },
              ].map((col) => (
                <div key={col.title}>
                  <div className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#b8965a] [font-family:'Josefin_Sans',sans-serif]">
                    {col.title}
                  </div>
                  <ul className="flex list-none flex-col gap-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <p
                          href=""
                          className="text-[12px] text-[rgba(240,237,232,0.35)] mb-1"
                        >
                          {l}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between bg-[#060504] px-[60px] py-[18px] text-[10px] tracking-[0.15em] text-[rgba(240,237,232,0.2)]">
              <span>© 2026 ARCVEIL. All rights reserved.</span>
              <span>Privacy Policy · Terms · Cookie Settings</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c0c0c] px-[60px] py-[120px] text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,168,76,0.06),transparent_70%)]" />

        <div className="relative z-[1] mb-6 inline-flex items-center justify-center gap-[10px] text-[10px] font-light uppercase tracking-[0.5em] text-[#c9a84c] [font-family:'Josefin_Sans',sans-serif]">
          <span className="h-px w-6 bg-[#c9a84c]" />
          Let&apos;s Work Together
        </div>
        <h2 className="relative z-[1] mb-5 text-[clamp(40px,5vw,70px)] font-light tracking-[-0.02em] [font-family:'Cormorant_Garamond',serif]">
          Ready to build
          <br />
          something <em className="italic text-[#c9a84c]">remarkable?</em>
        </h2>
        <p className="relative z-[1] mb-12 text-[14px] font-light tracking-[0.05em] text-[rgba(255,255,255,0.35)]">
          From cafés to fashion brands — we craft websites that turn visitors
          into customers.
        </p>
        <a
          href="/contact"
          className="relative z-[1] inline-flex items-center gap-3.5 rounded-sm bg-[#c9a84c] px-12 py-[18px] text-[12px] font-semibold uppercase tracking-[0.25em] text-[#0a0a0a] no-underline"
        >
          Start Your Project →
        </a>

        <div className="relative z-[1] mt-20 flex justify-center gap-20 border-t border-[rgba(255,255,255,0.06)] pt-[60px]">
          {[
            { num: "48", suffix: "+", label: "Projects Delivered" },
            { num: "12", suffix: "+", label: "Industries Served" },
            { num: "96", suffix: "%", label: "Client Satisfaction" },
            { num: "5", suffix: "★", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-2 text-[52px] font-light leading-none text-white [font-family:'Cormorant_Garamond',serif]">
                {s.num}
                <span className="text-[#c9a84c]">{s.suffix}</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.3)] [font-family:'Josefin_Sans',sans-serif]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
