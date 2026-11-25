import { useEffect, useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { profile, pages, about, skills, projects, upcomingProjects, education } from './data.js'
import { skillIcon, fallbackIcon, groupIcon, groupFallback } from './skillIcons.jsx'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane } from 'react-icons/fa6'


/* ---------- tiny hash router: #/about shows only the About page ---------- */
/* ---------- tiny hash router: #/projects/contextapi opens a project ---------- */
const readRoute = () => {
  const [id = '', sub = ''] = window.location.hash.replace(/^#\/?/, '').split('/')
  const page = pages.some((p) => p.id === id) ? id : pages[0].id
  return { page, sub: page === 'projects' ? sub : '' }
}
function useRoute() {
  const [route, setRoute] = useState(readRoute)
  useEffect(() => {
    const on = () => { setRoute(readRoute()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  useEffect(() => {
    const label = pages.find((p) => p.id === route.page)?.label
    const proj = route.sub && projects.find((p) => p.slug === route.sub)
    document.title = `${proj ? proj.name : label} | ${profile.name}`
  }, [route])
  return route
}

const linkCls = 'underline decoration-sun decoration-4 underline-offset-4 hover:decoration-navy'
const btnPrimary = 'inline-flex items-center justify-center gap-2.5 rounded-full bg-sun px-6 py-3.5 font-bold shadow-sm transition hover:brightness-95 sm:px-7'
const btnOutline = 'inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-navy px-6 py-3 font-bold transition hover:bg-navy hover:text-white sm:px-7'

/* ---------- icons ---------- */
const Logo = () => (
  <svg width="34" height="28" viewBox="0 0 38 30" fill="none" stroke="#FFC800" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 5 2 15l8 10M28 5l8 10-8 10M22 3 16 27" />
  </svg>
)
const FolderIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h4.2c.6 0 1.2.3 1.6.8L12 6h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" /></svg>
)
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM8.3 19H5.5v-8.5h2.8V19ZM6.9 9.3a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM19 19h-2.8v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-2.8v-8.5h2.7v1.2c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3V19Z" /></svg>
)

/* ---------- floating header ---------- */
function Header({ page }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [page])
  return (
    <header className="fixed inset-x-3 top-3 z-40 sm:inset-x-6">
      <div className="relative mx-auto max-w-7xl">
        <nav className="flex h-14 items-center justify-between rounded-full bg-white/95 px-5 shadow-lg backdrop-blur sm:h-16 sm:px-7" aria-label="Main">
          <a href="#/home" className="flex items-center gap-3 text-base font-bold sm:text-lg"><Logo /><span>{profile.name}</span></a>
          <ul className="hidden gap-6 text-[15px] font-semibold min-[1100px]:flex">
            {pages.map((p) => (
              <li key={p.id}>
                <a href={`#/${p.id}`} aria-current={page === p.id ? 'page' : undefined}
                  className={`block border-b-[3px] py-1 transition ${page === p.id ? 'border-sun text-[#C99700]' : 'border-transparent hover:border-sun/60'}`}>{p.label}</a>
              </li>
            ))}
          </ul>
          <button className="rounded-full border-2 border-navy px-4 py-1 text-sm font-bold min-[1100px]:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
        {open && (
          <ul id="mobile-menu" className="absolute inset-x-0 top-full mt-2 grid gap-1 rounded-3xl bg-white p-3 font-semibold shadow-xl min-[1100px]:hidden">
            {pages.map((p) => (
              <li key={p.id}>
                <a href={`#/${p.id}`} className={`block rounded-xl px-4 py-3 ${page === p.id ? 'bg-sun' : 'hover:bg-sunsoft'}`}>{p.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}

/* ---------- shared page wrapper + "next page" link ---------- */
function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="bg-blob left-[-8rem] top-24 h-72 w-72 bg-sun/40" />
      <div className="bg-blob right-[-6rem] top-[28rem] h-80 w-80 bg-[#FFE98A]/60 [animation-delay:-6s]" />
      <div className="bg-blob bottom-10 left-[20%] h-64 w-64 bg-[#C9D3FF]/40 [animation-delay:-12s]" />
      <div className="dots absolute right-6 top-28 hidden h-40 w-40 opacity-40 sm:block" />
      <div className="dots absolute bottom-24 left-4 hidden h-32 w-32 opacity-30 md:block" />
      <span className="bg-float left-[8%] top-[22%] h-5 w-5 rounded-full border-4 border-sun" />
      <span className="bg-float right-[12%] top-[40%] h-4 w-4 rotate-45 bg-sun/70 [animation-delay:-4s]" />
      <span className="bg-float bottom-[18%] right-[22%] h-6 w-6 rounded-full border-4 border-navy/15 [animation-delay:-8s]" />
      <span className="bg-float left-[45%] top-[12%] font-mono text-2xl font-extrabold text-navy/10 [animation-delay:-2s]">{'</>'}</span>
    </div>
  )
}

function Page({ id, title, children, hideNext }) {
  const i = pages.findIndex((p) => p.id === id)
  const next = pages[i + 1]
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFBEA] via-white to-[#FFF6CC]">
      <PageBackground />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <h1 className="font-serif text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h1>
        <div className="mt-3 h-1.5 w-20 rounded-full bg-sun" />
        <div className="mt-10 md:mt-12">{children}</div>
        {next && !hideNext && (
          <div className="mt-14 border-t border-navy/10 pt-6">
            <a href={`#/${next.id}`} className={`font-bold ${linkCls}`}>Next: {next.label} →</a>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- HOME ---------- */
const rise = (i) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * i, duration: 0.55, ease: 'easeOut' } })

function Home() {
  return (
    <div className="bg-sun px-3 pb-3 pt-[4.75rem] sm:px-6 sm:pb-6 sm:pt-[6.25rem]">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-white shadow-xl sm:rounded-[2.25rem] lg:min-h-[600px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="dots pointer-events-none absolute left-4 top-6 hidden h-36 w-32 opacity-60 sm:block lg:left-5 lg:top-8" aria-hidden="true" />

        {/* text */}
        <div className="relative z-10 order-2 px-6 pb-10 pt-4 sm:px-10 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:pl-20 lg:pr-4">
          <motion.p {...rise(0)} className="text-sm font-extrabold uppercase tracking-wide text-[#E5A800] sm:text-base lg:text-lg">{profile.title}</motion.p>
          <motion.h1 {...rise(1)} className="mt-3 font-serif text-[1.85rem] font-extrabold leading-[1.12] min-[400px]:text-[2.2rem] sm:text-5xl xl:text-6xl">
            Hello, I'm<br />
            <span className="relative inline-block">
              {profile.name}
              <svg viewBox="0 0 210 14" className="absolute -bottom-3 right-[4%] w-[38%]" aria-hidden="true"><path d="M3 9C60 3 140 3 207 7" stroke="#FFC800" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
            </span>
          </motion.h1>
          <motion.p {...rise(3)} className="mt-9 max-w-md text-base leading-relaxed text-slate2 sm:text-lg lg:text-xl">{profile.intro}</motion.p>
          <motion.div {...rise(4)} className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a href="#/projects" className={btnPrimary}>View All Projects<ArrowIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnOutline}><LinkedInIcon />LinkedIn</a>
            {profile.resume && <a href={profile.resume} download="Bhuvaneshwaran_D_Resume.pdf" className={btnOutline}>Resume</a>}
          </motion.div>
          <motion.p {...rise(5)} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-sunsoft px-4 py-2 text-sm font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />{profile.openToWork}
          </motion.p>
        </div>

        {/* photo */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
          className="relative order-1 h-[300px] min-[400px]:h-[340px] sm:h-[440px] lg:order-2 lg:h-auto">
          <svg viewBox="0 0 600 640" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M330 20C200 30 140 200 40 330 0 400 40 520 190 560 330 600 600 640 600 640V0C500 0 420 10 330 20Z" fill="#FFD42E" />
          </svg>
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} fetchpriority="high"
            className="photo-mask absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom lg:left-auto lg:right-0 lg:translate-x-0" />
        </motion.div>
      </div>
    </div>
  )
}

/* ---------- ABOUT ---------- */
const About = () => {
  const facts = [
    { label: 'Based in', value: profile.location },
    { label: 'Education', value: `${education[0].degree}, ${education[0].period.split('– ')[1] || ''}`.replace(/, $/, '') },
    { label: 'Looking for', value: 'Python Backend and AI Engineering roles (fresher)' },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  ]
  return (
    <Page id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-x-14">
        {/* story */}
        <div>
          <p className="max-w-2xl font-serif text-2xl font-bold leading-snug sm:text-3xl">{about.intro[0]}</p>
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-8 text-slate2">
            <p>{about.intro[1]}</p>
            <p className="font-bold text-navy">{about.lead}</p>
          </div>
          <div className="mt-5 grid max-w-xl gap-4">
            {about.sections.map((s) => (
              <section key={s.title} className="rounded-2xl border-l-8 border-sun bg-sunsoft px-6 py-4">
                <h2 className="font-serif text-xl font-bold">{s.title}</h2>
                <p className="mt-1.5 text-base leading-7 text-slate2">{s.text}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-slate2">
            {about.closing.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            {profile.resume && <a href={profile.resume} download="Bhuvaneshwaran_D_Resume.pdf" className={btnPrimary}>Download Resume</a>}
            <a href="#/projects" className={btnOutline}>See my projects</a>
            <a href="#/contact" className={btnOutline}>Contact me</a>
          </div>
        </div>

        {/* photo + quick facts */}
        <div className="grid content-start gap-8">
        <div className="relative mx-auto h-72 w-full max-w-md overflow-hidden rounded-[2rem] bg-sun sm:h-80 lg:mx-0 lg:h-[22rem] lg:max-w-none">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FFE98A]" aria-hidden="true" />
          <img src={profile.aboutImage} alt="Illustration of a developer coding at a desk" className="absolute bottom-0 left-1/2 h-[92%] -translate-x-1/2 object-contain object-bottom" />
        </div>

        <dl className="divide-y divide-navy/10 rounded-[2rem] bg-sunsoft px-6 py-2 sm:px-8">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className="text-sm font-bold text-slate2">{f.label}</dt>
              <dd className="break-words font-semibold">{f.href ? <a href={f.href} className={linkCls}>{f.value}</a> : f.value}</dd>
            </div>
          ))}
        </dl>
        </div>
      </div>

      {/* numbers */}
      <dl className="mt-14 grid gap-5 sm:grid-cols-3">
        {about.stats.map((s) => (
          <div key={s.label} className="rounded-3xl border-2 border-navy px-6 py-6">
            <dt className="font-serif text-5xl font-extrabold">{s.value}</dt>
            <dd className="mt-2 font-semibold leading-snug text-slate2">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Page>
  )
}
const groupSpan = {
  'Languages': 'lg:col-span-3', 'Backend': 'lg:col-span-5', 'AI and GenAI': 'lg:col-span-4',
  'Retrieval and Vector Search': 'lg:col-span-5', 'Databases': 'lg:col-span-4', 'Data Analysis': 'lg:col-span-3',
  'Frontend': 'lg:col-span-4', 'Tools and DevOps': 'lg:col-span-8',
}
const Skills = () => (
  <Page id="skills" title="Technical skills">
    <p className="-mt-4 mb-8 text-lg text-slate2 md:mb-10">Technologies and tools I work with.</p>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
      {skills.map((g, gi) => {
        const GIcon = groupIcon[g.group] || groupFallback
        return (
          <motion.section key={g.group} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * gi, duration: 0.45 }}
            className={`rounded-3xl bg-sunsoft p-5 md:p-6 ${groupSpan[g.group] || 'lg:col-span-4'}`}>
            <h2 className="flex items-center gap-3 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun"><GIcon size={20} aria-hidden="true" /></span>
              {g.group}
            </h2>
            <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-3">
              {g.items.map((name) => {
                const [Icon, color] = skillIcon[name] || fallbackIcon
                return (
                  <li key={name} className="flex flex-col items-center gap-2 rounded-2xl bg-white px-2 py-3.5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <Icon size={34} color={color || undefined} aria-hidden="true" />
                    <span className="text-[13px] font-semibold leading-tight">{name}</span>
                  </li>
                )
              })}
            </ul>
          </motion.section>
        )
      })}
    </div>
  </Page>
)

const Experience = () => (
  <Page id="experience" title="Internship & Certifications">
    <ol className="ml-2 space-y-10 border-l-4 border-sun">
      {experience.map((e) => (
        <li key={e.company + e.role} className="relative pl-7 md:pl-9">
          <span className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-full border-4 border-white bg-sun" />
          <p className="font-bold text-slate2">{e.period}</p>
          <h2 className="mt-1 font-serif text-2xl font-bold">{e.role}, {e.company}</h2>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-lg text-slate2 marker:text-[#D9A400]">
            {e.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  </Page>
)

/* ---------- PROJECTS: list + detail + upcoming ---------- */
const statusCls = (s) => (s === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-sun text-navy')
const methodCls = { GET: 'bg-green-100 text-green-800', POST: 'bg-blue-100 text-blue-800', PATCH: 'bg-amber-100 text-amber-800', PUT: 'bg-amber-100 text-amber-800', DELETE: 'bg-red-100 text-red-800' }

const SectionTitle = ({ children }) => (
  <h2 className="font-serif text-2xl font-bold sm:text-3xl">{children}<span className="mt-2 block h-1 w-12 rounded-full bg-sun" /></h2>
)

function ProjectCard({ p }) {
  return (
    <motion.a href={`#/projects/${p.slug}`} whileHover={{ y: -5 }} aria-label={`${p.name}: view full details`}
      className="group flex flex-col rounded-3xl border-2 border-navy bg-white p-6 transition-colors hover:bg-sunsoft md:p-7">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-3xl font-bold">{p.name}</h2>
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-extrabold ${statusCls(p.status)}`}>{p.status}</span>
      </div>
      <p className="mt-1 text-sm font-bold text-[#B88A00]">{p.subtitle}</p>
      <p className="mt-3 flex-1 leading-7 text-slate2">{p.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {p.tech.slice(0, 6).map((t) => <li key={t} className="rounded-full bg-sun px-3 py-1 text-sm font-bold">{t}</li>)}
        {p.tech.length > 6 && <li className="rounded-full border-2 border-navy/20 px-3 py-1 text-sm font-bold">+{p.tech.length - 6}</li>}
      </ul>
      <span className="mt-6 inline-flex items-center gap-2 font-bold">View full details <span className="transition group-hover:translate-x-1"><ArrowIcon /></span></span>
    </motion.a>
  )
}

function UpcomingCard({ p }) {
  return (
    <article className="flex flex-col rounded-3xl border-2 border-dashed border-navy/40 bg-sunsoft/60 p-6 md:p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-3xl font-bold">{p.name}</h3>
        <span className="shrink-0 rounded-full bg-navy px-3 py-1 text-xs font-extrabold text-white">Coming soon</span>
      </div>
      <p className="mt-1 text-sm font-bold text-[#B88A00]">{p.subtitle}</p>
      <p className="mt-3 leading-7 text-slate2">{p.description}</p>
      <p className="mt-4 text-sm font-extrabold uppercase tracking-wide text-slate2">Planned features</p>
      <ul className="mt-2 flex-1 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-slate2 marker:text-[#D9A400]">
        {p.planned.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-white px-3 py-1 text-sm font-bold">{t}</li>)}</ul>
      {p.status && <p className="mt-4 text-sm font-bold text-slate2">Status: {p.status}</p>}
    </article>
  )
}

function ProjectDetail({ p }) {
  const i = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[i - 1]
  const next = projects[i + 1]
  return (
    <Page id="projects" title={p.name} hideNext>
      <a href="#/projects" className={`-mt-4 mb-6 inline-block font-bold ${linkCls}`}>← All projects</a>
      <p className="font-serif text-xl font-bold text-[#B88A00] sm:text-2xl">{p.subtitle}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className={`rounded-full px-4 py-1.5 text-sm font-extrabold ${statusCls(p.status)}`}>{p.status}</span>
        {p.period && <span className="rounded-full border-2 border-navy/20 px-4 py-1.5 text-sm font-bold">{p.period}</span>}
        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={btnOutline}>GitHub</a>}
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btnPrimary}>Live demo</a>}
      </div>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate2 sm:text-xl">{p.overview}</p>

      <section className="mt-8 max-w-3xl rounded-2xl border-l-8 border-sun bg-sunsoft px-6 py-5">
        <h2 className="font-serif text-xl font-bold">Why this project</h2>
        <p className="mt-1.5 leading-7 text-slate2">{p.problem}</p>
      </section>

      <section className="mt-14">
        <SectionTitle>Key features</SectionTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {p.features.map((f) => (
            <div key={f.title} className="rounded-2xl border-2 border-navy/15 bg-white p-5 transition hover:border-navy">
              <h3 className="font-serif text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 leading-7 text-slate2">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>How it works</SectionTitle>
        <ol className="mt-6 grid max-w-3xl gap-3">
          {p.workflow.map((s, n) => (
            <li key={s} className="flex items-center gap-4 rounded-2xl bg-sunsoft px-5 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun font-extrabold">{n + 1}</span>
              <span className="font-semibold">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <SectionTitle>Tech stack</SectionTitle>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.techGroups.map((g) => (
            <div key={g.group} className="rounded-2xl bg-sunsoft p-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate2">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{g.items.map((t) => <li key={t} className="rounded-full bg-white px-3 py-1 text-sm font-bold shadow-sm">{t}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {p.endpoints?.length > 0 && (
        <section className="mt-14">
          <SectionTitle>API endpoints</SectionTitle>
          <ul className="mt-6 grid max-w-3xl gap-3">
            {p.endpoints.map((e) => (
              <li key={e.method + e.path} className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border-2 border-navy/15 px-5 py-3.5">
                <span className={`rounded-md px-2.5 py-1 text-xs font-extrabold ${methodCls[e.method] || 'bg-sun'}`}>{e.method}</span>
                <code className="break-all font-mono text-sm font-bold">{e.path}</code>
                <span className="text-slate2 sm:ml-auto">{e.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {p.highlights?.length > 0 && (
        <section className="mt-14">
          <SectionTitle>What I built</SectionTitle>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-lg leading-8 text-slate2 marker:text-[#D9A400]">
            {p.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </section>
      )}

      <nav className="mt-16 flex flex-wrap justify-between gap-4 border-t border-navy/10 pt-6 font-bold" aria-label="Project navigation">
        {prev ? <a href={`#/projects/${prev.slug}`} className={linkCls}>← {prev.name}</a> : <span />}
        {next ? <a href={`#/projects/${next.slug}`} className={linkCls}>{next.name} →</a> : <a href="#/projects" className={linkCls}>All projects →</a>}
      </nav>
    </Page>
  )
}

const Projects = ({ sub }) => {
  const project = projects.find((p) => p.slug === sub)
  if (project) return <ProjectDetail p={project} />
  return (
    <Page id="projects" title="Projects">
      <p className="-mt-4 mb-8 text-lg text-slate2">Tap a project to see the full details.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>

      {upcomingProjects.length > 0 && (
        <section className="mt-16" aria-labelledby="upcoming-title">
          <h2 id="upcoming-title" className="font-serif text-2xl font-bold sm:text-3xl">Upcoming Projects<span className="mt-2 block h-1 w-12 rounded-full bg-sun" /></h2>
          <p className="mt-4 max-w-2xl text-lg text-slate2">What I am building next.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((p) => <UpcomingCard key={p.name} p={p} />)}
          </div>
        </section>
      )}
    </Page>
  )
}

const Education = () => (
  <Page id="education" title="Education">
    <div className="grid max-w-2xl gap-5">
      {education.map((e) => (
        <div key={e.degree} className="rounded-3xl border-l-8 border-sun bg-sunsoft p-6 md:p-7">
          {e.period && <p className="font-bold text-slate2">{e.period}</p>}
          <h2 className="mt-1 font-serif text-2xl font-bold">{e.degree}</h2>
          <p className="mt-1 font-semibold">{e.school}</p>
          {e.grade && <p className="mt-3 inline-block rounded-full bg-sun px-4 py-1 text-sm font-extrabold">{e.grade}</p>}
          {e.note && <p className="mt-2 font-semibold text-slate2">{e.note}</p>}
        </div>
      ))}
    </div>
  </Page>
)

/* ---------- CONTACT ---------- */
function MountainScene() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="cglow" cx="50%" cy="40%" r="55%">
          <stop offset="0" stopColor="#FFE98A" stopOpacity=".7" />
          <stop offset="1" stopColor="#FFE98A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="800" fill="url(#cglow)" />
      <path d="M0 560 160 430 260 500 420 380 560 490 700 400 860 520 1010 410 1180 500 1300 430 1440 520V800H0Z" fill="#E9E3D2" opacity=".85" />
      <path d="M0 650 180 560 330 630 520 520 700 640 880 560 1060 650 1240 560 1440 640V800H0Z" fill="#D6D0BF" />
      <path d="M0 800V710L140 725 260 765 400 800Z" fill="#BDB7A5" />
      <path d="M860 800 980 690 1090 700 1170 610 1260 640 1330 560 1440 600V800Z" fill="#8F8A7A" />
      <path d="M1170 610 1260 640 1330 560 1300 700 1200 720Z" fill="#77725F" />
      <g transform="translate(1312 498) scale(1.15)" fill="#3A3833" stroke="#3A3833">
        <circle cx="6" cy="6" r="6" stroke="none" />
        <rect x="0" y="13" width="12" height="26" rx="4" stroke="none" />
        <rect x="1" y="37" width="4" height="22" rx="2" stroke="none" />
        <rect x="7" y="37" width="4" height="22" rx="2" stroke="none" />
        <rect x="-8" y="15" width="9" height="20" rx="3" stroke="none" />
        <path d="M16 16 21 60" strokeWidth="2" fill="none" />
      </g>
      <g className="bird" stroke="#0F1B4C" strokeOpacity=".4" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M560 190q12-14 24 0 12-14 24 0" />
        <path d="M650 160q9-10 18 0 9-10 18 0" />
      </g>
    </svg>
  )
}

const ContactCard = ({ icon: Icon, title, value, href, external }) => (
  <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white/90 px-4 py-3.5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun"><Icon size={18} aria-hidden="true" /></span>
    <span className="min-w-0 flex-1">
      <span className="block text-sm font-extrabold">{title}</span>
      <span className="block break-words text-sm text-slate2">{value}</span>
    </span>
    <span className="text-lg font-bold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
  </a>
)

function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const send = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\n${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setSent(false) }
  const field = 'w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-[15px] placeholder:text-slate2/70 focus:border-navy'
  const socialCls = 'flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white/80 transition hover:bg-sun'
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFBEA] to-white">
      <MountainScene />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sun/60 px-4 py-1.5 text-sm font-extrabold">
            <span className="h-2 w-2 rounded-full bg-[#E5A800]" aria-hidden="true" />Contact
          </p>
          <h1 className="mt-5 font-serif text-5xl font-extrabold leading-tight sm:text-6xl">Get in <span className="text-[#F5B800]">touch</span></h1>
          <p className="mt-4 max-w-md text-lg leading-8 text-slate2">Have questions or need to collaborate?<br />Feel free to reach out — I'd love to hear from you!</p>

          <div className="mt-8 grid max-w-md gap-3">
            <ContactCard icon={FaEnvelope} title="Email me" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactCard icon={FaPhone} title="Call me" value={profile.phoneDisplay} href={`tel:+91${profile.phone}`} />
            <ContactCard icon={FaLocationDot} title="My location" value={profile.location} external
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`} />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={socialCls}><FaGithub size={17} /></a>}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={socialCls}><FaLinkedinIn size={17} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={socialCls}><FaEnvelope size={16} /></a>
            <span className="ml-1 text-sm font-semibold text-slate2">Let's build something great together!</span>
          </div>
        </div>

        <form onSubmit={send} className="self-start rounded-3xl border border-navy/10 bg-white/95 p-6 shadow-xl backdrop-blur md:p-8">
          <div className="flex items-center gap-3 text-sm font-bold">
            <span className="h-px flex-1 bg-navy/15" aria-hidden="true" />Send me a message<span className="h-px flex-1 bg-navy/15" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required aria-label="Name" placeholder="Name *" className={field} value={f.name} onChange={set('name')} />
            <input required type="email" aria-label="Email" placeholder="Email *" className={field} value={f.email} onChange={set('email')} />
          </div>
          <textarea required rows="5" aria-label="Message" placeholder="Message *" className={`${field} mt-4`} value={f.message} onChange={set('message')} />
          <button className="mt-5 inline-flex items-center gap-3 rounded-full bg-sun py-2.5 pl-6 pr-2.5 font-bold shadow-sm transition hover:brightness-95">
            <FaPaperPlane size={14} aria-hidden="true" />Send Message
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white"><ArrowIcon /></span>
          </button>
          {sent && <p className="mt-4 text-sm font-semibold text-slate2" role="status">Your email app should open now. If it doesn't, write to {profile.email}.</p>}
        </form>
      </div>
    </div>
  )
}

const views = { home: Home, about: About, skills: Skills, projects: Projects, education: Education, contact: Contact }

export default function App() {
  const { page, sub } = useRoute()
  const View = views[page]
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Header page={page} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div key={`${page}/${sub}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <View sub={sub} />
            </motion.div>
          </AnimatePresence>
        </main>
        <footer className="bg-navy py-5 text-center text-sm text-white">© {new Date().getFullYear()} {profile.name}</footer>
      </div>
    </MotionConfig>
  )
}