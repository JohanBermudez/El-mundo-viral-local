import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_D5oY4WWn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$ViewToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewToggle;
  const { activeView } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-2 mb-6"> <button id="gridViewButton"${addAttribute(`p-2 rounded-md ${activeView === "grid" ? "bg-primary-100 text-primary-800" : "text-gray-500 hover:bg-gray-100"}`, "class")} aria-label="Vista en cuadrícula"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path> </svg> </button> <button id="listViewButton"${addAttribute(`p-2 rounded-md ${activeView === "list" ? "bg-primary-100 text-primary-800" : "text-gray-500 hover:bg-gray-100"}`, "class")} aria-label="Vista en lista"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path> </svg> </button> </div> `;
}, "/home/project/src/components/ViewToggle.astro", void 0);

export { $$ViewToggle as $ };
