import Workspace from './Workspace.svelte'
import { workspaces } from '$lib/data/sample_data'

export default {
	title: 'Workspace/Workspace',
	component: Workspace
}

export const Enabled = {
	args: {
		selected_workspace: workspaces[0]
	}
}