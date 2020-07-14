const { ROLE, projects } = require("../data");

function canViewProject(user, project) {
	return user.role == ROLE.ADMIN || user.id == project.id
}

function canDeleteProject(user, project) {
	return user.id == project.id
}

function scopedProjects(user) {
	if (user.role == ROLE.ADMIN) return projects
	return projects.filter(project => user.id == project.id)
}

module.exports = {
	canViewProject,
	scopedProjects,
	canDeleteProject
}