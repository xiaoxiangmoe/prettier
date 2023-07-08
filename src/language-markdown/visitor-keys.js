/**
 * @type {import('@typescript-eslint/visitor-keys').VisitorKeys}
 */
const visitorKeys = {
  "front-matter": [],
  root: ["children"],
  paragraph: ["children"],
  sentence: ["children"],
  word: [],
  whitespace: [],
  emphasis: ["children"],
  strong: ["children"],
  delete: ["children"],
  inlineCode: [],
  wikiLink: [],
  link: ["children"],
  image: [],
  blockquote: ["children"],
  heading: ["children"],
  code: [],
  html: [],
  list: ["children"],
  thematicBreak: [],
  linkReference: ["children"],
  imageReference: [],
  definition: [],
  footnote: ["children"],
  footnoteReference: [],
  footnoteDefinition: ["children"],
  table: ["children"],
  tableCell: ["children"],
  break: [],
  liquidNode: [],
  import: [],
  export: [],
  esComment: [],
  jsx: [],
  math: [],
  inlineMath: [],
  tableRow: ["children"],
  listItem: ["children"],
  text: [],
};

export default visitorKeys;
