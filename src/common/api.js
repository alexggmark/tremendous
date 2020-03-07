import { contentfulSpaceId, contentfulAccessToken } from './config.js'
const contentful = require('contentful');

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
      'content_type': type,
    })
      .then((entries) => entries);
  },
}

export default ApiTasks;

export const ContentTasks = {
  getHomepageArticle() {
    return ApiTasks.getRecentEntries('articles', 1);
  },
  getArticles(limit) {
    return ApiTasks.getRecentEntries('articles', limit);
  },
  getArticleById(id) {
    return ApiTasks.getEntry(id);
  }
}