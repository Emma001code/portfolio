import { useState } from 'react'
import { projects, type Project } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Section, SectionHeading } from '../components/Section'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Work"
        title="Projects & Products"
        subtitle="From AI health platforms to civic tools — built end-to-end for real users."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={setActive}
          />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
