import { motion } from 'motion/react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      className={`project-card${project.featured ? ' project-card-featured' : ''}`}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .65, delay: index * .07 }}
      whileHover={{ y: -2 }}
    >
      <div className="project-top">
        <span className="project-index">
          {project.featured && <i className="featured-dot" aria-hidden="true" />}
          0{index + 1} {project.role ? `· ${project.role}` : ''}
        </span>
        <span className="project-date">{project.date}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      {project.metrics && (
        <div className="metrics">
          {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
        </div>
      )}
      <div className="project-bottom">
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <span className="external-arrow">↗</span>
      </div>
    </motion.a>
  )
}
