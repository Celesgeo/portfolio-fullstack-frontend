export default function ProjectCard({ title, description, tech }) {
return (
<article>
<h3>{title}</h3>
<p>{description}</p>
<small>{tech.join(" · ")}</small>
</article>
)
}