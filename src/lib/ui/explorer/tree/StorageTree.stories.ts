import StorageTree from './StorageTree.svelte'
import { storage_tree } from '../../../data/sample_data.js'

export default {
	title: 'Explorer/StorageTree',
	component: StorageTree,
	tags: ['autodocs']
}

export const First = {
	args: {
		name: "Working",
		tree: storage_tree
	}
}