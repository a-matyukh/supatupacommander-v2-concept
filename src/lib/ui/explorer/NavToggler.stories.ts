import NavToggler from './NavToggler.svelte'

const meta = {
	title: 'Explorer/Header/NavToggler',
	component: NavToggler,
	tags: ['autodocs'],
	argTypes: { nav_enabled: { control: 'boolean' }}
}
export default meta

export const Enabled = {
	args: {
		nav_enabled: true
	}
}

export const Disabled = {
	args: {
		nav_enabled: false
	}
}
