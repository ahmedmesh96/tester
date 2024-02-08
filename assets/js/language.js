const translations = {
    en: {
      namee: "Your name....",
      about: "About",
      contact: "Contact us",
      selectLanguage: "Select a language",
      english: "English",
      arabic: "Arabic",
    },
    ar: {
      namee: "الصفحة الرئيسية",
      about: "من نحن",
      contact: "تواصل معنا",
      selectLanguage: "إختر لغة",
      english: "الانجليزية",
      arabic: "العربية",
    },
  };
  
  export default translations;

  const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};