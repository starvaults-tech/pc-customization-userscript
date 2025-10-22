// build.mjs
import esbuild from 'esbuild';
import { minify } from 'csso';
import fs from 'fs/promises';
import path from 'path';

// 壓縮 .css，轉成「已 minify 的字串」輸出
const cssToMinifiedText = {
    name: 'css-to-minified-text',
    setup(build) {
        build.onLoad({ filter: /\.css$/ }, async (args) => {
            const raw = await fs.readFile(args.path, 'utf8');
            const minified = minify(raw).css; // 只在 build 時做，不會打進 bundle
            const contents = `export default ${JSON.stringify(minified)};`;
            return { contents, loader: 'js', resolveDir: path.dirname(args.path) };
        });
    },
};

// 這裡可以抽成共用設定
const options = {
    entryPoints: ['main.js'],
    bundle: true,
    minify: true,
    outfile: 'main.min.js',
    plugins: [cssToMinifiedText],
    logLevel: 'info',
};

const mode = process.argv[2] ?? 'build';

if (mode === 'watch') {
    // ✅ 新 API：用 context + watch()
    const ctx = await esbuild.context(options);

    // 想在每次 rebuild 後印檔案大小可用 onEnd hook（簡單示例）
    ctx.onEnd = async (res) => {
        if (res.errors?.length) return;
        try {
            const { size } = await fs.stat('dist/main.min.js');
            console.log(`✅ rebuild succeeded — dist/main.min.js ${ (size/1024).toFixed(1) } KiB`);
        } catch {}
    };

    await ctx.watch();
    console.log('👀 Watching for changes… (Ctrl+C 退出)');
} else {
    // 單次 build
    await esbuild.build(options);
    const { size } = await fs.stat('dist/main.min.js');
    console.log(`✅ build done — dist/main.min.js ${ (size/1024).toFixed(1) } KiB`);
}
