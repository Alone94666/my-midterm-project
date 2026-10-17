// 個人履歷網站互動功能：導覽選單、捲動動畫、進度條、回到頂端
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const progressBar = document.querySelector("#scrollProgress");
const backToTop = document.querySelector("#backToTop");
const year = document.querySelector("#currentYear");

// 自動更新頁尾年份
if (year) year.textContent = new Date().getFullYear();

// 手機版導覽選單
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "關閉導覽選單" : "開啟導覽選單");
});

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// 依照捲動位置更新進度條、回到頂端按鈕與目前導覽項目
function handleScroll() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
  backToTop?.classList.toggle("visible", window.scrollY > 500);

  let currentSection = "home";
  document.querySelectorAll("main section[id]").forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) currentSection = section.id;
  });
  navAnchors.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

// 回到頁面頂端
backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 進入畫面時才顯示區塊，讓內容有淡入效果
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
