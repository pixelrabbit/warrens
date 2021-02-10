import banner from "./banner.html.twig";
import "./banner.scss";

import {button_default, button_secondary} from  "../button/button.stories.js"

export default {
  title: "Component/Banner",
  argTypes: {
    eyebrow: {
      description: "Text before banner heading",
      type: {
        name: "string",
      },
    },
    heading_element: {
      description: "level for deck heading (h2, h3, etc.)",
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "p"],
      },
    },
    heading: {
      type: { name: "string", required: false },
    },
    background_image: {
      description: "Background image for banner",
      type: {
        name: "string",
      },
    },
    background_size: {
      control: {
        type:"select",
        options: ["auto","cover","contain"]
      }
    },
    background_position: {
      control: {
        type:"select",
        options: ["left top","center top","right top","left center","center center","right center","left bottom","center bottom","right bottom"] 
      }
    }
  }
};

export const banner_default = banner.bind({});
banner_default.args = {
  eyebrow: null,
  heading_element: "h1",
  heading: "This is a banner heading",
  content: "This is content for the banner.  It is an example only.",
  buttons: [button_default.args, button_secondary.args],
  background_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/800px-Oryctolagus_cuniculus_Rcdo.jpg",
  background_size: "auto",
  background_position: "center center"
};

