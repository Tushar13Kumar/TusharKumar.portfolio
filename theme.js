const themeToggel = document.getElementById("theme-toggel");
//console.log(themeToggel);

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggelTheme(event) {
  if (event.target.checked) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function setInitinalTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefer-colour-scheme: light)"
  ).matches;

  if (preferDarkMode) {
    themeToggel.checked = true;
    setTheme("light");
  } else {
    themeToggel.checked = false;
    setTheme("dark");
  }
}

function showInitialTheme() {
  setInitinalTheme();
  themeToggel.addEventListener("change", toggelTheme);
}

document.addEventListener("DOMContentLoaded", showInitialTheme);
