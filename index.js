import "./index.css";

const cookieConsent = document.querySelector(".cookie-consent");
const cookieConsentButton = cookieConsent.querySelector(
  ".cookie-consent__button"
);

localStorage.cookie === "true"
  ? cookieConsent.classList.add("hide")
  : cookieConsent.classList.remove("hide");

cookieConsent.addEventListener("click", (event) => {
  const { target } = event;

  if (target === cookieConsentButton) {
    localStorage.setItem("cookie", "true");
    cookieConsent.classList.add("hide");
  }
});