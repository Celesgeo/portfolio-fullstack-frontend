import ProjectCard from "../components/ProjectCard"


export default function Projects() {
return (
<section>
<h2>Mis Proyectos</h2>


<ProjectCard
title="API REST Productos"
description="API desarrollada con Node, Express y MySQL"
tech={["Node.js", "Express", "MySQL"]}
/>
</section>
)
}