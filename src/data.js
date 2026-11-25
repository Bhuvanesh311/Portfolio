/* ============================================================
   ✏️  EDIT YOUR WEBSITE HERE  (this is the only file you need)
   - Change any text between the quote marks.
   - Add an item: copy a whole { ... }, line and paste it below.
   - Remove an item: delete its { ... }, line.
   - Leave a link as '' to hide it.
   ============================================================ */

// ---------- 1. BASIC DETAILS ----------
export const profile = {
  name: 'Bhuvaneshwaran D',
  title: 'Python Developer',
  intro: 'I build scalable backend applications, REST APIs, and AI-powered solutions using Python and modern technologies.',
  photo: '/photo.png',
  aboutImage: '/devel.png',
  location: 'Chennai, Tamil Nadu, India',
  email: 'bhuvanesh31102@gmail.com',
  phone: '6383068103',
  phoneDisplay: '+91 63830 68103',
  github: 'https://github.com/Bhuvanesh311',                                   // TODO: add your GitHub URL, e.g. 'https://github.com/yourname'
  linkedin: 'https://www.linkedin.com/in/bhuvaneshwaran3',
  resume: 'public/Bhuvaneshwaran_Resume.pdf', // TODO: add your resume URL, e.g. 'public/resume.pdf'
  openToWork: 'Open to Python, Backend and AI engineering roles.',
}

// ---------- 2. MENU (order = menu order) ----------
export const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// ---------- 3. ABOUT ME ----------
export const about = {
  intro: [
    'I build backend systems and AI-powered applications that turn complex problems into practical solutions.',
    'I specialize in Python backend development and AI engineering, building applications from architecture and API development to intelligent automation and deployment.',
  ],
  lead: 'My work focuses on creating solutions that deliver real value:',
  sections: [
    {
      title: 'Backend Engineering',
      text: 'Designing reliable REST APIs using FastAPI and Django REST Framework, implementing JWT authentication, and managing structured data with PostgreSQL.',
    },
    {
      title: 'AI & Intelligent Systems',
      text: 'Building end-to-end RAG pipelines that transform 50+ technical documents into searchable knowledge using document ingestion, chunking, embeddings, and ChromaDB. Developing LLM-powered and multi-agent workflows to automate complex, multi-step tasks.',
    },
    {
      title: 'Application Development & Delivery',
      text: 'Building containerized applications with Docker, integrating third-party services, and developing complete solutions from initial architecture to deployment.',
    },
  ],
  closing: [
    'I believe great engineering is not just about writing code — it\'s about building systems that solve meaningful problems, simplify workflows, and create measurable value.',
    'I take ownership, learn continuously, and turn ideas into solutions that work in the real world.',
  ],
  stats: [
    { value: '50+', label: 'Technical docs in my RAG pipeline' },
    { value: '2', label: 'API frameworks: FastAPI and DRF' },
    { value: '3', label: 'Core areas: Backend, AI, Delivery' },
  ],
}

// ---------- 4. TECHNICAL SKILLS ----------
export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript'] },
  { group: 'Backend', items: ['FastAPI', 'Django', 'Django REST Framework', 'Flask', 'RESTful APIs'] },
  { group: 'AI and GenAI', items: ['Generative AI', 'RAG', 'LLM Integration', 'OpenAI', 'LangChain', 'LangGraph', 'AI Agents', 'Prompt Engineering'] },
  { group: 'Retrieval and Vector Search', items: ['Document Ingestion', 'Text Chunking', 'Embeddings', 'Semantic Search', 'Similarity Search', 'ChromaDB'] },
  { group: 'Databases', items: ['SQL', 'PostgreSQL', 'MySQL', 'Redis'] },
  { group: 'Data Analysis', items: ['Pandas', 'NumPy'] },
  { group: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
  { group: 'Tools and DevOps', items: ['Git', 'GitHub', 'Docker', 'GitHub Actions (CI/CD)', 'Postman', 'Swagger / OpenAPI', 'Pytest'] },
]

// ---------- 6. PROJECTS ----------
// Card = name, subtitle, description, tech. Detail page = everything else.
// Optional sections (endpoints, highlights, links) are hidden when left empty.
export const projects = [
  {
    slug: 'contextapi',
    name: 'ContextAPI',
    subtitle: 'AI-powered API reverse engineering platform',
    status: 'In progress',
    period: 'Jun 2026 – Present',
    description: 'Ingests technical documents and extracts structured API schemas, using RAG and a three-agent workflow to generate API documentation.',
    overview: 'ContextAPI turns scattered technical documents into structured API knowledge. It ingests documents, extracts API schemas, and uses a layered retrieval pipeline with a three-agent workflow to generate API documentation.',
    problem: 'API details are often spread across many technical documents. ContextAPI reverse-engineers them into structured, searchable schemas and documentation, so the knowledge is easy to find and reuse.',
    features: [
      { title: 'Document ingestion', text: 'Ingestion pipelines for 50+ technical documents, with extracted API specs stored in PostgreSQL.' },
      { title: 'RAG pipeline', text: 'Chunking, embeddings, ChromaDB storage and similarity search over the ingested documents.' },
      { title: 'Layered retrieval', text: 'Each question passes through validation, security and scope checks, query understanding, planning and an execution engine before evidence is returned.' },
      { title: 'Three-agent workflow', text: 'An API planner, a schema analyzer and a documentation generator work together to produce the final API documentation.' },
      { title: 'Secure by design', text: 'Requests are validated and scoped to the authenticated user before any retrieval happens.' },
      { title: 'React frontend', text: 'A React interface for projects, documents and asking questions over them.' },
    ],
    workflow: [
      'Upload technical documents to a project',
      'Validate the request and resolve user scope',
      'Chunk the documents and create embeddings in ChromaDB',
      'Understand the query and plan the retrieval',
      'Run the plan and collect evidence with similarity search',
      'Agents analyze schemas and generate the API documentation',
    ],
    techGroups: [
      { group: 'Backend', items: ['Python', 'FastAPI', 'Pydantic'] },
      { group: 'AI', items: ['RAG', 'AI Agents', 'Embeddings'] },
      { group: 'Data', items: ['ChromaDB', 'PostgreSQL'] },
      { group: 'Tools', items: ['Docker', 'Swagger'] },
      { group: 'Frontend', items: ['React.js'] },
    ],
    tech: ['Python', 'FastAPI', 'Pydantic', 'RAG', 'AI Agents', 'ChromaDB', 'PostgreSQL', 'Docker', 'Swagger'],
    endpoints: [],
    highlights: [
      'FastAPI services with Pydantic validation to ingest documents and extract API schemas.',
      'Ingestion pipelines for 50+ technical documents, stored as API specs in PostgreSQL.',
      'RAG pipeline with chunking, embeddings, ChromaDB and similarity search.',
      'Three agents: API planner, schema analyzer and documentation generator.',
    ],
    github: '', demo: '',
  },
  
]

//   {
//     slug: 'alpha-ledger',
//     name: 'Alpha Ledger',
//     subtitle: 'Portfolio analytics platform',
//     status: 'Completed',
//     period: 'Nov 2024 – Jul 2025',
//     description: 'A full-stack investment platform with Django REST Framework and React dashboards for allocation, returns and performance history.',
//     overview: 'Alpha Ledger is a full-stack investment platform. A Django REST Framework backend calculates portfolio analytics, and React dashboards show allocation, returns and performance history.',
//     problem: 'Investors need one place to see how their portfolio is allocated and how it has performed over time. Alpha Ledger brings these numbers together in clear dashboards.',
//     features: [
//       { title: 'Portfolio analytics', text: 'Allocation, asset returns, volatility, maximum drawdown and history.' },
//       { title: 'Six REST APIs', text: 'Dedicated endpoints that power each analytics view.' },
//       { title: 'Secure access', text: 'JWT authentication with owner-based access, so users see only their own portfolios.' },
//       { title: 'Three React dashboards', text: 'Interactive dashboards for exploring the portfolio data.' },
//     ],
//     workflow: [
//       'Log in with JWT authentication',
//       'Create a portfolio',
//       'Add assets and transactions',
//       'Backend calculates allocation, returns, volatility and drawdown',
//       'View the results on the React dashboards',
//     ],
//     techGroups: [
//       { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework'] },
//       { group: 'Frontend', items: ['React.js', 'JavaScript'] },
//       { group: 'Database', items: ['PostgreSQL'] },
//     ],
//     tech: ['Python', 'Django', 'DRF', 'React.js', 'PostgreSQL', 'JavaScript'],
//     endpoints: [
//       { method: 'GET', path: '/api/portfolios/', desc: 'List your portfolios' },
//       { method: 'POST', path: '/api/portfolios/', desc: 'Create a portfolio' },
//       { method: 'GET', path: '/api/portfolios/{portfolio_id}/', desc: 'Portfolio details' },
//     ],
//     highlights: [
//       'Six REST APIs for allocation, asset returns, volatility, maximum drawdown and history.',
//       'PostgreSQL models for users, portfolios, assets and transactions, with JWT auth and owner-based access.',
//       'Three interactive React dashboards.',
//     ],
//     github: '', demo: '',
//   },
// ]

// ---------- 6b. UPCOMING PROJECTS ----------

export const upcomingProjects = [
  {
    name: 'elva.ai',
    subtitle: 'Real-time AI voice assistant',
    description: 'A voice assistant you can talk to naturally, built with free and local models.',
    planned: [
      'Wake word: "Hey Elva"',
      'Real-time voice chat (speech to text, LLM, text to speech)',
      'Interrupt handling and conversation memory',
      'Time, date and weather',
      'Open apps and websites, web search',
      'Timers, alarms and reminders',
      'Play music and YouTube',
      'Voice notes saved to file',
    ],
    tech: ['Python', 'Local LLM', 'Speech to Text', 'Text to Speech'],
    status: 'Building step by step',
  },

  {
    name: 'flowmind.ai',
    subtitle: 'Agentic AI Workflow Automation Platform',
    description: 'An intelligent AI automation platform that converts natural-language instructions into multi-step workflows, executes tasks using AI agents and tools, and verifies results automatically.',
    planned: [
      'Natural language task understanding and AI planning',
      'Multi-agent orchestration using LangGraph',
      'Autonomous task execution with tool calling',
      'File processing and intelligent document analysis',
      'Automated CSV and data analysis',
      'RAG-based knowledge retrieval and AI memory',
      'API integration and database operations',
      'Execution monitoring and real-time progress tracking',
      'AI-powered result verification and error recovery',
      'Human approval for sensitive operations',
      'Automated report generation',
      'Task history and workflow analytics',
    ],
    tech: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Ollama',
      'Qwen3',
      'PostgreSQL',
      'Redis',
      'Celery',
      'ChromaDB',
      'BGE-M3',
      'React',
      'WebSockets',
      'Docker',
    ],
    status: 'Planning & Architecture',
  },
]



// ---------- 7. EDUCATION ----------
export const education = [
  {
    degree: 'M.Sc. Computer Science',
    school: 'Hindusthan College of Arts and Science, Coimbatore (Bharathiar University)',
    period: '2023 – 2025',
    grade: 'First class with Distinction A+',
    note: 'CGPA: 7.662 / 10',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'K.S.R. College of Arts and Science, Tiruchengode (Periyar University)',
    period: '2020 – 2023',
    grade: 'First class with A++',
    note: 'CGPA: 7.09 / 10',
  },
]