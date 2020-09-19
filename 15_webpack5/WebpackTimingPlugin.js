const chalk = require('chalk')

const PluginName = 'WebpackTimingPlugin'

class WebpackTimingPlugin {
  apply(compiler) {
    let applyStart
    let moduleCount = 0
    const moduleTimings = new Map()
    const getModulePath = (module) =>
      module.identifier().replace(new RegExp(__dirname, 'g'), '')

    //构建前准备时间
    compiler.hooks.beforeCompile.tap(PluginName, () => {
      applyStart = Date.now()
    })
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
          ++moduleCount,
          modulePath,
          `${chalk.red(Date.now() - moduleStart)}ms,`,
          `Total Timing: ${Date.now() - applyStart}ms\n`
        )
      })

      //统计优化打包时间
      const lifeHooks = [
        { name: 'createChunks', start: 'beforeChunks', end: 'afterChunks' },
        {
          name: 'chunkAssets',
          start: 'beforeChunkAssets',
          end: 'additionalAssets',
        },
        {
          name: 'processAssets',
          start: 'processAssets',
          end: 'afterProcessAssets',
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
        compilation.hooks[end].tap(PluginName, (data) => {
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

      compilation.hooks.rebuildModule.tap(PluginName, (module) => {
        console.log(
          `[Step Rebuild Module] module.name`,
          `build duration: ${Date.now() - applyStart}ms`
        )
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
      moduleCount = 0
    })
    //跟踪读取cache的过程
    // compiler.cache.hooks.get.tap(PluginName, (identifier) => {
    //   console.log('get cache', identifier)
    // })
  }
}

module.exports = WebpackTimingPlugin
