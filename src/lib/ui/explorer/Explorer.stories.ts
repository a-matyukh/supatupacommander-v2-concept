import Explorer from './Explorer.svelte'
import { storage_name, storage_tree, breadcrumbs, selected_widget } from '$lib/data/sample_data'

export default {
	title: 'Explorer/Explorer',
	component: Explorer,
	tags: ['autodocs']
}

export const Enabled = {
	args: {
		storage_name, storage_tree, breadcrumbs, selected_widget
	}
}