export default { title: "Base/Button" };

import button from "./button.html.twig";
import "./button.scss";
// import './block.js';

export const button_default = button.bind({});
button_default.args = {
  text: "Primary button",
  href: "#"
};

export const button_secondary = button.bind({});
button_secondary.args = {
  ...button_default.args,
  modifiers: ["secondary"],
  text: "Secondary button",
};
