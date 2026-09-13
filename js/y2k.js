document.addEventListener("DOMContentLoaded", () => {
  const CONTACT_EMAIL = "constanceleedavis@gmail.com";
  const CONTACT_LINKEDIN = "https://www.linkedin.com/in/constanceleedavis/";

  const here = location.pathname.split("/").pop() || "index.html";
  const links = [
    ["index.html", "home"],
    ["gallery.html", "gallery"],
    ["life.html", "life"],
    ["resume.html", "résumé"],
    ["contact.html", "contact"],
  ];
  const nav = document.querySelector("[data-y2k-nav]");
  if (nav) {
    nav.innerHTML = links
      .map(([href, label]) => {
        const current = here === href || (here === "" && href === "index.html");
        return `<a href="${href}" ${current ? 'aria-current="page"' : ""}>${label}</a>`;
      })
      .join("");
  }

  const dialog = document.getElementById("lightbox");
  const dialogImg = dialog?.querySelector("img");
  const dialogCap = dialog?.querySelector("p");
  document.querySelectorAll("[data-lightbox]").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      if (!dialog || !dialogImg) return;
      dialogImg.src = card.getAttribute("href");
      dialogImg.alt = card.querySelector("img")?.alt || "";
      if (dialogCap) {
        dialogCap.textContent = card.querySelector("figcaption")?.textContent || "";
      }
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });
  dialog?.querySelector("[data-close]")?.addEventListener("click", () => dialog.close());

  const mailForm = document.querySelector("[data-mail]");
  if (mailForm) {
    mailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = mailForm.name.value.trim();
      const note = mailForm.note.value.trim();
      const subject = encodeURIComponent(`Hello — ${name || "a friend"}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(note)}`;
    });
  }

  const emailLink = document.querySelector("[data-contact-email]");
  if (emailLink) {
    emailLink.href = `mailto:${CONTACT_EMAIL}`;
    emailLink.textContent = CONTACT_EMAIL;
  }

  const linkedinLink = document.querySelector("[data-contact-linkedin]");
  if (linkedinLink) {
    linkedinLink.href = CONTACT_LINKEDIN;
  }

  const copyEmailBtn = document.querySelector("[data-copy-email]");
  if (copyEmailBtn) {
    let copyResetTimer = 0;

    copyEmailBtn.addEventListener("click", async (event) => {
      event.stopPropagation();

      const showCopied = () => {
        copyEmailBtn.textContent = "copied!";
        copyEmailBtn.classList.add("is-copied");
        copyEmailBtn.setAttribute("aria-label", "Email copied");
        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(() => {
          copyEmailBtn.textContent = "copy";
          copyEmailBtn.classList.remove("is-copied");
          copyEmailBtn.setAttribute("aria-label", "Copy email address");
        }, 1800);
      };

      try {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        showCopied();
      } catch {
        const helper = document.createElement("textarea");
        helper.value = CONTACT_EMAIL;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.left = "-9999px";
        document.body.appendChild(helper);
        helper.select();
        const copied = document.execCommand("copy");
        helper.remove();
        if (copied) showCopied();
      }
    });
  }

  const bizCard = document.querySelector("[data-biz-card]");
  if (bizCard) {
    const faces = bizCard.querySelectorAll("[data-biz-card-face]");
    const front = bizCard.querySelector(".biz-card-front");
    const back = bizCard.querySelector(".biz-card-back");
    const statusEl = document.querySelector("[data-biz-card-status]");

    const setFlipped = (flipped) => {
      bizCard.classList.toggle("is-flipped", flipped);
      if (front) {
        front.setAttribute("aria-expanded", String(flipped));
        front.tabIndex = flipped ? -1 : 0;
      }
      if (back) {
        back.setAttribute("aria-hidden", String(!flipped));
        back.tabIndex = flipped ? 0 : -1;
      }
      if (statusEl) {
        statusEl.textContent = flipped
          ? "tap again to flip back ↻"
          : "tap the card to flip ↻";
      }
    };

    const toggleFlip = () => {
      setFlipped(!bizCard.classList.contains("is-flipped"));
    };

    faces.forEach((face) => {
      face.addEventListener("click", (event) => {
        if (event.target.closest("[data-no-flip]")) return;
        toggleFlip();
      });
      face.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.target.closest("[data-no-flip]")) return;
        event.preventDefault();
        toggleFlip();
      });
    });
  }
});
