const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

jsdoc2md.render({ files: 'es/index.js' }).then((value) => {
  fs.writeFile('README.md', value, () => {})
})
