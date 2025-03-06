/* empty css                                     */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getCategoryBySlug, c as getArticles, $ as $$Layout } from '../../chunks/Layout_DMFPjCgk.mjs';
import { $ as $$NewsCard } from '../../chunks/NewsCard_DsoAgI8B.mjs';
import { $ as $$CategoryFilter } from '../../chunks/CategoryFilter_Bnd0bvIs.mjs';
import { $ as $$ViewToggle } from '../../chunks/ViewToggle_ico7wDiz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { category, error } = await getCategoryBySlug(slug || "");
  if (error || !category) {
    return Astro2.redirect("/404");
  }
  const { articles } = await getArticles({
    categorySlug: slug,
    limit: 12
  });
  [
    { name: "Categor\xEDas", href: "/" },
    { name: category.nombre }
  ];
  let initialViewMode = "grid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category.nombre, "description": category.descripcion, "data-astro-cid-nlmqd6up": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto instagram-category" data-astro-cid-nlmqd6up> <!-- Category Header --> <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6" data-astro-cid-nlmqd6up> <div class="flex items-center mb-4" data-astro-cid-nlmqd6up> <div class="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center" data-astro-cid-nlmqd6up> <span class="text-white text-2xl font-bold" data-astro-cid-nlmqd6up>${category.nombre.charAt(0).toUpperCase()}</span> </div> <div data-astro-cid-nlmqd6up> <h1 class="text-2xl font-bold text-gray-900 mb-1" data-astro-cid-nlmqd6up>${category.nombre}</h1> <div class="text-gray-500 text-sm flex items-center" data-astro-cid-nlmqd6up> <span class="mr-3" data-astro-cid-nlmqd6up>${articles.length} publicaciones</span> <button class="text-primary-600 font-medium" data-astro-cid-nlmqd6up>Seguir</button> </div> </div> </div> <p class="text-gray-700" data-astro-cid-nlmqd6up>${category.descripcion}</p> </div> <!-- Filter Toggle on Mobile --> <div class="flex justify-between items-center mb-6" data-astro-cid-nlmqd6up> ${renderComponent($$result2, "ViewToggle", $$ViewToggle, { "activeView": initialViewMode, "data-astro-cid-nlmqd6up": true })} <button id="showFilterBtn" class="flex items-center text-gray-600 md:hidden" data-astro-cid-nlmqd6up> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2" data-astro-cid-nlmqd6up> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" data-astro-cid-nlmqd6up></path> </svg>
Filtrar
</button> </div> <!-- Grid/List --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-nlmqd6up> <!-- Sidebar with filters (Desktop) --> <div class="hidden md:block md:col-span-1" data-astro-cid-nlmqd6up> <div class="sticky top-20" data-astro-cid-nlmqd6up> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "activeCategory": slug, "data-astro-cid-nlmqd6up": true })} </div> </div> <!-- Main content --> <div class="md:col-span-2" data-astro-cid-nlmqd6up> ${articles.length > 0 ? renderTemplate`<div id="articleContainer" class="grid-layout grid grid-cols-1 gap-6" data-astro-cid-nlmqd6up> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": initialViewMode, "data-astro-cid-nlmqd6up": true })}`)} </div>` : renderTemplate`<div class="instagram-card bg-white border border-gray-200 rounded-lg p-8 text-center" data-astro-cid-nlmqd6up> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-nlmqd6up> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-nlmqd6up></path> </svg> <h3 class="mt-2 text-lg font-medium text-gray-900" data-astro-cid-nlmqd6up>No hay artículos</h3> <p class="mt-1 text-gray-500" data-astro-cid-nlmqd6up>No hemos encontrado artículos en esta categoría.</p> </div>`} </div> </div> <!-- Mobile Filter Modal --> <div id="filterModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" data-astro-cid-nlmqd6up> <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-5 transform transition-transform duration-300 translate-y-full" id="filterContent" data-astro-cid-nlmqd6up> <div class="flex justify-between items-center mb-4" data-astro-cid-nlmqd6up> <h3 class="text-lg font-bold" data-astro-cid-nlmqd6up>Filtros</h3> <button id="closeFilterBtn" class="text-gray-500" data-astro-cid-nlmqd6up> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-astro-cid-nlmqd6up> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-nlmqd6up></path> </svg> </button> </div> <div data-astro-cid-nlmqd6up> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, { "activeCategory": slug, "data-astro-cid-nlmqd6up": true })} </div> <div class="mt-4 flex justify-end" data-astro-cid-nlmqd6up> <button id="applyFilterBtn" class="bg-primary-600 text-white px-4 py-2 rounded-lg" data-astro-cid-nlmqd6up>Aplicar</button> </div> </div> </div> </div> ` })}  `;
}, "/home/project/src/pages/categoria/[slug].astro", void 0);

const $$file = "/home/project/src/pages/categoria/[slug].astro";
const $$url = "/categoria/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
