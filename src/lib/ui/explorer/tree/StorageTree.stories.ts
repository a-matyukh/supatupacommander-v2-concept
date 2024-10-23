import StorageTree from './StorageTree.svelte'
import { files } from './data.js'

export default {
	title: 'Explorer/StorageTree',
	component: StorageTree,
	tags: ['autodocs']
}

export const First = {
	args: {
		tree: files
	}
}