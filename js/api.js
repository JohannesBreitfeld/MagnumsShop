document.addEventListener("DOMContentLoaded", () =>{

    fetch("https://randomuser.me/api/?results=3&seed=magnum&inc=name,phone,picture")
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then(data => {
        const cardContainer = document.getElementById("staff-container");

        const row = document.createElement("div");
        row.classList.add("row");
        cardContainer.appendChild(row);

        data.results.forEach(element => {
            const email = `${element.name.first.toLowerCase()}.${element.name.last.toLowerCase()}@magnumab.se`;

            const col = document.createElement("div")
            col.classList.add("col");
            row.appendChild(col);
            
            const card = document.createElement("div");
            card.classList.add("card", "mx-auto", "m-4");
            card.style.width = "20rem";
            card.innerHTML = 
            `<img src="${element.picture.medium}" class="card-img-top rounded-circle p-3" alt="Profile Picture">
            <div class="card-body">
                <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
                <p class="card-text">Telefon: ${element.phone}</p>
                <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
            </div>`;

            col.appendChild(card);
        });
    });
});