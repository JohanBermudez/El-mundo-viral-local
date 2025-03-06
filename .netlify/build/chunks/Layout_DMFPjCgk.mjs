import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createClient } from '@supabase/supabase-js';
/* empty css                          */

const supabaseUrl = "https://cwpasazmxklbqekzqhrf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cGFzYXpteGtsYnFla3pxaHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMzExMDgsImV4cCI6MjA1NjgwNzEwOH0.9v_aoPU8hhTaHJQzG7IWpai4T3e1SPrxFgW8y_bm00Q";
console.log("Supabase Connection Details:");
console.log("URL available:", true);
console.log("Key available:", true);
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
async function canConnectToSupabase() {
  try {
    const { error } = await supabase.from("articles").select("id").limit(1);
    return !error;
  } catch (e) {
    console.error("Error checking Supabase connection:", e);
    return false;
  }
}
const mockCategories = [
  { id: "cat-1", nombre: "Tecnología", slug: "tecnologia", descripcion: "Noticias sobre tecnología e innovación" },
  { id: "cat-2", nombre: "Economía", slug: "economia", descripcion: "Información económica y financiera" },
  { id: "cat-3", nombre: "Deporte", slug: "deporte", descripcion: "Todas las novedades deportivas" },
  { id: "cat-4", nombre: "Política", slug: "politica", descripcion: "Actualidad política nacional e internacional" },
  { id: "cat-5", nombre: "Entretenimiento", slug: "entretenimiento", descripcion: "Noticias sobre cine, música y cultura" },
  { id: "cat-6", nombre: "Subsidios", slug: "subsidios", descripcion: "Información sobre subsidios y ayudas estatales" }
];
async function getCategories() {
  try {
    console.log("Fetching categories...");
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock categories data for static generation");
      return { categories: mockCategories, error: null };
    }
    const { data, error, status } = await supabase.from("categories").select("*").order("nombre");
    console.log("Categories API response:", { status, count: data?.length, error });
    if (error) {
      throw error;
    }
    return { categories: data || [], error: null };
  } catch (error) {
    console.error("Error fetching categories:", error);
    {
      return { categories: mockCategories, error: null };
    }
  }
}
async function getCategoryBySlug(slug) {
  try {
    if (!slug) {
      throw new Error("Category slug is required");
    }
    console.log(`Fetching category by slug: ${slug}`);
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock category data for static generation");
      const mockCategory = mockCategories.find((c) => c.slug === slug);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    const { data, error, status } = await supabase.from("categories").select("*").eq("slug", slug).single();
    console.log("Category API response:", { status, found: !!data, error });
    if (error) {
      throw error;
    }
    return { category: data, error: null };
  } catch (error) {
    console.error(`Error fetching category by slug (${slug}):`, error);
    {
      const mockCategory = mockCategories.find((c) => c.slug === slug);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    return { category: null, error };
  }
}
function generateMockArticles(count = 10, options = {}) {
  const mockArticles = [];
  for (let i = 0; i < count; i++) {
    mockArticles.push({
      id: `mock-${i}`,
      titulo: `Artículo de ejemplo #${i + 1}`,
      slug: `articulo-ejemplo-${i + 1}`,
      extracto: "Este es un extracto de ejemplo para la generación estática del sitio.",
      contenido: "<p>Contenido completo del artículo de ejemplo. Este texto simula el contenido que normalmente se obtendría de la base de datos.</p>",
      imagen_principal: `https://source.unsplash.com/random/800x450?sig=${i}`,
      created_at: new Date(Date.now() - i * 36e5).toISOString(),
      updated_at: new Date(Date.now() - i * 36e5).toISOString(),
      destacado: i < 3,
      trending: i >= 3 && i < 6,
      viral: i >= 6 && i < 9,
      ultima_hora: i < 4,
      article_categories: [
        {
          categories: mockCategories[i % mockCategories.length]
        },
        {
          categories: mockCategories[(i + 1) % mockCategories.length]
        }
      ]
    });
  }
  return mockArticles;
}
async function getArticles({
  limit = 10,
  offset = 0,
  categorySlug = null,
  featured = null,
  trending = null,
  viral = null,
  ultimaHora = null,
  hoursAgo = null
}) {
  try {
    console.log("Fetching articles with params:", {
      limit,
      offset,
      categorySlug,
      featured,
      trending,
      viral,
      ultimaHora,
      hoursAgo
    });
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock articles data for static generation");
      let mockArticles = generateMockArticles(20);
      if (categorySlug) {
        const categoryId = mockCategories.find((c) => c.slug === categorySlug)?.id;
        if (categoryId) {
          mockArticles = mockArticles.filter(
            (article) => article.article_categories.some((ac) => ac.categories.id === categoryId)
          );
        }
      }
      if (featured !== null) {
        mockArticles = mockArticles.filter((article) => article.destacado === featured);
      }
      if (trending !== null) {
        mockArticles = mockArticles.filter((article) => article.trending === trending);
      }
      if (viral !== null) {
        mockArticles = mockArticles.filter((article) => article.viral === viral);
      }
      if (ultimaHora !== null) {
        mockArticles = mockArticles.filter((article) => article.ultima_hora === ultimaHora);
      }
      if (hoursAgo !== null) {
        const hoursAgoDate = /* @__PURE__ */ new Date();
        hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
        mockArticles = mockArticles.filter(
          (article) => new Date(article.created_at) >= hoursAgoDate
        );
      }
      const paginatedArticles = mockArticles.slice(offset, offset + limit);
      return {
        articles: paginatedArticles,
        error: null,
        count: mockArticles.length
      };
    }
    let query = supabase.from("articles").select(`
        *,
        article_categories (
          categories (*)
        )
      `, { count: "exact" }).order("created_at", { ascending: false }).range(offset, offset + limit - 1);
    if (categorySlug) {
      query = query.eq("article_categories.categories.slug", categorySlug);
    }
    if (featured !== null) {
      query = query.eq("destacado", featured);
    }
    if (trending !== null) {
      query = query.eq("trending", trending);
    }
    if (viral !== null) {
      query = query.eq("viral", viral);
    }
    if (ultimaHora !== null) {
      query = query.eq("ultima_hora", ultimaHora);
    }
    if (hoursAgo !== null) {
      const hoursAgoDate = /* @__PURE__ */ new Date();
      hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
      query = query.gte("created_at", hoursAgoDate.toISOString());
    }
    const { data, error, count, status } = await query;
    console.log("Articles API response:", {
      status,
      count: data?.length,
      totalCount: count,
      firstArticleId: data && data.length > 0 ? data[0].id : "none",
      error
    });
    if (error) {
      throw error;
    }
    return { articles: data || [], error: null, count };
  } catch (error) {
    console.error("Error fetching articles:", error);
    {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null, count: limit };
    }
  }
}
async function getRecentArticles(hoursAgo = 2, limit = 6) {
  try {
    const hoursAgoDate = /* @__PURE__ */ new Date();
    hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock recent articles data for static generation");
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    const { data, error, status } = await supabase.from("articles").select(`
        *,
        article_categories (
          categories (*)
        )
      `).gte("created_at", hoursAgoDate.toISOString()).order("created_at", { ascending: false }).limit(limit);
    console.log("Recent articles API response:", {
      status,
      count: data?.length,
      timeFilter: hoursAgoDate.toISOString(),
      error
    });
    if (error) {
      throw error;
    }
    return { articles: data || [], error: null };
  } catch (error) {
    console.error("Error fetching recent articles:", error);
    {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
  }
}
async function getArticleBySlug(slug) {
  try {
    if (!slug) {
      throw new Error("Article slug is required");
    }
    console.log(`Fetching article by slug: ${slug}`);
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock article data for static generation");
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find((a) => a.slug === slug);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    const { data, error, status } = await supabase.from("articles").select(`
        *,
        article_categories (
          categories (*)
        )
      `).eq("slug", slug).single();
    console.log("Article API response:", { status, found: !!data, error });
    if (error) {
      throw error;
    }
    return { article: data, error: null };
  } catch (error) {
    console.error(`Error fetching article by slug (${slug}):`, error);
    {
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find((a) => a.slug === slug);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    return { article: null, error };
  }
}
async function getRelatedArticles(articleId, categoryIds, limit = 3) {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    console.log(`Fetching related articles for article: ${articleId}`);
    const canConnect = await canConnectToSupabase();
    if (!canConnect) {
      console.log("Using mock related articles data for static generation");
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    if (!categoryIds.length) {
      return { articles: [], error: null };
    }
    const { data, error, status } = await supabase.from("articles").select(`
        *,
        article_categories (
          categories (*)
        )
      `).in("article_categories.category_id", categoryIds).neq("id", articleId).order("created_at", { ascending: false }).limit(limit);
    console.log("Related articles API response:", { status, count: data?.length, error });
    if (error) {
      throw error;
    }
    return { articles: data || [], error: null };
  } catch (error) {
    console.error(`Error fetching related articles for article (${articleId}):`, error);
    {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
  }
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  let categories = [];
  try {
    const response = await getCategories();
    categories = response.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-300" data-astro-cid-3ef6ksr2> <div class="container mx-auto px-4" data-astro-cid-3ef6ksr2> <div class="flex flex-col transition-all duration-300" id="headerContent" data-astro-cid-3ef6ksr2> <!-- Main Header Row --> <div class="flex justify-between items-center h-16 transition-all duration-300" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="text-2xl font-bold text-primary-800 flex items-center h-full" data-astro-cid-3ef6ksr2>
El Mundo Viral
</a> <!-- Right section with category pills (visible on scroll) and search/menu buttons --> <div class="flex items-center" data-astro-cid-3ef6ksr2> <!-- Category Pills (hidden by default, shown on scroll for desktop ONLY) --> <div id="scrollCategoryPills" class="hidden opacity-0 md:flex space-x-1 transition-opacity duration-300 mr-2 max-md:hidden" data-astro-cid-3ef6ksr2> <a href="/destacados" class="flex items-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-50 text-yellow-700 hover:bg-yellow-100" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-3ef6ksr2></path> </svg>
Destacados
</a> <a href="/tendencias" class="flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-astro-cid-3ef6ksr2></path> </svg>
Tendencias
</a> <a href="/virales" class="flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700 hover:bg-green-100" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-3ef6ksr2></path> </svg>
Virales
</a> <a href="/ultima-hora" class="flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-50 text-red-700 hover:bg-red-100" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3ef6ksr2></path> </svg>
Última hora
</a> </div> <!-- Search & Menu Buttons --> <div class="flex items-center space-x-2" data-astro-cid-3ef6ksr2> <!-- Search Button --> <button id="searchToggleBtn" class="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none" aria-label="Buscar" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Menu Button --> <button id="menuButton" class="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none" aria-label="Menu" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> </div> </div> <!-- Search Overlay - Hidden by default --> <div id="searchOverlay" class="fixed inset-0 z-50 bg-white transform -translate-y-full transition-transform duration-300 ease-in-out" data-astro-cid-3ef6ksr2> <div class="container mx-auto px-4 py-4" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <div class="relative w-full" data-astro-cid-3ef6ksr2> <input type="text" id="searchInput" placeholder="Buscar..." class="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:border-primary-500" autocomplete="off" data-astro-cid-3ef6ksr2> <svg class="absolute left-0 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-3ef6ksr2></path> </svg> </div> <button id="closeSearchBtn" class="ml-4 p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> <!-- Menu Overlay - Hidden by default --> <div id="menu" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 translate-x-full overflow-y-auto" data-astro-cid-3ef6ksr2> <div class="sticky top-0 flex justify-between items-center p-4 border-b border-gray-200 bg-white z-10" data-astro-cid-3ef6ksr2> <h2 class="text-lg font-bold text-gray-800" data-astro-cid-3ef6ksr2>Menú</h2> <button id="closeMenuBtn" class="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none" aria-label="Cerrar menú" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <nav class="p-4" data-astro-cid-3ef6ksr2> <!-- Sections Links --> <div class="mb-6" data-astro-cid-3ef6ksr2> <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3" data-astro-cid-3ef6ksr2>Secciones</h3> <ul class="space-y-1" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-3ef6ksr2></path> </svg>
Inicio
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/ultima-hora" class="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3ef6ksr2></path> </svg>
Última hora
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/destacados" class="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-3ef6ksr2></path> </svg>
Destacados
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/tendencias" class="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-astro-cid-3ef6ksr2></path> </svg>
Tendencias
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/virales" class="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-3ef6ksr2></path> </svg>
Virales
</a> </li> </ul> </div> <!-- Categories List --> <div data-astro-cid-3ef6ksr2> <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3" data-astro-cid-3ef6ksr2>Categorías</h3> <ul class="grid grid-cols-1 gap-1" data-astro-cid-3ef6ksr2> ${categories.map((category) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(`/categoria/${category.slug}`, "href")} class="flex px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md" data-astro-cid-3ef6ksr2> <span class="truncate" data-astro-cid-3ef6ksr2>${category.nombre}</span> </a> </li>`)} </ul> </div> </nav> </div> </div> </header> <!-- Add padding to account for fixed header --> <div class="h-16" id="headerSpacer" data-astro-cid-3ef6ksr2></div>  `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  let categories = [];
  try {
    const response = await getCategories();
    categories = response.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-12 pb-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div> <h3 class="text-xl font-bold mb-4">El Mundo Viral</h3> <p class="text-gray-400 mb-4">
Tu portal de noticias moderno con las últimas actualizaciones sobre el mundo, tendencias, virales y más.
</p> <div class="flex space-x-4"> <a href="#" class="text-gray-400 hover:text-white transition"> <span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-white transition"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-white transition"> <span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path> </svg> </a> </div> </div> <div> <h3 class="text-lg font-bold mb-4">Secciones</h3> <ul class="space-y-2"> <li><a href="/" class="text-gray-400 hover:text-white transition">Inicio</a></li> <li><a href="/ultima-hora" class="text-gray-400 hover:text-white transition">Última hora</a></li> <li><a href="/destacados" class="text-gray-400 hover:text-white transition">Destacados</a></li> <li><a href="/tendencias" class="text-gray-400 hover:text-white transition">Tendencias</a></li> <li><a href="/virales" class="text-gray-400 hover:text-white transition">Virales</a></li> </ul> </div> <div> <h3 class="text-lg font-bold mb-4">Categorías</h3> <ul class="space-y-2"> ${categories.slice(0, 6).map((category) => renderTemplate`<li> <a${addAttribute(`/categoria/${category.slug}`, "href")} class="text-gray-400 hover:text-white transition"> ${category.nombre} </a> </li>`)} </ul> </div> <div> <h3 class="text-lg font-bold mb-4">Acerca de</h3> <ul class="space-y-2"> <li><a href="/nosotros" class="text-gray-400 hover:text-white transition">Quiénes somos</a></li> <li><a href="/contacto" class="text-gray-400 hover:text-white transition">Contacto</a></li> <li><a href="/privacidad" class="text-gray-400 hover:text-white transition">Política de privacidad</a></li> <li><a href="/terminos" class="text-gray-400 hover:text-white transition">Términos y condiciones</a></li> </ul> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-400 text-sm">
&copy; ${currentYear} El Mundo Viral. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "El Mundo Viral - Tu portal de noticias moderno" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title} | El Mundo Viral</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-gray-100 font-['Inter',sans-serif]"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow container mx-auto py-6 pt-6"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getRelatedArticles as a, getCategoryBySlug as b, getArticles as c, getRecentArticles as d, getCategories as e, getArticleBySlug as g };
