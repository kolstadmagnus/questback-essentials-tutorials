
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/src/pages/index.js")),
  "component---src-pages-reports-js": preferDefault(require("/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/src/pages/reports.js")),
  "component---src-templates-post-template-js": preferDefault(require("/Users/magnuskolstad/web-development/gatsby/questback-essentials-tutorials/src/templates/post-template.js"))
}

