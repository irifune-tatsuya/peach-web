import * as cheerio from 'cheerio';

export const renderToc = (body) => {
  const $ = cheerio.load(body);
  const headings = $('h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: $(data).text(),
    id: data.attribs.id,
    name: data.name,
  }));
  return toc;
};
