import { contentfulSpaceId, contentfulAccessToken } from './config.js'
const contentful = require('contentful');

console.log(`contentfulAccessToken ${contentfulAccessToken}`)
console.log(`contentfulSpaceId ${contentfulSpaceId}`)

const client = contentful.createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
})

const ApiTasks = {
  getEntry(entry_id) {
    return client.getEntry(entry_id)
      .then((entry) => {
        return entry;
      });
  },
  getRecentEntries(type, limit) {
    return client.getEntries({
      limit,
    })
      .then((entries) => entries);
  }
}

export default ApiTasks;

export const ContentTasks = {
  getHomepageArticle() {
    return ApiTasks.getRecentEntries('articles', 1);
  },
  getGridArticles() {
    return ApiTasks.getRecentEntries('articles', 7);
  },
}