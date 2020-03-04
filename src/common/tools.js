import moment from 'moment'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
    if (!limit) { return documentToHtmlString(body); }
    return documentToHtmlString(body).slice(0, limit);
  }
}

export default tools;