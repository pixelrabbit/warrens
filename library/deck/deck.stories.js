import deck from "./deck.html.twig";
import "./deck.scss";

export default {
  title: "Pattern/Deck",
  argTypes: {
    eyebrow: {
      name: "eyebrow",
      description: "eyebrow for deck",
      type: "string",
      control: {
        type: "text",
      },
      defaultValue: "deck eyebrow",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "eyebrow" }, 
      },
    },
    heading_element: {
      name: "heading element",
      description: "level for deck heading",
      type: "string",
      control: {
        type: "select",
        options: ["h2", "h3", "h4", "p"],
      },
      defaultValue: "h2",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" }, 
      },
    },
    heading: {
      name: "heading",
      description: "text for deck heading",
      type: "string", 
      defaultValue: "Deck heading",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "null" }, 
      },
    },
    body: {
      name: "body",
      description: "HTML for deck body",
      type: "string", 
      defaultValue: "<p>Deck body, HTML goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet viverra mauris. Integer pellentesque libero libero, id posuere felis malesuada sed.</p>",
      table: {
        type: { summary: "html" },
        defaultValue: { summary: "null" }, 
      },
    },
    columns: {
      name: "columns",
      description: "number of columns for cards within deck",
      type: "number",
      defaultvalue: 3,
      control: {
        type: "select",
        options: [2, 3, 4],
      },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 3 }, 
      },
    },
  },
};

// import default args for buttons
import {
  card_default,
  card_links,
  card_buttons,
  card_outline,
} from "@library/card/card.stories.js";
// import { link_chevron } from "@library/link/link.stories.js";

export const deck_3col = deck.bind({});
deck_3col.args = {
  columns: 3,
  cards: [card_links.args, card_buttons.args, card_links.args],
};

export const deck_4col = deck.bind({});
deck_4col.args = {
  columns: 4,
  cards: [
    card_default.args,
    card_default.args,
    card_default.args,
    card_default.args,
  ],
};

export const deck_2col = deck.bind({});
deck_2col.args = {
  columns: 2,
  cards: [card_outline.args, card_outline.args],
};