import { configure, addDecorator } from "@storybook/html";
import Twig from "twig";
import twigDrupal from "twig-drupal-filters";
import bemExtension from "./bemExtension";

// Add the filters to Twig instance.
twigDrupal(Twig);
Twig.extendFunction("bem", bemExtension);

configure(require.context("../library", true, /\.stories\.js$/), module);

export const parameters = {
  controls: { expanded: true },
  storySort: {
    order: ["Foundation", "Base", "Component", "Pattern"],
  }
};
