import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

export default defineConfig({
	site: 'https://smonroyma.github.io',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Santiago Monroy', 
			openGraph: {
				home: {
					title: 'Presentación - Santiago Monroy',
					description: 'E-portafolio para la asignatura de Bases de Datos 1.',
				},
				blog: {
					title: 'Evidencias',
					description: 'Seguimiento del curso de Bases de Datos 1.',
				},
				projects: {
					title: 'Proyecto Final',
				},
			},
			giscus: undefined 
		}),
	],
});