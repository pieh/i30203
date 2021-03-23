let sourceNodesCounter = 0

exports.sourceNodes = ({ actions }) => {
  // I actually don't do anything other than keeping track which run it is
  sourceNodesCounter++
}

exports.createPages = async ({ actions, graphql }) => {
  const page = {
    path: `/test/`,
    component: require.resolve(`./src/pages/index.js`),
    context: {
      wat: true,
    },
  }
  if (sourceNodesCounter <= 1) {
    // only add this field in initial run
    page.context.__wpGatsbyNodeModified = `wat`
  }
  actions.createPage(page)
}
