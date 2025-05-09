chrome.storage.local.get(['jsFiles'], function(result) {
  const output = document.getElementById("output");
  const urls = result.jsFiles || [];

  console.log("[LazyEgg Popup] Loaded URLs:", urls);

  if (urls.length === 0) {
    output.innerHTML = "<li>Brak danych JS 😴</li>";
    return;
  }

  urls.forEach(url => {
    const li = document.createElement("li");
    li.textContent = url;
    output.appendChild(li);
  });

  document.getElementById("exportTxt").addEventListener("click", () => {
    const blob = new Blob([urls.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lazyegg_urls.txt";
    a.click();
  });

  document.getElementById("exportJson").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(urls, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lazyegg_urls.json";
    a.click();
  });
});