const chalk = require('chalk')

const PluginName = 'WebpackTimingPlugin'

class WebpackTimingPlugin {
  apply(compiler) {
    const applyStart = Date.now()
    const moduleTimings = new Map()
    const getModulePath = (module) =>
      module.identifier().substr(__dirname.length + 1)

    //构建前准备时间
    compiler.hooks.compile.tap(PluginName, () => {
      console.log(
        `Before Compile Costs: ${chalk.green(Date.now() - applyStart)}ms, `
      )
    })

    compiler.hooks.compilation.tap(PluginName, (compilation, params) => {
      //统计编译模块时间
      compilation.hooks.buildModule.tap(PluginName, (module) => {
        const modulePath = getModulePath(module)
        moduleTimings[modulePath] = Date.now()
      })

      compilation.hooks.succeedModule.tap(PluginName, (module) => {
        const modulePath = getModulePath(module)
        const moduleStart = moduleTimings[modulePath]
        console.log(
          'Build Module',
          modulePath,
          `${chalk.red(Date.now() - moduleStart)}ms,`,
          `Total Timing: ${Date.now() - applyStart}ms\n`
        )
      })

      const lifeHooks = [
        { name: 'createChunks', start: 'beforeChunks', end: 'afterChunks' },
        {
          name: 'chunkAssets',
          start: 'beforeChunkAssets',
          end: 'additionalAssets',
        },
        {
          name: 'optimizeChunkAssets',
          start: 'optimizeChunkAssets',
          end: 'afterOptimizeChunkAssets',
        },
      ]

      lifeHooks.forEach(({ name, start, end }) => {
        let startTime
        if (!compilation.hooks[start]) {
          console.log('no hooks', start)
        }
        if (!compilation.hooks[end]) {
          console.log('no hooks', end)
        }
        compilation.hooks[start].tap(PluginName, () => {
          startTime = Date.now()
        })
        compilation.hooks[end].tap(PluginName, () => {
          const cost = Date.now() - startTime
          // if (cost < 10) {
          //   return
          // }
          console.log(
            `[Step ${name}] costs: ${chalk.red(cost)}ms, `,
            `build duration: ${Date.now() - applyStart}ms`
          )
        })
      })
    })

    //统计生成产物时间
    let afterCompileStart
    compiler.hooks.afterCompile.tap(PluginName, () => {
      afterCompileStart = Date.now()
    })
    compiler.hooks.done.tap(PluginName, () => {
      console.log(
        'after Compile Time',
        `${chalk.magentaBright(Date.now() - afterCompileStart)}ms, `,
        `build duration: ${Date.now() - applyStart}ms`
      )
    })
  }
}

module.exports = WebpackTimingPlugin
