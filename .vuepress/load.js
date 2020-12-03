const frontmatter = require('@github-docs/frontmatter')

module.exports = function(source) {
    const { data, content, errors } = frontmatter(source)
    if (data.ad !== false && !content.endsWith('<Ads />')) {
        source += '\n<Ads />'
    }
    if (data.showComment !== false && !content.endsWith('<Utterances />')) {
        source += '\n<Utterances />'
    }
    return source
}
