var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"gatsbyRemarkPlugins":[{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-images","id":"ad118ba9-6d24-5d7f-b41f-68637674ab91","name":"gatsby-remark-images","version":"6.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":"9000000","linkImagesToOriginal":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-responsive-iframe","id":"6574329a-ebe9-5750-89fa-d323731be96b","name":"gatsby-remark-responsive-iframe","version":"5.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-responsive-iframe/index.js","pluginOptions":{"plugins":[],"wrapperStyle":"margin-bottom: 1.07var(--line-length)"},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-prismjs","id":"96900835-4b61-53a8-8a41-f46b0b717fb0","name":"gatsby-remark-prismjs","version":"6.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-prismjs/index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-copy-linked-files","id":"cf104666-f93f-5e9d-9c2e-1bd9003e1e14","name":"gatsby-remark-copy-linked-files","version":"5.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-copy-linked-files/index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-smartypants","id":"d48194e5-b344-5f22-b93d-76045ee44e88","name":"gatsby-remark-smartypants","version":"5.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-smartypants/index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-autolink-headers","id":"b5c477d7-dc06-5968-826d-5de39bfc4368","name":"gatsby-remark-autolink-headers","version":"5.4.0","modulePath":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-autolink-headers/index.js","pluginOptions":{"plugins":[],"icon":false,"itemprop":"heading","maintainCase":false,"removeAccents":true,"elements":["h2","h3","h4"]},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials","commonmark":false},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"icon":false,"itemprop":"heading","maintainCase":false,"removeAccents":true,"elements":["h2","h3","h4"]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"429f78c1f3dc5d93dc42e43688e99546"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
