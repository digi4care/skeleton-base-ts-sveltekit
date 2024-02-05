import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import houdini from 'houdini/vite';
import { readFileSync } from 'fs';

/**
 * Image enhancmend tools
 */
import viteImagemin from '@vheemstra/vite-plugin-imagemin';

// The minifiers you want to use:
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

// The makers you want to use:
import imageminWebp from 'imagemin-webp';
//@ts-expect-error I have no types
import imageminGif2webp from 'imagemin-gif2webp';
import imageminAvifenc from '@vheemstra/imagemin-avifenc';

export default defineConfig({
	plugins: [
		houdini(),
		sveltekit(),
		viteImagemin({
			plugins: {
				jpg: imageminMozjpeg({ quality: 82 }),
				gif: imageminGifsicle({ optimizationLevel: 2 }),
				png: imageminPngquant({ quality: [0.8, 1] }),
				svg: imageminSvgo()
			},
			makeWebp: {
				plugins: {
					jpg: imageminWebp({ quality: 82 }),
					png: imageminWebp({ quality: 82 }),
					gif: imageminGif2webp({ quality: 82 }),
					heif: imageminAvifenc({ jobs: 'all' })
				}
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
