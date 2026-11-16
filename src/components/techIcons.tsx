import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDart,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { Code2, Database, LayoutGrid, Shield } from 'lucide-react'

type TechMeta = {
  icon: IconType
  color: string
}

const TECH_MAP: Record<string, TechMeta> = {
  'React Native': { icon: SiReact, color: '#61DAFB' },
  React: { icon: SiReact, color: '#61DAFB' },
  Expo: { icon: SiExpo, color: '#000020' },
  Vite: { icon: SiVite, color: '#646CFF' },
  'Redux Toolkit': { icon: SiRedux, color: '#764ABC' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Express: { icon: SiExpress, color: '#000000' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  Jest: { icon: Code2, color: '#C21325' },
  JWT: { icon: Shield, color: '#EB5424' },
  Python: { icon: SiPython, color: '#3776AB' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  OpenRouter: { icon: Code2, color: '#6466F1' },
  DeepSeek: { icon: Code2, color: '#4D6BFE' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS3: { icon: SiCss, color: '#1572B6' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Mongoose: { icon: SiMongoose, color: '#880000' },
  Flutter: { icon: SiFlutter, color: '#02569B' },
  Dart: { icon: SiDart, color: '#0175C2' },
  'Google Maps': { icon: LayoutGrid, color: '#4285F4' },
  Provider: { icon: Code2, color: '#0175C2' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  jQuery: { icon: SiJquery, color: '#0769AD' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  Sass: { icon: SiSass, color: '#CC6699' },
  WebVTT: { icon: Code2, color: '#64748B' },
  'CSS Grid': { icon: LayoutGrid, color: '#1572B6' },
  WCAG: { icon: Shield, color: '#0D9488' },
  SharedPreferences: { icon: Database, color: '#02569B' },
  'Material Design': { icon: LayoutGrid, color: '#757575' },
}

export function getTechMeta(name: string): TechMeta {
  return TECH_MAP[name] ?? { icon: Code2, color: '#64748B' }
}
