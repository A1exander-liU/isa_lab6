async function populate() {
  const response = await fetch("http://localhost:8000/api/v1/languages", {
    method: "GET",
  })
  const data = await response.json();
  const languages = data.languages;
  const dropdown = document.getElementById("dropdown");
  
  dropdown.innerHTML = "";
  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    const name = language.languageName;
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    dropdown.appendChild(option);
  }
}

function selected(e) {
  e.preventDefault();
  console.log(document.getElementById("dropdown").value);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("dropdown").addEventListener("focus", populate);
  document.getElementById("go").addEventListener("click", selected)
});