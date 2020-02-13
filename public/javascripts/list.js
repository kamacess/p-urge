console.log("yo");

var toiletsFromDB;
toiletsFromDB = JSON.parse(document.getElementById("toilets_batch").value);
var containerElement = document.getElementById("tbody-list");
// console.log(toiletsFromDB)

let toilets = toiletsFromDB.sort(function (a, b) {
        return parseFloat(a.arrondissement) - parseFloat(b.arrondissement);
    });

function createList(items) {
    items.forEach(toilet => {
        var toiletElement = document.createElement("tr");
        toiletElement.classList.add("element-list")
        toiletElement.innerHTML = `<td class="arrondissement"><a href="/${toilet._id}"><img class="see-toilet" src="../images/66781528-wc-wc-icono-del-vector.jpg" alt="toilet"></a>${toilet.arrondissement}</td>
        <td>${toilet.adresse}</td>
        <td>${displayBaby(toilet.relais_bebe)}</td>
        <td>${displaySink(toilet.lavabo)}</td>
        <td>${displayPRM(toilet.acces_pmr)}</td>
        <td>${toilet.type}</td>
        <td>${urlToLink(toilet.horaire)}</td>
        <td>${toilet.rate}</td>`
        containerElement.appendChild(toiletElement);
    })
};


// fonctions

// transformer url en lien
export function urlToLink (string) {
    const maybe = `<img src="./images/question-circle-solid.svg" alt="we don't know">`
    if (!string) {
        return maybe;
    } else if (
        string.length < 12) {
            return string;
        }
        else {
            return `<a target="_blank" href=${string}>working hours</a>`;
        }
};

// remplacer relais bébé par icone


export function displayBaby (relaisBebe) {
    const babyIcon = `<img src="./images/baby-solid.svg" alt="baby changing station">`;
    const noBabyIcon = `<img src="./images/times-circle-solid.svg" alt="no baby changing station">`;
    if (!relaisBebe) {
        return noBabyIcon;
    } else {
        return babyIcon ;
    }
};

// remplacer pmr par icones
export function displayPRM (accesPMR) {
    const pmrIcon = `<img src="./images/accessible.svg" alt="accessible">`;
    const noPMRIcon = `<img src="./images/times-circle-solid.svg" alt="not accessible">`;
    if (!accesPMR) {
        return noPMRIcon;
    } else {
        return pmrIcon ;
    }
};

// remplacer les éviers par des icones
export function displaySink (sink) {
    const yesSink   = `<img src="./images/accessible.svg" alt="there is a sink in the stall">`;
    const noSink    = `<img src="./images/times-circle-solid.svg" alt="no sink in the stall">`;
    const maybeSink = `<img src="./images/question-circle-solid.svg" alt="we don't know">`;

    if (sink) {
        return yesSink ;
    } else if (typeof (sink) == undefined) {
        return maybeSink ;
    } else {
        return noSink ;
    }
} ;



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