console.log("[LazyEgg Inject] Script loaded with CDN blacklist filtering.");

const jsFiles = new Set();
const cdnDomains = [
  "cdn.jsdelivr.net",
  "cdnjs.cloudflare.com",
  "unpkg.com",
  "ajax.googleapis.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "www.googletagmanager.com",
  "www.google-analytics.com",
  "connect.facebook.net",
  "static.hotjar.com",
  "cdn.sift.com",
  "cdn.segment.com",
  "cdn.shopify.com",
  "cdn.optimizely.com"
];

const isCDN = (url) => cdnDomains.some(domain => url.includes(domain));

const save = () => {
  console.log("[LazyEgg Inject] Sending data to background:", Array.from(jsFiles));
  chrome.runtime.sendMessage({ type: "save", jsFiles: Array.from(jsFiles) });
};

const track = (url) => {
  if (!url.endsWith(".js")) return;
  if (isCDN(url)) {
    console.log("[LazyEgg Inject] Skipped CDN JS:", url);
    return;
  }
  console.log("[LazyEgg Inject] Tracked:", url);
  jsFiles.add(url);
  save();
};

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    track(entry.name);
  }
});

observer.observe({ entryTypes: ["resource"] });
console.log("[LazyEgg Inject] PerformanceObserver with CDN filtering started.");