import "~/styles/foundation/index.scss";
//- import "~/styles/components/index.scss";
import "./preview.scss";
import "~/ts/cellulose/app.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};