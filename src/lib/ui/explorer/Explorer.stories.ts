import Explorer from './Explorer.svelte'
import { workspaces } from '$lib/data/sample_data'

export default {
	title: 'Explorer/Explorer',
	component: Explorer,
	tags: ['autodocs']
}

export const Enabled = {
	args: {
		storage_name: workspaces[0].explorers[0].explorer.storage_name,
		storage_tree: workspaces[0].explorers[0].explorer.storage_tree,
		breadcrumbs: workspaces[0].explorers[0].explorer.breadcrumbs,
		selected_widget: workspaces[0].explorers[0].explorer.selected_widget,
	}
}