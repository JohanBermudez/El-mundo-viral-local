import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$NewsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { article, viewMode = "grid" } = Astro2.props;
  if (!article) {
    console.error("NewsCard received undefined or null article");
    return;
  }
  if (!article.created_at) {
    console.warn("Article has no created_at date, using current date as fallback", article);
    article.created_at = (/* @__PURE__ */ new Date()).toISOString();
  }
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Fecha desconocida";
    }
  };
  const formatRelativeTime = (dateString) => {
    try {
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
    } catch (e) {
      console.error("Error formatting relative time:", e);
      return "Recientemente";
    }
  };
  const categories = (article.article_categories || []).map((ac) => ac?.categories).filter(Boolean);
  return renderTemplate`${viewMode === "grid" ? renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"><div class="relative"><a${addAttribute(`/articulo/${article.slug}`, "href")}><img${addAttribute(article.imagen_principal || `https://picsum.photos/seed/${article.id || "default"}/800/450`, "src")}${addAttribute(article.titulo, "alt")} class="w-full h-48 object-cover" loading="lazy"></a><div class="absolute top-3 right-3 flex gap-1">${article.destacado && renderTemplate`<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
Destacado
</span>`}${article.trending && renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
Tendencia
</span>`}${article.viral && renderTemplate`<span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
Viral
</span>`}</div></div><div class="p-4"><div class="flex flex-wrap gap-1 mb-2">${categories.slice(0, 2).map((category) => renderTemplate`<a${addAttribute(`/categoria/${category.slug}`, "href")} class="text-xs text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full px-2 py-0.5">${category.nombre}</a>`)}</div><h2 class="text-lg font-bold mb-2 line-clamp-2"><a${addAttribute(`/articulo/${article.slug}`, "href")} class="text-gray-900 hover:text-primary-600">${article.titulo}</a></h2><p class="text-gray-600 text-sm mb-3 line-clamp-2">${article.extracto}</p><div class="flex justify-between items-center text-xs text-gray-500 mt-auto"><time${addAttribute(article.created_at, "datetime")}>${formatRelativeTime(article.created_at)}</time><a${addAttribute(`/articulo/${article.slug}`, "href")} class="text-primary-600 hover:text-primary-800 font-medium text-sm">
Leer más
</a></div></div></div>` : renderTemplate`<div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex"><a${addAttribute(`/articulo/${article.slug}`, "href")} class="flex-shrink-0 w-1/3"><img${addAttribute(article.imagen_principal || `https://picsum.photos/seed/${article.id || "default"}/400/400`, "src")}${addAttribute(article.titulo, "alt")} class="w-full h-full object-cover min-h-[120px]" loading="lazy"></a><div class="p-4 flex-grow flex flex-col"><div class="flex flex-wrap gap-1 mb-2">${categories.slice(0, 2).map((category) => renderTemplate`<a${addAttribute(`/categoria/${category.slug}`, "href")} class="text-xs text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full px-2 py-0.5">${category.nombre}</a>`)}</div><h2 class="text-lg font-bold mb-2"><a${addAttribute(`/articulo/${article.slug}`, "href")} class="text-gray-900 hover:text-primary-600">${article.titulo}</a></h2><p class="text-gray-600 text-sm mb-3 flex-grow">${article.extracto}</p><div class="flex justify-between items-center mt-2"><div class="flex gap-1">${article.destacado && renderTemplate`<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg><span class="hidden sm:inline">Destacado</span></span>`}${article.trending && renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg><span class="hidden sm:inline">Tendencia</span></span>`}${article.viral && renderTemplate`<span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg><span class="hidden sm:inline">Viral</span></span>`}</div><div class="flex items-center"><time${addAttribute(article.created_at, "datetime")} class="text-xs text-gray-500 mr-3">${formatRelativeTime(article.created_at)}</time><a${addAttribute(`/articulo/${article.slug}`, "href")} class="text-primary-600 hover:text-primary-800 font-medium text-sm">
Leer más
</a></div></div></div></div>`}`;
}, "/home/project/src/components/NewsCard.astro", void 0);

export { $$NewsCard as $ };
