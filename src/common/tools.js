import moment from 'moment'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const htmlRenderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return `
        <img class="contentful__embedded-image" src="${node.data.target.fields.file.url}">
      `
    }
  },
  renderMark: {
    [MARKS.CODE]: (node) => {
      return `<pre class="contentful__code-block"><code>${node}</code></pre>`
    }
  }
}

const tools = {
  processDate(date) {
    const processedDate = date.slice(0, 10);
    return moment(processedDate).format('Do MMMM YYYY');
  },
  truncateString(string, limit) {
    if (string.length <= limit || !limit) { return string; }
    const newStr = string.slice(0, limit);
    const splitStr = newStr.split(' ');
    const joinStr = splitStr.slice(0, splitStr.length - 1).join(' ');
    return `${joinStr}...`;
  },
  processRichText(body, limit) {
    if (!limit) { return documentToHtmlString(body, htmlRenderOptions); }

    return documentToHtmlString(body, htmlRenderOptions);
  }
}

export default tools;

export const articleDataBuilder = {
  contentType() {
    if (!this.data.sys) { return null; }
    return this.data.sys.contentType.sys.id;
  },
  contentCategory() {
    if (!this.data.fields) { return null; }
    return this.data.fields.category;
  },
  contentTitle() {
    if (!this.data.fields) { return null; }
    return this.data.fields.title;
  },
  contentTitleTruncated() {
    if (!this.data.fields) { return null; }
    return tools.truncateString(this.data.fields.title, 70);
  },
  contentDate() {
    if (!this.data.sys) { return null; }
    return tools.processDate(this.data.sys.createdAt);
  },
  contentImage() {
    if (!this.data.fields) { return null; }
    return this.data.fields.image.fields.file.url;
  },
  contentText() {
    if (!this.data.fields) { return null; }
    return tools.processRichText(this.data.fields.body);
  },
  contentTextTruncated() {
    if (!this.data.fields) { return null; }
    return tools.processRichText(this.data.fields.body, 300);
  },
  contentEntryId() {
    if (!this.data.sys) { return null; }
    return this.data.sys.id;
  }
}