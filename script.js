const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const prices = {
  groundnut: ["₹220","₹435","₹1,075","₹3,150"],
  soybean: ["₹175","₹345","₹850","₹2,500"]
};

const oilPrices = document.getElementById("oilPrices");
const oilWhatsapp = document.getElementById("oilWhatsapp");

document.querySelectorAll(".variety-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".variety-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const type = button.dataset.oil;
    const names = type === "groundnut" ? "Groundnut Oil" : "Soybean Oil";
    const sizes = ["1 kg","2 kg","5 kg","15 kg"];
    oilPrices.innerHTML = sizes.map((size, i) =>
      `<div><span>${size}</span><strong>${prices[type][i]}</strong></div>`
    ).join("");
    oilWhatsapp.href = "https://wa.me/917073084204?text=" +
      encodeURIComponent(`Hello, I want to inquire about ${names}.`);
  });
});

document.getElementById("inquiryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const message =
    `Hello Prakriti Trading Company,\n\n` +
    `Name: ${form.get("name")}\n` +
    `Mobile: ${form.get("phone")}\n` +
    `Email: ${form.get("email") || "Not provided"}\n` +
    `Product: ${form.get("product")}\n` +
    `Requirement: ${form.get("message") || "Not provided"}`;
  window.open("https://wa.me/917073084204?text=" + encodeURIComponent(message), "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
