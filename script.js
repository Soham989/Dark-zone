document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("username");
  if (name) {
    document.getElementById("greeting").innerText = `Welcome back, ${name}`;
    document.getElementById("user-form").style.display = "none";
  }
  loadSoftware();
});

function saveName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    location.reload();
  }
}

const softwareData = [
  { name: "Photoshop Crack", version: "2024", size: "1.2GB", description: "Latest Photoshop cracked version" },
  { name: "Kinemaster MOD", version: "6.1", size: "89MB", description: "Premium unlocked Kinemaster" },
  { name: "VS Code Portable", version: "1.89", size: "150MB", description: "No install needed" }
];

function loadSoftware() {
  const container = document.getElementById("softwareList");
  container.innerHTML = "";
  softwareData.forEach((sw) => {
    container.innerHTML += `
      <div class="software-item">
        <h3>${sw.name} (v${sw.version})</h3>
        <p>${sw.description}</p>
        <small>Size: ${sw.size}</small><br/>
        <button>Download</button>
      </div>
    `;
  });
}

function searchSoftware() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = softwareData.filter((sw) => sw.name.toLowerCase().includes(value));
  const container = document.getElementById("softwareList");
  container.innerHTML = "";
  filtered.forEach((sw) => {
    container.innerHTML += `
      <div class="software-item">
        <h3>${sw.name} (v${sw.version})</h3>
        <p>${sw.description}</p>
        <small>Size: ${sw.size}</small><br/>
        <button>Download</button>
      </div>
    `;
  });
}