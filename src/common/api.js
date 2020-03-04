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
    })
      .then((entries) => entries);
  },
  getEntryByNumber(type, number) {
    return client.getEntries({
      skip: number,
      limit: 1
    })
      .then((entry) => {
        return entry;
      });
  }
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