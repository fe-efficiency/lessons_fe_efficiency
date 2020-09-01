const chalk = require('chalk')

const PluginName = 'WebpackTimingPlugin'

class WebpackTimingPlugin {
  apply(compiler) {
    const applyStart = Date.now()
    const moduleTimings = new Map()
    const getModulePath = (module) =>
      module.identifier().substr(__dirname.length + 1)

    compiler.hooks.compilation.tap(PluginName, (compilation, params) => {
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
          `${chalk.red(Date.now() - moduleStart)}ms`,
          `Total Timing: ${Date.now() - applyStart}ms\n`
        )
      })
    })
  }
}

module.exports = WebpackTimingPlugin
