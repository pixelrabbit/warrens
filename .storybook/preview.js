import { configure, addDecorator } from "@storybook/html";
import Twig from "twig";
import twigDrupal from "twig-drupal-filters";
import bemExtension from "./bemExtension";

// Add the filters to Twig instance.
twigDrupal(Twig);
Twig.extendFunction("bem", bemExtension);


export const parameters = {
    options: {
      storySort: {
        order: ['Foundation', 'Base', 'Components','Patterns'],
      },
    },
    // controls formatting in HTML tab
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: true,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
  };


configure(require.context("../library", true, /\.stories\.js$/), module);