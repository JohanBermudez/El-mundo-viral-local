import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_D5oY4WWn.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.gUROTMol.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"},{"type":"inline","content":".instagram-detail[data-astro-cid-cr4c5vkx]{padding:0 1rem}@media (min-width: 768px){.instagram-detail[data-astro-cid-cr4c5vkx]{padding:0}}\n"}],"routeData":{"route":"/articulo/[slug]","isIndex":false,"type":"page","pattern":"^\\/articulo\\/([^/]+?)\\/?$","segments":[[{"content":"articulo","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/articulo/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BElexutw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"},{"type":"inline","content":".instagram-category[data-astro-cid-nlmqd6up]{padding:0 1rem}@media (min-width: 768px){.instagram-category[data-astro-cid-nlmqd6up]{padding:0}}\n"}],"routeData":{"route":"/categoria/[slug]","isIndex":false,"type":"page","pattern":"^\\/categoria\\/([^/]+?)\\/?$","segments":[[{"content":"categoria","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/categoria/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.PnTGODPr.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/destacados","isIndex":false,"type":"page","pattern":"^\\/destacados\\/?$","segments":[[{"content":"destacados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/destacados.astro","pathname":"/destacados","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BvYFUITH.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/subsidios","isIndex":false,"type":"page","pattern":"^\\/subsidios\\/?$","segments":[[{"content":"subsidios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/subsidios.astro","pathname":"/subsidios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B4J3YsNO.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/tendencias","isIndex":false,"type":"page","pattern":"^\\/tendencias\\/?$","segments":[[{"content":"tendencias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tendencias.astro","pathname":"/tendencias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D66ur2T_.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/ultima-hora","isIndex":false,"type":"page","pattern":"^\\/ultima-hora\\/?$","segments":[[{"content":"ultima-hora","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ultima-hora.astro","pathname":"/ultima-hora","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C3ikfSZV.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/virales","isIndex":false,"type":"page","pattern":"^\\/virales\\/?$","segments":[[{"content":"virales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/virales.astro","pathname":"/virales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CLDHN5t_.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.i8trJJC0.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/articulo/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/categoria/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/destacados.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/subsidios.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/tendencias.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/ultima-hora.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/virales.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/articulo/[slug]@_@astro":"pages/articulo/_slug_.astro.mjs","\u0000@astro-page:src/pages/categoria/[slug]@_@astro":"pages/categoria/_slug_.astro.mjs","\u0000@astro-page:src/pages/destacados@_@astro":"pages/destacados.astro.mjs","\u0000@astro-page:src/pages/subsidios@_@astro":"pages/subsidios.astro.mjs","\u0000@astro-page:src/pages/tendencias@_@astro":"pages/tendencias.astro.mjs","\u0000@astro-page:src/pages/ultima-hora@_@astro":"pages/ultima-hora.astro.mjs","\u0000@astro-page:src/pages/virales@_@astro":"pages/virales.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dxp91GLe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BElexutw.js","/astro/hoisted.js?q=1":"_astro/hoisted.PnTGODPr.js","/astro/hoisted.js?q=2":"_astro/hoisted.BvYFUITH.js","/astro/hoisted.js?q=3":"_astro/hoisted.B4J3YsNO.js","/astro/hoisted.js?q=4":"_astro/hoisted.D66ur2T_.js","/astro/hoisted.js?q=5":"_astro/hoisted.C3ikfSZV.js","/astro/hoisted.js?q=6":"_astro/hoisted.CLDHN5t_.js","/astro/hoisted.js?q=7":"_astro/hoisted.gUROTMol.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.i8trJJC0.css","/favicon.svg","/_astro/ViewToggle.astro_astro_type_script_index_0_lang.DzGYtyPK.js","/_astro/hoisted.B4J3YsNO.js","/_astro/hoisted.BElexutw.js","/_astro/hoisted.BvYFUITH.js","/_astro/hoisted.C3ikfSZV.js","/_astro/hoisted.CLDHN5t_.js","/_astro/hoisted.D66ur2T_.js","/_astro/hoisted.PnTGODPr.js","/_astro/hoisted.gUROTMol.js","/404.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"38vYmIz7YZCTL/ceVBK/Y4YQL+qs4UVZV6P10hgPubQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
