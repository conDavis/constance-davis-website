document.addEventListener("DOMContentLoaded", () => {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = [
    ["letter.html", "Letter"],
    ["about.html", "Card"],
    ["scrapbook.html", "Work"],
    ["notes.html", "Notes"],
    ["mail.html", "Post"],
  ];
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = links
      .map(([href, label]) => {
        const current = here === href;
        return `<li><a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a></li>`;
      })
      .join("");
  }

  const form = document.querySelector("[data-mail]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.name.value.trim();
      const note = form.note.value.trim();
      const subject = encodeURIComponent(`A letter — ${name || "a friend"}`);
      window.location.href = `mailto:hello@example.com?subject=${subject}&body=${encodeURIComponent(note)}`;
    });
  }
});
