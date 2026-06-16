import InstagramIcon from "./components/InstagramIcon";

export default function AtelieSkemaView({
  fontStyles,
  siteConfig,
  heroImage,
  runwayShows,
  backstageMedia,
  conceptItems,
  teamPhoto,
  organizersPhoto,
  instagramGrid,
  theme,
  selectedShow,
  selectedEvent,
  setSelectedShow,
  setSelectedEvent,
  visibleRunwayShows,
  visibleEvents,
  goToPrevRunwayPage,
  goToNextRunwayPage,
  goToPrevEventPage,
  goToNextEventPage,
  openShowPage,
  openEventPage,
  heroParallaxStyle,
  selectedHeroParallaxStyle,
}) {
  const { darkIconButtonClasses, sectionBg, textMain, textBody, textMuted } =
    theme;

  const renderSelectedEventPage = () => {
    if (!selectedEvent) return null;

    return (
      <div className={`min-h-screen ${sectionBg}`}>
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e5dfd6] bg-[#f3ede4]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <button
              type="button"
              onClick={() => {
                setSelectedEvent(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm uppercase tracking-[0.2em] text-[#4a443f] transition hover:text-[#1a1816]"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              ← Back to Home
            </button>
            <img
              src="/brand/logo.png"
              alt="Ateliê Skema"
              className="h-20 object-contain md:h-24"
            />
          </div>
        </header>

        <main className="pb-20 pt-24">
          <section className="mx-auto mb-16 max-w-7xl px-6">
            <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-xl">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-full w-full object-cover will-change-transform"
                style={{
                  ...selectedHeroParallaxStyle,
                  objectPosition: selectedEvent.imagePosition ?? "center",
                }}
              />
            </div>

            <div className="w-full">
              <p
                className="mb-3 text-xs uppercase tracking-[0.32em] text-stone-400"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                {selectedEvent.location}
              </p>
              <h1
                className={`mb-6 text-5xl font-light tracking-tight ${textMain}`}
                style={{ fontFamily: '"Loubag", serif' }}
              >
                {selectedEvent.title}
              </h1>
              <p
                className={`text-lg leading-relaxed ${textBody}`}
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                {selectedEvent.description}
              </p>
            </div>
          </section>

          <section className="mx-auto mb-10 max-w-5xl px-6">
            <p
              className="mb-1 text-sm uppercase tracking-[0.2em] text-stone-400"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Event Gallery
            </p>
            <h2
              className={`text-2xl font-light ${textMain}`}
              style={{ fontFamily: '"Loubag", serif' }}
            >
              Images from this Event
            </h2>
          </section>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
            {selectedEvent.gallery.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${selectedEvent.title} ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };

  const renderSelectedShowPage = () => {
    if (!selectedShow) return null;

    return (
      <div className={`min-h-screen ${sectionBg}`}>
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e5dfd6] bg-[#f3ede4]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <button
              type="button"
              onClick={() => {
                setSelectedShow(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm uppercase tracking-[0.2em] text-[#4a443f] transition hover:text-[#1a1816]"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              ← Back to Home
            </button>
            <img
              src="/brand/logo.png"
              alt="Ateliê Skema"
              className="h-20 object-contain md:h-24"
            />
          </div>
        </header>

        <main className="pb-20 pt-24">
          <section className="mx-auto mb-16 max-w-7xl px-6">
            <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-xl">
              <img
                src={selectedShow.coverImage}
                alt={selectedShow.title}
                className="h-full w-full object-cover will-change-transform"
                style={{
                  ...selectedHeroParallaxStyle,
                  objectPosition: selectedShow.coverImagePosition ?? "center",
                }}
              />
            </div>

            <div className="w-full">
              <p
                className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                {selectedShow.year} • {selectedShow.location}
              </p>
              <h1
                className={`mb-6 text-5xl font-light tracking-tight ${textMain}`}
                style={{ fontFamily: '"Loubag", serif' }}
              >
                {selectedShow.title}
              </h1>
              <p
                className={`text-lg leading-relaxed ${textBody}`}
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                {selectedShow.description}
              </p>
            </div>
          </section>

          <section className="mx-auto mb-10 max-w-5xl px-6">
            <p
              className="mb-1 text-sm uppercase tracking-[0.2em] text-stone-400"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Runway Gallery
            </p>
            <h2
              className={`text-2xl font-light ${textMain}`}
              style={{ fontFamily: '"Loubag", serif' }}
            >
              Images from this Runway Show
            </h2>
          </section>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
            {selectedShow.gallery.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Runway image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };

  const renderHomePage = () => {
    const whatsappNumber = siteConfig.numero.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hello! I would like to learn more about the Ateliê Skema project."
    )}`;

    return (
      <>
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e5dfd6] bg-[#f3ede4]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <img
              src="/brand/logo.png"
              alt="Ateliê Skema"
              className="h-20 object-contain md:h-24"
            />
            <nav
              className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-[#6a635c] md:flex"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              <a href="#project" className="transition hover:text-[#1a1816]">
                Project
              </a>
              <a href="#runway" className="transition hover:text-[#1a1816]">
                Runway
              </a>
              <a href="#events" className="transition hover:text-[#1a1816]">
                Events
              </a>
              <a href="#backstage" className="transition hover:text-[#1a1816]">
                Backstage
              </a>
              <a href="#concept" className="transition hover:text-[#1a1816]">
                Concept
              </a>
              <a href="#team" className="transition hover:text-[#1a1816]">
                Team
              </a>
              <a href="#contact" className="transition hover:text-[#1a1816]">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            style={heroParallaxStyle}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />

          <div className="relative z-10 max-w-3xl px-6 text-center">
            <p
              className="mb-6 text-xs uppercase tracking-[0.4em] text-stone-300"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Presented by Ateliê Skema
            </p>
            <h1
              className="mb-4 text-6xl font-extralight leading-none tracking-tight text-white md:text-8xl"
              style={{ fontFamily: '"Loubag", serif' }}
            >
              ATELIÊ
              <br />
              SKEMA
            </h1>
            <p className="mb-8 text-lg font-light text-stone-300">
              {siteConfig.subtitle}
            </p>
            <a
              href="#project"
              className={`inline-block rounded px-8 py-3 text-sm uppercase tracking-[0.2em] ${siteConfig.primaryButtonClasses}`}
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Explore the Project
            </a>
          </div>
        </section>

        <section id="project" className={`${sectionBg} py-24`}>
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
            <div className="group aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src="/home/home.png"
                alt="Projeto"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p
                className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                About Us
              </p>
              <h2
                className={`mb-6 text-3xl font-light ${textMain}`}
                style={{ fontFamily: '"Loubag", serif' }}
              >
                What Is Ateliê
              </h2>
              <p className={`mb-4 leading-relaxed ${textBody}`}>
                {siteConfig.description}
              </p>
              <a
                href="#runway"
                className={`inline-block rounded px-6 py-2.5 text-sm uppercase tracking-[0.15em] ${siteConfig.primaryButtonClasses}`}
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                View Runway Shows
              </a>
            </div>
          </div>
        </section>

        <section id="runway" className={`${sectionBg} py-24`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div className="text-center md:text-left">
                <p
                  className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                  style={{ fontFamily: '"Aileron", sans-serif' }}
                >
                  Runway Shows
                </p>
                <h2
                  className={`text-3xl font-light ${textMain}`}
                  style={{ fontFamily: '"Loubag", serif' }}
                >
                  Events & Presentations
                </h2>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={goToPrevRunwayPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                  aria-label="View previous runway shows"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goToNextRunwayPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                  aria-label="View next runway shows"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleRunwayShows.map((show) => (
                <div key={show.id} className="group">
                  <button
                    type="button"
                    onClick={() => openShowPage(show)}
                    className="block w-full text-left"
                  >
                    <div className="mb-4 aspect-[3/4] overflow-hidden rounded-xl">
                      <img
                        src={show.coverImage}
                        alt={show.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p
                      className="mb-1 text-xs uppercase tracking-[0.2em] text-stone-400"
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      {show.year}
                    </p>
                    <h3
                      className={`mb-2 text-xl font-light ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      {show.title}
                    </h3>
                    <p className={`line-clamp-3 text-sm ${textMuted}`}>
                      {show.description}
                    </p>
                    <span
                      className={`mt-3 inline-block border-b border-stone-900 text-xs uppercase tracking-[0.15em] ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      View Runway Gallery
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={goToPrevRunwayPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                aria-label="View previous runway shows"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goToNextRunwayPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                aria-label="View next runway shows"
              >
                →
              </button>
            </div>
          </div>
        </section>

        <div className="h-20 bg-[#f3ede4]" />

        <section id="events" className={`${sectionBg} py-24`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div className="text-center md:text-left">
                <p
                  className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                  style={{ fontFamily: '"Aileron", sans-serif' }}
                >
                  Events
                </p>
                <h2
                  className={`text-3xl font-light ${textMain}`}
                  style={{ fontFamily: '"Loubag", serif' }}
                >
                  Activations & Gatherings
                </h2>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={goToPrevEventPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                  aria-label="View previous events"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goToNextEventPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                  aria-label="View next events"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {visibleEvents.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => openEventPage(event)}
                  className="overflow-hidden rounded-xl bg-[#eadfc2] text-left shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="p-6">
                    <p
                      className="mb-1 text-xs uppercase tracking-[0.2em] text-stone-400"
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      {event.location}
                    </p>
                    <h3
                      className={`mb-2 text-xl font-light ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      {event.title}
                    </h3>
                    <p className={`mb-4 text-sm ${textMuted}`}>
                      {event.description}
                    </p>
                    <span
                      className={`inline-block border-b border-stone-900 text-xs uppercase tracking-[0.15em] ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      View Event Page
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={goToPrevEventPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                aria-label="View previous events"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goToNextEventPage}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:bg-[#eadfc2]"
                aria-label="View next events"
              >
                →
              </button>
            </div>
          </div>
        </section>

        <div className="h-20 bg-[#f3ede4]" />

        <section id="backstage" className={`${sectionBg} py-24`}>
          <div className="mx-auto mb-16 max-w-6xl px-6 text-center">
            <p
              className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Backstage
            </p>
            <h2
              className={`mb-4 text-3xl font-light ${textMain}`}
              style={{ fontFamily: '"Loubag", serif' }}
            >
              Behind-the-Scenes Moments
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
            {backstageMedia.map((item, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden rounded-xl bg-[#eadfc2]"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Backstage ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="h-20 bg-[#f3ede4]" />

        <section id="concept" className={`${sectionBg} py-24`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <p
                className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                Concept
              </p>
              <h2
                className={`text-[2.1rem] font-light tracking-[0.02em] ${textMain} md:text-[2.5rem]`}
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                What Drives the Project
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {conceptItems.map((item) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-[28px] bg-[#eadfc2] p-8 text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <p
                    className="mb-3 text-[0.68rem] uppercase tracking-[0.28em] text-stone-500"
                    style={{ fontFamily: '"Aileron", sans-serif' }}
                  >
                    {item.title}
                  </p>
                  <h3
                    className={`mb-5 text-[1.55rem] font-light leading-[1.1] tracking-[0.01em] ${textMain}`}
                    style={{ fontFamily: '"Loubag", serif' }}
                  >
                    {item.title}
                  </h3>
                  {item.title === "Values" ? (
                    <ul className={`space-y-3 text-[0.98rem] leading-7 ${textBody}`}>
                      {item.text.map((value, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-[3px] text-stone-500">•</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`max-w-[32ch] text-[0.98rem] leading-7 ${textBody}`}>
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className={`${sectionBg} py-24`}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <p
                className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                style={{ fontFamily: '"Aileron", sans-serif' }}
              >
                The Team
              </p>
              <h2
                className={`text-3xl font-light ${textMain}`}
                style={{ fontFamily: '"Loubag", serif' }}
              >
                People Behind Skema
              </h2>
            </div>

            <div className="space-y-8">
              <div className="group relative aspect-[16/7] overflow-hidden rounded-[28px] bg-[#eadfc2] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={teamPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-45"
                />
                <img
                  src={teamPhoto}
                  alt="Full Ateliê Skema team"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <div className="group overflow-hidden rounded-[28px] bg-[#eadfc2] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <img
                    src={organizersPhoto}
                    alt="Directors and organizers of Ateliê Skema"
                    className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex min-h-[130px] flex-col justify-end px-8 py-8 text-left">
                    <p
                      className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-400"
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Directors / Organizers
                    </p>
                    <h3
                      className={`mb-4 text-2xl font-light ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Creative leadership behind the project
                    </h3>
                    <p className={`max-w-xl leading-relaxed ${textBody}`}>
                      A space to highlight the people leading the team, the
                      organization, and the construction of the runway show.
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-[28px] bg-[#eadfc2] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <img
                    src="/team/marketing-team.jpeg"
                    alt="Marketing Team"
                    className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex min-h-[130px] flex-col justify-end px-8 py-8 text-left">
                    <p
                      className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-400"
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Marketing Team
                    </p>
                    <h3
                      className={`mb-4 text-2xl font-light ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Strategy, visibility, and audience growth
                    </h3>
                  <p className={`max-w-xl leading-relaxed ${textBody}`}>
                    This team is responsible for positioning the project,
                    strengthening brand presence, and building campaigns that
                    connect Ateliê Skema with its audience.
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-[28px] bg-[#eadfc2] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <img
                    src="/team/comunicacao-team.jpeg"
                    alt="Communication Team"
                    className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex min-h-[130px] flex-col justify-end px-8 py-8 text-left">
                    <p
                      className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-400"
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Communication Team
                    </p>
                    <h3
                      className={`mb-4 text-2xl font-light ${textMain}`}
                      style={{ fontFamily: '"Aileron", sans-serif' }}
                    >
                      Messaging, content, and brand voice
                    </h3>
                  <p className={`max-w-xl leading-relaxed ${textBody}`}>
                    This team shapes how the project speaks, creating clear,
                    engaging, and consistent communication across every touch
                    point, from announcements to storytelling.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionBg} py-24`}>
          <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
            <p
              className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Instagram
            </p>
            <div className="mb-6 flex items-center justify-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={darkIconButtonClasses}
                aria-label="Abrir perfil no Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <span className={`text-xl font-light ${textMain}`}>
                {siteConfig.instagram}
              </span>
            </div>
          </div>

          <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-4 px-4 md:grid-cols-5">
            {instagramGrid.slice(0, 5).map((item, index) => (
              <a
                key={index}
                href={item.postUrl ?? siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[4/5] overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                aria-label={`Open Instagram post ${index + 1}`}
              >
                <img
                  src={item.image}
                  alt={`Instagram post ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className={`${sectionBg} py-24`}>
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p
                  className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-400"
                  style={{ fontFamily: '"Aileron", sans-serif' }}
                >
                  Get in Touch
                </p>
                <h2
                  className={`mb-4 text-3xl font-light ${textMain}`}
                  style={{ fontFamily: '"Loubag", serif' }}
                >
                  Let’s Talk About the Project
                </h2>
                <p className={`leading-relaxed ${textMuted}`}>
                  If you would like to talk about partnerships, events,
                  invitations, or any initiative connected to Ateliê Skema,
                  get in touch with us. We would love to talk.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <p className={textBody}>Instagram:</p>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={darkIconButtonClasses}
                    aria-label="Open Instagram in the contact section"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <span className={textMain}>{siteConfig.instagram}</span>
                </div>
                <p className={textBody}>Email: {siteConfig.email}</p>
                <p className={textBody}>Phone: {siteConfig.numero}</p>
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block rounded px-6 py-2.5 text-sm uppercase tracking-[0.15em] ${siteConfig.primaryButtonClasses}`}
                    style={{ fontFamily: '"Aileron", sans-serif' }}
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#c9b98a] py-12 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <span
                  className="text-sm font-light uppercase tracking-[0.3em]"
                  style={{ fontFamily: '"Aileron", sans-serif' }}
                >
                  {siteConfig.brand}
                </span>
                <p className="mt-1 text-xs">A university fashion portfolio.</p>
              </div>

              <div className="text-center text-xs md:text-right">
                <p className="mt-1">{siteConfig.email}</p>
              </div>
            </div>

            <p
              className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.24em] text-white/80"
              style={{ fontFamily: '"Aileron", sans-serif' }}
            >
              Developed by Gabriel Saliba
            </p>
          </div>
        </footer>
      </>
    );
  };

  return (
    <>
      <style>{fontStyles}</style>
      <div
        className={`min-h-screen ${sectionBg} ${textMain}`}
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        {selectedShow
          ? renderSelectedShowPage()
          : selectedEvent
            ? renderSelectedEventPage()
            : renderHomePage()}
      </div>
    </>
  );
}
