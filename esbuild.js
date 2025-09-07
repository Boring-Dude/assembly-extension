const esbuild = require("esbuild");

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

// Warn about unknown CLI flags
const knownArgs = new Set(['--production', '--watch']);
const unknownArgs = process.argv.filter(arg => arg.startsWith('--') && !knownArgs.has(arg));
if (unknownArgs.length) {
	console.warn(`[warn] Unknown CLI flags: ${unknownArgs.join(', ')}`);
}

/**
 * Problem matcher plugin for better watch logging
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = Object.freeze({
	name: 'esbuild-problem-matcher',
	setup(build) {
		build.onStart(() => {
			console.log('[watch] build started');
		});
		build.onEnd((result) => {
			result.errors.forEach(({ text, location }) => {
				console.error(`✘ [ERROR] ${text}`);
				if (location) {
					console.error(`    ${location.file}:${location.line}:${location.column}:`);
				}
			});
			console.log('[watch] build finished');
		});
	}
});

(async function secureBuild() {
	try {
		const ctx = await esbuild.context({
			entryPoints: ['src/extension.ts'],
			bundle: true,
			format: 'cjs',
			minify: production,
			sourcemap: !production,
			sourcesContent: false,
			platform: 'node',
			outfile: 'dist/extension.js',
			external: ['vscode'],
			logLevel: 'silent',
			plugins: [esbuildProblemMatcherPlugin],
		});

		if (watch) {
			await ctx.watch();
		} else {
			await ctx.rebuild();
			await ctx.dispose();
		}
	} catch (e) {
		console.error('[build error]', e);
		process.exit(1);
	}
})();
