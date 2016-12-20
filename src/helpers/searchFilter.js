
import fuzzy from 'fuzzy'

export default (icons, query) => {
  if (!query) {
    return icons
  }

  const results = fuzzy.filter(query, icons, { extract: i => i.name })
  return results.map(i => i.original)
}
