
import { forOwn } from 'lodash'

export default icons => {
  const map = []
  forOwn(icons, (el, name) => map.push({ el, name }))
  return map
}
