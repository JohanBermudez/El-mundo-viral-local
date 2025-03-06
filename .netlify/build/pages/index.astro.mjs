/* empty css                                  */
import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, d as renderComponent, F as Fragment } from '../chunks/astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as getArticles, d as getRecentArticles, $ as $$Layout } from '../chunks/Layout_DMFPjCgk.mjs';
import { $ as $$NewsCard } from '../chunks/NewsCard_DsoAgI8B.mjs';
import { $ as $$ViewToggle } from '../chunks/ViewToggle_ico7wDiz.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$DemoContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DemoContent;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center py-12 px-4 text-center"> <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"> <h2 class="text-2xl font-bold text-gray-900 mb-4">Bienvenido a El Mundo Viral</h2> <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left"> <div class="flex"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-3"> <p class="text-sm text-blue-700">
Este es un demo funcional de El Mundo Viral, un portal de noticias moderno desarrollado con Astro y Supabase.
</p> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <!-- Demo Card 1 --> <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"> <img src="https://source.unsplash.com/random/800x450?news" alt="Sample News" class="w-full h-48 object-cover"> <div class="p-4"> <span class="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full mb-2">Destacado</span> <h3 class="text-lg font-bold mb-2">Últimas noticias tecnológicas de 2025</h3> <p class="text-gray-600 text-sm mb-3">Descubre las innovaciones tecnológicas que están cambiando el mundo este año.</p> <div class="flex justify-between items-center text-xs text-gray-500"> <span>Hace 2 horas</span> <button class="text-primary-600 font-medium">Leer más</button> </div> </div> </div> <!-- Demo Card 2 --> <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"> <img src="https://source.unsplash.com/random/800x450?economy" alt="Sample Economy News" class="w-full h-48 object-cover"> <div class="p-4"> <span class="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">Tendencia</span> <h3 class="text-lg font-bold mb-2">Economía global muestra signos de recuperación</h3> <p class="text-gray-600 text-sm mb-3">Los indicadores económicos muestran una tendencia positiva en los mercados globales.</p> <div class="flex justify-between items-center text-xs text-gray-500"> <span>Hace 5 horas</span> <button class="text-primary-600 font-medium">Leer más</button> </div> </div> </div> </div> <div class="border-t border-gray-200 pt-6 text-center"> <p class="text-gray-700 mb-4">
Esta es una versión de demostración. Para ver el portal completo con todas las funcionalidades, es necesario configurar Supabase.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a href="https://github.com/yourusername/el-mundo-viral" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path> </svg>
Ver código fuente
</a> <a href="https://docs.astro.build" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path> </svg>
Documentación
</a> </div> </div> </div> </div>`;
}, "/home/project/src/components/DemoContent.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let featuredArticles = [];
  let latestArticles = [];
  let trendingArticles = [];
  let recentArticles = [];
  let hasError = false;
  try {
    console.log("Fetching homepage articles");
    const featuredResponse = await getArticles({
      featured: true,
      limit: 3
    });
    featuredArticles = featuredResponse.articles || [];
    console.log(`Found ${featuredArticles.length} featured articles`);
    const trendingResponse = await getArticles({
      trending: true,
      limit: 2
    });
    trendingArticles = trendingResponse.articles || [];
    console.log(`Found ${trendingArticles.length} trending articles`);
    const latestResponse = await getArticles({
      limit: 6
    });
    latestArticles = latestResponse.articles || [];
    console.log(`Found ${latestArticles.length} latest articles`);
    const recentResponse = await getRecentArticles(2, 4);
    recentArticles = recentResponse.articles || [];
    console.log(`Found ${recentArticles.length} recent articles`);
  } catch (error) {
    console.error("Error fetching articles for homepage:", error);
    hasError = true;
  }
  let initialViewMode = "grid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate`${hasError || latestArticles.length === 0 ? renderTemplate`${renderComponent($$result2, "DemoContent", $$DemoContent, {})}` : renderTemplate`${maybeRenderHead()}<div class="container max-w-6xl mx-auto px-4"> <!-- Welcome Section and Category Pills for Mobile --> <div class="bg-white rounded-lg shadow-sm p-5 mb-6"> <h2 class="text-xl font-bold mb-2">Bienvenido a El Mundo Viral</h2> <p class="text-sm text-gray-700 mb-4">Tu portal de noticias moderno con las últimas actualizaciones organizadas por relevancia:</p> <!-- Compact Category Cards for Mobile --> <div class="grid grid-cols-2 gap-2 md:hidden"> <a href="/destacados" class="flex items-center justify-center px-3 py-2 rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition text-sm"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path> </svg>
Destacados
</a> <a href="/tendencias" class="flex items-center justify-center px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition text-sm"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path> </svg>
Tendencias
</a> <a href="/virales" class="flex items-center justify-center px-3 py-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition text-sm"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg>
Virales
</a> <a href="/ultima-hora" class="flex items-center justify-center px-3 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition text-sm"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Última hora
</a> </div> <!-- Horizontal Category Pills for Desktop --> <div class="hidden md:flex md:flex-wrap md:gap-3"> <a href="/destacados" class="flex items-center px-4 py-2 rounded-full bg-yellow-50 text-yellow-800 hover:bg-yellow-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path> </svg>
Destacados
</a> <a href="/tendencias" class="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path> </svg>
Tendencias
</a> <a href="/virales" class="flex items-center px-4 py-2 rounded-full bg-green-50 text-green-800 hover:bg-green-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg>
Virales
</a> <a href="/ultima-hora" class="flex items-center px-4 py-2 rounded-full bg-red-50 text-red-800 hover:bg-red-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Última hora
</a> </div> </div> <!-- Breaking News Section (if any recent articles) --> ${recentArticles.length > 0 && renderTemplate`<section class="mb-10"> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-red-600"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Última hora
</h2> <a href="/ultima-hora" class="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
Ver todos
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${recentArticles.slice(0, 2).map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": "list" })}`)} </div> </section>`} <!-- Featured Section --> ${featuredArticles.length > 0 && renderTemplate`<section class="mb-10"> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-yellow-600"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path> </svg>
Destacados
</h2> <a href="/destacados" class="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
Ver todos
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${featuredArticles.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": "grid" })}`)} </div> </section>`} <!-- Trending Section --> ${trendingArticles.length > 0 && renderTemplate`<section class="mb-10"> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-blue-600"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path> </svg>
Tendencias
</h2> <a href="/tendencias" class="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
Ver todos
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${trendingArticles.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": "list" })}`)} </div> </section>`} <!-- Latest News Section --> <section class="mb-10"> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold">Últimas Noticias</h2> <div class="flex items-center gap-4"> ${renderComponent($$result2, "ViewToggle", $$ViewToggle, { "activeView": initialViewMode })} <button id="showCategoriesBtn" class="md:hidden flex items-center px-3 py-1.5 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 text-sm font-medium"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"></path> </svg>
Categorías
</button> </div> </div> <!-- Horizontal Categories Filter for Medium+ Screens --> <div class="hidden md:block mb-6"> <div class="inline-flex flex-wrap gap-2 mb-6"> <a href="/" class="px-3 py-1.5 rounded-md text-sm bg-primary-100 text-primary-800 font-medium">
Todas
</a> <a href="/categoria/tecnologia" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Tecnología
</a> <a href="/categoria/economia" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Economía
</a> <a href="/categoria/deporte" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Deporte
</a> <a href="/categoria/politica" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Política
</a> <a href="/categoria/entretenimiento" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Entretenimiento
</a> <a href="/categoria/subsidios" class="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
Subsidios
</a> </div> </div> ${latestArticles.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div id="articleContainer" class="grid-layout grid grid-cols-1 md:grid-cols-3 gap-6"> ${latestArticles.map((article) => renderTemplate`${renderComponent($$result3, "NewsCard", $$NewsCard, { "article": article, "viewMode": initialViewMode })}`)} </div>  <div id="loadingIndicator" class="flex justify-center items-center py-8 hidden"> <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div> <span class="ml-3 text-gray-600">Cargando más noticias...</span> </div>  <div id="noMoreContent" class="text-center py-8 text-gray-500 hidden">
No hay más noticias para mostrar
</div> ` })}` : renderTemplate`<div class="bg-white border border-gray-200 rounded-lg p-8 text-center"> <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path> </svg> <h3 class="mt-2 text-lg font-medium text-gray-900">No hay publicaciones aún</h3> <p class="mt-1 text-gray-500">Vuelve pronto para ver nuestras últimas publicaciones.</p> </div>`} </section> <!-- Mobile Categories Modal --> <div id="categoriesModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"> <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-5 transform transition-transform duration-300 translate-y-full" id="categoriesContent"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-bold">Filtrar por categoría</h3> <button id="closeCategoriesBtn" class="text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="grid grid-cols-2 gap-3"> <a href="/" class="px-3 py-2 text-center rounded-md bg-primary-100 text-primary-800 font-medium">
Todas
</a> <a href="/categoria/tecnologia" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Tecnología
</a> <a href="/categoria/economia" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Economía
</a> <a href="/categoria/deporte" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Deporte
</a> <a href="/categoria/politica" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Política
</a> <a href="/categoria/entretenimiento" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Entretenimiento
</a> <a href="/categoria/subsidios" class="px-3 py-2 text-center rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
Subsidios
</a> </div> <div class="mt-4 flex justify-end"> <button id="applyCategoriesBtn" class="bg-primary-600 text-white px-4 py-2 rounded-lg">Aplicar</button> </div> </div> </div> </div>`}` })} `;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
