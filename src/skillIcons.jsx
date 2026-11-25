import {
  SiPython, SiJavascript, SiFastapi, SiDjango, SiFlask, SiLangchain, SiPostgresql, SiMysql, SiRedis,
  SiPandas, SiNumpy, SiReact, SiHtml5, SiGit, SiGithub, SiDocker, SiGithubactions, SiPostman,
  SiSwagger, SiPytest,
} from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'
import { FaCss3Alt } from 'react-icons/fa6'
import {
  TbApi, TbFileImport, TbCut, TbVectorTriangle, TbDatabase, TbBrain, TbRobot, TbSparkles, TbMessageChatbot,
  TbSearch, TbCode, TbServer2, TbCpu, TbChartBar, TbLayoutDashboard, TbTools, TbBinaryTree2, TbTargetArrow,
  TbWand, TbFileSearch,
} from 'react-icons/tb'

const Chroma = (p) => (
  <svg viewBox="0 0 24 24" width={p.size} height={p.size} aria-hidden="true">
    <path d="M12 2 21 7v10l-9 5-9-5V7z" fill="#7C3AED" />
    <path d="M12 2 21 7 12 12 3 7z" fill="#FFC800" />
  </svg>
)

export const skillIcon = {
  'Python': [SiPython, '#3776AB'],
  'JavaScript': [SiJavascript, '#E0B800'],
  'FastAPI': [SiFastapi, '#009688'],
  'Django': [SiDjango, '#092E20'],
  'Django REST Framework': [TbApi, '#A30000'],
  'Flask': [SiFlask, '#111827'],
  'RESTful APIs': [TbApi, '#0B6BCB'],
  'Generative AI': [TbSparkles, '#7C3AED'],
  'RAG': [TbFileSearch, '#0E9F6E'],
  'LLM Integration': [TbMessageChatbot, '#2563EB'],
  'OpenAI': [RiOpenaiFill, '#111827'],
  'LangChain': [SiLangchain, '#1C7C54'],
  'LangGraph': [TbBinaryTree2, '#0E9F6E'],
  'AI Agents': [TbRobot, '#2563EB'],
  'Prompt Engineering': [TbWand, '#7C3AED'],
  'Document Ingestion': [TbFileImport, '#2563EB'],
  'Text Chunking': [TbCut, '#2563EB'],
  'Embeddings': [TbVectorTriangle, '#3B82F6'],
  'Semantic Search': [TbSearch, '#7C3AED'],
  'Similarity Search': [TbTargetArrow, '#7C3AED'],
  'ChromaDB': [Chroma, null],
  'SQL': [TbDatabase, '#0B6BCB'],
  'PostgreSQL': [SiPostgresql, '#336791'],
  'MySQL': [SiMysql, '#00758F'],
  'Redis': [SiRedis, '#DC382D'],
  'Pandas': [SiPandas, '#150458'],
  'NumPy': [SiNumpy, '#4DABCF'],
  'React.js': [SiReact, '#00A8CC'],
  'HTML5': [SiHtml5, '#E34F26'],
  'CSS3': [FaCss3Alt, '#1572B6'],
  'Git': [SiGit, '#F05032'],
  'GitHub': [SiGithub, '#181717'],
  'Docker': [SiDocker, '#2496ED'],
  'GitHub Actions (CI/CD)': [SiGithubactions, '#2088FF'],
  'Postman': [SiPostman, '#FF6C37'],
  'Swagger / OpenAPI': [SiSwagger, '#6BA81E'],
  'Pytest': [SiPytest, '#0A9EDC'],
}
export const fallbackIcon = [TbCode, '#0F1A4A']

export const groupIcon = {
  'Languages': TbCode,
  'Backend': TbServer2,
  'AI and GenAI': TbBrain,
  'Retrieval and Vector Search': TbSearch,
  'Databases': TbDatabase,
  'Data Analysis': TbChartBar,
  'Frontend': TbLayoutDashboard,
  'Tools and DevOps': TbTools,
}
export const groupFallback = TbCpu