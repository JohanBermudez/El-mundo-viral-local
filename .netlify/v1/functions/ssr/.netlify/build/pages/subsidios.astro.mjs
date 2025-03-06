/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getCategoryBySlug, c as getArticles, $ as $$Layout } from '../chunks/Layout_DMFPjCgk.mjs';
import { $ as $$NewsCard } from '../chunks/NewsCard_DsoAgI8B.mjs';
import { $ as $$ViewToggle } from '../chunks/ViewToggle_ico7wDiz.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Subsidios = createComponent(async ($$result, $$props, $$slots) => {
  const { category } = await getCategoryBySlug("subsidios");
  const { articles } = await getArticles({
    categorySlug: "subsidios",
    limit: 12
  });
  let initialViewMode = "grid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Subsidios", "description": "Informaci\xF3n actualizada sobre subsidios, bonos y beneficios estatales en El Mundo Viral" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900 mb-2">Subsidios</h1> <p class="text-gray-600">
Mantente informado sobre los últimos subsidios, bonos y beneficios estatales disponibles.
</p> </div> <div class="flex flex-col gap-8"> <!-- Information card --> <div class="bg-blue-50 border border-blue-200 rounded-lg p-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-3"> <h3 class="text-lg font-medium text-blue-800">¿Qué es un subsidio?</h3> <p class="mt-1 text-blue-700">
Un subsidio es una ayuda económica que el Estado otorga a determinados grupos de personas 
            o actividades con fines sociales. Conoce aquí los subsidios disponibles y cómo solicitarlos.
</p> </div> </div> </div> <!-- Main content --> <div> <div class="flex justify-between items-center mb-6"> <span class="text-gray-600">${articles.length} artículos</span> ${renderComponent($$result2, "ViewToggle", $$ViewToggle, { "activeView": initialViewMode })} </div> ${articles.length > 0 ? renderTemplate`<div id="articleContainer" class="grid-layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": initialViewMode })}`)} </div>` : renderTemplate`<div class="bg-white rounded-lg shadow-md p-8 text-center"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="mt-2 text-lg font-medium text-gray-900">No hay artículos sobre subsidios</h3> <p class="mt-1 text-gray-500">Pronto publicaremos información sobre subsidios y beneficios.</p> </div>`} </div> </div> ` })} `;
}, "/home/project/src/pages/subsidios.astro", void 0);

const $$file = "/home/project/src/pages/subsidios.astro";
const $$url = "/subsidios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subsidios,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
