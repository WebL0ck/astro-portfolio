import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    partytown(),
    sitemap(),
    prefetch(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
