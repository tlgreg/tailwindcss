import fs from 'fs'
import postcss from 'postcss'
import resolve from 'resolve'

export default function() {
  return function({ addBase }) {
    const normalizeStyles = postcss.parse(fs.readFileSync(resolve.sync('normalize.css'), 'utf8'))
    const preflightStyles = postcss.parse(fs.readFileSync(`${__dirname}/css/preflight.css`, 'utf8'))
    addBase([...normalizeStyles.nodes, ...preflightStyles.nodes])
  }
}
