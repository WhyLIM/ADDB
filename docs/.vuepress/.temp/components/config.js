import { hasGlobalComponent } from "D:/Study/Project/GDG/ADDB/ADDB/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_6zcdpyvdpefkbtd3ygsarzbbuu/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "D:/Study/Project/GDG/ADDB/ADDB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_mzodxt4nmadoaqmbu7yznsin7e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/Study/Project/GDG/ADDB/ADDB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_mzodxt4nmadoaqmbu7yznsin7e/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/Study/Project/GDG/ADDB/ADDB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_mzodxt4nmadoaqmbu7yznsin7e/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
