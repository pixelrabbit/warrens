import card from "./card.html.twig";
import "./card.scss";
// import './block.js';

export default {
  title: "Components/Card",
  argTypes: {
    palette: {
      description: "color palette",
      control: {
        type: "select",
        options: ["default", "outline", "dark", "gray"],
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
import { button_default, button_secondary } from "@components/button/button.stories.js";
import { link_chevron } from "@components/link/link.stories.js";

export const card_default = card.bind({});
card_default.args = {
  palette: "default",
  eyebrow: null,
  heading_element: "h3",
  heading: "Card heading",
  content: "<p>HTML goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet viverra mauris. Integer pellentesque libero libero, id posuere felis malesuada sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ante at quam laoreet pulvinar.</p>",
};

export const card_with_buttons = card.bind({});
card_with_buttons.args = {
  ...card_default.args,
  buttons: [button_default.args, button_secondary.args],
};

export const card_with_links = card.bind({});
card_with_links.args = {
  ...card_default.args,
  links: [link_chevron.args, link_chevron.args],
};
