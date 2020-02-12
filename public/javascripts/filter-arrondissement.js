import { filterInputs } from "./filter-checkbox.js"
import { toiletsDisplay } from "./filter-checkbox.js"

const toiletsApi = axios.create({
    baseURL: "http://localhost:3000"
});

let arrondSelector = document.getElementById("arrondissement");

arrondSelector.onchange = function (e) {
    var arrSelected = e.target.value;

    toiletsApi
        .get("/filter-arr", {
            params: {
                arrSelected
            }
        })
        .then(apiRes => {
            const toiletsToDisplayArr = apiRes.data;
            let toiletsArr = toiletsToDisplayArr.sort(function (a, b) {
                return parseFloat(a.arrondissement) - parseFloat(b.arrondissement);
            });
            toiletsDisplay(toiletsArr);
        })
        .catch(apiErr => console.error(apiErr));
}