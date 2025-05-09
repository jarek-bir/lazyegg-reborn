# Lazy Egg – Reborn Edition (v3.0)

Passive JavaScript watcher Chrome extension for recon and bug bounty.

This version includes:
- ✅ Manifest v3 compatibility
- ✅ CDN blacklist filtering (built-in)
- ✅ Debug logging in every component
- ✅ Export to `.txt` and `.json` from popup
- ✅ Stylish terminal-style interface

---

## 🧠 What It Does

- Injects `lazyegg-injected.js` into visited web pages
- Observes dynamically loaded JS via `PerformanceObserver`
- Filters out noisy CDN libraries (e.g. Google, Cloudflare, Segment)
- Sends tracked JS URLs to background for storage
- Allows export directly from the extension popup

---

## 🚀 Installation

1. Go to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the folder containing this extension

---

## 📦 Exported Files

- `lazyegg_urls.txt`
- `lazyegg_urls.json`

---

## 🧰 Credits

Original concept: [Rotth Gotha](https://github.com/schooldropout1337/lazyegg)  
Reborn, enhanced and debugged by: **Janek & GPT**

---

## 📜 License

MIT License