import hwyConfig from '@nix6839/prettier-config';

/** @satisfies {import('prettier').Config} */
const config = {
	...hwyConfig,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
			astroAllowShorthand: true,
		},
	],
};

export default config;
