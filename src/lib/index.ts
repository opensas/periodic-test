// place files you want to import through the `$lib` alias in this folder.

export function isAllowed(role: string) {
	return [
		'admin',
		'developer',
		'maintainer',
		'observer',
		'owner'
		].includes(role)
}