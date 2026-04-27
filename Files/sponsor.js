document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".sponsor-gallery");
  if (!gallery) return;

  gallery.querySelectorAll(".caption").forEach(caption => {
    const link = caption.previousElementSibling;
    if (link && link.tagName === "A") {
      link.appendChild(caption);
    }
  });
});