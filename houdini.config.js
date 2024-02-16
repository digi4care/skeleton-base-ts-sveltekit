/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://webshop.voorbeeld.link/graphql'
	},
	defaultFragmentMasking: "disable",
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
