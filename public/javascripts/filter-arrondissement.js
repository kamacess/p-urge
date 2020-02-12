import { filterInputs } from "./filter-checkbox.js"
import { toiletsDisplay } from "./filter-checkbox.js"

const toiletsApi = axios.create({
    baseURL: "http://localhost:3000"
});

let arrondSelector = document.getElementById("arrondissement");

arrondSelector.onchange = function (e) {
    var selectedArr = e.target.value;

    const checkedInputs = document.querySelectorAll('.filters:checked');
    const search = [...checkedInputs].reduce((a, v) => {
        a[v.name] = true;
        return a;
    }, {});

    toiletsApi
        .get("/filter", {
            params: {
                selectedArr,
                search
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