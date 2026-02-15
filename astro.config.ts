import mdx from '@astrojs/mdx';
// import node from '@astrojs/node'; // Ya no lo necesitas
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://smonroyma.github.io',
	output: 'static', // Correcto para GitHub Pages
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Santiago Monroy', // Pon tu nombre real aquí
			openGraph: {
				home: {
					title: 'Presentación - Santiago Monroy',
					description: 'Portafolio para la asignatura de Bases de Datos 1.',
				},
				blog: {
					title: 'Evidencias',
					description: 'Seguimiento del curso de Bases de Datos.',
				},
				projects: {
					title: 'Proyecto Final',
				},
			},
			// COMENTAMOS GISCUS PARA QUE NO DE ERROR
			/*
			giscus: {
				repository: GISCUS_REPO,
				...
			},
			*/
		}),
	],
	// ELIMINAMOS EL ADAPTER DE NODE
});

export default config;
