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
        order: ['Foundation', 'Base', 'Components'],
      },
    },
  };


configure(require.context("../components", true, /\.stories\.js$/), module);