import link from "./link.html.twig";
import "./link.scss";
// import './block.js';

export default {
  title: "Base/Link"
};

export const link_default = link.bind({});
link_default.args = {
  text: "Primary link",
  href: "http://www.google.com",
  target: "_self",
};

export const link_chevron = link.bind({});
link_chevron.args = {
  modifiers: ["chevron"],
  text: "Chevron link",
};
