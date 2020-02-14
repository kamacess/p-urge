// console.log("yo");
// import {
//     paginate,
//     createList
// } from "./list.js";
import {
    urlToLink,
    displayBaby,
    displayPRM,
    displaySink
} from "./list.js"

import {
    clearMarkers,
    displayMarkers
} from "./google.js"

let toiletsToDisplay;
const toiletsApi = axios.create({
    baseURL: "https://pipinterest.herokuapp.com/"
});

function filterInputs(e) {
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
            // Loop pour nettoyer les markers.
            //Loop pour remettre les markers;
            let toilets = toiletsToDisplay.sort(function (a, b) {
                return parseFloat(a.arrondissement) - parseFloat(b.arrondissement);
            });
            toiletsDisplay(toilets);
            clearMarkers();
            displayMarkers(toilets);

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
        toiletElement.innerHTML = `<td class="arrondissement"><a href="/${toilet._id}"><img class="see-toilet" src="../images/66781528-wc-wc-icono-del-vector.jpg" alt="toilet"></a>${toilet.arrondissement}</td>
            <td>${toilet.adresse}</td>
            <td>${displayBaby(toilet.relais_bebe)}</td>
            <td>${displaySink(toilet.lavabo)}</td>
            <td>${displayPRM(toilet.acces_pmr)}</td>
            <td>${toilet.type}</td>
            <td>${urlToLink(toilet.horaire)}</td>`

        toiletsParent.appendChild(toiletElement);
    });
};