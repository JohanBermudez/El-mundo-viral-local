import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { e as getCategories } from './Layout_DMFPjCgk.mjs';

const $$Astro = createAstro();
const $$CategoryFilter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryFilter;
  const { activeCategory = null } = Astro2.props;
  let categories = [];
  try {
    const response = await getCategories();
    categories = response.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md p-4 mb-6"> <h3 class="font-medium text-gray-700 mb-3">Filtrar por categoría</h3> <div class="flex flex-wrap gap-2"> <a${addAttribute(activeCategory ? "/" : "#", "href")}${addAttribute(`px-3 py-1 rounded-full text-sm ${!activeCategory ? "bg-primary-100 text-primary-800 font-medium" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")}>
Todas
</a> ${categories.map((category) => renderTemplate`<a${addAttribute(activeCategory === category.slug ? "/" : `/categoria/${category.slug}`, "href")}${addAttribute(`px-3 py-1 rounded-full text-sm ${activeCategory === category.slug ? "bg-primary-100 text-primary-800 font-medium" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")}> ${category.nombre} </a>`)} </div> </div>`;
}, "/home/project/src/components/CategoryFilter.astro", void 0);

export { $$CategoryFilter as $ };
