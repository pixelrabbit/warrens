import card from "./card.html.twig";
import "./card.scss";
// import './block.js';

export default { 
  title: "Components/Card",
  argTypes: {
    eyebrow: {
      description: "Text before card heading",
      defaultValue: "",
      type: {
        name: "string"
      }
    },
    heading_element: {
      description: "level for card heading (h2, h3, etc.)",
      defaultValue: "h3",
      control: {
        type: "select",
        options: ["h2","h3","h4"]
      }
    },
    heading: {
      type: { name: 'string', required: false },
      defaultValue: "Card heading"
    },
    content: {
      description: "HTML content for the card",
      type: {
        name: "html",
        required: false,
      },
      defaultValue: "<p>This is the content for the card.</p>",
    },
    buttons: {
      description: "array of button objects (see atom/button)"
    },
    links: {
      description: "array of links objects (see atom/link)"
    }
  },
};

// import default args for buttons
import { button_default, button_secondary } from "../button/button.stories.js";
import { link_chevron } from "../link/link.stories.js";

export const card_default = card.bind({});
card_default.args = {};

export const card_with_buttons = card.bind({});
card_with_buttons.args = {
  buttons: [button_default.args, button_secondary.args],
};

export const card_with_links = card.bind({});
card_with_links.args = {
  links: [link_chevron.args, link_chevron.args],
};