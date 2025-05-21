const themeToggel = document.getElementById("theme-toggel");
//console.log(themeToggel);

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggelTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setInitinalTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefer-colour-scheme: dark)"
  ).matches;

  if (preferDarkMode) {
    themeToggel.checked = true;
    setTheme("dark");
  } else {
    themeToggel.checked = false;
    setTheme("light");
  }
}

function showInitialTheme() {
  setInitinalTheme();
  themeToggel.addEventListener("change", toggelTheme);
}

document.addEventListener("DOMContentLoaded", showInitialTheme);
