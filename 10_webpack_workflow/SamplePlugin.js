const chalk = require('chalk')

class SamplePlugin {
  apply(compiler) {
    var start = Date.now()
    var statsHooks = ['environment', 'entryOption', 'afterPlugins', 'compile']
    var statsAsyncHooks = [
      'beforeRun',
      'beforeCompile',
      'make',
      'afterCompile',
      'emit',
      'done',
    ]

    statsHooks.forEach((hookName) => {
      compiler.hooks[hookName].tap('Sample Plugin', () => {
        console.log(
          `Compiler Hook ${hookName}, Time: ${chalk.red(Date.now() - start)}ms`
        )
      })
    })

    statsAsyncHooks.forEach((hookName) => {
      compiler.hooks[hookName].tapAsync('Sample Plugin', (data, callback) => {
        setTimeout(() => {
          console.log(
            `Compiler Async Hook ${hookName}, Time: ${chalk.red(
              Date.now() - start
            )}ms`
          )
          callback()
        })
      })
    })

    compiler.hooks.compilation.tap('Sample Plugin', (compilation) => {
      var compilationStatsHooks = [
        'addEntry',
        'succeedEntry',
        'finishModules',
        'seal',
        'optimize',
        'optimizeAssets',
        'afterSeal',
      ]
      compilationStatsHooks.forEach((hookName) => {
        compilation.hooks[hookName].tap('Sample Plugin', () => {
          console.log(
            `Compilation Hook ${hookName}, Time: ${chalk.red(
              Date.now() - start
            )}ms`
          )
        })
      })

      compilation.hooks.buildModule.tap('Sample Plugin', (module) => {
        console.log(
          `Compilation Hook buildModule, module ${module
            .identifier()
            .substr(__dirname.length + 1)} Time: ${chalk.red(
            Date.now() - start
          )}ms`
        )
      })
    })
  }
}

module.exports = SamplePlugin
