import link from "./link.html.twig";
import "./link.scss";
// import './block.js';

export default {
  title: "Base/Link",
  argTypes: {
    target: {
      description: "target attribute for link",
      control: {
        type: "select",
        options: ["_self", "_blank"],
      },
    },
    icon: {
      description: "icon added to link",
      control: {
        type: "select",
        options: ["chevron", "modal", "new", "jump"],
      },
    },
  },
};

export const link_default = link.bind({});
link_default.args = {
  text: "This is link text",
  href: "http://www.google.com",
  target: "_self",
};

export const link_chevron = link.bind({});
link_chevron.args = {
  ...link_default.args,
  icon: "chevron",
};

export const link_modal = link.bind({});
link_modal.args = {
  ...link_default.args,
  icon: "modal",
};
