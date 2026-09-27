  const chosen = Object.keys(phones).slice(0, 3);
  const pickers = document.getElementById("pickers");
  const specsBox = document.getElementById("specs");
 
  chosen.forEach((_, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="phone" id="phone${i}"></div>
      <select id="sel${i}">
        <option value="">Choose a phone</option>
        ${Object.keys(phones).map(k => `<option value="${k}">${phones[k].name}</option>`).join("")}
      </select>
      <p class="price" id="price${i}"></p>`;
    pickers.appendChild(card);
    card.querySelector("select").addEventListener("change", e => {
      chosen[i] = e.target.value;
      render();
    });
  });
 
  function render() {
    chosen.forEach((key, i) => {
      const p = phones[key];
      const phone = document.getElementById("phone" + i);
      document.getElementById("sel" + i).value = key;
      document.getElementById("price" + i).textContent = p ? p.price + "DH" : "";
      phone.className = p ? "phone" : "phone empty";
      phone.innerHTML = "";
      if (p && p.image) {
      phone.className = "phone has-img";
      phone.style.background = "";
    phone.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
}    });
 
    specsBox.innerHTML = specs.map(([field, label]) => {
      const values = chosen.map(k => phones[k] ? phones[k][field] : "—");
      const real = chosen.filter(k => phones[k]).map(k => phones[k][field]);
      const differs = new Set(real).size > 1;
      return `<div class="spec ${differs ? "diff" : ""}">
       <div class="cols">${values.map(v => `<div><p class="label">${label}</p>${v}</div>`).join("")}</div>
      </div>`;
    }).join("");
  }
 
  render();