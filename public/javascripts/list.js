var toiletsFromDB;
toiletsFromDB = JSON.parse(document.getElementById("toilets_batch").value);
var containerElement = document.getElementById("tbody-list");
// console.log(toiletsFromDB)

let toilets = toiletsFromDB.sort(function (a, b) {
        return parseFloat(a.arrondissement) - parseFloat(b.arrondissement);
    });

export function createList(items) {
    items.forEach(toilet => {
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

createList(toilets);

// let currentPage = 1;
// const pageSize = 10;
// let itemsCount = toilets.length;

// let currentBtn = document.getElementById("current-btn");
// let previousBtn = document.getElementById("btn-previous");
// let nextBtn = document.getElementById("btn-next");

// window.onload = function() {
//     let newToilets = paginate(toilets, currentPage, pageSize);
//    createList(newToilets);
// };

// previousBtn.onclick = function() {
//     containerElement.innerHTML = " ";
//     currentPage = currentPage - 1;
//     let newToilets = paginate(toilets, currentPage, pageSize);
//     createList(newToilets);
// }

// nextBtn.onclick = function() {
//     containerElement.innerHTML = " ";
//     currentPage = currentPage + 1;
//     let newToilets = paginate(toilets, currentPage, pageSize);
//     createList(newToilets);
// }

// export function paginate(items, currentPage, pageSize) {
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = pageSize;
//     return [...items].splice(startIndex, endIndex);
// } 