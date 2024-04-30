import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    tailwind(),
  ],
});
