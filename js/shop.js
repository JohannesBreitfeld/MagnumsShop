document.addEventListener("DOMContentLoaded", () =>{


const shopItems = [
{
    name:"Stihl MS 500i W",
    price: 20699,
    swordLength: "20 tum",
    cylinderSize: "79.2 cm³",
    output: "5 kW",
    weight: "6.3 kg",
    itemURL: "../img/shop/stihl500.avif",
    description: "Den första motorsågen med elektronisk bränsleinsprutning, STIHL Injection. Det bästa vikt-/effektförhållandet på marknaden. Idealisk för avverkning och kvistning i medelgrova bestånd tack vare den låga vikten och fantastiska accelerationen. Optimerat barkstöd, HD2-filter med mycket bra filtereffekt, integrerade muttrar på kopplingskåpan och verktygslös filterkåpa. Justerbar högpresterande oljepump, tanklocken skruvas av och på helt utan verktyg och skön handtagsvärme."
},
{
    name: "Stihl MS 661 C-M W",
    price: 20599,
    swordLength: "28 tum",
    cylinderSize: "91.1 cm³",
    output: "5.4 kW",
    weight: "7.5 kg",
    itemURL: "../img/shop/stihl661.avif",
    description: "Mycket stark högeffektsåg med den allra modernaste 2-MIX teknologin och handtagsvärme (W). Med STIHL M-Tronic under skalet har motorn optimerats för rappare acceleration och mer kraft. Dessutom regleras bränsleförbrukningen helelektroniskt och anpassas automatiskt till varje situation. Alltid optimal effekt och lägsta bränsleförbrukning. Byggd för extrema belastningar. Otroligt välbalanserad, bra vikt-/effektförhållande och låga vibrationer. Enkelt underhåll med HD2 luftfilter med radialtätning. Det bästa valet vid avverkning i grova bestånd. Inkl. svärd och kedja 71 cm."
},
{
    name: "Husqvarna 592 XPG",
    price: 18999,
    swordLength: "28 tum",
    cylinderSize: "92.7 cm³",
    output: "5.6 kW",
    weight: "7.6 kg",
    itemURL: "../img/shop/husqvarna592.png",
    description: "Husqvarna 592 XP® G är en högpresterande bensinmotorsåg med extrem kapacitet för tungt skogsbruk. Uppvärmda handtag förbättrar komforten och ger säkrare grepp. När du vill ha det bästa inom prestanda, tillförlitlighet och manövrerbarhet i kalla och fuktiga förhållanden är detta vår bästa bensinmotorsåg. Med AutoTune startar den alltid lätt och fungerar optimalt. Den kraftfulla X-Torq®-motorn och X-Cut®-kedjorna ger klassens bästa skärkapacitet. Kan utrustas med upp till 36 \" svärd X-Tough™ eller X-Tough™ Light."
},
{
    name: "Husqvarna 572 XPG",
    price: 14999,
    swordlength: "20 tum",
    cylinderSize: "70.6 cm³",
    output: "4.3 kW",
    weight: "6.6 kg",
    itemURL: "../img/shop/husqvarna572.avif",
    description: "Husqvarna 572 XP® motorsåg har designats för att vara starkare, lättare och tuffare - optimerad även för de hårdaste jobben. Med enastående skärprestanda och ett imponerande viktförhållande kan du vara produktiv i många timmar med Husqvarna 572XP. Den är byggd för effektivt arbete - oavsett förhållandena."
},
{
    name: "Husqvarna 550 XPG Mark II",
    price: 8999,
    swordlength: "15 tum",
    cylinderSize: "50.1 cm³",
    output: "3 kW",
    weight: "5.4 kg",
    itemURL: "../img/shop/husqvarna550xpg.avif",
    description: "60 år efter lanseringen av sin allra första motorsåg introducerar Husqvarna två helt nya 50cc motorsågar med ny design och konstruktion - 550 XP II och 550 XP G II! Det är en helt ny generation av motorsågar där alla viktiga komponenter är nya. Husqvarna 550 XP® G Mark II har överlägsen kapacitet och har genomgått den mest extrema testningen för att försäkra att den uppfyller förväntningarna hos de mest krävande mark- och skogsägarna."
}]

const items = document.getElementById("shop-items");

for (i = 0; i < shopItems.length; i++) {
    createCard(shopItems[i]);
    createModal(shopItems[i]);
  }

function createCard(shopItem) {
    const col = document.createElement("div");
    col.classList.add("col", "col-mt-3", "col-12", "col-md-6", "col-lg-4");
    
    const card = document.createElement("div");
    card.classList.add("card", "card-custom", "mx-auto");
  
    const cardImg = document.createElement("img");
    cardImg.setAttribute("loading", "lazy");
    cardImg.classList.add("card-img-top");
    cardImg.src = shopItem.itemURL;
    cardImg.alt = shopItem.name;
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("h5");
    cardTitle.innerText = `${shopItem.name}`;
    cardBody.appendChild(cardTitle);
    
    const cardPrice = document.createElement("h5");
    cardPrice.innerText = `${shopItem.price} SEK`;
    cardBody.appendChild(cardPrice);
  
    const addToCartBtn = document.createElement("button"); 
    addToCartBtn.classList.add("btn", "btn-card");
    addToCartBtn.textContent = "Lägg i varukorg";
    cardBody.appendChild(addToCartBtn);

    const readMoreBtn = document.createElement("button");
    readMoreBtn.classList.add("btn", "btn-card");
    readMoreBtn.classList.add("m-2");
    readMoreBtn.setAttribute("data-bs-toggle", "modal");
    readMoreBtn.setAttribute("data-bs-target", "#" + `modal-${shopItem.name.replace(/\s+/g, '-').toLowerCase()}`);
    readMoreBtn.textContent = "Mer info";
    cardBody.appendChild(readMoreBtn);
  
    addToCartBtn.onclick = function () {
      addToCart(shopItem);
    };
  
    card.appendChild(cardImg);
    card.appendChild(cardBody);

    col.appendChild(card)
  
    items.appendChild(col);
  }


function createModal(item) {
  const modal = document.createElement("div");
  modal.id = `modal-${item.name.replace(/\s+/g, '-').toLowerCase()}`
  modal.classList.add("modal", "fade");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = item.name;

  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.classList.add("btn-close");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const grid = document.createElement("div");
  grid.classList.add("modal-grid");
  
  const img = document.createElement("img");
  img.setAttribute("loading", "lazy");
  img.classList.add("mx-auto", "d-block", "rounded");
  img.src = item.itemURL;
  
  grid.appendChild(img);
  
  const description = document.createElement("p");
  description.classList.add("p-3")
  description.innerText = item.description;
  
  grid.appendChild(description);
  
  const info = document.createElement("ul");

  const swordLengthLi = document.createElement("li");
  swordLengthLi.textContent = `Svärdslängd: ${item.swordLength}`;
  info.appendChild(swordLengthLi);

  const cylinderSizeLi = document.createElement("li");
  cylinderSizeLi.textContent = `Cylinderstorlek: ${item.cylinderSize}`;
  info.appendChild(cylinderSizeLi);

  const outputLi = document.createElement("li");
  outputLi.textContent = `Effekt: ${item.output}`;
  info.appendChild(outputLi);

  const weightLi = document.createElement("li");
  weightLi.textContent = `Vikt: ${item.weight}`;
  info.appendChild(weightLi);
  
  grid.appendChild(info);
  
  const price = document.createElement("h2");
  price.classList.add("m-3");
  price.textContent = `${item.price} SEK`;
  
  grid.appendChild(price);
  modalBody.appendChild(grid);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer", "d-flex", "justify-content-between");

  
  const addToCartBtn = document.createElement("button");
  addToCartBtn.setAttribute("type", "button");
  addToCartBtn.classList.add("btn", "btn-success");
  addToCartBtn.textContent = "Lägg i varukorg";
  addToCartBtn.setAttribute("data-bs-dismiss", "modal");
  
  addToCartBtn.onclick = function () {
    addToCart(item);
  };
  
  const goBackButton = document.createElement("button");
  goBackButton.setAttribute("type", "button");
  goBackButton.classList.add("btn");
  goBackButton.setAttribute("data-bs-dismiss", "modal");
  goBackButton.textContent = "Stäng";
  
  modalFooter.appendChild(goBackButton);
  modalFooter.appendChild(addToCartBtn);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);

  modal.appendChild(modalDialog);

  document.body.appendChild(modal);
}

})