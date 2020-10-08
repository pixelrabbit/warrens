import modal from "./modal.html.twig";
import "./modal.scss";
import './modal.js';

import {card_default} from  "../card/card.stories.js"

export default {
  title: "Components/Modal"
};

export const modal_default = modal.bind({});
modal_default.args = {
  variants:[],
  card: card_default.args
};

