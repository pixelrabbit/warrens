import deck from "./deck.html.twig";
import "./deck.scss";

export default {
  title: "Pattern/Deck",
  argTypes: {
    eyebrow: {
      description: "Text before deck heading",
      type: {
        name: "string",
      },
    },
    heading_element: {
      description: "level for deck heading (h2, h3, etc.)",
      control: {
        type: "select",
        options: ["h2", "h3", "h4", "p"],
      },
    },
    heading: {
      type: { name: "string", required: false },
    },
    columns: {
      control: {
        type: "select",
        options: [2, 3, 4],
      },
    }
  }
};

// import default args for buttons
import { card_default, card_links, card_buttons, card_outline } from "@library/card/card.stories.js";
// import { link_chevron } from "@library/link/link.stories.js";

export const deck_3col = deck.bind({});
deck_3col.args = {
  eyebrow: "Deck Eyebrow",
  heading_element: "h2",
  heading: "Deck heading",
  content: "<p>HTML goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet viverra mauris. Integer pellentesque libero libero, id posuere felis malesuada sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ante at quam laoreet pulvinar.</p>",
  columns: 3,
  cards: [card_links.args, card_buttons.args, card_links.args] 
};

export const deck_4col = deck.bind({});
deck_4col.args = {
  ...deck_3col.args,
  columns: 4,
  cards: [card_default.args, card_default.args, card_default.args, card_default.args]
};

export const deck_2col = deck.bind({});
deck_2col.args = {
  ...deck_3col.args,
  columns: 2,
  cards: [card_outline.args, card_outline.args]
};

// export const card_with_links = card.bind({});
// card_with_links.args = {
//   ...card_default.args,
//   links: [link_chevron.args, link_chevron.args],
// };

// // card with buttons and links
// export const card_with_buttons_links = card.bind({});
// card_with_buttons_links.args = {
//   ...card_default.args,
//   buttons: [button_default.args, button_secondary.args],
//   links: [link_chevron.args, link_chevron.args],
// };