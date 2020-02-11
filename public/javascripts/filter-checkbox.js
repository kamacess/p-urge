console.log("yo");

let toiletsToDisplay;
const toiletsApi = axios.create({
    baseURL: "http://localhost:3000"
});


function filterInputs(e) {
    // récupère tous les input checked
    const checkedInputs = document.querySelectorAll('.filters:checked');

    // fabrique un objet avec les clés (name) de chaque input checked associé à la valeur true
    const search = [...checkedInputs].reduce((a, v) => {
        a[v.name] = true;
        return a;
    }, {});

    // get le resultat du serveur
    toiletsApi.get("/filter", {
            params: {
                search
            }
        })
        .then(apiRes => {
            toiletsToDisplay = apiRes.data;
            toiletsDisplay();
        })
        .catch(apiErr => console.error(apiErr));
}

document.querySelectorAll('.filters').forEach(
    input => input.oninput = filterInputs
);

function toiletsDisplay() {
    const toiletsParent = document.getElementById("tbody-list");
    toiletsParent.innerHTML = "";
    toiletsToDisplay.forEach(toilet => {
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