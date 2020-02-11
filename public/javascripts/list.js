function createList() {
    toilets = JSON.parse(document.getElementById("toilets_batch").value);
    var containerElement = document.getElementById("tbody-list");

    toilets.forEach(toilet => {
        var toiletElement = document.createElement("tr");
        toiletElement.classList.add("element-list")
        toiletElement.innerHTML = `<td>${toilet.arrondissement}</td>
        <td>${toilet.adresse}</td>
        <td>${toilet.relais_bebe}</td>
        <td>${toilet.lavabo}</td>
        <td>${toilet.acces_pmr}</td>
        <td>${toilet.type}</td>
        <td>${toilet.horaire}</td>
        <td>${toilet.rate}</td>`
        containerElement.appendChild(toiletElement);
    })
};

createList();