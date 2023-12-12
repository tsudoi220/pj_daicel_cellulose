import type { AstroIntegration, AstroConfig } from 'astro'
import { writeFileSync, readFileSync } from 'fs'
import { globSync } from 'glob'

function replaceModuleDefer({ config }: { config?: AstroConfig }): AstroIntegration {
  return {
    name: 'module-defer',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        try {
          const filePaths = globSync(`${dir.pathname}**/*.html`)
          filePaths.forEach((filePath) => {
            const html = readFileSync(filePath, 'utf8')
            const result = html.replace(`script type="module"`, `script defer`)
            writeFileSync(filePath, result, 'utf8')
          })
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
}

export default function (): AstroIntegration {
  return {
    name: 'module-defer',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        updateConfig({
          // Pass the Astro config to the `astro:build:done` hook
          integrations: [replaceModuleDefer({ config })],
        })
      },
    },
  }
}
