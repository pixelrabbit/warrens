import type from "./typography.html.twig";
import "./typography.scss";
// import './block.js';

export default {
  title: "Base/Typography",
  argTypes: {
    lorem: {
      description: "Filler text",
      defaultValue:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat libero eos quas. Voluptas eos, accusantium sed dolorum, voluptates voluptatem eaque incidunt magnam fuga cumque quas doloremque expedita. Suscipit, ratione illum.",
      control: {
        type: "text",
      },
    },
    heading_text: {
      description: "heading text",
      defaultValue: "Heading",
      control: {
        type: "text",
      },
    },
    
  },
};

export const type_default = type.bind({});
// link_default.args = {
//   text: "Primary link",
//   href: "http://www.google.com",
//   target: "_self",
// };

// export const link_chevron = link.bind({});
// link_chevron.args = {
//   modifiers: ["secondary"],
//   text: "Secondary link",
// };
