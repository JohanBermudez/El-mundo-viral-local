/* empty css                                     */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getArticleBySlug, a as getRelatedArticles, $ as $$Layout } from '../../chunks/Layout_DMFPjCgk.mjs';
import { $ as $$NewsCard } from '../../chunks/NewsCard_DsoAgI8B.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { article, error } = await getArticleBySlug(slug || "");
  if (error || !article) {
    return Astro2.redirect("/404");
  }
  const categories = article.article_categories?.map((ac) => ac.categories) || [];
  const categoryIds = categories.map((c) => c.id);
  const { articles: relatedArticles } = await getRelatedArticles(article.id, categoryIds, 3);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffInSeconds = Math.floor((now - date) / 1e3);
    if (diffInSeconds < 60) {
      return "hace unos segundos";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `hace ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `hace ${hours} ${hours === 1 ? "hora" : "horas"}`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `hace ${days} ${days === 1 ? "d\xEDa" : "d\xEDas"}`;
    } else {
      return formatDate(dateString);
    }
  };
  const readingTime = () => {
    const wordsPerMinute = 200;
    const wordCount = article.contenido.trim().split(/\s+/).length;
    const readingTime2 = Math.ceil(wordCount / wordsPerMinute);
    return readingTime2;
  };
  const primaryCategory = categories.length > 0 ? categories[0] : null;
  primaryCategory ? [
    { name: "Categor\xEDas", href: "/" },
    { name: primaryCategory.nombre, href: `/categoria/${primaryCategory.slug}` },
    { name: article.titulo }
  ] : [
    { name: "Art\xEDculos", href: "/" },
    { name: article.titulo }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.titulo, "description": article.extracto, "data-astro-cid-cr4c5vkx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto instagram-detail" data-astro-cid-cr4c5vkx> <!-- Instagram-style Article Header --> <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6" data-astro-cid-cr4c5vkx> <div class="p-4 flex items-center justify-between border-b border-gray-100" data-astro-cid-cr4c5vkx> <div class="flex items-center" data-astro-cid-cr4c5vkx> <div class="h-10 w-10 rounded-full overflow-hidden mr-3 bg-gradient-to-r from-purple-500 to-pink-500" data-astro-cid-cr4c5vkx> <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold" data-astro-cid-cr4c5vkx>
EMV
</div> </div> <div data-astro-cid-cr4c5vkx> <div class="font-semibold" data-astro-cid-cr4c5vkx>elmundoviral</div> ${primaryCategory && renderTemplate`<a${addAttribute(`/categoria/${primaryCategory.slug}`, "href")} class="text-xs text-gray-500 hover:underline" data-astro-cid-cr4c5vkx> ${primaryCategory.nombre} </a>`} </div> </div> <button class="text-gray-500" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" data-astro-cid-cr4c5vkx></path> </svg> </button> </div> <!-- Article Image --> <div class="relative" data-astro-cid-cr4c5vkx> <img${addAttribute(article.imagen_principal || "https://via.placeholder.com/1200x800?text=El+Mundo+Viral", "src")}${addAttribute(article.titulo, "alt")} class="w-full h-auto object-cover max-h-[600px]" data-astro-cid-cr4c5vkx> <!-- Tags overlay --> <div class="absolute bottom-4 left-4 flex flex-wrap gap-2" data-astro-cid-cr4c5vkx> ${article.destacado && renderTemplate`<span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm shadow-sm bg-opacity-90" data-astro-cid-cr4c5vkx>
Destacado
</span>`} ${article.trending && renderTemplate`<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm shadow-sm bg-opacity-90" data-astro-cid-cr4c5vkx>
Tendencia
</span>`} ${article.viral && renderTemplate`<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm shadow-sm bg-opacity-90" data-astro-cid-cr4c5vkx>
Viral
</span>`} </div> </div> <!-- Engagement Bar --> <div class="p-4 border-b border-gray-100" data-astro-cid-cr4c5vkx> <div class="flex justify-between items-center" data-astro-cid-cr4c5vkx> <div class="flex space-x-4" data-astro-cid-cr4c5vkx> <button class="text-gray-800 hover:text-red-500" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" data-astro-cid-cr4c5vkx></path> </svg> </button> <button class="text-gray-800 hover:text-blue-500" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" data-astro-cid-cr4c5vkx></path> </svg> </button> <button class="text-gray-800 hover:text-green-500" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" data-astro-cid-cr4c5vkx></path> </svg> </button> </div> <button class="text-gray-800 hover:text-red-500" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" data-astro-cid-cr4c5vkx></path> </svg> </button> </div> <div class="mt-2 text-sm font-medium" data-astro-cid-cr4c5vkx>${readingTime()} minutos de lectura</div> <div class="mt-1 text-xs text-gray-500" data-astro-cid-cr4c5vkx>${formatRelativeTime(article.created_at)}</div> </div> <!-- Article Content --> <div class="p-5" data-astro-cid-cr4c5vkx> <h1 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-cr4c5vkx>${article.titulo}</h1> <p class="text-lg text-gray-700 mb-6 font-medium" data-astro-cid-cr4c5vkx>${article.extracto}</p> <div class="prose max-w-none" data-astro-cid-cr4c5vkx> ${article.contenido.split("\n\n").map((paragraph) => renderTemplate`<p class="mb-4 text-gray-800" data-astro-cid-cr4c5vkx>${paragraph}</p>`)} </div> <!-- Categories --> <div class="mt-8 flex flex-wrap gap-2" data-astro-cid-cr4c5vkx> ${categories.map((category) => renderTemplate`<a${addAttribute(`/categoria/${category.slug}`, "href")} class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm" data-astro-cid-cr4c5vkx>
#${category.nombre.toLowerCase().replace(/\s+/g, "")} </a>`)} </div> </div> </div> <!-- Comments Section --> <div class="bg-white border border-gray-200 rounded-lg overflow-hidden p-5 mb-8" data-astro-cid-cr4c5vkx> <h2 class="text-xl font-bold mb-4" data-astro-cid-cr4c5vkx>Comentarios</h2> <div class="flex items-start mb-6" data-astro-cid-cr4c5vkx> <div class="h-10 w-10 rounded-full overflow-hidden mr-3 bg-gray-200" data-astro-cid-cr4c5vkx> <div class="w-full h-full flex items-center justify-center text-gray-500 text-xs font-bold" data-astro-cid-cr4c5vkx>
TÚ
</div> </div> <div class="flex-1" data-astro-cid-cr4c5vkx> <textarea placeholder="Añade un comentario..." class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" rows="2" data-astro-cid-cr4c5vkx></textarea> <div class="flex justify-end mt-2" data-astro-cid-cr4c5vkx> <button class="bg-primary-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-primary-700" data-astro-cid-cr4c5vkx>
Publicar
</button> </div> </div> </div> <div class="text-center py-4 text-gray-500" data-astro-cid-cr4c5vkx>
Sé el primero en comentar este artículo.
</div> </div> <!-- Related Articles --> ${relatedArticles.length > 0 && renderTemplate`<div class="mb-10" data-astro-cid-cr4c5vkx> <h2 class="text-xl font-bold mb-6 flex items-center" data-astro-cid-cr4c5vkx> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" data-astro-cid-cr4c5vkx></path> </svg>
Sugeridos para ti
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-cr4c5vkx> ${relatedArticles.map((relatedArticle) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": relatedArticle, "viewMode": "grid", "data-astro-cid-cr4c5vkx": true })}`)} </div> </div>`} <div class="text-center mb-10" data-astro-cid-cr4c5vkx> <a href="javascript:history.back()" class="inline-flex items-center text-primary-600 hover:text-primary-700" data-astro-cid-cr4c5vkx> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-cr4c5vkx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-cr4c5vkx></path> </svg>
Volver
</a> </div> </div> ` })} `;
}, "/home/project/src/pages/articulo/[slug].astro", void 0);

const $$file = "/home/project/src/pages/articulo/[slug].astro";
const $$url = "/articulo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
