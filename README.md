# 🥚 Lazy Egg – Reborn Edition (v3.0)

> Passive JavaScript recon extension for Chrome – resurrected, debugged, and enhanced by **Janek & GPT**.

![Lazy Egg](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v3.0-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

---

## 🔍 What is Lazy Egg?

Lazy Egg is a passive Chrome extension that watches and logs JavaScript files loaded on websites you visit — great for bug bounty, recon, and OSINT.

This is the **reborn v3.0** edition with:

- ✅ Manifest V3 compatibility  
- ✅ Built-in CDN filtering  
- ✅ Console logging everywhere (for debugging)  
- ✅ Export to `.txt` & `.json`  
- ✅ Stylish hacker-themed popup UI

---

## ✨ Features

| Feature                  | Description                                      |
|--------------------------|--------------------------------------------------|
| 🕵️ Passive JS Tracking   | Captures `.js` files loaded via `PerformanceObserver` |
| 🧹 CDN Blacklist         | Ignores noisy libraries from major CDNs         |
| 🧠 Console Debug Logs    | View activity in background & injected scripts  |
| 📦 Export Results        | Save tracked JS URLs as TXT or JSON             |
| 🧪 Minimal & Fast        | No permissions creep, no heavy analysis         |

---

## 📸 Screenshot

> _(Add your popup screenshot here if you want — optional)_

---

## ⚙️ How to Install

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the folder containing this extension

You’ll see a popup icon: 🥚

---

## 📤 Export Example

Click the extension popup — you’ll get:

```
https://target.com/assets/app.js
https://target.com/js/auth/config.js
```

Then export with one click to `.txt` or `.json`.

---

## 💡 Use Cases

- Passive recon while browsing targets
- Bug bounty JS collection
- Discovering hidden API endpoints
- Hunting for leaked tokens / config JS files

---

## 📜 Credits

- 💡 Original idea by: [Rotth Gotha](https://github.com/schooldropout1337/lazyegg)  
- 🧠 Reborn, enhanced & published by: [jarek-bir](https://github.com/jarek-bir)

---

## 🪪 License

[MIT License](LICENSE)