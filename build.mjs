// build.mjs
import esbuild from 'esbuild';
import { minify } from 'csso';
import fs from 'fs/promises';
import path from 'path';

async function getPathSize(targetPath) {
    const stat = await fs.stat(targetPath);
    if (stat.isFile()) return stat.size;
    if (!stat.isDirectory()) return 0;

    const entries = await fs.readdir(targetPath);
    const sizes = await Promise.all(
        entries.map((entry) => getPathSize(path.join(targetPath, entry)))
    );
    return sizes.reduce((sum, n) => sum + n, 0);
}

const cssToMinifiedText = {
    name: 'css-to-minified-text',
    setup(build) {
        build.onLoad({ filter: /\.css$/ }, async (args) => {
            const raw = await fs.readFile(args.path, 'utf8');
            const minified = minify(raw).css;
            const contents = `export default ${JSON.stringify(minified)};`;
            return { contents, loader: 'js', resolveDir: path.dirname(args.path) };
        });
    },
};

const reportOutputSize = {
    name: 'report-output-size',
    setup(build) {
        build.onEnd(async (res) => {
            if (res.errors?.length) return;
            try {
                const outFile = build.initialOptions.outfile;
                if (!outFile) return;
                const sourceSize = (await getPathSize('main.js')) + (await getPathSize('src'));
                const { size } = await fs.stat(outFile);
                const ratio = sourceSize > 0 ? ((1 - size / sourceSize) * 100) : 0;
                const outSizeKB = (size / 1024).toFixed(1);
                const sourceSizeKB = (sourceSize / 1024).toFixed(1);
                console.log(`\x1b[37m[\x1b[32mwatch\x1b[0m\x1b[37m] build \x1b[39m${outFile}\x1b[37m done - compressed ${ratio.toFixed(1)}% (${sourceSizeKB}kB → ${outSizeKB}kB)\x1b[0m`);
            } catch {}
        });
    },
};

const options = {
    entryPoints: ['main.js'],
    bundle: true,
    minify: true,
    outfile: 'main.min.js',
    plugins: [cssToMinifiedText, reportOutputSize],
    logLevel: 'warning',
};

const mode = process.argv[2] ?? 'build';

if (mode === 'watch') {
    const ctx = await esbuild.context(options);

    await ctx.watch();
    console.log('👀 Watching for changes… (Ctrl+C 退出)');
} else {
    await esbuild.build(options);
}
