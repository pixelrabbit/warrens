import palette from "./palette.html.twig";
import "./palette.scss";
// import './block.js';

export default {
  title: "Foundation/Palette",
  argTypes: {
    palette: {
      description: "color palettes",
      defaultValue: "default",
      control: {
        type: "select",
        options: ["default", "outline", "dark", "gray"],
      },
    },
  },
};

// import default args for buttons
// import { button_default, button_secondary } from "@components/button/button.stories.js";
// import { link_chevron } from "@components/link/link.stories.js";

export const palette_default = palette.bind({});
palette_default.args = {
  palette: "default",
}
