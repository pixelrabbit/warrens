import card from "./card.html.twig";
import "./card.scss";
// import './block.js';

export default {
  title: "Components/Card",
  argTypes: {
    style: {
      description: "card style",
      control: {
        type: "select",
        options: ["default","no_padding", "outline", "inverse"],
      },
    },
    eyebrow: {
      description: "Text before card heading",
      type: {
        name: "string",
      },
    },
    heading_element: {
      description: "level for card heading (h2, h3, etc.)",
      control: {
        type: "select",
        options: ["h2", "h3", "h4", "p"],
      },
    },
    heading: {
      type: { name: "string", required: false },
    },
    content: {
      description: "HTML content for the card",
      type: {
        name: "html",
        required: false,
      },
    },
    buttons: {
      description: "array of button objects (see atom/button)",
      control: {
        type: "object"
      }
    },
    links: {
      description: "array of links objects (see atom/link)",
    },
  },
  
};

// import default args for buttons
import { button_default, button_secondary } from "@library/button/button.stories.js";
import { link_chevron } from "@library/link/link.stories.js";

export const card_default = card.bind({});
card_default.args = {
  palette: "default",
  style: "default",
  eyebrow: null,
  heading_element: "h3",
  heading: "Card heading",
  content: "<p>HTML goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet viverra mauris. Integer pellentesque libero libero, id posuere felis malesuada sed.</p>",
};

export const card_buttons = card.bind({});
card_buttons.args = {
  ...card_default.args,
  buttons: [button_default.args, button_secondary.args],
};

export const card_links = card.bind({});
card_links.args = {
  ...card_default.args,
  links: [link_chevron.args, link_chevron.args],
};

// card with buttons and links
export const card_buttons_links = card.bind({});
card_buttons_links.args = {
  ...card_default.args,
  buttons: [button_default.args, button_secondary.args],
  links: [link_chevron.args, link_chevron.args],
};

export const card_outline = card.bind({});
card_outline.args = {
  ...card_default.args,
  style: "outline",
};