import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
	site: 'https://smonroyma.github.io',
	output: 'static', // GitHub Pages necesita esto
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Santiago Monroy Manrique 🥷',
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
		}),
	],
});
