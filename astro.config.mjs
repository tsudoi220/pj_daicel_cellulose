import { defineConfig } from 'astro/config'
import { dirname, resolve, posix } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import react from '@astrojs/react'
import compress from 'astro-compress'
import relativeLinks from './integrations/astro-relative-links'
import replaceModuleDefer from './integrations/astro-module-defer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const baseDir = 'cellulose/'
const srcRoot = './src'
const outCssDir = baseDir + 'css/'
const outJsDir = baseDir + 'js/'
const envDir = './env' //rootから見た相対パス
const openPage = baseDir + 'pagelist.html'
const env = dotenv.config({
  path: `./env/.env.${process.env.NODE_ENV}`,
})
const rootDir = env.parsed.ROOT_DIR ? env.parsed.ROOT_DIR : ''
const outputRoot =
  process.env.NODE_ENV === 'production'
    ? 'htdocs/' + rootDir
    : 'htdocs_' + process.env.NODE_ENV + '/' + rootDir //出力ディレクトリ

const IS_RELATIVE = false // 相対パス設定にするかどうか
const IMG_DIR = `${IS_RELATIVE ? '..' : '/' + baseDir}/images/` // 画像の相対パス設定
const SCSS_VAR_IMG_DIR = `$img-dir: "${IMG_DIR}";` // SCSS変数

const config = defineConfig({
  outDir: outputRoot,
  // integrations: [react(), replaceModuleDefer(), compress({
  //   html: false,
  // })],
  integrations: [react(), replaceModuleDefer()],
  server: {
    host: true,
    open: openPage,
  },
  vite: {
    envDir: envDir,
    resolve: {
      alias: {
        '~': resolve(__dirname, srcRoot),
      },
    },
    build: {
      polyfillModulePreload: false,
      cssCodeSplit: false, // CSSファイルを1つにまとめる
      rollupOptions: {
        output: {
          //- entryFileNames: "js/[name].js",
          entryFileNames: (assetInfo) => {
            const path = assetInfo.facadeModuleId ? posix.parse(assetInfo.facadeModuleId) : ''
            if (path.name === 'hoisted') {
              return outJsDir + `main.js`
            }
            return outJsDir + `[name].js`
          },
          assetFileNames: (assetInfo) => {
            const path = assetInfo.name ? posix.parse(assetInfo.name) : ''
            if (path) {
              switch (path.ext) {
                case '.css':
                  console.log('assetFileNames', path)
                  //- return outCssDir + "styles.[ext]";
                  return outCssDir + `styles.[ext]`
                default:
                  return `[name].[ext]`
              }
            }
            return `[name].[ext]`
          },
        },
      },
      // minify: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: SCSS_VAR_IMG_DIR, // SCSSファイルに変数を渡す
        },
      },
    },
    server: {
      host: true,
      open: openPage,
    },
  },
  build: {
    format: 'directory',
  },
})

if (IS_RELATIVE) {
  config.integrations.push(relativeLinks())
}

export default config
