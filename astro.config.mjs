// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://fastapi.pyquickst.art",
  integrations: [
    starlight({
      title: "FastAPI QuickStart",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Your First API",
          link: "curriculum/your_first_api",
        },
        {
          label: "Data Validation",
          link: "curriculum/data_in_fastapi",
        },
        {
          label: "Handling Complex Data",
          link: "curriculum/handling_complex_data",
        },
      ],
    }),
  ],
});
