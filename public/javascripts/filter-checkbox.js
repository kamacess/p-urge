// console.log("yo");
// import {
//     paginate,
//     createList
// } from "./list.js";

let toiletsToDisplay;
const toiletsApi = axios.create({
    baseURL: "http://localhost:3000"
});

export function filterInputs(e) {
    // récupère tous les input checked
    const checkedInputs = document.querySelectorAll('.filters:checked');

    // fabrique un objet avec les clés (name) de chaque input checked associé à la valeur true
    const search = [...checkedInputs].reduce((a, v) => {
        a[v.name] = true;
        return a;
    }, {});

    let arrondSelector = document.getElementById("arrondissement");
    let selectedArr = arrondSelector.options[arrondSelector.selectedIndex].value


    // get le resultat du serveur
    toiletsApi.get("/filter", {
            params: {
                search,
                selectedArr
            }
        })
        .then(apiRes => {
            console.log(apiRes);
            var containerElement = document.getElementById("tbody-list");
            containerElement.innerHTML = "";
            toiletsToDisplay = apiRes.data;
            let toilets = toiletsToDisplay.sort(function (a, b) {
                return parseFloat(a.arrondissement) - parseFloat(b.arrondissement);
            });
            toiletsDisplay(toilets);

        })
        .catch(apiErr => console.error(apiErr));
};

document.querySelectorAll('.filters').forEach(
    input => input.oninput = filterInputs
);

export function toiletsDisplay(items) {
    const toiletsParent = document.getElementById("tbody-list");
    toiletsParent.innerHTML = "";
    items.forEach(toilet => {
        var toiletElement = document.createElement("tr");
        toiletElement.innerHTML = `<td>${toilet.arrondissement}</td>
                        <td>${toilet.adresse}</td>
                        <td>${toilet.relais_bebe}</td>
                        <td>${toilet.lavabo}</td>
                        <td>${toilet.acces_pmr}</td>
                        <td>${toilet.type}</td>
                        <td>${toilet.horaire}</td>
                        <td>${toilet.rate}</td>`

        toiletsParent.appendChild(toiletElement);
    });
};

