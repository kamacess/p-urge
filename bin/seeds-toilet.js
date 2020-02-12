const toiletModel = require("../models/Toilet");
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

function deleteUnusefulKeys() {
    toilets.forEach(toilet => {
        delete toilet.datasetid;
        delete toilet.fields.geo_shape;
        delete toilet.geometry;
        delete toilet.record_timestamp;
    })
};

function moveProperties() {
    toilets.forEach(toilet => {
        toilet.arrondissement = toilet.fields.arrondissement;
        toilet.adresse = toilet.fields.adresse;
        toilet.geo_point_2d = toilet.fields.geo_point_2d;
        toilet.horaire = toilet.fields.horaire;
        toilet.type = toilet.fields.type;
        toilet.acces_pmr = toilet.fields.acces_pmr;
        toilet.relais_bebe = toilet.fields.relais_bebe;
        toilet.url_fiche_equipement = toilet.fields.url_fiche_equipement;
        delete toilet.fields;
    })
};

function ficheEquipement() {
    toilets.forEach(toilet => {
        if (toilet.url_fiche_equipement) {
            toilet.horaire = toilet.url_fiche_equipement;
            delete toilet.url_fiche_equipement;
        };
    });
};

function stringToBoolean() {
    toilets.forEach(toilet => {
        if (toilet.acces_pmr === "Oui") {
            toilet.acces_pmr = true;
        } else {
            toilet.acces_pmr = false;
        }

        if (toilet.relais_bebe === "Oui") {
            toilet.relais_bebe = true;
        } else {
            toilet.relais_bebe = false;
        };
    });
};

function reorganizeDB() {
    deleteUnusefulKeys();
    moveProperties();
    ficheEquipement();
    stringToBoolean();
    return toilets;
}

const toilets = [{
    "datasetid": "sanisettesparis",
    "recordid": "ec82777a15991fadf72507964475924f96d02eb1",
    "fields": {
        "arrondissement": "75020",
        "adresse": "101 RUE ALEXANDRE DUMAS",
        "geo_point_2d": [48.8554039878, 2.40008152078],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.400081520777228, 48.85540398776891]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40008152078, 48.8554039878]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "919c01041a34a5e38716c17f3e215af9387d742e",
    "fields": {
        "arrondissement": "75020",
        "adresse": "118 BOULEVARD DE CHARONNE",
        "geo_point_2d": [48.8547611226, 2.39595516696],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.395955166955249, 48.854761122611706]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39595516696, 48.8547611226]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "101df7fc8e8b1171ba8c17ef900e0d07cc50dbed",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 375 RUE DES PYRENEES",
        "geo_point_2d": [48.8736801854, 2.38975171511],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.389751715108937, 48.87368018535096]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38975171511, 48.8736801854]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "684041b8cb1d33dd425894e439aec027162ce46e",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN HENRI SAUVAGE",
        "geo_point_2d": [48.8941221607, 2.3523880449],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352388044903167, 48.89412216072535]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-henri-sauvage-ex-square-amiraux-boinod-2702",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3523880449, 48.8941221607]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a075fe8ed9d6481bdd4ad4adf409f5d79d930a41",
    "fields": {
        "arrondissement": "75011",
        "adresse": "195 BOULEVARD VOLTAIRE",
        "geo_point_2d": [48.8532924503, 2.38788033423],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.387880334234302, 48.85329245030504]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38788033423, 48.8532924503]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ed3ac09dcb6d32d90a2d0a3323266e0a99ff6f9e",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 86 BOULEVARD RICHARD LENOIR",
        "geo_point_2d": [48.861740756, 2.37266335372],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.372663353723671, 48.861740756010526]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37266335372, 48.861740756]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1def1ca107524fab36d34d7743ea2e62082bbeb7",
    "fields": {
        "arrondissement": "75012",
        "adresse": "26 BOULEVARD DE REUILLY",
        "geo_point_2d": [48.8391653442, 2.39230258736],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.392302587363353, 48.839165344213626]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39230258736, 48.8391653442]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "980f3a743d7d8b86e98d2281c457e4f7166be72c",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 19 RUE LEON LHERMITTE",
        "geo_point_2d": [48.8428648417, 2.29781054041],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.297810540412148, 48.842864841659846]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29781054041, 48.8428648417]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4894f6507c78e8fd4102c11c7f056da36f832c28",
    "fields": {
        "arrondissement": "75019",
        "adresse": "RUE BOTZARIS",
        "geo_point_2d": [48.8793838902, 2.38442044336],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384420443356067, 48.87938389016797]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38442044336, 48.8793838902]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8593cdb827734fce8835b6cc83ac6df1d103eb54",
    "fields": {
        "arrondissement": "75001",
        "adresse": "17 AVENUE VICTORIA",
        "geo_point_2d": [48.8579704399, 2.34653567266],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346535672660024, 48.85797043992712]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34653567266, 48.8579704399]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "52df13f96cf71f49cfd6acf0a41ce4a7e0fc1cee",
    "fields": {
        "arrondissement": "75006",
        "adresse": "AVENUE DE L OBSERVATOIRE",
        "geo_point_2d": [48.8422241004, 2.33722842443],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.337228424428142, 48.8422241004166]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33722842443, 48.8422241004]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "84f8fdb6ec2a091bbb01e0024d78e91899584a34",
    "fields": {
        "arrondissement": "75007",
        "adresse": "40 RUE DE SEVRES",
        "geo_point_2d": [48.8498348768, 2.32305465508],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.323054655081175, 48.849834876751956]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32305465508, 48.8498348768]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "18bb2429dfb2f0ffe0fbde575b42e55cfb66b6cc",
    "fields": {
        "arrondissement": "75016",
        "adresse": "PARC DE PASSY",
        "geo_point_2d": [48.8553646406, 2.28298011258],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.282980112576101, 48.85536464055761]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-passy-2625",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28298011258, 48.8553646406]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "491f6f8ef99c20b6d0c019a5775bb7b5267ad4c7",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN NATUREL-PIERRE EMMANUEL",
        "geo_point_2d": [48.8587379234, 2.39912874955],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.399128749545261, 48.85873792339389]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-lesseps-17432",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39912874955, 48.8587379234]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d1ec468de6f9e9a5941b425ab65cb19507a5c8e3",
    "fields": {
        "arrondissement": "75018",
        "adresse": "96 BOULEVARD BARBES",
        "geo_point_2d": [48.8914363904, 2.34974114414],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3497411441355602, 48.891436390444895]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34974114414, 48.8914363904]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3a8811907cd6b85ff34bca0bf01b5829a838deb9",
    "fields": {
        "arrondissement": "75018",
        "adresse": "11 RUE FRANCIS DE CROISSET",
        "geo_point_2d": [48.8993882155, 2.34445799806],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34445799806018, 48.899388215542245]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34445799806, 48.8993882155]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3a9c51682e574d16167666eaa2a896a0b97e31de",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 90 BOULEVARD DE LA CHAPELLE",
        "geo_point_2d": [48.8840786533, 2.35342926719],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353429267194319, 48.88407865331643]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35342926719, 48.8840786533]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ac11572959c57bcb2c6aabcdb8e2eaa25b71e0a8",
    "fields": {
        "arrondissement": "75004",
        "adresse": "Sous le pont Louis Philippe",
        "geo_point_2d": [48.8542022746, 2.35464439359],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3546443935860673, 48.854202274636556]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35464439359, 48.8542022746]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "719bc94e880a8724854e14a02e0a70261687f393",
    "fields": {
        "arrondissement": "75007",
        "adresse": "Parc Rives de Seine",
        "geo_point_2d": [48.8626080941, 2.31956798295],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.319567982948122, 48.86260809408295]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31956798295, 48.8626080941]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "054ca8ad6ccf2cb69cde5cbfefaec5a253a7f293",
    "fields": {
        "arrondissement": "75014",
        "adresse": "Boulevard Arago",
        "geo_point_2d": [48.8346877946, 2.34082769223],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.340827692229535, 48.834687794602694]
            ]
        },
        "type": "WC PUBLICS PERMANENTS"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34082769223, 48.8346877946]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "66ae88f20cc5cb83e7b342eba45b61b00642e59a",
    "fields": {
        "arrondissement": "75017",
        "adresse": "2 RUE JACQUES KELLNER",
        "geo_point_2d": [48.8958355574, 2.32804076334],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.328040763341667, 48.89583555740397]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32804076334, 48.8958355574]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0bffe7150e0964a69ee7d33743020295395556d2",
    "fields": {
        "arrondissement": "75012",
        "adresse": "BOIS DE VINCENNES - PLATEAU DE SAINT-MANDE",
        "geo_point_2d": [48.8431044829, 2.42041898219],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.420418982190451, 48.843104482922016]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-floral-de-paris-1",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.42041898219, 48.8431044829]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "41371aae0c2e6f452fe2ee35a34b6eacd95d312f",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE DES CHAMAILLARDS",
        "geo_point_2d": [48.8253636652, 2.36942950074],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3694295007426422, 48.82536366522392]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-chamaillards-2858",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36942950074, 48.8253636652]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d2c4a0edfb38ca54c8e5ef06951b864ad89a342f",
    "fields": {
        "arrondissement": "75020",
        "adresse": "PARC DE BELLEVILLE",
        "geo_point_2d": [48.8704589966, 2.38556177118],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.385561771177438, 48.870458996595254]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-des-couronnes-2748",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38556177118, 48.8704589966]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8a43f562fe6d0bf7059a71778221c559baab4c59",
    "fields": {
        "arrondissement": "75008",
        "adresse": "PARC MONCEAU",
        "geo_point_2d": [48.8802748534, 2.30907718914],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.309077189142378, 48.88027485340873]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-monceau-1804",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30907718914, 48.8802748534]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "988975ff80c4ec92fb3066e12a502b25741c762a",
    "fields": {
        "arrondissement": "75010",
        "adresse": "JARDIN VILLEMIN",
        "geo_point_2d": [48.8749518756, 2.36058658777],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360586587773963, 48.874951875627325]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-villemin-1798",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36058658777, 48.8749518756]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7b9c15e6566d236b519782fe5b313c77cff13e38",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN DES GRANDS MOULINS - ABBE PIERRE - JARDIN CENTRAL",
        "geo_point_2d": [48.8296167198, 2.379618716],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379618715998577, 48.829616719758995]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardins-abbe-pierre-grands-moulins-5044",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.379618716, 48.8296167198]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f80787280d62968001b25952b994e2214c644990",
    "fields": {
        "arrondissement": "75019",
        "adresse": "92 RUE CURIAL",
        "geo_point_2d": [48.8958345397, 2.37566147354],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375661473541838, 48.895834539709824]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37566147354, 48.8958345397]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ced0ea485d0f12807163cf97915bf67f36b42700",
    "fields": {
        "arrondissement": "75014",
        "adresse": "3 RUE MAURICE NOGUES",
        "geo_point_2d": [48.8262316593, 2.30534375608],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.305343756075016, 48.8262316593121]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30534375608, 48.8262316593]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "15d016d91f7064bd78d77a4bc192cfce06643c90",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 297 BOULEVARD RASPAIL",
        "geo_point_2d": [48.8348104885, 2.33211876977],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.332118769771474, 48.83481048849862]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33211876977, 48.8348104885]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4257deff01e4f572babe1a1e6daab345510033db",
    "fields": {
        "arrondissement": "75014",
        "adresse": "21 RUE DE GERGOVIE",
        "geo_point_2d": [48.8339254357, 2.31456172136],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.314561721364447, 48.83392543569296]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31456172136, 48.8339254357]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e6b2cac3554350a2f958d9f439118427c79107c5",
    "fields": {
        "arrondissement": "75014",
        "adresse": "82 BOULEVARD BRUNE",
        "geo_point_2d": [48.8252447708, 2.31580730337],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.315807303367719, 48.82524477082927]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31580730337, 48.8252447708]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d6bf738bb02e3a1f20f88838fb0253d318c039b4",
    "fields": {
        "arrondissement": "75011",
        "adresse": "164 BOULEVARD VOLTAIRE",
        "geo_point_2d": [48.8556437652, 2.38355339725],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.383553397253159, 48.85564376523424]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38355339725, 48.8556437652]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "492a3f32779dda2f028e003f4d2186aab2cf8065",
    "fields": {
        "arrondissement": "75012",
        "adresse": "36 AVENUE DAUMESNIL",
        "geo_point_2d": [48.8492392927, 2.37108368197],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.371083681974044, 48.849239292689276]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37108368197, 48.8492392927]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a9a2df487b7219b47379e0894a1a306e0be10af3",
    "fields": {
        "arrondissement": "75015",
        "adresse": "4 PLACE DE BRETEUIL",
        "geo_point_2d": [48.84733414, 2.31095989864],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3109598986410163, 48.847334139971686]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31095989864, 48.84733414]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "07fada0f0cea60fed26275520f159861a588e3b6",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 5 PLACE DU COMMERCE",
        "geo_point_2d": [48.8453782139, 2.29218246786],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.292182467856254, 48.845378213876145]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29218246786, 48.8453782139]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "67f9adcadf33f12b7693429b1b6c8f3c56a86ff5",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOULEVARD SUCHET",
        "geo_point_2d": [48.8623619666, 2.26822808579],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.26822808578965, 48.86236196660649]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26822808579, 48.8623619666]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d3d2e88c892c718cb7c063a7187432a8dbcf94ad",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOULEVARD MURAT",
        "geo_point_2d": [48.8422349218, 2.25617823467],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.25617823466615, 48.84223492178065]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25617823467, 48.8422349218]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6e1bac6eb1416b00f6421915412d47f7339470f4",
    "fields": {
        "arrondissement": "75019",
        "adresse": "face 45 AVENUE SIMON BOLIVAR",
        "geo_point_2d": [48.8762331646, 2.38054129425],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3805412942459823, 48.87623316458195]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38054129425, 48.8762331646]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ef78ad713769363cb308ca59a939ea35896bcefa",
    "fields": {
        "arrondissement": "75004",
        "adresse": "8 RUE D ARCOLE",
        "geo_point_2d": [48.8540198901, 2.34939889103],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349398891032556, 48.8540198901374]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34939889103, 48.8540198901]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8958bf683a17244df628a9ebe857e40f1fb28155",
    "fields": {
        "arrondissement": "75005",
        "adresse": "RUE CUVIER",
        "geo_point_2d": [48.8443966026, 2.36039469716],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360394697155951, 48.844396602628855]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36039469716, 48.8443966026]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fbe13c01d345116abf47af131d69bee6fead41b2",
    "fields": {
        "arrondissement": "75008",
        "adresse": "4 AVENUE FRANKLIN D ROOSEVELT",
        "geo_point_2d": [48.8701413131, 2.31016091816],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.310160918160172, 48.870141313145176]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31016091816, 48.8701413131]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b82b39884224fdf21f88b0ee3354e5b1eaa94f99",
    "fields": {
        "arrondissement": "75008",
        "adresse": "oppos\u00e9 au 44 AVENUE GABRIEL",
        "geo_point_2d": [48.8694709562, 2.31276020722],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.31276020722228, 48.86947095623877]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31276020722, 48.8694709562]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cd549a7f8065e493bb28b4325fd4738a857b2932",
    "fields": {
        "arrondissement": "75013",
        "adresse": "38 RUE DU CHEVALERET",
        "geo_point_2d": [48.8282285083, 2.37673420191],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376734201906194, 48.82822850829954]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37673420191, 48.8282285083]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0d91ef4a885dfc9867c75d3b7645f23f113bbf19",
    "fields": {
        "arrondissement": "75012",
        "adresse": "SQUARE TROUSSEAU",
        "geo_point_2d": [48.8500219213, 2.37696622172],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376966221720433, 48.850021921320916]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-trousseau-2576",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37696622172, 48.8500219213]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6aaeba9ef281b8c0f7ebd991372a8331e9f10521",
    "fields": {
        "arrondissement": "75017",
        "adresse": "JARDIN CLAIRE MOTTE",
        "geo_point_2d": [48.8918972348, 2.30414277451],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.304142774509969, 48.8918972348062]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-claire-motte-2820",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30414277451, 48.8918972348]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cde046290e5d2ec96fdbe5609cd4fdb3c13af2a2",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE DU PASSAGE LEON",
        "geo_point_2d": [48.8858973604, 2.35332364935],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353323649348037, 48.88589736039941]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-saint-bernard-said-bouziri-2686",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35332364935, 48.8858973604]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0fd7deb3a45fdeafba958b9d6893d7f70e4fbec0",
    "fields": {
        "arrondissement": "75018",
        "adresse": "2 AVENUE DE LA PORTE DE SAINT OUEN",
        "geo_point_2d": [48.8978997151, 2.32937581748],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.329375817479652, 48.8978997150531]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32937581748, 48.8978997151]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d4ebf86a69346a8157daeca8e66efb44cdaf143f",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 3 BOULEVARD NEY",
        "geo_point_2d": [48.8987733108, 2.36929812815],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369298128147713, 48.89877331075298]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36929812815, 48.8987733108]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "560461de7768211f30b8090a9e8d8c9e0a0cfd01",
    "fields": {
        "arrondissement": "75018",
        "adresse": "23 BOULEVARD NEY",
        "geo_point_2d": [48.8984120785, 2.36238660311],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.362386603106507, 48.8984120785467]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36238660311, 48.8984120785]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d008e2ce7216a62a5ff3cbeba3f3a196e1120b28",
    "fields": {
        "arrondissement": "75018",
        "adresse": "oppos\u00e9 au 35 RUE BOINOD",
        "geo_point_2d": [48.8941300556, 2.35176286507],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351762865066177, 48.89413005564075]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35176286507, 48.8941300556]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "adfbc68530795823981f7b4241d6cab96c8bfe5d",
    "fields": {
        "arrondissement": "75017",
        "adresse": "64 AVENUE DE LA GRANDE ARMEE",
        "geo_point_2d": [48.8769298905, 2.28595030976],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.285950309757018, 48.876929890462364]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28595030976, 48.8769298905]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dc7321974ce1587e4d364bf02518fc464b50709b",
    "fields": {
        "arrondissement": "75012",
        "adresse": "BOIS DE VINCENNES - DAUMESNIL",
        "geo_point_2d": [48.8327776209, 2.41429984862],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.414299848616877, 48.832777620888024]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-floral-de-paris-1",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41429984862, 48.8327776209]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "713e10c464433e5c74e1107a2edb7c565364d912",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN DU MOULIN DE LA POINTE",
        "geo_point_2d": [48.8210141275, 2.35678871658],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3567887165785, 48.82101412751668]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-du-monument-aux-meres-francaises-2564",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35678871658, 48.8210141275]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bfb6ecf01905fc301c5a8c97e36076beb8658ded",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE FERDINAND BRUNOT",
        "geo_point_2d": [48.8322924338, 2.32688024224],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.32688024224376, 48.83229243383418]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-de-l-aspirant-dunand-2543",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32688024224, 48.8322924338]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "02dc89c66cc61a5011511b75aab2602b6211e316",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE DU CARDINAL WYSZINSKI",
        "geo_point_2d": [48.8365453738, 2.31640280653],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.316402806531694, 48.83654537380639]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-cardinal-wyszynski-2549",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31640280653, 48.8365453738]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "39971dc6244b62398d5c466fe18975759196f77a",
    "fields": {
        "arrondissement": "75014",
        "adresse": "PARC MONTSOURIS",
        "geo_point_2d": [48.8212352843, 2.3360474471],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336047447095454, 48.82123528431707]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3360474471, 48.8212352843]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "915aa26bdd8e5ff44fe6d272a6e01ddaeb5d6ece",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDIN DES POETES",
        "geo_point_2d": [48.8476244281, 2.25666350836],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.256663508363861, 48.84762442808566]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-poetes-2778",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25666350836, 48.8476244281]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "70d49935ca1eca21aa04f853a7255c8325f9e843",
    "fields": {
        "arrondissement": "75017",
        "adresse": "JARDIN PAUL DIDIER",
        "geo_point_2d": [48.8954613016, 2.32048564114],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.320485641136297, 48.89546130163388]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-paul-didier-ex-colonel-manhes-2819",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32048564114, 48.8954613016]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0ad7eb869998033ff89b535b178098b46f3c4b65",
    "fields": {
        "arrondissement": "75012",
        "adresse": "COULEE VERTE RENE DUMONT - PROMENADE DU VIADUC DES ARTS",
        "geo_point_2d": [48.8443565988, 2.38199687803],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.381996878028027, 48.84435659883765]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-philippe-farine-ex-square-du-mail-gatbois-2601",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38199687803, 48.8443565988]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ef0ff299885af2e62c7482adc577643f4e034e26",
    "fields": {
        "arrondissement": "75010",
        "adresse": "SQUARE JULIETTE DODU",
        "geo_point_2d": [48.8756690962, 2.36938049926],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369380499264761, 48.875669096203]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-juliette-dodu-2836",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36938049926, 48.8756690962]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c69511c6666e0aa5b777b55e8070615e750eebb3",
    "fields": {
        "arrondissement": "75020",
        "adresse": "AVENUE DU PROFESSEUR ANDRE LEMIERE",
        "geo_point_2d": [48.8583381132, 2.41471511141],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.414715111410584, 48.858338113156115]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41471511141, 48.8583381132]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2f00d96b196a4d27c223b1b3de8d5a3e4bf690d4",
    "fields": {
        "arrondissement": "75020",
        "adresse": "34 BOULEVARD DE BELLEVILLE",
        "geo_point_2d": [48.8683430116, 2.38189799585],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.381897995848262, 48.86834301160022]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38189799585, 48.8683430116]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2abfa62df23fbfbf1f3e8a422586e1cdfb657d82",
    "fields": {
        "arrondissement": "75020",
        "adresse": "RUE DE LA CROIX SAINT SIMON",
        "geo_point_2d": [48.8557718805, 2.40991820349],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.409918203488957, 48.85577188047997]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40991820349, 48.8557718805]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "feb548195d86afb353c128f6e30b8f54ce1a8144",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 14 AVENUE RENE COTY",
        "geo_point_2d": [48.8303689535, 2.33383416955],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.333834169548373, 48.83036895346169]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33383416955, 48.8303689535]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f628eee3b239f7c5aec5d4720f4eb662585e3f55",
    "fields": {
        "arrondissement": "75011",
        "adresse": "123 BOULEVARD RICHARD LENOIR",
        "geo_point_2d": [48.8658415626, 2.36937734013],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369377340131359, 48.865841562591655]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36937734013, 48.8658415626]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bbe4779b5c4a80434b248b7e18836011c8697b3d",
    "fields": {
        "arrondissement": "75012",
        "adresse": "AVENUE DE NOGENT",
        "geo_point_2d": [48.8441411952, 2.44113275427],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.441132754272187, 48.84414119521416]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.44113275427, 48.8441411952]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fb2abe0beb71b09ceebe57cd8818cb4c4dc83850",
    "fields": {
        "arrondissement": "75013",
        "adresse": "27 AVENUE D IVRY",
        "geo_point_2d": [48.8226634808, 2.36685643453],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.366856434532854, 48.822663480818825]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36685643453, 48.8226634808]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "43734887e16dd258c3baf02bd9ea0021abb05739",
    "fields": {
        "arrondissement": "75013",
        "adresse": "face 159 AVENUE DE CHOISY",
        "geo_point_2d": [48.8281983658, 2.3584532011],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.358453201102807, 48.82819836579319]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3584532011, 48.8281983658]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "506eedf8adfa33e41e91969d169e6e21eb13a067",
    "fields": {
        "arrondissement": "75014",
        "adresse": "161 BOULEVARD BRUNE",
        "geo_point_2d": [48.8243414299, 2.3211169227],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.321116922699178, 48.824341429907726]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3211169227, 48.8243414299]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9c79c1c0bb2c6801f335694e828aaa5815a70778",
    "fields": {
        "arrondissement": "75015",
        "adresse": "RUE SAINT CHARLES",
        "geo_point_2d": [48.838073563, 2.27798287108],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.277982871077255, 48.83807356302151]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27798287108, 48.838073563]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2d7b929a557391c24dcf0d7fb89978e98cf888ba",
    "fields": {
        "arrondissement": "75015",
        "adresse": "92-102 RUE BLOMET",
        "geo_point_2d": [48.8409059865, 2.30028098082],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.300280980817689, 48.84090598651906]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30028098082, 48.8409059865]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5e8cc384196296a1f7375ec39b162ea34f467ed4",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 2 AVENUE EMILE ZOLA",
        "geo_point_2d": [48.8462434673, 2.27762806566],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.277628065658754, 48.84624346727107]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27762806566, 48.8462434673]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2b2466743dfe9441d55ba0b7e5d2522f91927b97",
    "fields": {
        "arrondissement": "75015",
        "adresse": "139 RUE DE L ABBE GROULT",
        "geo_point_2d": [48.8356684738, 2.30259574654],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.302595746538933, 48.83566847382635]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30259574654, 48.8356684738]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "300f559f0b8aae2607600960e448369174045382",
    "fields": {
        "arrondissement": "75005",
        "adresse": "9 AVENUE DES GOBELINS",
        "geo_point_2d": [48.8379520915, 2.3511865079],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351186507903939, 48.83795209152189]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3511865079, 48.8379520915]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a194fbbbd0ea52829f16e56158edb20a4f5124ff",
    "fields": {
        "arrondissement": "75010",
        "adresse": "20 BOULEVARD SAINT MARTIN",
        "geo_point_2d": [48.8689996563, 2.35617327573],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356173275732147, 48.86899965631393]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35617327573, 48.8689996563]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "58848f521f6969bd71dd508b76bce0a34a639e73",
    "fields": {
        "arrondissement": "75010",
        "adresse": "11 PLACE DE LA BATAILLE DE STALINGRAD",
        "geo_point_2d": [48.8835732713, 2.36874246427],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368742464268542, 48.88357327133694]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36874246427, 48.8835732713]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4f774fa265b14ed1a41ba3ada22c1a79d2c060d7",
    "fields": {
        "arrondissement": "75013",
        "adresse": "BOULEVARD DE L HOPITAL",
        "geo_point_2d": [48.839634279, 2.36175466682],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361754666816263, 48.83963427904555]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36175466682, 48.839634279]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "05f408977b5319729f1f11863a687bc5cbf4d9e7",
    "fields": {
        "arrondissement": "75013",
        "adresse": "46 RUE CHARLES MOUREU",
        "geo_point_2d": [48.8290821464, 2.36077831233],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360778312327731, 48.82908214644303]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36077831233, 48.8290821464]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6c3fac3a2bf7551ffba92a2ba23bf95a9841241a",
    "fields": {
        "arrondissement": "75013",
        "adresse": "oppos\u00e9 au 17 BOULEVARD AUGUSTE BLANQUI",
        "geo_point_2d": [48.8306262464, 2.3533725292],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3533725291965792, 48.830626246437575]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3533725292, 48.8306262464]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "02bfdc6b1cdece80acefa1c0c5343526bcaf27e1",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDINS DU TROCADERO",
        "geo_point_2d": [48.8625885234, 2.28905120098],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.289051200983527, 48.862588523356806]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardins-du-trocadero-1789",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28905120098, 48.8625885234]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0ee7b7e59d05a9610ab4800ef4fdf765adf6f802",
    "fields": {
        "arrondissement": "75017",
        "adresse": "SQUARE DES BATIGNOLLES",
        "geo_point_2d": [48.8871986836, 2.3172497878],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.317249787799816, 48.887198683574034]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-batignolles-1761",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3172497878, 48.8871986836]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1c8cc7a6b9e6e1fa7026ae515f844e5e7c410e10",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE CARPEAUX",
        "geo_point_2d": [48.8914764023, 2.33161927999],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.331619279991791, 48.8914764022923]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-carpeaux-2646",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33161927999, 48.8914764023]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e525505ef4527ed1329ad86798d1df17dd32aeaa",
    "fields": {
        "arrondissement": "75018",
        "adresse": "57 RUE DE LA CHAPELLE",
        "geo_point_2d": [48.895089557, 2.35883888312],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.358838883116348, 48.89508955698618]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35883888312, 48.895089557]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b17cf879df4d54bbe14282bb25e9add15d94526c",
    "fields": {
        "arrondissement": "75018",
        "adresse": "9 BOULEVARD NEY",
        "geo_point_2d": [48.8977589069, 2.34164200088],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.341642000883749, 48.89775890686294]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34164200088, 48.8977589069]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8558c672406772f5d147d7feecb466cbe99a427f",
    "fields": {
        "arrondissement": "75019",
        "adresse": "154 RUE D AUBERVILLIERS",
        "geo_point_2d": [48.8933841365, 2.3698556399],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369855639904201, 48.893384136510086]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3698556399, 48.8933841365]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "503bd23fb6284cb4946b54b4543e1932a99748c0",
    "fields": {
        "arrondissement": "75015",
        "adresse": "SQUARE SAINT-LAMBERT",
        "geo_point_2d": [48.8427745356, 2.29740606322],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.297406063222038, 48.84277453561847]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-saint-lambert-1768",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29740606322, 48.8427745356]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9f7624ed7d682ca1b72c8c139c5bff3f2c5a7d63",
    "fields": {
        "arrondissement": "75004",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8781242944, 2.37992746866],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379927468657876, 48.87812429440877]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37992746866, 48.8781242944]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9a61f28efd07f1168be2b919ec33b68ee987b929",
    "fields": {
        "arrondissement": "75004",
        "adresse": "SQUARE DE LA TOUR SAINT-JACQUES",
        "geo_point_2d": [48.8577865478, 2.34932127189],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349321271888649, 48.85778654782919]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-de-la-tour-saint-jacques-33",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34932127189, 48.8577865478]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a2e09bc3ef07ea45b3c5bf9bbe6f592b16aa5497",
    "fields": {
        "arrondissement": "75005",
        "adresse": "SQUARE PAUL LANGEVIN",
        "geo_point_2d": [48.8481553035, 2.34937339352],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3493733935162933, 48.848155303544004]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-paul-langevin-2446",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34937339352, 48.8481553035]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "92619c84a41490503f2e921b85eaf06cea6b81f9",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN JAMES JOYCE",
        "geo_point_2d": [48.8363216862, 2.3737508093],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.373750809302066, 48.836321686226896]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-james-joyce-2560",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3737508093, 48.8363216862]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f04305c557cb092da64396e0a66301b16434bdf4",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 4 PLACE MARTIN NADAUD",
        "geo_point_2d": [48.8649497413, 2.39471760216],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.394717602157618, 48.864949741311236]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39471760216, 48.8649497413]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5bf972db41daa254f7902a6b02946d35d1b66aea",
    "fields": {
        "arrondissement": "75020",
        "adresse": "4 RUE FERNAND LEGER",
        "geo_point_2d": [48.8637727551, 2.38912413726],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.389124137262356, 48.863772755076]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38912413726, 48.8637727551]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1876c104d3c5c1e80e09aaeec972facc6223670a",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN D'EOLE - TERRAIN DE BASKET",
        "geo_point_2d": [48.8866445422, 2.36501249488],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36501249488385, 48.88664454218722]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-francoise-helene-jourda-ex-20-rue-du-departement-18075",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36501249488, 48.8866445422]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "73b29deda69d0eac00bc3fd800568941b05cedf4",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE DE LA ZAC DIDOT",
        "geo_point_2d": [48.8337754306, 2.31989187191],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.319891871914879, 48.83377543055697]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-alberto-giacometti-2866",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31989187191, 48.8337754306]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "33d28894e1930f4ef247112871e768a6b5a5b944",
    "fields": {
        "arrondissement": "75019",
        "adresse": "face 5 AVENUE DE LAUMIERE",
        "geo_point_2d": [48.8830287826, 2.38142198709],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.381421987092033, 48.88302878255986]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38142198709, 48.8830287826]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "31ce4df8100e9b1476cd28c48d891e7d2d504b6c",
    "fields": {
        "arrondissement": "75011",
        "adresse": "44 AVENUE PHILIPPE AUGUSTE",
        "geo_point_2d": [48.8521369735, 2.39371833617],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.393718336174439, 48.85213697345383]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39371833617, 48.8521369735]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "029375bb5110e8e6c8b3de790edafe83e9edce30",
    "fields": {
        "arrondissement": "75012",
        "adresse": "29 RUE ROLAND BARTHES",
        "geo_point_2d": [48.8444926838, 2.37744418513],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.377444185134134, 48.8444926838465]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37744418513, 48.8444926838]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5ab17f79601978babeca46f35301b14fa5dd4567",
    "fields": {
        "arrondissement": "75012",
        "adresse": "54 BOULEVARD DE PICPUS",
        "geo_point_2d": [48.8436837709, 2.40188520621],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.4018852062099443, 48.84368377089712]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40188520621, 48.8436837709]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "00a0368ddd0a01d5a78bfee770f06c6848dbffd4",
    "fields": {
        "arrondissement": "75012",
        "adresse": "259bis AVENUE DAUMESNIL",
        "geo_point_2d": [48.8365136862, 2.40439414548],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.404394145483592, 48.83651368622266]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40439414548, 48.8365136862]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "22fd262b6724ffe7a204c7524cc72a983e6891f1",
    "fields": {
        "arrondissement": "75015",
        "adresse": "RUE DU THEATRE",
        "geo_point_2d": [48.8490352799, 2.28792008019],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.287920080193913, 48.849035279854085]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28792008019, 48.8490352799]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1619c087539a09efa58445902ffe092bd3fd0927",
    "fields": {
        "arrondissement": "75015",
        "adresse": "25 AVENUE DE LOWENDAL",
        "geo_point_2d": [48.8491847084, 2.30356403439],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3035640343865422, 48.849184708415834]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30356403439, 48.8491847084]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1c640e3e4cab3351ffbb8122c532b68d54daef7d",
    "fields": {
        "arrondissement": "75016",
        "adresse": "face 12 PLACE DES ETATS UNIS",
        "geo_point_2d": [48.8683025332, 2.2937401607],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.293740160699615, 48.86830253319043]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2937401607, 48.8683025332]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c44819359da733a629c7c9daf077c3ec493bfe35",
    "fields": {
        "arrondissement": "75016",
        "adresse": "16 AVENUE DU PARC DES PRINCES",
        "geo_point_2d": [48.8412299559, 2.25461090874],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.254610908740306, 48.84122995590826]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25461090874, 48.8412299559]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ad936919175f764712252800dc2dda59dbd23ede",
    "fields": {
        "arrondissement": "75019",
        "adresse": "177 AVENUE DE FLANDRE",
        "geo_point_2d": [48.8947410538, 2.38202690795],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.382026907945859, 48.89474105377586]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38202690795, 48.8947410538]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "60a256ba9089667c7ccaa3ab04f7fffecc968d57",
    "fields": {
        "arrondissement": "75003",
        "adresse": "82 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.865503514, 2.35224909127],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352249091270851, 48.86550351402496]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35224909127, 48.865503514]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "229aa887b2b13a6ea8c79f938ccc77537292b21c",
    "fields": {
        "arrondissement": "75004",
        "adresse": "10bis RUE DE MOUSSY",
        "geo_point_2d": [48.857832517, 2.35581305138],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.355813051381673, 48.857832517049154]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35581305138, 48.857832517]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4dca7f2e153dd90e10328fae0c3b2c4868ccc334",
    "fields": {
        "arrondissement": "75004",
        "adresse": "14 RUE SAINT MARTIN",
        "geo_point_2d": [48.8582009674, 2.34979759401],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349797594005607, 48.8582009673634]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34979759401, 48.8582009674]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "33a547157e719a25aad2042245f0d025a6bde52d",
    "fields": {
        "arrondissement": "75005",
        "adresse": "88 ter BOULEVARD DE PORT ROYAL",
        "geo_point_2d": [48.8392007126, 2.33873158816],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.338731588164609, 48.83920071261069]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33873158816, 48.8392007126]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "79f3e8e0780ead307e4a637f4ab19cca23fe0877",
    "fields": {
        "arrondissement": "75006",
        "adresse": "face 139 BOULEVARD SAINT MICHEL",
        "geo_point_2d": [48.8417544325, 2.33748462839],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.337484628388991, 48.841754432539545]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33748462839, 48.8417544325]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "44a691da1a4e30327f2e67f0e3e823fff2a32ef5",
    "fields": {
        "arrondissement": "75009",
        "adresse": "79bis RUE LA FAYETTE",
        "geo_point_2d": [48.8767420781, 2.34685265234],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346852652338503, 48.87674207808278]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34685265234, 48.8767420781]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4ae6933e0027a742083db3f0801ce4fc25da0009",
    "fields": {
        "arrondissement": "75010",
        "adresse": "RUE DU FAUBOURG SAINT MARTIN",
        "geo_point_2d": [48.8757495134, 2.36046357608],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360463576080205, 48.8757495133514]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36046357608, 48.8757495134]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "72e8ea569c38a27b274a577d4ff95b323b43281b",
    "fields": {
        "arrondissement": "75013",
        "adresse": "146 BOULEVARD DE L HOPITAL",
        "geo_point_2d": [48.8325839304, 2.35616416627],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356164166273496, 48.83258393040574]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35616416627, 48.8325839304]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2f8df7fafca5bb8b5a7c85d1d87e25e4c520c408",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 32 BOULEVARD EDGAR QUINET",
        "geo_point_2d": [48.8404714774, 2.3268312111],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.326831211101865, 48.84047147744346]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3268312111, 48.8404714774]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1e2eb08d115b51dcfe88204bf11bacd910ce205a",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDIN DES SERRES D'AUTEUIL",
        "geo_point_2d": [48.8477555684, 2.25148547436],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.251485474357265, 48.8477555684125]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-tchad-2622",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25148547436, 48.8477555684]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "05097ff0f1ba9ab682ca13c7d02db9d3d97178ef",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE DE LA RUE RENE BINET",
        "geo_point_2d": [48.8995352757, 2.33823327811],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.33823327811048, 48.8995352756746]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-rene-binet-2685",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33823327811, 48.8995352757]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "117a6ac525b633d8a191a33e6a5ea1fa4200afe8",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN DE LA RUE GINETTE NEVEU",
        "geo_point_2d": [48.9000169016, 2.34503508955],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.345035089551902, 48.90001690160741]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-de-la-rue-ginette-neveu-2654",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34503508955, 48.9000169016]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f6791fad4dc45b674405a4a02c3d223776aaaea0",
    "fields": {
        "arrondissement": "75004",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8794522547, 2.38272924617],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.382729246173077, 48.87945225471853]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38272924617, 48.8794522547]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6d201bc7eb341d8f4884e4a0e22028ec5fd4f0dc",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE SEVERINE",
        "geo_point_2d": [48.8662619158, 2.40976262845],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.4097626284528992, 48.866261915849776]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-severine-1776",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40976262845, 48.8662619158]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1993003d56b9b2f18cd43714cc0c5ef4c89ca4ee",
    "fields": {
        "arrondissement": "75018",
        "adresse": "16 AVENUE DE SAINT OUEN",
        "geo_point_2d": [48.8882245069, 2.32593611117],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3259361111674, 48.88822450694434]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32593611117, 48.8882245069]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bba1fce27956eaa5740e52883ef61616cd7b96d2",
    "fields": {
        "arrondissement": "75018",
        "adresse": "135 RUE DAMREMONT",
        "geo_point_2d": [48.8965489205, 2.3382696835],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.338269683499474, 48.89654892045479]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3382696835, 48.8965489205]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dbf3ac52c97bc32e90ffdb40f289393fe637efcf",
    "fields": {
        "arrondissement": "75018",
        "adresse": "AVENUE DE LA PORTE DE CLIGNANCOURT",
        "geo_point_2d": [48.9011330332, 2.34444160505],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344441605047738, 48.90113303318489]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34444160505, 48.9011330332]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8603cafd8174b9a3c2baada8c64d82bf7b11aa3b",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN DES CENDRIERS (DIT DES AMANDIERS)",
        "geo_point_2d": [48.8659772751, 2.3877480237],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.387748023702788, 48.865977275134405]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-amandiers-2700",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3877480237, 48.8659772751]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "77127a3aa150e29bc3a629e52238d817ed373a5b",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE LEON SERPOLLET",
        "geo_point_2d": [48.8922564464, 2.33910131513],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.339101315132649, 48.89225644637531]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-leon-serpollet-2665",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33910131513, 48.8922564464]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7279e5939ea0cbea17428a51c540a94290f7240a",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE EMMANUEL FLEURY",
        "geo_point_2d": [48.8699106986, 2.41108691361],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411086913613466, 48.86991069855741]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-emmanuel-fleury-2720",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41108691361, 48.8699106986]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b111c3598af0ce54c6d4b4bdfd483237192bf7ab",
    "fields": {
        "arrondissement": "75007",
        "adresse": "SQUARE SAMUEL ROUSSEAU",
        "geo_point_2d": [48.859172245, 2.31958288263],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.319582882629932, 48.85917224498335]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-samuel-rousseau-2467",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31958288263, 48.859172245]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1d5d6a34d42b60313c7dafda1eee05b1b574c64a",
    "fields": {
        "arrondissement": "75007",
        "adresse": "JARDIN CATHERINE LABOURE",
        "geo_point_2d": [48.8514013047, 2.32048539326],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.320485393255729, 48.85140130471326]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-catherine-laboure-2465",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32048539326, 48.8514013047]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c3c2e6a3f367ddad9e37f4b85a523377c2f4f4ea",
    "fields": {
        "arrondissement": "75009",
        "adresse": "SQUARE D'ANVERS",
        "geo_point_2d": [48.8823866226, 2.34413295596],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34413295595609, 48.88238662258446]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-d-anvers-2468",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34413295596, 48.8823866226]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "97e805edc6cfc1b99ceb3af8af3e43c774f9758b",
    "fields": {
        "arrondissement": "75019",
        "adresse": "12 RUE REBEVAL",
        "geo_point_2d": [48.8740706795, 2.37638229452],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376382294517342, 48.874070679492235]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37638229452, 48.8740706795]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c52612f6008f430fde840aabbcc8e42cf5fb7eea",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 148 BOULEVARD DE MENILMONTANT",
        "geo_point_2d": [48.8667550349, 2.38338972663],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.383389726625512, 48.866755034886744]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38338972663, 48.8667550349]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "919fe200d0e53b0d68b1455a38eeee20d51b246d",
    "fields": {
        "arrondissement": "75020",
        "adresse": "12 AVENUE DU PROFESSEUR ANDRE LEMIERE",
        "geo_point_2d": [48.8553275637, 2.41523391259],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.415233912585555, 48.85532756366962]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41523391259, 48.8553275637]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ce0a4a0d3592cf2adea90a899e6b2fd65487369f",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE MAURICE KRIEGEL-VALRIMONT DIT SQUARE DE CLIGNANCOURT",
        "geo_point_2d": [48.8932452482, 2.34642511039],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346425110390599, 48.89324524823646]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-maurice-kriegel-valrimont-ex-de-clignancourt-2651",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34642511039, 48.8932452482]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2abcc7d82e505431f963e5806c8e7fd96785ee84",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE DE LA PLACE DE LA REUNION",
        "geo_point_2d": [48.8558162635, 2.40150868187],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.401508681870862, 48.855816263489935]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-de-la-place-de-la-reunion-2705",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40150868187, 48.8558162635]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b46d7dc0854baf70cc263db4969f7f87a9be1504",
    "fields": {
        "arrondissement": "75014",
        "adresse": "103 BOULEVARD BRUNE",
        "geo_point_2d": [48.8256858922, 2.31505362415],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.315053624154729, 48.825685892245296]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31505362415, 48.8256858922]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b7616c4cfc6cbe1f5eea83c0466c061ee238ad16",
    "fields": {
        "arrondissement": "75014",
        "adresse": "70 BOULEVARD JOURDAN",
        "geo_point_2d": [48.8226298513, 2.32885651344],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.328856513435701, 48.82262985130541]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32885651344, 48.8226298513]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "56a29474be6cec335a7500601bbef3608c6854a7",
    "fields": {
        "arrondissement": "75014",
        "adresse": "63 AVENUE DU GENERAL LECLERC",
        "geo_point_2d": [48.8289648328, 2.32797958956],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.327979589558433, 48.82896483276906]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32797958956, 48.8289648328]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4fda99cb2278419b25fed280e7999c694354ab67",
    "fields": {
        "arrondissement": "75011",
        "adresse": "82 AVENUE DE LA REPUBLIQUE",
        "geo_point_2d": [48.8642420866, 2.37952312138],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379523121382871, 48.86424208661517]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37952312138, 48.8642420866]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "24d2ff0601781e98db4999df1ba26b6219eb6207",
    "fields": {
        "arrondissement": "75011",
        "adresse": "8 PLACE LEON BLUM",
        "geo_point_2d": [48.8583131789, 2.38024266695],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380242666953603, 48.858313178936]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38024266695, 48.8583131789]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "19cb4737101629bc4a7bd73c6d76010449b56745",
    "fields": {
        "arrondissement": "75013",
        "adresse": "4 PLACE ABBE GEORGES HENOCQUE",
        "geo_point_2d": [48.8240656807, 2.35309546437],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353095464368397, 48.82406568071868]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35309546437, 48.8240656807]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fe8c33e9347fa7f722d38d19bec0b9563110c9d7",
    "fields": {
        "arrondissement": "75013",
        "adresse": "90 RUE DE TOLBIAC",
        "geo_point_2d": [48.8268340679, 2.36458136524],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.364581365240386, 48.82683406786536]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36458136524, 48.8268340679]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ace60c28cfbf0c90e26ff6908e60a949e6ad0b7f",
    "fields": {
        "arrondissement": "75013",
        "adresse": "26 PLACE JEANNE D ARC",
        "geo_point_2d": [48.8297799593, 2.36896816337],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368968163369626, 48.829779959281694]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36896816337, 48.8297799593]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3818f4a16cc1ab7ee55075d95d6de267665ac11e",
    "fields": {
        "arrondissement": "75015",
        "adresse": "AVENUE DE SUFFREN",
        "geo_point_2d": [48.8460231201, 2.30890949018],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.308909490180235, 48.84602312009652]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30890949018, 48.8460231201]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "aa9a72646b8d131fccb2bbc270e71c31289d3955",
    "fields": {
        "arrondissement": "75016",
        "adresse": "face 38 AVENUE RAPHAEL",
        "geo_point_2d": [48.8571927976, 2.26669903158],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.266699031575164, 48.857192797571564]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26669903158, 48.8571927976]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2a3f6f56cb6273acb6fe70e2d46fbaf83a04258e",
    "fields": {
        "arrondissement": "75019",
        "adresse": "25 AVENUE DE FLANDRE",
        "geo_point_2d": [48.8857730297, 2.37036598805],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370365988049617, 48.885773029685616]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37036598805, 48.8857730297]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "398be4adf01122f6d272a2a9bb1de88a1ab06d54",
    "fields": {
        "arrondissement": "75019",
        "adresse": "69 AVENUE DE FLANDRE",
        "geo_point_2d": [48.8886953627, 2.37392407191],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.373924071910594, 48.88869536274598]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37392407191, 48.8886953627]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "69c069172036f9fa6fb8ba125ea0b8b7586dee28",
    "fields": {
        "arrondissement": "75019",
        "adresse": "2 RUE DE JOINVILLE",
        "geo_point_2d": [48.8894777615, 2.3807026479],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380702647901921, 48.889477761529356]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3807026479, 48.8894777615]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b4b56e138d6909b149eb978d83607a8e2a9f0de9",
    "fields": {
        "arrondissement": "75001",
        "adresse": "55 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.862313183, 2.35020308091],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.350203080907801, 48.862313183032356]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35020308091, 48.862313183]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fc9a5cc73405d3e6084e6d058ebbd4891e9ae107",
    "fields": {
        "arrondissement": "75002",
        "adresse": "37 RUE DU LOUVRE",
        "geo_point_2d": [48.8674378411, 2.34382099288],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343820992881232, 48.8674378410879]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34382099288, 48.8674378411]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a3680382f4b715ad8c371a52dd0f7211f247f7ce",
    "fields": {
        "arrondissement": "75003",
        "adresse": "4 RUE SALOMON DE CAUS",
        "geo_point_2d": [48.86736443, 2.35402037552],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354020375521618, 48.86736443004382]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35402037552, 48.86736443]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5d40ee1157063f358950b18c8f1f44bd70ae0b68",
    "fields": {
        "arrondissement": "75008",
        "adresse": "face 19 AVENUE DE FRIEDLAND",
        "geo_point_2d": [48.874613485, 2.30236199298],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.302361992982482, 48.8746134850176]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30236199298, 48.874613485]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d968e435cc6a9f6ecbd8b4a94c79657135ad6348",
    "fields": {
        "arrondissement": "75010",
        "adresse": "PLACE DU COLONEL FABIEN",
        "geo_point_2d": [48.8779817744, 2.37008389883],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370083898833689, 48.87798177436245]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37008389883, 48.8779817744]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f5b76b203e336ceb1ef622c9db2c2ba75b51d15f",
    "fields": {
        "arrondissement": "75010",
        "adresse": "179 QUAI DE VALMY",
        "geo_point_2d": [48.8801634271, 2.36731782051],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367317820510683, 48.88016342714384]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36731782051, 48.8801634271]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "25e86324125944dd0bacec1d1e5ccd289fc0189f",
    "fields": {
        "arrondissement": "75014",
        "adresse": "88 AVENUE DU MAINE",
        "geo_point_2d": [48.838110613, 2.32233836205],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.322338362051345, 48.83811061304954]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32233836205, 48.838110613]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "64aa7b2e617e7708c137b729226e56f0449840d7",
    "fields": {
        "arrondissement": "75015",
        "adresse": "PARC ANDRE CITROEN",
        "geo_point_2d": [48.8403808019, 2.27905909956],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.279059099562375, 48.8403808019196]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-andre-citroen-1791",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27905909956, 48.8403808019]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c763019f932c0923235d98277ed86712b1b75e35",
    "fields": {
        "arrondissement": "75018",
        "adresse": "oppos\u00e9 au 17 RUE RENE BINET",
        "geo_point_2d": [48.8992899143, 2.34053038934],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.340530389340115, 48.89928991429744]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34053038934, 48.8992899143]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9f92fad9580b9e1e5d4be3c719df67ade7d3b04e",
    "fields": {
        "arrondissement": "75019",
        "adresse": "220 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.8842570209, 2.36738105028],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367381050280597, 48.88425702092837]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36738105028, 48.8842570209]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "447c06874a81a4fe3dd637a4893aedbf6a90e72e",
    "fields": {
        "arrondissement": "75001",
        "adresse": "Parc Rives de Seine",
        "geo_point_2d": [48.8583163295, 2.34272249467],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.342722494673273, 48.85831632949923]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34272249467, 48.8583163295]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fd982c3ab56c8a10af0745eb1e4621b1ccd72522",
    "fields": {
        "arrondissement": "75017",
        "adresse": "7 AVENUE DE LA PORTE DES TERNES",
        "geo_point_2d": [48.881117592, 2.28297085552],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.282970855516519, 48.881117592018285]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28297085552, 48.881117592]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "15a6bb211066bc232d7a0c8d1fd712384049d81f",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE PAUL GRIMAULT",
        "geo_point_2d": [48.8230296745, 2.34850913927],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34850913926846, 48.82302967451198]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-paul-grimault-2567",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34850913927, 48.8230296745]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1bb3873f4734862b13b302e34fae9379df80953a",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE HELOISE ET ABELARD",
        "geo_point_2d": [48.831220695, 2.36985477709],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3698547770852603, 48.83122069501134]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-heloise-et-abelard-2498",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36985477709, 48.831220695]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a34826b7d7cf04dbebe0d3b586ddd4ce410043ec",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE JEAN MOULIN",
        "geo_point_2d": [48.8237753366, 2.31877852332],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.318778523318067, 48.823775336582635]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-jean-moulin-2589",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31877852332, 48.8237753366]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "19919885e213c9991789dd557a94d357305d951d",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE DU CHANOINE VIOLLET",
        "geo_point_2d": [48.8313476109, 2.32053176159],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.320531761589163, 48.8313476109017]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-alberto-giacometti-2866",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32053176159, 48.8313476109]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d89f75c5e150f87e667aed6347abd08d6ad84893",
    "fields": {
        "arrondissement": "75014",
        "adresse": "JARDIN DE L'HOPITAL SAINTE-PERINE",
        "geo_point_2d": [48.8448441045, 2.26917260444],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.269172604439539, 48.84484410447445]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-sainte-perine-1806",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26917260444, 48.8448441045]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8ef6513ee8109b7d17a7e48a65e8fc7c45663121",
    "fields": {
        "arrondissement": "75004",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8818247678, 2.38364096355],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.383640963547957, 48.88182476781305]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38364096355, 48.8818247678]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e5a26b2e9c7594cffb576d44b7b01d957656272a",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE DU SERMENT DE KOUFRA",
        "geo_point_2d": [48.822256266, 2.3236001538],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.323600153804334, 48.822256265999734]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-serment-de-koufra-1773",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3236001538, 48.822256266]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f94393685fa7645dacc97e2388f7b74f5acdcf5a",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN RACHMANINOV",
        "geo_point_2d": [48.8955585986, 2.3638154517],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363815451695338, 48.895558598605454]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-rachmaninov-2681",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3638154517, 48.8955585986]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "69990c2083b6957ed01a897bccf42854d6571561",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOIS DE BOULOGNE - JARDIN DU PRE CATELAN",
        "geo_point_2d": [48.8656174298, 2.25232408823],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.252324088230038, 48.865617429829534]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-bagatelle-1808",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25232408823, 48.8656174298]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "63d3bc369d563aa7ad316f5f48da2fed559d877a",
    "fields": {
        "arrondissement": "75014",
        "adresse": "11 AVENUE MAURICE D OCAGNE",
        "geo_point_2d": [48.824988519, 2.31127922424],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.311279224235746, 48.82498851904087]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31127922424, 48.824988519]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "896b1842686835691e56896384b161816c317a8a",
    "fields": {
        "arrondissement": "75011",
        "adresse": "133 BOULEVARD DE CHARONNE",
        "geo_point_2d": [48.8574937066, 2.39245136132],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.392451361323424, 48.857493706563716]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39245136132, 48.8574937066]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9a1ca147ca3075bcd05822b6bdc6746e4f21b3be",
    "fields": {
        "arrondissement": "75012",
        "adresse": "face 1 BOULEVARD DE REUILLY",
        "geo_point_2d": [48.8389404106, 2.38957293793],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.389572937934319, 48.83894041055916]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38957293793, 48.8389404106]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "574d727de4d88d351356e556ad1f252b1580a5cf",
    "fields": {
        "arrondissement": "75012",
        "adresse": "88 RUE DE LYON",
        "geo_point_2d": [48.8508467765, 2.37028595756],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370285957563933, 48.85084677653919]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37028595756, 48.8508467765]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0f8c5270cad0c43aa74ee9118681095a28fe9886",
    "fields": {
        "arrondissement": "75015",
        "adresse": "277 RUE DE VAUGIRARD",
        "geo_point_2d": [48.839666054, 2.30195906798],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.301959067980262, 48.83966605396288]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30195906798, 48.839666054]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7bd0ceb81846cb1b4f25c5b68fc186e69123911e",
    "fields": {
        "arrondissement": "75015",
        "adresse": "BOULEVARD GARIBALDI",
        "geo_point_2d": [48.8478417919, 2.30207203109],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.302072031091217, 48.84784179190658]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30207203109, 48.8478417919]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4733775a50b2b055821ba0104ba32d46d65e1dba",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 22 PLACE DUPLEIX",
        "geo_point_2d": [48.8510453386, 2.29512258025],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.295122580253721, 48.851045338554265]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29512258025, 48.8510453386]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2a687b44d3e333b88fe2d81af816bda73ee39047",
    "fields": {
        "arrondissement": "75016",
        "adresse": "PLACE DE LA PORTE D AUTEUIL",
        "geo_point_2d": [48.8484437882, 2.25717759017],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.257177590169218, 48.848443788169064]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25717759017, 48.8484437882]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9ed3884775e8ddd198e1469da44144e3a411bfc0",
    "fields": {
        "arrondissement": "75019",
        "adresse": "face 196 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.8822137234, 2.37033634215],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370336342149233, 48.88221372342575]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37033634215, 48.8822137234]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "733b524d4662fb01a859a70a6967aa26f805bd80",
    "fields": {
        "arrondissement": "75002",
        "adresse": "117 RUE MONTMARTRE",
        "geo_point_2d": [48.8687490665, 2.34323594565],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343235945649155, 48.86874906648296]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34323594565, 48.8687490665]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e9f7467802a02f13e7ec7cb1feedc44363613d30",
    "fields": {
        "arrondissement": "75003",
        "adresse": "1 BOULEVARD DES FILLES DU CALVAIRE",
        "geo_point_2d": [48.8611231317, 2.36703242376],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367032423762319, 48.86112313165572]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36703242376, 48.8611231317]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7241720ca0d68f660227fdc28ee7e90b07fffb38",
    "fields": {
        "arrondissement": "75004",
        "adresse": "123 RUE SAINT ANTOINE",
        "geo_point_2d": [48.8553031979, 2.36041970188],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360419701884548, 48.85530319788793]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36041970188, 48.8553031979]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "77fe07e69636af91ce01eafe762b158104287724",
    "fields": {
        "arrondissement": "75009",
        "adresse": "oppos\u00e9 au 168 BOULEVARD DE MAGENTA",
        "geo_point_2d": [48.8832700916, 2.34961000338],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349610003378711, 48.88327009160385]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34961000338, 48.8832700916]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3dfd0cdfff337c94e912b2c26a2f3bc49f04f250",
    "fields": {
        "arrondissement": "75013",
        "adresse": "151 BOULEVARD VINCENT AURIOL",
        "geo_point_2d": [48.832713523, 2.3615805511],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361580551096067, 48.832713522967005]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3615805511, 48.832713523]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6f3e82b2f55245005b07f41b91d22947c8e56f96",
    "fields": {
        "arrondissement": "75016",
        "adresse": "SQUARE ALEXANDRE ET RENE PARODI",
        "geo_point_2d": [48.8762636893, 2.28100617118],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.28100617118407, 48.87626368925604]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-alexandre-et-rene-parodi-2752",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28100617118, 48.8762636893]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cf0c9e77662d4821f213202c87ba404b93726b29",
    "fields": {
        "arrondissement": "75017",
        "adresse": "SQUARE DES EPINETTES",
        "geo_point_2d": [48.8947649644, 2.32685024107],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.326850241067247, 48.894764964434124]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-epinettes-2631",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32685024107, 48.8947649644]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "57a3452ef3919f9fbe82fe3359109d7fda2e3937",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE DES DEUX NETHES",
        "geo_point_2d": [48.8856585441, 2.32751510267],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.327515102674248, 48.88565854413966]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-deux-nethes-2765",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32751510267, 48.8856585441]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1cafb7f319ccd6aea5744b6c599f5a9f1ed685c1",
    "fields": {
        "arrondissement": "75019",
        "adresse": "SQUARE DE LA BUTTE DU CHAPEAU ROUGE",
        "geo_point_2d": [48.8810165196, 2.39878084959],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.398780849590684, 48.88101651958863]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-la-butte-du-chapeau-rouge-1811",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39878084959, 48.8810165196]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a0b866f8ddb4f559e111813e5edf62a98768678a",
    "fields": {
        "arrondissement": "75018",
        "adresse": "36 RUE DE LA CHARBONNIERE",
        "geo_point_2d": [48.8841038703, 2.35218642261],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352186422605598, 48.88410387025655]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35218642261, 48.8841038703]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4a08810216f3acc87c0308d9f1a405e443f6cd4f",
    "fields": {
        "arrondissement": "75017",
        "adresse": "132 BOULEVARD BESSIERES",
        "geo_point_2d": [48.8948461047, 2.31429355174],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.314293551735199, 48.89484610466436]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31429355174, 48.8948461047]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a4f4303f911560f2ff6a9401d5a680b27f173909",
    "fields": {
        "arrondissement": "75017",
        "adresse": "oppos\u00e9 22 BOULEVARD DES BATIGNOLLES",
        "geo_point_2d": [48.8830975511, 2.32523021063],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.325230210633042, 48.883097551132884]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32523021063, 48.8830975511]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "65c0113bb374e7a029c982002ecd76434309e3bf",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE HELENE BOUCHER",
        "geo_point_2d": [48.8187228095, 2.36031053508],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36031053507705, 48.81872280946735]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-helene-boucher-2513",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36031053508, 48.8187228095]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "535bcacd920943981b1a2d0250b722e24a6a75fa",
    "fields": {
        "arrondissement": "75019",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8768554586, 2.38079007278],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380790072781452, 48.87685545864613]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38079007278, 48.8768554586]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "153fa28d25f7c30e6931e2581a7039e0aec24bcf",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDINS DE LA PORTE DE SAINT CLOUD",
        "geo_point_2d": [48.8358694912, 2.2546935723],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.254693572298353, 48.835869491249895]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardins-de-la-porte-de-saint-cloud-et-square-roger-coquoin-2623",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2546935723, 48.8358694912]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f55b7b8a499cfc4e27ca53eb27fe5d6daccd1825",
    "fields": {
        "arrondissement": "75020",
        "adresse": "131 RUE D AVRON",
        "geo_point_2d": [48.853316282, 2.4092580922],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.409258092200667, 48.85331628203856]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.4092580922, 48.853316282]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "feed8d8165a2c4e7da2785e38aab7fbe995c3184",
    "fields": {
        "arrondissement": "75020",
        "adresse": "6 PLACE DE LA PORTE DE BAGNOLET",
        "geo_point_2d": [48.8641209737, 2.40898577927],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.408985779271119, 48.86412097368339]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40898577927, 48.8641209737]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "02b52acf9f7ab3ffc3bafd1185512742550d2234",
    "fields": {
        "arrondissement": "75020",
        "adresse": "296 RUE DES PYRENEES",
        "geo_point_2d": [48.871931094, 2.39205233078],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.392052330778927, 48.87193109399486]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39205233078, 48.871931094]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1e6fa56a168a130b65141efaf08e6f5eb6b1865f",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN CASQUE D'OR",
        "geo_point_2d": [48.8539200144, 2.40121377562],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.401213775616216, 48.853920014436056]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-casque-d-or-2713",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40121377562, 48.8539200144]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "12221fcded2a256ac43a7ee191dc3e1e6fcf86a1",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN DE LA GARE DE CHARONNE",
        "geo_point_2d": [48.8520153931, 2.40941694296],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.40941694295549, 48.85201539306615]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-de-la-gare-de-charonne-2693",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40941694296, 48.8520153931]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d83b6183b0fedea3a3438773c1c7bcc46a5c99fb",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN D'EOLE - ESPLANADE",
        "geo_point_2d": [48.8860364099, 2.36585090836],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365850908359651, 48.88603640992311]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-francoise-helene-jourda-ex-20-rue-du-departement-18075",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36585090836, 48.8860364099]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d58ef62f194af82c69b0e2fce832db380665d67a",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 36 RUE DIDOT",
        "geo_point_2d": [48.8316579678, 2.32017895806],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.320178958056874, 48.8316579678061]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32017895806, 48.8316579678]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "afb826da15429cca62e6220203792c1645c4a91b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "18 AVENUE DE LA PORTE DE VANVES",
        "geo_point_2d": [48.8255077843, 2.30413872566],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.304138725656074, 48.825507784271]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30413872566, 48.8255077843]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "20ebfe0bb9ed679bd3e9be51709e0a7723cfa536",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 48 BOULEVARD VOLTAIRE",
        "geo_point_2d": [48.8633808937, 2.37103958224],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.371039582240022, 48.86338089367276]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37103958224, 48.8633808937]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2232dbf65a2469cf9603ef571e4f3e0d6020de7b",
    "fields": {
        "arrondissement": "75012",
        "adresse": "32 BOULEVARD DIDEROT",
        "geo_point_2d": [48.8461125711, 2.37654776216],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376547762162363, 48.84611257105481]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37654776216, 48.8461125711]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e3ee3d0a7c9a96e819413a949bdd1ccc6653b037",
    "fields": {
        "arrondissement": "75015",
        "adresse": "1 PLACE VIOLET",
        "geo_point_2d": [48.8447973165, 2.29047954621],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.290479546209931, 48.84479731646162]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29047954621, 48.8447973165]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a82410b640130ef9b697ff83a6c7c05e7dbf6649",
    "fields": {
        "arrondissement": "75015",
        "adresse": "38 RUE CAMBRONNE",
        "geo_point_2d": [48.8455266136, 2.30189794396],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.30189794395814, 48.845526613557176]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30189794396, 48.8455266136]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "33e3cc9a3c030c75bf5c6beebc23c84953f41a20",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 41 RUE DES MORILLONS",
        "geo_point_2d": [48.8331257246, 2.29949867929],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.299498679290674, 48.833125724631174]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29949867929, 48.8331257246]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "369c242ac6d6793885efdcaf2c159c26a87b9e96",
    "fields": {
        "arrondissement": "75016",
        "adresse": "101 BOULEVARD DE MONTMORENCY",
        "geo_point_2d": [48.8483316154, 2.26053361507],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.260533615073436, 48.84833161537241]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26053361507, 48.8483316154]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "39dda824ca34d6db0bab22ecb38f36a3695fc14c",
    "fields": {
        "arrondissement": "75019",
        "adresse": "9 AVENUE DE LA PORTE DE LA VILLETTE",
        "geo_point_2d": [48.89897484, 2.38677478399],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.386774783986592, 48.89897483997506]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38677478399, 48.89897484]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "74903168119efcf9fb64cd8cf0269f86381441cc",
    "fields": {
        "arrondissement": "75004",
        "adresse": "RUE D ARCOLE",
        "geo_point_2d": [48.8538120573, 2.34924320363],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3492432036278, 48.85381205728483]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34924320363, 48.8538120573]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1e4ff38c934d83f54384b96b4d5776d8da9036ef",
    "fields": {
        "arrondissement": "75004",
        "adresse": "123 RUE SAINT MARTIN",
        "geo_point_2d": [48.8607904279, 2.35131575012],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351315750121666, 48.86079042790048]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35131575012, 48.8607904279]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "17e9958f9bfd58ac10ea84445eebd99a7e6383e3",
    "fields": {
        "arrondissement": "75005",
        "adresse": "4 RUE POLIVEAU",
        "geo_point_2d": [48.8403933177, 2.36127326357],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36127326357086, 48.84039331770239]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36127326357, 48.8403933177]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9329e7f3bd745eb4d16f97a9322b62ddb799b040",
    "fields": {
        "arrondissement": "75005",
        "adresse": "26 RUE BUFFON",
        "geo_point_2d": [48.8413080498, 2.35622468312],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356224683117664, 48.84130804975427]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35622468312, 48.8413080498]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ea541d9a705953f2d6f5e7af7f75852724fbaad9",
    "fields": {
        "arrondissement": "75008",
        "adresse": "2 AVENUE MARCEAU",
        "geo_point_2d": [48.8651933367, 2.30018344608],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.300183446079439, 48.86519333667548]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30018344608, 48.8651933367]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f4980b8441519a680f8051b1072c253c370bd15b",
    "fields": {
        "arrondissement": "75009",
        "adresse": "130 ter BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8842143492, 2.32896961596],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.328969615964769, 48.88421434923707]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32896961596, 48.8842143492]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "173fb7f09c10febdfdf2b1bf9a1afc2e822621d8",
    "fields": {
        "arrondissement": "75009",
        "adresse": "17 BOULEVARD DE ROCHECHOUART",
        "geo_point_2d": [48.8834206116, 2.34743316865],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34743316865442, 48.88342061155755]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34743316865, 48.8834206116]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "67a87fb50ee466030af411c483b705ea364be554",
    "fields": {
        "arrondissement": "75010",
        "adresse": "5 RUE DE MAZAGRAN",
        "geo_point_2d": [48.8704916014, 2.35137801482],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351378014817505, 48.87049160141799]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35137801482, 48.8704916014]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cf653e5c7faf84381e2030a1ccd6f2a715f3a6fe",
    "fields": {
        "arrondissement": "75013",
        "adresse": "53 BOULEVARD SAINT MARCEL",
        "geo_point_2d": [48.8379115955, 2.35564597258],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.355645972582188, 48.83791159547436]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35564597258, 48.8379115955]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d7ca31ba39be9849125e153427ad0cd5ee86d553",
    "fields": {
        "arrondissement": "75012",
        "adresse": "SQUARE CHARLES PEGUY",
        "geo_point_2d": [48.8395377213, 2.40614056565],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.406140565653542, 48.83953772127825]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-charles-peguy-2575",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40614056565, 48.8395377213]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e889d574ceb3d5cb35a4ae791905a3129edf2480",
    "fields": {
        "arrondissement": "75018",
        "adresse": "RUE GERARD DE NERVAL",
        "geo_point_2d": [48.900593189, 2.33510623694],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.335106236936664, 48.90059318903409]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33510623694, 48.900593189]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "74eb9ea2627ce0312a6f85e026706ff49441080c",
    "fields": {
        "arrondissement": "75017",
        "adresse": "72 AVENUE DE VILLIERS",
        "geo_point_2d": [48.884027564, 2.30420617992],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.304206179918619, 48.88402756400258]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30420617992, 48.884027564]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8e4b7dec2593b63afb38765c372204dcdf24c41d",
    "fields": {
        "arrondissement": "75017",
        "adresse": "face 32 AVENUE NIEL",
        "geo_point_2d": [48.8814959992, 2.29553252401],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.295532524008157, 48.881495999213094]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29553252401, 48.8814959992]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fa870060c32696b881309dccd863c21c39372722",
    "fields": {
        "arrondissement": "75007",
        "adresse": "SQUARE DES MISSIONS ETRANGERES",
        "geo_point_2d": [48.8524088863, 2.32450293411],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.324502934107624, 48.852408886344584]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-missions-etrangeres-2463",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32450293411, 48.8524088863]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5f6c66508a5147a25c14d225e61fced64a99bd5f",
    "fields": {
        "arrondissement": "75020",
        "adresse": "6 AVENUE DE LA PORTE DE MONTREUIL",
        "geo_point_2d": [48.8538097036, 2.41151638346],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411516383464487, 48.85380970359549]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41151638346, 48.8538097036]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "17137363ee505c5de99203fd5c4d20ffabe4f3b6",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 12 RUE BELGRAND",
        "geo_point_2d": [48.8648794041, 2.40077806096],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.400778060955302, 48.864879404082494]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40077806096, 48.8648794041]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9f64d1df99a6f1b1c130ccd40136286c6985ebd8",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE RUES BELLEVILLE - TELEGRAPHE",
        "geo_point_2d": [48.8751948911, 2.39929340851],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.399293408514616, 48.87519489112326]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-belleville-telegraphe-2724",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39929340851, 48.8751948911]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f33db84dd43d9c1a95ef322389408f3317870652",
    "fields": {
        "arrondissement": "75019",
        "adresse": "JARDIN SERGE GAINSBOURG",
        "geo_point_2d": [48.8783446409, 2.40811652639],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.408116526394867, 48.87834464094734]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-serge-gainsbourg-6337",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40811652639, 48.8783446409]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8bfab358265f31ea409b329230c9b9a49ede816b",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOIS DE BOULOGNE - PARC DE BAGATELLE - GRILLE DE SEVRES",
        "geo_point_2d": [48.8705656453, 2.24617557881],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.246175578808387, 48.870565645291414]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-bagatelle-1808",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.24617557881, 48.8705656453]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "89703d7f8c50f41daa55d5eb88b8e7e76336fe2b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "131 AVENUE DU MAINE",
        "geo_point_2d": [48.8348792313, 2.32414275734],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.324142757336266, 48.834879231256046]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32414275734, 48.8348792313]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6c1cc4581fa13fe4f412d0a69e527fa2d8478eb8",
    "fields": {
        "arrondissement": "75010",
        "adresse": "12 PLACE DE LA REPUBLIQUE",
        "geo_point_2d": [48.8683953942, 2.36340914056],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363409140558088, 48.868395394244324]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36340914056, 48.8683953942]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5bd8bef966301bf73988623f029cf563d02d4b20",
    "fields": {
        "arrondissement": "75011",
        "adresse": "2 AVENUE DE BOUVINES",
        "geo_point_2d": [48.8495778195, 2.39630210654],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.396302106543346, 48.84957781951284]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39630210654, 48.8495778195]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "92dcf1f6af7e93e9f5b05c0eee0435bb515df01f",
    "fields": {
        "arrondissement": "75011",
        "adresse": "58 AVENUE DE LA REPUBLIQUE",
        "geo_point_2d": [48.864897215, 2.37608281094],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376082810937389, 48.864897215034844]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37608281094, 48.864897215]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e702152d1523cb6817a4a5e6247158fd9ad405d0",
    "fields": {
        "arrondissement": "75011",
        "adresse": "135 AVENUE PARMENTIER",
        "geo_point_2d": [48.8696842394, 2.37116053326],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.371160533263757, 48.869684239435124]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37116053326, 48.8696842394]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8d9595b32dbaf3016ce8fe7ac316eaddde307de9",
    "fields": {
        "arrondissement": "75012",
        "adresse": "111 AVENUE DAUMESNIL",
        "geo_point_2d": [48.8449844522, 2.38031784806],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380317848061393, 48.844984452236034]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38031784806, 48.8449844522]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "740140cb69781e05e569b1a0f5ecbb30e4ab2dd6",
    "fields": {
        "arrondissement": "75013",
        "adresse": "5 BOULEVARD KELLERMANN",
        "geo_point_2d": [48.8189769476, 2.35759121855],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.357591218548521, 48.81897694760634]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35759121855, 48.8189769476]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6e9dfc0a4752157e636889657e12ee67a579aa46",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 7 RUE LA QUINTINIE",
        "geo_point_2d": [48.8392330425, 2.3063326916],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.306332691603664, 48.8392330424982]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3063326916, 48.8392330425]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7b7bb9b67fda6ce58296e6e4bb0b8a4256daef3a",
    "fields": {
        "arrondissement": "75016",
        "adresse": "face 21 AVENUE DU GENERAL SARRAIL",
        "geo_point_2d": [48.8458131214, 2.25598704083],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.255987040827983, 48.845813121421486]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25598704083, 48.8458131214]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "10227b269b86734a75d6fe32cff75401237c23b2",
    "fields": {
        "arrondissement": "75003",
        "adresse": "2 RUE DES QUATRE FILS",
        "geo_point_2d": [48.860059866, 2.3607006874],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360700687397764, 48.86005986602799]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3607006874, 48.860059866]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bce43228b345934e22fad1cb8ea3374e83dae2e4",
    "fields": {
        "arrondissement": "75008",
        "adresse": "44 BOULEVARD MALESHERBES",
        "geo_point_2d": [48.8743584023, 2.32045168535],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.320451685354317, 48.874358402257364]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32045168535, 48.8743584023]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "42f7085e72c178d2cd19584f117679fa310a4578",
    "fields": {
        "arrondissement": "75009",
        "adresse": "21 RUE D AMSTERDAM",
        "geo_point_2d": [48.8776056469, 2.32703687581],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.327036875810607, 48.87760564689644]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32703687581, 48.8776056469]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "acfadfa0561ef504ec48a9183c9e882a622d1647",
    "fields": {
        "arrondissement": "75010",
        "adresse": "RUE ROBERT BLACHE",
        "geo_point_2d": [48.8770143131, 2.3639905019],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363990501903872, 48.877014313149225]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3639905019, 48.8770143131]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b9c5e316f75588baf5c670591caf3932c7fa5936",
    "fields": {
        "arrondissement": "75010",
        "adresse": "145 BOULEVARD DE MAGENTA",
        "geo_point_2d": [48.8822446294, 2.35053422888],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.350534228884393, 48.88224462938899]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35053422888, 48.8822446294]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "53837dd219cc42fcf56de2b82c5df9bea8f40dc5",
    "fields": {
        "arrondissement": "75013",
        "adresse": "3 BOULEVARD DE L HOPITAL",
        "geo_point_2d": [48.8430740444, 2.36433400263],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.364334002626624, 48.843074044377055]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36433400263, 48.8430740444]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5e46ca67837865cd490354ab3622fb509f665ef7",
    "fields": {
        "arrondissement": "75013",
        "adresse": "oppos\u00e9 au 41 RUE ESQUIROL",
        "geo_point_2d": [48.8358225476, 2.36004871071],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360048710711233, 48.835822547644895]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36004871071, 48.8358225476]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ca174123cca95740eaeb8eeb959376f2763c08e8",
    "fields": {
        "arrondissement": "75015",
        "adresse": "JARDIN ATLANTIQUE",
        "geo_point_2d": [48.8398095347, 2.3196854419],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.319685441900642, 48.839809534728055]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-atlantique-1775",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3196854419, 48.8398095347]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1afab6a0c7349275a616b8564b25c3eb731182ad",
    "fields": {
        "arrondissement": "75018",
        "adresse": "AVENUE DE LA PORTE DE CLIGNANCOURT",
        "geo_point_2d": [48.9008257893, 2.34380740735],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343807407345496, 48.900825789340296]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34380740735, 48.9008257893]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a617da9683c9e6c30d985583686a452d718949ac",
    "fields": {
        "arrondissement": "75018",
        "adresse": "2 RUE MONTCALM",
        "geo_point_2d": [48.8917888247, 2.33522147939],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.335221479388062, 48.89178882470804]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33522147939, 48.8917888247]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a9322f193f0ded5daf2f901d68b1677aa582a193",
    "fields": {
        "arrondissement": "75013",
        "adresse": "PARC DE CHOISY",
        "geo_point_2d": [48.8278296391, 2.36173561558],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36173561557668, 48.8278296390595]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-choisy-1803",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36173561558, 48.8278296391]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a70ea244eec81beeb3b2da47bdd66b36087f257b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "PARC MONTSOURIS",
        "geo_point_2d": [48.824162578, 2.33984893405],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.339848934049351, 48.82416257802964]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33984893405, 48.824162578]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "eae9d6637afab5ba76ec6a1657207c0a75a0297b",
    "fields": {
        "arrondissement": "75004",
        "adresse": "SQUARE LOUIS XIII",
        "geo_point_2d": [48.8552210837, 2.36527663182],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365276631815183, 48.85522108368083]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-louis-xiii-36",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36527663182, 48.8552210837]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "368d5f8f3ddf97306b752c014639bd55bf3ad18e",
    "fields": {
        "arrondissement": "75004",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8798695502, 2.38516851989],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.385168519889268, 48.87986955015695]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38516851989, 48.8798695502]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5ec5e0f118b2943613d44815ba28e48bf0d8cf5c",
    "fields": {
        "arrondissement": "75012",
        "adresse": "BOIS DE VINCENNES - PARC FLORAL DE PARIS - PINEDE",
        "geo_point_2d": [48.8382570061, 2.44464326722],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.4446432672223812, 48.838257006125176]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-floral-de-paris-1",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.44464326722, 48.8382570061]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3c9f4b2e2e17574eca90cf01690f1a964131bc8c",
    "fields": {
        "arrondissement": "75005",
        "adresse": "JARDIN TINO ROSSI - MUSEE DE LA SCULPTURE EN PLEIN AIR",
        "geo_point_2d": [48.8479096767, 2.36012026058],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360120260583228, 48.847909676666966]
            ]
        },
        "type": "URINOIR",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-tino-rossi-1786",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36012026058, 48.8479096767]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a157dc1d02e8001f68b4d807024e54e067ca9b9f",
    "fields": {
        "arrondissement": "75020",
        "adresse": "64 RUE DU VOLGA",
        "geo_point_2d": [48.8527196637, 2.4089887074],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.40898870740256, 48.85271966367162]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.4089887074, 48.8527196637]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0757eb13195e83d7963b604cdc14e5a97aaa827c",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 3 RUE DES DOCTEURS DEJERINE",
        "geo_point_2d": [48.8544550261, 2.41224737391],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.412247373913973, 48.8544550261121]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41224737391, 48.8544550261]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a9dcc4df6f295b5bce89708c5c7746460876f353",
    "fields": {
        "arrondissement": "75010",
        "adresse": "51 QUAI DE VALMY",
        "geo_point_2d": [48.8702736796, 2.36586338772],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365863387720789, 48.87027367959497]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36586338772, 48.8702736796]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dbc25d0040c4e595e9e5b9dd9bd5798b7fea86b4",
    "fields": {
        "arrondissement": "75011",
        "adresse": "3 RUE DE MONTREUIL",
        "geo_point_2d": [48.8504315708, 2.38403796322],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384037963215138, 48.85043157079961]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38403796322, 48.8504315708]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "445fa3ba61b9d161736fcc2add0b507f641507f6",
    "fields": {
        "arrondissement": "75011",
        "adresse": "11-29 BOULEVARD JULES FERRY",
        "geo_point_2d": [48.8672923257, 2.3685754962],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368575496201813, 48.867292325713215]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3685754962, 48.8672923257]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ac3c2b32c0057a7256bbc0a97dfea57a7ae458b1",
    "fields": {
        "arrondissement": "75012",
        "adresse": "7 RUE JOSEPH CHAILLEY",
        "geo_point_2d": [48.8332259501, 2.40401437963],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.4040143796336713, 48.83322595005886]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40401437963, 48.8332259501]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "298fdc6cf15428e12afaac20ccddeaaf5e8e29be",
    "fields": {
        "arrondissement": "75013",
        "adresse": "RUE CLISSON",
        "geo_point_2d": [48.829376228, 2.36530147937],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3653014793666163, 48.8293762280325]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36530147937, 48.829376228]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4ccad624ff4358960b26ba0d971297d0470abea8",
    "fields": {
        "arrondissement": "75014",
        "adresse": "1 AVENUE RENE COTY",
        "geo_point_2d": [48.8331389925, 2.3329171443],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.332917144300073, 48.83313899250652]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3329171443, 48.8331389925]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "82579dae0d36fe22a88c384635c6a4b32767025f",
    "fields": {
        "arrondissement": "75015",
        "adresse": "6 BOULEVARD PASTEUR",
        "geo_point_2d": [48.8447364971, 2.3110142464],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.311014246402828, 48.844736497080476]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3110142464, 48.8447364971]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "55f5f7d1bd66a737c40129c961dc1c7c2b2cabf8",
    "fields": {
        "arrondissement": "75019",
        "adresse": "7 RUE DE CAMBRAI",
        "geo_point_2d": [48.895495352, 2.37896297585],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3789629758483413, 48.895495351952356]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37896297585, 48.895495352]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "602f22eea121172b01e87ec78ea377b198c4c396",
    "fields": {
        "arrondissement": "75019",
        "adresse": "100 AVENUE DE FLANDRE",
        "geo_point_2d": [48.8909604082, 2.37724300043],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.377243000431053, 48.89096040821488]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37724300043, 48.8909604082]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "eb123ca7e33df5b8a5c7df97ef2ddc2ee3ec2b3a",
    "fields": {
        "arrondissement": "75001",
        "adresse": "9 RUE COQUILLIERE",
        "geo_point_2d": [48.863547401, 2.34247229869],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.342472298693266, 48.863547400977296]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34247229869, 48.863547401]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "443895be1a0c1d47f42569c90986e11703281bbd",
    "fields": {
        "arrondissement": "75001",
        "adresse": "39 PLACE DES DEUX ECUS",
        "geo_point_2d": [48.8631566816, 2.34183617582],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.341836175822233, 48.86315668164923]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34183617582, 48.8631566816]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "167bab75dd6c5ec950c6627891467864f356aa29",
    "fields": {
        "arrondissement": "75001",
        "adresse": "107 RUE RAMBUTEAU",
        "geo_point_2d": [48.86274833, 2.3463926621],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346392662102407, 48.862748330041285]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3463926621, 48.86274833]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "aea1b915e6216f6b472830d96f5c64f1e2663b4c",
    "fields": {
        "arrondissement": "75002",
        "adresse": "37 BOULEVARD DES CAPUCINES",
        "geo_point_2d": [48.8700582338, 2.32934537657],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.329345376568482, 48.87005823382521]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32934537657, 48.8700582338]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "77fe62ce2635a84d3e0e77210d553007ca865c17",
    "fields": {
        "arrondissement": "75004",
        "adresse": "41 BOULEVARD BOURDON",
        "geo_point_2d": [48.8526426891, 2.36835669396],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368356693963534, 48.85264268909321]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36835669396, 48.8526426891]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "eb312d84ca632bb3a52fb9b8e33da78b16b3566e",
    "fields": {
        "arrondissement": "75004",
        "adresse": "face 2 RUE AUBRY LE BOUCHER",
        "geo_point_2d": [48.8602128693, 2.35039774647],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.350397746470584, 48.86021286930935]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35039774647, 48.8602128693]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "888de16895ce659a523e75114359ce5b3220cad9",
    "fields": {
        "arrondissement": "75007",
        "adresse": "41 PLACE DE FINLANDE",
        "geo_point_2d": [48.8624769936, 2.31080862272],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.310808622720738, 48.862476993596815]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31080862272, 48.8624769936]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3e205e774fc157b58ad3223e8b33bac70ad3df6f",
    "fields": {
        "arrondissement": "75010",
        "adresse": "25 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.873480742, 2.3752817699],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.37528176990251, 48.87348074198407]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3752817699, 48.873480742]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "244455388be443720c10a34d27de6875c5a90829",
    "fields": {
        "arrondissement": "75013",
        "adresse": "44 BOULEVARD VINCENT AURIOL",
        "geo_point_2d": [48.8352392655, 2.3687826073],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368782607297407, 48.83523926554275]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3687826073, 48.8352392655]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6a8994b7e78761bc13c2b5b5363a145366020249",
    "fields": {
        "arrondissement": "75014",
        "adresse": "2 BOULEVARD JOURDAN",
        "geo_point_2d": [48.8189867195, 2.34433502421],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34433502420897, 48.81898671945179]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34433502421, 48.8189867195]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "127ced7fa19ee67eca478f456ed1b54f32300fa0",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE MAURICE GARDETTE",
        "geo_point_2d": [48.8614574677, 2.3787483757],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.378748375701655, 48.86145746772126]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-maurice-gardette-2725",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3787483757, 48.8614574677]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "24444f5388a8cd4974ee353d92957cff896fdd5c",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE LOUIS MAJORELLE",
        "geo_point_2d": [48.8519924785, 2.38092400605],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380924006050464, 48.85199247850566]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-louis-majorelle-2733",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38092400605, 48.8519924785]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a53a39d56d490ff8588d539df798129f2b7e9b4c",
    "fields": {
        "arrondissement": "75012",
        "adresse": "JARDIN ILAN HALIMI (ANC. RUE DE FECAMP - MICHEL BIZOT)",
        "geo_point_2d": [48.83625107, 2.40119094677],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.401190946770578, 48.83625106997377]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-ilan-halimi-2595",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40119094677, 48.83625107]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f1d012a1440bd35df6f3915aa48c80e4d26ea4c6",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN DU 122 RUE DES POISSONNIERS",
        "geo_point_2d": [48.8950062312, 2.35327386353],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353273863532805, 48.895006231159165]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-122-rue-des-poissonniers-17468",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35327386353, 48.8950062312]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "331536448bea2995ac5264cea8ac43efcd3d944f",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN MARIA VERONE",
        "geo_point_2d": [48.8971045753, 2.33587518158],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3358751815764123, 48.89710457530042]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-maria-verone-2763",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33587518158, 48.8971045753]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0fccc6a91e427801ddb749699919300990bdd5b3",
    "fields": {
        "arrondissement": "75017",
        "adresse": "96ter RUE LEMERCIER",
        "geo_point_2d": [48.8894228218, 2.31886669765],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.318866697645444, 48.889422821810484]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31886669765, 48.8894228218]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "eb4ab7442e580216ac4637c3120976e4cf61201d",
    "fields": {
        "arrondissement": "75012",
        "adresse": "BOIS DE VINCENNES - PARC FLORAL DE PARIS - CHATEAU",
        "geo_point_2d": [48.8399284317, 2.4407682131],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.440768213104734, 48.83992843173241]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-floral-de-paris-1",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.4407682131, 48.8399284317]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b6d03b9e32bf1a68c29d7a6d148744334d8236c1",
    "fields": {
        "arrondissement": "75003",
        "adresse": "SQUARE DU TEMPLE",
        "geo_point_2d": [48.8642864915, 2.36049974759],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360499747594259, 48.864286491471425]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-temple-elie-wiesel-2425",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36049974759, 48.8642864915]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fcc4a8a71f9139611148c9ea48f1f77f1ada17c8",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE FLORENCE BLUMENTHAL",
        "geo_point_2d": [48.8274983828, 2.36731787453],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367317874534179, 48.827498382756616]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-florence-blumenthal-2523",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36731787453, 48.8274983828]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7134d210e95edce294787d4b2400b12803d35e1a",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN JEAN-CLAUDE NICOLAS FORESTIER",
        "geo_point_2d": [48.8188480991, 2.34807240622],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.348072406221041, 48.818848099135394]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-jean-claude-nicolas-forestier-2554",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34807240622, 48.8188480991]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3a3c523e1c1587915d89a64c713f355944e3ddee",
    "fields": {
        "arrondissement": "75014",
        "adresse": "JARDIN DE LA ZAC D'ALESIA",
        "geo_point_2d": [48.8261907557, 2.33822983711],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.33822983711128, 48.826190755689645]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33822983711, 48.8261907557]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c26928228d3e8b6aaef9c83774b0466a384f097c",
    "fields": {
        "arrondissement": "75020",
        "adresse": "171 RUE DES PYRENEES",
        "geo_point_2d": [48.8600157129, 2.40102151004],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.40102151004381, 48.860015712929304]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40102151004, 48.8600157129]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "655fe0628e830706dad93646fec6fe8bd8c30d4b",
    "fields": {
        "arrondissement": "75019",
        "adresse": "face 57 QUAI DE LA SEINE",
        "geo_point_2d": [48.8872351151, 2.37583653176],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375836531761866, 48.88723511511238]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37583653176, 48.8872351151]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0ce6617e2197137978c40928c94cd679c8fe7dda",
    "fields": {
        "arrondissement": "75014",
        "adresse": "98 BOULEVARD ARAGO",
        "geo_point_2d": [48.8347355495, 2.33680388506],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336803885060249, 48.83473554947447]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33680388506, 48.8347355495]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e47d24465de824e776f283949d5ef910ae8f9557",
    "fields": {
        "arrondissement": "75013",
        "adresse": "face 61 BOULEVARD AUGUSTE BLANQUI",
        "geo_point_2d": [48.829484717, 2.34942544086],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349425440864941, 48.82948471703286]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34942544086, 48.829484717]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "67dd2f902de817a08e43667c5cf5bc0aa1498a7a",
    "fields": {
        "arrondissement": "75016",
        "adresse": "37 RUE MIRABEAU",
        "geo_point_2d": [48.8459388981, 2.26908155551],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.2690815555105672, 48.84593889811059]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26908155551, 48.8459388981]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a77c6cec34140e304b2bd680ee0adce8d5a1ac90",
    "fields": {
        "arrondissement": "75019",
        "adresse": "AVENUE DE LA PORTE BRUNET",
        "geo_point_2d": [48.8838976204, 2.3978596801],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.397859680104272, 48.88389762041914]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3978596801, 48.8838976204]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5d6a091fe78c9b7874da9ba9b4d8849519198584",
    "fields": {
        "arrondissement": "75019",
        "adresse": "3 RUE BOTZARIS",
        "geo_point_2d": [48.8778639144, 2.38125083002],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.381250830015357, 48.877863914358414]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38125083002, 48.8778639144]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "745dc9f402ee62bc2502c15d0329990ff2092440",
    "fields": {
        "arrondissement": "75002",
        "adresse": "85 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8648280163, 2.35161126359],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35161126358933, 48.86482801626371]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35161126359, 48.8648280163]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "16b2266bf0457bdd425f48849543098f0e4f3799",
    "fields": {
        "arrondissement": "75002",
        "adresse": "73 RUE REAUMUR",
        "geo_point_2d": [48.8667935436, 2.34957136512],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349571365122189, 48.86679354360574]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34957136512, 48.8667935436]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e4b2fea947386873f78c56e796e736e1b6f0d01a",
    "fields": {
        "arrondissement": "75003",
        "adresse": "face 34 RUE DU GRENIER SAINT LAZARE",
        "geo_point_2d": [48.8630936107, 2.35271771473],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352717714733576, 48.86309361073191]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35271771473, 48.8630936107]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "17787af1f1968f00a295f0ec776873a9f50edbe5",
    "fields": {
        "arrondissement": "75005",
        "adresse": "9 BOULEVARD SAINT GERMAIN",
        "geo_point_2d": [48.8493302626, 2.35484618236],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354846182358385, 48.849330262603885]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35484618236, 48.8493302626]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4a8075b6c7034984510667727ba3878266a5c5e1",
    "fields": {
        "arrondissement": "75007",
        "adresse": "2 PLACE JOFFRE",
        "geo_point_2d": [48.8543011761, 2.30508321087],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.305083210870264, 48.85430117614817]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30508321087, 48.8543011761]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3880bb320bd8ee2f2ecfa017bf17e2f477dec2ec",
    "fields": {
        "arrondissement": "75018",
        "adresse": "87 RUE DE LA CHAPELLE",
        "geo_point_2d": [48.8976316118, 2.35891564605],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.358915646050675, 48.89763161180877]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35891564605, 48.8976316118]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ddaf9c9c2de971bf417cbf31bac7c0b7257b3c6f",
    "fields": {
        "arrondissement": "75018",
        "adresse": "23 RUE LAMBERT",
        "geo_point_2d": [48.8890639238, 2.34515427599],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.345154275989545, 48.88906392378632]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34515427599, 48.8890639238]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "05810b9fbb53eef8953365e67b49a30bb5b8e948",
    "fields": {
        "arrondissement": "75018",
        "adresse": "6 RUE DE PANAMA",
        "geo_point_2d": [48.8876267854, 2.35275147826],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352751478255431, 48.887626785367736]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35275147826, 48.8876267854]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0f16939669572a1fd9fd52f57b51c527c7f7faf9",
    "fields": {
        "arrondissement": "75018",
        "adresse": "2 RUE RONSARD",
        "geo_point_2d": [48.8851123413, 2.34434695141],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344346951405809, 48.88511234133795]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34434695141, 48.8851123413]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8a66af8d851a2b1c1cffca534fc3e78dc2ae1ec4",
    "fields": {
        "arrondissement": "75018",
        "adresse": "1 rue Lamarck",
        "geo_point_2d": [48.8862672617, 2.34386321191],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343863211912109, 48.88626726174862]
            ]
        },
        "type": "LAVATORY",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34386321191, 48.8862672617]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "555129d088ce2ab8cca611de7af18b104bcad477",
    "fields": {
        "arrondissement": "75017",
        "adresse": "face 1 AVENUE EMILE ET ARMAND MASSARD",
        "geo_point_2d": [48.8888826743, 2.29757004647],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.297570046469314, 48.888882674320925]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29757004647, 48.8888826743]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b8ab04466510203d976f53209bd54b32caf6636c",
    "fields": {
        "arrondissement": "75017",
        "adresse": "PLACE CHARLES FILLION",
        "geo_point_2d": [48.8884709656, 2.31581151093],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.315811510931307, 48.888470965571756]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31581151093, 48.8884709656]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8fe514dd53c2608139461066344bb97c5348aef0",
    "fields": {
        "arrondissement": "75012",
        "adresse": "SQUARE SAINT-ELOI",
        "geo_point_2d": [48.8445758286, 2.38766229578],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.387662295775837, 48.84457582856606]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-saint-eloi-2597",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38766229578, 48.8445758286]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a1190bf522177861134967985c2a9248879b0383",
    "fields": {
        "arrondissement": "75017",
        "adresse": "PARC CLICHY-BATIGNOLLES - MARTIN LUTHER KING",
        "geo_point_2d": [48.8891700227, 2.31537255449],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.315372554485153, 48.88917002268788]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-clichy-batignolles-martin-luther-king-2817",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31537255449, 48.8891700227]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7bac60fca64ea45ea203c04196f49491877cccf4",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN BRASSAI",
        "geo_point_2d": [48.8285870861, 2.34943662896],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349436628957497, 48.82858708607813]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-brassai-2571",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34943662896, 48.8285870861]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4987f67e1ebced3d5c6f0a70ef461c9e5cf06932",
    "fields": {
        "arrondissement": "75010",
        "adresse": "SQUARE ARISTIDE CAVAILLE-COLL",
        "geo_point_2d": [48.8783275128, 2.35212188202],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35212188202011, 48.878327512750936]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-aristide-cavaille-coll-2481",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35212188202, 48.8783275128]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "38267c3b7e090e15128be01d9c1081c3b4c0860f",
    "fields": {
        "arrondissement": "75019",
        "adresse": "52 QUAI DE LA LOIRE",
        "geo_point_2d": [48.8858032504, 2.37584765342],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375847653421224, 48.885803250412145]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37584765342, 48.8858032504]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "64eb6b7543885f34eb3bb6773f721fe997f39b1e",
    "fields": {
        "arrondissement": "75020",
        "adresse": "72 RUE DES AMANDIERS",
        "geo_point_2d": [48.866284053, 2.38977745052],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.38977745051532, 48.86628405302378]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38977745052, 48.866284053]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b005807981316f2a22628569271ad527fc484c7a",
    "fields": {
        "arrondissement": "75012",
        "adresse": "COULEE VERTE RENE DUMONT - PROMENADE DE LA RUE DU SAHEL",
        "geo_point_2d": [48.841005859, 2.40220529493],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.402205294934227, 48.84100585898153]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-charles-peguy-2575",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40220529493, 48.841005859]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b6ae007a2799a2f679c6fe02e32bc5620a1f7e77",
    "fields": {
        "arrondissement": "75014",
        "adresse": "oppos\u00e9 au 3 RUE DE L ABBE SOULANGE BODIN",
        "geo_point_2d": [48.8354861005, 2.31779797889],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.317797978892912, 48.83548610047365]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31779797889, 48.8354861005]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8ec37b2747f033ea9cfaa896c0132af6d06c2ea0",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 30 AVENUE REILLE",
        "geo_point_2d": [48.8245410243, 2.33948840387],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.339488403872548, 48.82454102425052]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33948840387, 48.8245410243]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5e01c8af623b99ae4d4f1f5644a23f1618595746",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 50 QUAI DE JEMMAPES",
        "geo_point_2d": [48.8700279012, 2.36659750721],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36659750721216, 48.87002790121457]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36659750721, 48.8700279012]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "38f37dbf8d8963fc832eb9d254db003e4168f524",
    "fields": {
        "arrondissement": "75011",
        "adresse": "18 AVENUE JEAN AICARD",
        "geo_point_2d": [48.8656969837, 2.38095859962],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380958599624836, 48.865696983730714]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38095859962, 48.8656969837]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "acf15d632de47bb8ecb2a3b3156b1ba997a0cdbd",
    "fields": {
        "arrondissement": "75012",
        "adresse": "90 COURS DE VINCENNES",
        "geo_point_2d": [48.8471076974, 2.40747877529],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.407478775285202, 48.84710769744262]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40747877529, 48.8471076974]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "efee0937170cc89ffc9b9f7907e4acbf34dd085b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "147 RUE VERCINGETORIX",
        "geo_point_2d": [48.8325740544, 2.31141917957],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.311419179565337, 48.83257405441343]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31141917957, 48.8325740544]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b7ef56fd1b69589a958a7bb3897e571a11336bea",
    "fields": {
        "arrondissement": "75015",
        "adresse": "185 BOULEVARD LEFEBVRE",
        "geo_point_2d": [48.8282841142, 2.3033660535],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.30336605349608, 48.8282841141784]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3033660535, 48.8282841142]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "95c5e6cb039e99f03675db0974b99fa97ea10da8",
    "fields": {
        "arrondissement": "75015",
        "adresse": "65 AVENUE EMILE ZOLA",
        "geo_point_2d": [48.8465506851, 2.28477481962],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.284774819622887, 48.84655068506884]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28477481962, 48.8465506851]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "636bc545332bae28648243463fb4de416b249ce7",
    "fields": {
        "arrondissement": "75015",
        "adresse": "86 RUE DE LA FEDERATION",
        "geo_point_2d": [48.8528463556, 2.29798828554],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.297988285539683, 48.85284635560979]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29798828554, 48.8528463556]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f91d125e5a4de23caeca5f151dc2cb6f796e3f6f",
    "fields": {
        "arrondissement": "75016",
        "adresse": "170 AVENUE DE VERSAILLES",
        "geo_point_2d": [48.8398553812, 2.26307814089],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.2630781408913743, 48.83985538119863]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26307814089, 48.8398553812]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "790c39782ba9723d0a3fc10c72a101a5a0db5f81",
    "fields": {
        "arrondissement": "75016",
        "adresse": "oppos\u00e9 39 BOULEVARD DE L AMIRAL BRUIX",
        "geo_point_2d": [48.8754279643, 2.27958777872],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.279587778715396, 48.87542796427108]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27958777872, 48.8754279643]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a7c351bd2a06c3dd0fae1fab226cbaf358841b1d",
    "fields": {
        "arrondissement": "75016",
        "adresse": "2 SQUARE LAMARTINE",
        "geo_point_2d": [48.8651714231, 2.27515816983],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.275158169830334, 48.86517142314818]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27515816983, 48.8651714231]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "32b46b8cfa407b94f679db720479c9c49fa05440",
    "fields": {
        "arrondissement": "75019",
        "adresse": "RUE DE CRIMEE",
        "geo_point_2d": [48.888835619, 2.37903396509],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379033965091645, 48.88883561898796]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37903396509, 48.888835619]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f5c9808b72beaf95a6710ef09120052cc1b664ff",
    "fields": {
        "arrondissement": "75001",
        "adresse": "44 RUE BERGER",
        "geo_point_2d": [48.8623403028, 2.34220322183],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.342203221829112, 48.86234030275964]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34220322183, 48.8623403028]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d137627dc4abf16cab061262f3837b2d645c7d74",
    "fields": {
        "arrondissement": "75003",
        "adresse": "25 RUE PASTOURELLE",
        "geo_point_2d": [48.8627443768, 2.3593648618],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.359364861798902, 48.8627443768308]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3593648618, 48.8627443768]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "306518ae4d0a18ee1e0d8d57634a2b45da876af4",
    "fields": {
        "arrondissement": "75007",
        "adresse": "AVENUE CHARLES FLOQUET",
        "geo_point_2d": [48.8551043844, 2.2958959039],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.295895903904689, 48.85510438444298]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2958959039, 48.8551043844]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "aeb3d55ecb48dee9bd15cca23a08e3b3863e5aab",
    "fields": {
        "arrondissement": "75009",
        "adresse": "45 BOULEVARD DE ROCHECHOUART",
        "geo_point_2d": [48.8827090859, 2.34349779973],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343497799728155, 48.88270908589631]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34349779973, 48.8827090859]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "057eafc0e7b72044da96663581a90fe3128a2c9b",
    "fields": {
        "arrondissement": "75011",
        "adresse": "JARDIN EMILE GALLE",
        "geo_point_2d": [48.853785099, 2.39046530224],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.390465302238812, 48.853785098975656]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-emile-galle-2730",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39046530224, 48.853785099]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7b778e7d214617021c8c3371c1c8f0d2fb3dc590",
    "fields": {
        "arrondissement": "75012",
        "adresse": "JARDIN DE REUILLY - PAUL PERNIN",
        "geo_point_2d": [48.8428565377, 2.38828352413],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.388283524133826, 48.84285653768209]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-de-reuilly-paul-pernin-2573",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38828352413, 48.8428565377]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "18508e631b2a2c41d21c15b0b981a750031c2312",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDIN DU RANELAGH",
        "geo_point_2d": [48.8582522408, 2.26831350353],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.268313503528244, 48.85825224076739]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-du-ranelagh-1778",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26831350353, 48.8582522408]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "61f5e02a70e238deb14a604f882194c600ddace9",
    "fields": {
        "arrondissement": "75016",
        "adresse": "SQUARE THOMAS JEFFERSON",
        "geo_point_2d": [48.8677655868, 2.29470407503],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.29470407503117, 48.86776558683859]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-thomas-jefferson-2606",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29470407503, 48.8677655868]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a9493a246fe4cfc115f5204c2581e4ca5abf1df7",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDIN DES SERRES D'AUTEUIL",
        "geo_point_2d": [48.8460029693, 2.25282376963],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.252823769625865, 48.84600296930213]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-tchad-2622",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.25282376963, 48.8460029693]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "61ad37d6ad58c54fade1d7021af5c57a156d4424",
    "fields": {
        "arrondissement": "75017",
        "adresse": "SQUARE DE LA RUE BAYEN",
        "geo_point_2d": [48.8821573953, 2.29061402601],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.290614026007784, 48.882157395343086]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-olave-et-robert-baden-powell-ex-bayen-2630",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29061402601, 48.8821573953]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "806c29a55641c587483b31e6d72b6ed990e157cc",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE SUZANNE BUISSON",
        "geo_point_2d": [48.8883716064, 2.33711015851],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.337110158514507, 48.88837160641977]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-suzanne-buisson-2688",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33711015851, 48.8883716064]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4240b1f6e0fc44cced5f433cfb642080c0c9ba72",
    "fields": {
        "arrondissement": "75019",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8810641844, 2.38730905609],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.387309056086508, 48.88106418436492]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38730905609, 48.8810641844]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a7d8934235a2adf80578cec889006c2147200273",
    "fields": {
        "arrondissement": "75018",
        "adresse": "oppos\u00e9 au 10 RUE DE L EVANGILE",
        "geo_point_2d": [48.8920795008, 2.36154810397],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361548103970359, 48.89207950084549]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36154810397, 48.8920795008]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "746e8057010952a2bfcd3e6c63a20d4c27d7354b",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 3 PLACE SAINT PIERRE",
        "geo_point_2d": [48.8844921094, 2.3446622119],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344662211897329, 48.88449210942008]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3446622119, 48.8844921094]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c82da762bba5896b4e8e20b07893079c5689480f",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 34 BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8825673448, 2.33677389498],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3367738949822803, 48.88256734476813]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33677389498, 48.8825673448]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fa146b2da803f6986d265e7198129ef10ec226ee",
    "fields": {
        "arrondissement": "75004",
        "adresse": "Parc Rives de Seine",
        "geo_point_2d": [48.8534971662, 2.35396819914],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3539681991391372, 48.8534971661787]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35396819914, 48.8534971662]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "aee249df73cfc62d1207a1060a7482b8fec5c0d0",
    "fields": {
        "arrondissement": "75017",
        "adresse": "4 AVENUE NIEL",
        "geo_point_2d": [48.8789207975, 2.29447373008],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.294473730079965, 48.87892079748371]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29447373008, 48.8789207975]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "45b1d2231021fe161e5faa9c2401dc01c0526312",
    "fields": {
        "arrondissement": "75018",
        "adresse": "74 AVENUE DE SAINT OUEN",
        "geo_point_2d": [48.8919370825, 2.32718401427],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.327184014274099, 48.89193708249991]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32718401427, 48.8919370825]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "58c56d74c72f476e42738be55ae3ad58e060835b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "PARC MONTSOURIS",
        "geo_point_2d": [48.8222770261, 2.33659156746],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336591567464137, 48.82227702606083]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33659156746, 48.8222770261]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c941c74311f388793713e22de303567b0a82e5d4",
    "fields": {
        "arrondissement": "75005",
        "adresse": "JARDIN TINO ROSSI - MUSEE DE LA SCULPTURE EN PLEIN AIR",
        "geo_point_2d": [48.8484366415, 2.35914650646],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.359146506463064, 48.848436641462065]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-tino-rossi-1786",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35914650646, 48.8484366415]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "717de845127c1d789ed57184ab0333abb1d63cd9",
    "fields": {
        "arrondissement": "75020",
        "adresse": "face 121 RUE DES PYRENEES",
        "geo_point_2d": [48.8570490157, 2.40451726853],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.404517268525464, 48.85704901565089]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40451726853, 48.8570490157]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "189d2af4ea8ad03ba03b8bda349f749c3d5f79f7",
    "fields": {
        "arrondissement": "75020",
        "adresse": "3 RUE SORBIER",
        "geo_point_2d": [48.8684257393, 2.38988864439],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.389888644388741, 48.86842573926061]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38988864439, 48.8684257393]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a93013cd3c69a6d99059f13bff0ccc4534199194",
    "fields": {
        "arrondissement": "75011",
        "adresse": "JARDIN DE LA FOLIE TITON",
        "geo_point_2d": [48.8521493385, 2.38538721404],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.385387214042942, 48.852149338489305]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-de-la-folie-titon-2842",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38538721404, 48.8521493385]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "af811f94fb7cda85497c4545695a2881a8472ae1",
    "fields": {
        "arrondissement": "75019",
        "adresse": "29 RUE MANIN",
        "geo_point_2d": [48.8786193549, 2.37826223132],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3782622313212523, 48.87861935487687]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37826223132, 48.8786193549]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1b0c664761fb13fd6c69c0e0b4ee9a6bc0c99c83",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 40 AVENUE REILLE",
        "geo_point_2d": [48.8244420789, 2.33853893046],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.338538930462, 48.82444207894634]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33853893046, 48.8244420789]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "90ce8181da869bf085fc9037ce20fba5bacfcb17",
    "fields": {
        "arrondissement": "75011",
        "adresse": "282 BOULEVARD VOLTAIRE",
        "geo_point_2d": [48.8495804478, 2.3936632084],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.393663208396115, 48.84958044775066]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3936632084, 48.8495804478]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "580b6f54d76b012191f8a1b3bb05eb6bd4980c57",
    "fields": {
        "arrondissement": "75012",
        "adresse": "4 BOULEVARD DIDEROT",
        "geo_point_2d": [48.8452888819, 2.36925175252],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369251752524021, 48.84528888185514]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36925175252, 48.8452888819]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b52d7d6f2746e5365d4e73f0feadfd2a7cfe160b",
    "fields": {
        "arrondissement": "75012",
        "adresse": "18 RUE ERARD",
        "geo_point_2d": [48.8455922983, 2.3849164361],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384916436097444, 48.845592298253614]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3849164361, 48.8455922983]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dd2c5c474566655488ef72a00ce78d30ed8c6e52",
    "fields": {
        "arrondissement": "75012",
        "adresse": "8 RUE DE LYON",
        "geo_point_2d": [48.847451502, 2.37177589149],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.37177589149407, 48.84745150202467]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37177589149, 48.847451502]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "03d5a64405cf90ff5a64c48e016206943853b1de",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 57 BOULEVARD LEFEBVRE",
        "geo_point_2d": [48.8309615672, 2.29183408576],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.291834085756656, 48.830961567192446]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29183408576, 48.8309615672]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6595c3ec36489216ff0ea3eb3a55e9d22a3f2570",
    "fields": {
        "arrondissement": "75015",
        "adresse": "73 QUAI BRANLY",
        "geo_point_2d": [48.857262109, 2.2911045586],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.291104558604041, 48.85726210900659]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2911045586, 48.857262109]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ceedfcae3e288aa991298cb28a532b89a523467f",
    "fields": {
        "arrondissement": "75016",
        "adresse": "22 RUE GROS",
        "geo_point_2d": [48.8512926793, 2.27548876117],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.275488761174221, 48.85129267928765]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27548876117, 48.8512926793]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c7591c3afe26871462c424c35a7667d4e5fde6ea",
    "fields": {
        "arrondissement": "75019",
        "adresse": "14 RUE MEYNADIER",
        "geo_point_2d": [48.8835019855, 2.38345050831],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.383450508308367, 48.8835019855066]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38345050831, 48.8835019855]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "99143c9e1ff6cba5b2e9510371282be66b663a14",
    "fields": {
        "arrondissement": "75007",
        "adresse": "PLACE VAUBAN",
        "geo_point_2d": [48.8536250405, 2.31131965274],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.311319652738035, 48.853625040539285]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31131965274, 48.8536250405]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1909f79c9c124764ce2aefe81e788f90cee5eaf6",
    "fields": {
        "arrondissement": "75009",
        "adresse": "51 BOULEVARD DE ROCHECHOUART",
        "geo_point_2d": [48.8823161502, 2.34143290901],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.341432909012633, 48.88231615020776]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34143290901, 48.8823161502]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3307bfcb403186b018a55ae55bf7f5d117c4c5ab",
    "fields": {
        "arrondissement": "75009",
        "adresse": "65 BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8839813125, 2.33178483538],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.331784835383923, 48.883981312514564]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33178483538, 48.8839813125]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "de81845057a432ecc056d4190b7e32137d17973f",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face au 1 RUE DE METZ",
        "geo_point_2d": [48.8707513171, 2.35456149776],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354561497762248, 48.87075131711198]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35456149776, 48.8707513171]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d71c943c85be89bddde1eb53339980dbaa85ed7b",
    "fields": {
        "arrondissement": "75010",
        "adresse": "RUE DU FAUBOURG SAINT DENIS",
        "geo_point_2d": [48.8757753918, 2.3562513574],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356251357404286, 48.87577539175519]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3562513574, 48.8757753918]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ea30a05553eeb51c5ddb892f22e5aa73a0ca5b8a",
    "fields": {
        "arrondissement": "75013",
        "adresse": "100 BOULEVARD AUGUSTE BLANQUI",
        "geo_point_2d": [48.8311339785, 2.34443170133],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344431701329783, 48.831133978522075]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34443170133, 48.8311339785]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f4a2300d05e7ba50e8bdea2aa50cad80719d67a4",
    "fields": {
        "arrondissement": "75013",
        "adresse": "face 97 RUE DU CHEVALERET",
        "geo_point_2d": [48.8303257455, 2.3752007184],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375200718397584, 48.830325745524384]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3752007184, 48.8303257455]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b3a467895a0bc0a949e06d3d20ec5edcecfdfcae",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE FROT-PHALSBOURG",
        "geo_point_2d": [48.8558253602, 2.38539411647],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.385394116472173, 48.85582536021132]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-frot-phalsbourg-2845",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38539411647, 48.8558253602]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e6eb7d9ca37455ad0c05e6b6741fa4b70523f65d",
    "fields": {
        "arrondissement": "75012",
        "adresse": "JARDIN DU PORT DE L'ARSENAL",
        "geo_point_2d": [48.8488801919, 2.36761892188],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367618921882219, 48.84888019194628]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-du-port-de-l-arsenal-1783",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36761892188, 48.8488801919]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "92338e2c325caddce63dfe262d8b996d0236dc97",
    "fields": {
        "arrondissement": "75019",
        "adresse": "SQUARE CLAUDE BERNARD",
        "geo_point_2d": [48.8992517372, 2.37446461357],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.374464613571059, 48.89925173717339]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-claude-bernard-2682",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37446461357, 48.8992517372]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "109e18e958526a163e7399dabc1c438d7e515d59",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 118 BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8843823957, 2.33027499744],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.330274997441431, 48.884382395664495]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33027499744, 48.8843823957]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3bbe2d313296455a02081c374517dc6bc741ff41",
    "fields": {
        "arrondissement": "75004",
        "adresse": "Parc Rives de Seine",
        "geo_point_2d": [48.8573418186, 2.34612205038],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346122050376146, 48.8573418185966]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34612205038, 48.8573418186]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f23ff31ecec655a41d1835495711bac9d84a6e60",
    "fields": {
        "arrondissement": "75017",
        "adresse": "25 AVENUE DE CLICHY",
        "geo_point_2d": [48.8856593152, 2.32634362379],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.326343623788707, 48.88565931519143]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32634362379, 48.8856593152]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "885934f69b123cdcbba900a20e9ba3ab1e6edda1",
    "fields": {
        "arrondissement": "75005",
        "adresse": "JARDIN MEDIEVAL DU MUSEE DE CLUNY",
        "geo_point_2d": [48.8508110312, 2.34408716527],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344087165266142, 48.85081103124965]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-paul-painleve-2444",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34408716527, 48.8508110312]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d1fa83afb8dc7f72d65a9bfa36a66b057cb0f428",
    "fields": {
        "arrondissement": "75009",
        "adresse": "SQUARE MONTHOLON",
        "geo_point_2d": [48.8772201377, 2.34673564324],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34673564323595, 48.87722013771023]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-montholon-2469",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34673564324, 48.8772201377]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1bd3ece01b6e7720a9bf3c05c66d45f28a6f85b6",
    "fields": {
        "arrondissement": "75012",
        "adresse": "SQUARE VAN VOLLENHOVEN",
        "geo_point_2d": [48.8347068018, 2.40678654994],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.406786549937932, 48.834706801799896]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-van-vollenhoven-2593",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40678654994, 48.8347068018]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6edb5201da57064495531b3ca66e09b8cd0795a6",
    "fields": {
        "arrondissement": "75009",
        "adresse": "SQUARE D'ESTIENNE D'ORVES",
        "geo_point_2d": [48.8768427866, 2.33128852474],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.331288524740739, 48.87684278657476]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-d-estienne-d-orves-2472",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33128852474, 48.8768427866]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5e801c3a0213c7b0733067e5386c90a52f8cdc77",
    "fields": {
        "arrondissement": "75020",
        "adresse": "PLACE DE L ADJUDANT VINCENOT",
        "geo_point_2d": [48.8706908113, 2.40935899606],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.409358996058923, 48.87069081129334]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40935899606, 48.8706908113]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "42688895a2a864e959c5c2f6fa23517cffd8aead",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN D'EOLE - AIRE DE JEUX",
        "geo_point_2d": [48.8883480374, 2.36615710882],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.366157108818244, 48.88834803738936]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-francoise-helene-jourda-ex-20-rue-du-departement-18075",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36615710882, 48.8883480374]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4e31cd15d41713648b0011197302ea020d05afc4",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE ALAIN BASHUNG",
        "geo_point_2d": [48.8850625752, 2.35609316866],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356093168659291, 48.88506257518371]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-alain-bashung-15429",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35609316866, 48.8850625752]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4280c0c08cd6977e78c0d3d02f28df5fdcc2bf27",
    "fields": {
        "arrondissement": "75019",
        "adresse": "68 QUAI DE LA LOIRE",
        "geo_point_2d": [48.8865972858, 2.37715913735],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.377159137352045, 48.88659728582067]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37715913735, 48.8865972858]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "98432b5fdcc074654177af8cec013cc4eb436c9e",
    "fields": {
        "arrondissement": "75014",
        "adresse": "oppos\u00e9 au 8 AVENUE DE LA PORTE DE CHATILLON",
        "geo_point_2d": [48.8238450159, 2.31818117174],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.31818117173844, 48.823845015870496]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31818117174, 48.8238450159]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "90186f671c89e2644e96c5b1ba316cb8dbe87e14",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 4 BOULEVARD RICHARD LENOIR",
        "geo_point_2d": [48.8539831714, 2.36970018383],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36970018383113, 48.85398317138819]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36970018383, 48.8539831714]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f40c18982512926ea7689f2a96116504b6396d48",
    "fields": {
        "arrondissement": "75011",
        "adresse": "54 BOULEVARD DU TEMPLE",
        "geo_point_2d": [48.8662247852, 2.36500325622],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36500325622195, 48.866224785210306]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36500325622, 48.8662247852]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1993c6a65cad7f1824becaa48f4ccb305129d03b",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face au 7 BOULEVARD DE MENILMONTANT",
        "geo_point_2d": [48.8588174941, 2.38932122026],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.38932122025704, 48.85881749412742]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38932122026, 48.8588174941]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f8e7fff512d9b101c899211ac8bfb195138f17b5",
    "fields": {
        "arrondissement": "75012",
        "adresse": "179 AVENUE DAUMESNIL",
        "geo_point_2d": [48.8405254287, 2.39204037488],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.392040374875127, 48.840525428672]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39204037488, 48.8405254287]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "41e8ec942117a1614861b6846980a23041d69a3f",
    "fields": {
        "arrondissement": "75012",
        "adresse": "6 AVENUE COURTELINE",
        "geo_point_2d": [48.8440933263, 2.41126547313],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411265473129768, 48.84409332633428]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41126547313, 48.8440933263]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ccb3ab0ef4e87d8344d2858c933c17424f97e601",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 6 RUE DESNOUETTES",
        "geo_point_2d": [48.8360452467, 2.29341777695],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.293417776948328, 48.83604524670521]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29341777695, 48.8360452467]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bc21b606e148e5cc4001177a9c801f2b846f2cc6",
    "fields": {
        "arrondissement": "75015",
        "adresse": "83 RUE DESNOUETTES",
        "geo_point_2d": [48.8346285233, 2.28414114785],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.284141147850294, 48.834628523318855]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28414114785, 48.8346285233]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6cee14b86e649526f916b297242069725daf5b63",
    "fields": {
        "arrondissement": "75015",
        "adresse": "QUAI BRANLY",
        "geo_point_2d": [48.8555327438, 2.2898684017],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.28986840169592, 48.855532743834935]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2898684017, 48.8555327438]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "58d7329bd23015a7217b9e2fb19888ead92853a0",
    "fields": {
        "arrondissement": "75004",
        "adresse": "face 50 RUE DE RIVOLI",
        "geo_point_2d": [48.8567894245, 2.35418309229],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3541830922903673, 48.85678942451887]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35418309229, 48.8567894245]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3cdde5b6057893195bf83577d749f87fe902588b",
    "fields": {
        "arrondissement": "75005",
        "adresse": "face 75 bis RUE MONGE",
        "geo_point_2d": [48.8431229702, 2.35207298398],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35207298397874, 48.843122970151924]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35207298398, 48.8431229702]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9cc7882e529dbb7fbb6a3b11970ad95c6b18fe38",
    "fields": {
        "arrondissement": "75009",
        "adresse": "11 AVENUE TRUDAINE",
        "geo_point_2d": [48.8816653926, 2.34551626347],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.345516263472958, 48.88166539264048]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34551626347, 48.8816653926]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "44a24bada359b76080fbe48e54e4f9a1c966e412",
    "fields": {
        "arrondissement": "75010",
        "adresse": "1 AVENUE DE VERDUN",
        "geo_point_2d": [48.8763040463, 2.36139577184],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361395771844339, 48.87630404629897]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36139577184, 48.8763040463]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dd78719ad599bf5d3ec2bffb09876c20260e018a",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 4 AVENUE CLAUDE VELLEFAUX",
        "geo_point_2d": [48.8723150752, 2.36958303046],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369583030462243, 48.872315075210196]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36958303046, 48.8723150752]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "83fd5946c7a9d9be356810945ccc1d96619b07bf",
    "fields": {
        "arrondissement": "75010",
        "adresse": "2 RUE DES ECLUSES SAINT MARTIN",
        "geo_point_2d": [48.8762387318, 2.36817760373],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.368177603725198, 48.87623873175772]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36817760373, 48.8762387318]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "63e7cd2d8b2e8acf39db1a467ef3473ed9754454",
    "fields": {
        "arrondissement": "75013",
        "adresse": "117 BOULEVARD MASSENA",
        "geo_point_2d": [48.819583695, 2.36398233825],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363982338246426, 48.81958369499794]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36398233825, 48.819583695]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "75c535be63b4392ddfa8b0380ca34fb943beb443",
    "fields": {
        "arrondissement": "75018",
        "adresse": "43 BOULEVARD BARBES",
        "geo_point_2d": [48.8884941384, 2.34943063166],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349430631664719, 48.88849413840529]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34943063166, 48.8884941384]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "314219d598f7b331d47b99599a50a98454e2f04b",
    "fields": {
        "arrondissement": "75018",
        "adresse": "60 BOULEVARD DE LA CHAPELLE",
        "geo_point_2d": [48.8842051599, 2.3551514771],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.355151477096698, 48.884205159907864]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3551514771, 48.8842051599]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9037553d40ea645c924a81f46ae26bbcc9221686",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 154 RUE ORDENER",
        "geo_point_2d": [48.893502449, 2.33689208952],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336892089522764, 48.89350244895165]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33689208952, 48.893502449]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0c40c2199ecef2332d417db66e08b18901783ba8",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE SAMUEL BECKETT",
        "geo_point_2d": [48.8199054717, 2.36194746999],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361947469994329, 48.81990547174472]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-joan-miro-2563",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36194746999, 48.8199054717]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0e3e71f3ca523e2e8f73da321f64f88fac3bbc21",
    "fields": {
        "arrondissement": "75015",
        "adresse": "SQUARE PIERRE-ADRIEN DALPAYRAT",
        "geo_point_2d": [48.8377639863, 2.31303106986],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.313031069862712, 48.83776398633028]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-pierre-adrien-dalpayrat-2494",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31303106986, 48.8377639863]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "780a151b4b4f2356cdae66334ed01b46dfcd4fad",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOIS DE BOULOGNE - PARC DE BAGATELLE - ORANGERIE",
        "geo_point_2d": [48.8684430307, 2.24571854983],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.245718549831693, 48.86844303067457]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-bagatelle-1808",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.24571854983, 48.8684430307]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "be7f59880aa03c72f32f205cefc22d9fcc19546f",
    "fields": {
        "arrondissement": "75014",
        "adresse": "PARC MONTSOURIS",
        "geo_point_2d": [48.8213968839, 2.34091141227],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.340911412274563, 48.82139688389915]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34091141227, 48.8213968839]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1daf9e95c40d36721216b23e08ba0ea320100306",
    "fields": {
        "arrondissement": "75004",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8801430155, 2.38033455813],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.380334558131946, 48.88014301552132]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38033455813, 48.8801430155]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4b26f409df28073f19385263226452974009dc2e",
    "fields": {
        "arrondissement": "75020",
        "adresse": "24 RUE SAINT FARGEAU",
        "geo_point_2d": [48.8715541634, 2.40214018613],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.402140186133077, 48.87155416336666]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40214018613, 48.8715541634]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0f91d04c5339cc8f301e047c9f096a76ec33607b",
    "fields": {
        "arrondissement": "75020",
        "adresse": "34 RUE DURIS",
        "geo_point_2d": [48.8659675074, 2.38763183272],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.38763183271617, 48.86596750742654]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38763183272, 48.8659675074]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ebbbbaa6b74a0751af3b8e1dc7d4ab0fc65720ac",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN DE L'HOSPICE DEBROUSSE",
        "geo_point_2d": [48.8623598304, 2.40699313817],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.406993138173421, 48.86235983038611]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-de-l-hospice-debrousse-16194",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40699313817, 48.8623598304]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d0fb8faf4bec7011eee19227b6103a96acd6bfec",
    "fields": {
        "arrondissement": "75011",
        "adresse": "RUE DU FAUBOURG DU TEMPLE",
        "geo_point_2d": [48.8680291967, 2.36532029533],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365320295334627, 48.868029196720336]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36532029533, 48.8680291967]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c803d6b269b1a7fafa4615fe98469b743f9bfaaa",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 113 BOULEVARD VOLTAIRE",
        "geo_point_2d": [48.8571881565, 2.38095649246],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.38095649245684, 48.85718815652632]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38095649246, 48.8571881565]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d865fd9fe0bca1cf9b26d2d71269791d046871d6",
    "fields": {
        "arrondissement": "75011",
        "adresse": "135 RUE DE LA ROQUETTE",
        "geo_point_2d": [48.8586921457, 2.3839455514],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.383945551395374, 48.85869214568335]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3839455514, 48.8586921457]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a8b8042a8c3b0ffd039e8cb898781dbf6ca7a396",
    "fields": {
        "arrondissement": "75019",
        "adresse": "26 bis AVENUE CORENTIN CARIOU",
        "geo_point_2d": [48.8973126818, 2.38565335569],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.385653355685078, 48.89731268179252]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38565335569, 48.8973126818]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ebe40002f62950521fbca67bebba373adf4197f3",
    "fields": {
        "arrondissement": "75019",
        "adresse": "face 107 AVENUE JEAN JAURES",
        "geo_point_2d": [48.8855238911, 2.38101490722],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.381014907216359, 48.885523891130106]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38101490722, 48.8855238911]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e3813a69c9c6f5b05ae64feb167bd8eafdd8f2cd",
    "fields": {
        "arrondissement": "75004",
        "adresse": "2 RUE MORNAY",
        "geo_point_2d": [48.8494749622, 2.36612319381],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36612319381352, 48.84947496221174]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36612319381, 48.8494749622]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a7ab0b3e2bee2eca4139f546e7aa3f908b48c5d9",
    "fields": {
        "arrondissement": "75006",
        "adresse": "face 73 BOULEVARD SAINT MICHEL",
        "geo_point_2d": [48.8461292394, 2.34004429668],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.340044296677426, 48.84612923935425]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34004429668, 48.8461292394]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "304892fbc9ef2b6f04a166e5e7b9df8adddc2c42",
    "fields": {
        "arrondissement": "75006",
        "adresse": "75 BOULEVARD SAINT GERMAIN",
        "geo_point_2d": [48.8513882788, 2.34280306826],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.342803068261683, 48.851388278836424]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34280306826, 48.8513882788]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1c5df5aeed99d691bd29e1a2205993d6590828a5",
    "fields": {
        "arrondissement": "75009",
        "adresse": "5 BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8820890187, 2.33916330104],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.339163301036449, 48.88208901871459]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33916330104, 48.8820890187]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7f247398317574a540502819693da487cb217e4a",
    "fields": {
        "arrondissement": "75010",
        "adresse": "8 PLACE JACQUES BONSERGENT",
        "geo_point_2d": [48.871093694, 2.36098426518],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360984265180011, 48.87109369397819]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36098426518, 48.871093694]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "39a9792f9c7d2f3e273f0bbf4ecaf515fba7aefc",
    "fields": {
        "arrondissement": "75010",
        "adresse": "40 RUE RENE BOULANGER",
        "geo_point_2d": [48.8683459449, 2.36077777015],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.360777770150429, 48.868345944939634]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36077777015, 48.8683459449]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "be173403ae9cfaab4a0ccc5e4b22ec18c6dabbbd",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 182 RUE DU FAUBOURG SAINT MARTIN",
        "geo_point_2d": [48.8781474122, 2.36164569043],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361645690432077, 48.87814741217189]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36164569043, 48.8781474122]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f13baddc1e49af0f30b8c17293dc842b4aba3ff2",
    "fields": {
        "arrondissement": "75010",
        "adresse": "116 QUAI DE JEMMAPES",
        "geo_point_2d": [48.8749245714, 2.36364969934],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363649699340373, 48.87492457138502]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36364969934, 48.8749245714]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6d699b4dc801fe68e491beef7225ef54fd0fbc86",
    "fields": {
        "arrondissement": "75013",
        "adresse": "87 AVENUE D ITALIE",
        "geo_point_2d": [48.8239434511, 2.35812680471],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3581268047059, 48.823943451072005]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35812680471, 48.8239434511]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "72f39dd9a2e4dc3b6c7ca3fae319a0a37961267a",
    "fields": {
        "arrondissement": "75012",
        "adresse": "JARDIN DEBERGUE-RENDEZ-VOUS",
        "geo_point_2d": [48.846571731, 2.40391107071],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.403911070709573, 48.84657173098484]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-debergue-rendez-vous-2848",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40391107071, 48.846571731]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "abebad35ee60e2212016d6379261d6521669065d",
    "fields": {
        "arrondissement": "75018",
        "adresse": "SQUARE DE LA RUE CHARLES HERMITE",
        "geo_point_2d": [48.8998964294, 2.36657341965],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.366573419652227, 48.89989642935983]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-charles-hermite-2648",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36657341965, 48.8998964294]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "27d6c04bd18091e443aeead61e0205503c09db6d",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE MARIE CURIE",
        "geo_point_2d": [48.8411834889, 2.36337711776],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363377117758928, 48.841183488922866]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-marie-curie-2496",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36337711776, 48.8411834889]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1626b249119fd050a7efe6ee578195d457050323",
    "fields": {
        "arrondissement": "75018",
        "adresse": "PLACE SUZANNE VALADON",
        "geo_point_2d": [48.8844550477, 2.34273602921],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.342736029209813, 48.8844550476974]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34273602921, 48.8844550477]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c68e7f87d1143d26cd510a3ad023c75038872066",
    "fields": {
        "arrondissement": "75018",
        "adresse": "oppos\u00e9 au 17 RUE LIEUTENANT COLONEL DAX",
        "geo_point_2d": [48.9007058424, 2.34022806714],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.340228067141192, 48.90070584240963]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34022806714, 48.9007058424]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bc5cba776206d36ccd7e81f822a7a5f64f0a7118",
    "fields": {
        "arrondissement": "75018",
        "adresse": "29 RUE ERNESTINE",
        "geo_point_2d": [48.8904544446, 2.35460972914],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354609729140433, 48.89045444459046]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35460972914, 48.8904544446]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bebe360e54184cbe61e6a29c2716ea6d4bd23b64",
    "fields": {
        "arrondissement": "75018",
        "adresse": "1 RUE SAINT BRUNO",
        "geo_point_2d": [48.885957541, 2.35627051059],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356270510591299, 48.88595754102245]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35627051059, 48.885957541]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1b7329d768f0eb1b20ee0741471fd2e94bd60beb",
    "fields": {
        "arrondissement": "75017",
        "adresse": "face 1 AVENUE STEPHANE MALLARME",
        "geo_point_2d": [48.8875400451, 2.29436414584],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.294364145838023, 48.88754004512378]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29436414584, 48.8875400451]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7c73d27723d03be5ad6edc50b89aed84ecf91d93",
    "fields": {
        "arrondissement": "75015",
        "adresse": "SQUARE VIOLET",
        "geo_point_2d": [48.8442922873, 2.28919956477],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.289199564769723, 48.84429228734059]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-violet-2531",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28919956477, 48.8442922873]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c671cb8a2871639b10bdb48fbbf5bc779d928c44",
    "fields": {
        "arrondissement": "75015",
        "adresse": "PARC ANDRE CITROEN",
        "geo_point_2d": [48.8420964537, 2.27529680734],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.275296807339177, 48.84209645370021]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-andre-citroen-1791",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27529680734, 48.8420964537]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4a85424c6f93a4b3960f9b32eef95b1c9522d63c",
    "fields": {
        "arrondissement": "75014",
        "adresse": "JARDIN DE L'HOPITAL SAINTE-PERINE",
        "geo_point_2d": [48.8438817771, 2.26862331347],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.268623313467747, 48.84388177705817]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-sainte-perine-1806",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26862331347, 48.8438817771]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3e7db672eea736321f96dc433680d6670f3f0722",
    "fields": {
        "arrondissement": "75020",
        "adresse": "9 COURS DE VINCENNES",
        "geo_point_2d": [48.8482636482, 2.40003159278],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.400031592781939, 48.84826364818255]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40003159278, 48.8482636482]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2083d6e78492a80b561847b7957167d7c8aae6a7",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 18 AVENUE DU GENERAL LECLERC",
        "geo_point_2d": [48.8323424502, 2.33094075003],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.330940750030464, 48.83234245020398]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33094075003, 48.8323424502]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4472b6d2e78db3f8aec3aa20ca6a2b164c9e3cf0",
    "fields": {
        "arrondissement": "75014",
        "adresse": "199 AVENUE DU MAINE",
        "geo_point_2d": [48.8296102451, 2.32630790602],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3263079060218033, 48.82961024511326]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32630790602, 48.8296102451]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3f337b78bac52cfd759adc4124a336506153b3b7",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 55 BOULEVARD DE VAUGIRARD",
        "geo_point_2d": [48.8409122312, 2.3164276372],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3164276371957753, 48.84091223116359]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3164276372, 48.8409122312]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f655edadd7f66ba6b84a5640ae2556431b2f2b39",
    "fields": {
        "arrondissement": "75015",
        "adresse": "6 BOULEVARD DU MONTPARNASSE",
        "geo_point_2d": [48.8465213727, 2.31694565359],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.316945653588203, 48.84652137265823]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31694565359, 48.8465213727]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f334d2b65736c62ec4dbde12280115833f37bed4",
    "fields": {
        "arrondissement": "75006",
        "adresse": "17 RUE DU FOUR",
        "geo_point_2d": [48.8527219868, 2.33459027245],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.334590272454289, 48.85272198682076]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33459027245, 48.8527219868]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8b865098f8701a9c38f53c983afc444303a80c04",
    "fields": {
        "arrondissement": "75008",
        "adresse": "51 BOULEVARD DE COURCELLES",
        "geo_point_2d": [48.8792271986, 2.30402816458],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.304028164576791, 48.87922719858733]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30402816458, 48.8792271986]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ae6eab2ed60ab73f827fcd987d4c0aa015a1abf6",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 85 bis BOULEVARD DE MAGENTA",
        "geo_point_2d": [48.8771534016, 2.35510090062],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.355100900623778, 48.87715340155667]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35510090062, 48.8771534016]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "78435ce0798f84c1b04213b72dbe9fa573e9e1f2",
    "fields": {
        "arrondissement": "75013",
        "adresse": "BOULEVARD ARAGO",
        "geo_point_2d": [48.834961552, 2.34636990745],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346369907448935, 48.834961551987774]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34636990745, 48.834961552]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8b609a9f6ad7668989f9681bb27872275f927944",
    "fields": {
        "arrondissement": "75013",
        "adresse": "1 RUE EMILE LEVASSOR",
        "geo_point_2d": [48.8212404043, 2.36901388755],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.369013887547498, 48.82124040430336]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36901388755, 48.8212404043]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "059bb33c373d1d0ef787f31143bf39e0bf94d5f8",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE FRANCIS LEMARQUE",
        "geo_point_2d": [48.8560086059, 2.37669958991],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376699589913922, 48.85600860589478]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-francis-lemarque-2844",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37669958991, 48.8560086059]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e2c16b6418d5f75d593c7c7e42aa493f677375fd",
    "fields": {
        "arrondissement": "75015",
        "adresse": "SQUARE NICOLE DE HAUTECLOCQUE",
        "geo_point_2d": [48.852581391, 2.29357143354],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.293571433539884, 48.85258139102269]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-nicole-de-hauteclocque-2558",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29357143354, 48.852581391]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f6412c5664070e0384259a497a82c938919155a2",
    "fields": {
        "arrondissement": "75018",
        "adresse": "3 RUE DE LA GOUTTE D OR",
        "geo_point_2d": [48.8850281422, 2.35486399614],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354863996144927, 48.885028142206096]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35486399614, 48.8850281422]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "234d269805721837a200eedde77c44a9ea3c1580",
    "fields": {
        "arrondissement": "75018",
        "adresse": "PLACE DE LA CHAPELLE",
        "geo_point_2d": [48.8846449093, 2.35909847682],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.359098476818926, 48.88464490930496]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35909847682, 48.8846449093]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7c3c4e2d305287fb906b5ed33fef942594fbfe49",
    "fields": {
        "arrondissement": "75018",
        "adresse": "3 AVENUE DE LA PORTE D AUBERVILLIERS",
        "geo_point_2d": [48.8991988464, 2.37012649908],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370126499080757, 48.89919884643892]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37012649908, 48.8991988464]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5b19e8152d15249a9ffb5f4d2b60a7d71b127c17",
    "fields": {
        "arrondissement": "75018",
        "adresse": "15 AVENUE DE LA PORTE DE CLIGNANCOURT",
        "geo_point_2d": [48.8991942601, 2.34396369525],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343963695246802, 48.899194260140106]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34396369525, 48.8991942601]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bfaf3cc8ceab101d0e00f3bbad465813c3f736a3",
    "fields": {
        "arrondissement": "75019",
        "adresse": "RUE DES FETES",
        "geo_point_2d": [48.8770683893, 2.3925535783],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.392553578299812, 48.87706838934992]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3925535783, 48.8770683893]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c13c010f8e5fe2c4a067cb393a007c2273e31231",
    "fields": {
        "arrondissement": "75008",
        "adresse": "Place de l'Etoile",
        "geo_point_2d": [48.8730821072, 2.2960628329],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.296062832904202, 48.87308210718639]
            ]
        },
        "type": "LAVATORY",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2960628329, 48.8730821072]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f0dda379060881c7fad8cca0c12e008f7de3061a",
    "fields": {
        "arrondissement": "75017",
        "adresse": "51 BOULEVARD GOUVION SAINT CYR",
        "geo_point_2d": [48.881884193, 2.28601752567],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.286017525668917, 48.881884193000005]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28601752567, 48.881884193]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cb26c389118dff0d3f45f3307e2279bc6e1743dc",
    "fields": {
        "arrondissement": "75004",
        "adresse": "SQUARE JEAN XXIII",
        "geo_point_2d": [48.8528493146, 2.35106433396],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35106433395671, 48.85284931455994]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-jean-xxiii-35",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35106433396, 48.8528493146]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "25bf724d3f856aabdf4e62ac5dae54aea06090a0",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN GEORGES DUHAMEL",
        "geo_point_2d": [48.831979631, 2.37771567055],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.377715670547634, 48.83197963095402]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-georges-duhamel-2559",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37771567055, 48.831979631]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2b8e99269aef7fd71478cd310af6fa48f0d6139c",
    "fields": {
        "arrondissement": "75015",
        "adresse": "SQUARE DE L'OISEAU LUNAIRE",
        "geo_point_2d": [48.8421354639, 2.30558817431],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.305588174307816, 48.842135463891644]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-de-l-oiseau-lunaire-ex-blomet-2519",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30558817431, 48.8421354639]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b91c34ea3212aaf3a92ccc6550f71af928eee1c1",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE DE LA ROQUETTE",
        "geo_point_2d": [48.8599893082, 2.38466219335],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384662193346416, 48.8599893082325]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-marcel-rajman-16638",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38466219335, 48.8599893082]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4ef097b7d7c2727acbad6cb09fb959882af1d9f2",
    "fields": {
        "arrondissement": "75019",
        "adresse": "213 RUE DE BELLEVILLE",
        "geo_point_2d": [48.8754459867, 2.39477663009],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.394776630090519, 48.87544598668682]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39477663009, 48.8754459867]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8adf98cea721c66b735d6df3c7768533fcecdc86",
    "fields": {
        "arrondissement": "75020",
        "adresse": "BOULEVARD MORTIER",
        "geo_point_2d": [48.875944319, 2.40698934704],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.4069893470423622, 48.87594431896405]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40698934704, 48.875944319]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "68f366ce5b36eb894d90e6e1120a2c390397c2fa",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDINS ROSA LUXEMBOURG",
        "geo_point_2d": [48.8897523897, 2.3635013249],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363501324901451, 48.88975238967337]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardins-rosa-luxemburg-17580",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3635013249, 48.8897523897]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7dfa79bf11bc78dabdfab47acbec60f3a6be2c4f",
    "fields": {
        "arrondissement": "75016",
        "adresse": "BOIS DE BOULOGNE - PARC DE BAGATELLE - GRILLE D'HONNEUR",
        "geo_point_2d": [48.868833016, 2.24801957848],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.248019578481179, 48.86883301602136]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-de-bagatelle-1808",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.24801957848, 48.868833016]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8786931f349b9936ef8b18a12cc412a93a5040bb",
    "fields": {
        "arrondissement": "75011",
        "adresse": "125 AVENUE LEDRU ROLLIN",
        "geo_point_2d": [48.8541358697, 2.37766691951],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3776669195092612, 48.854135869712856]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37766691951, 48.8541358697]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "62798a5bfddf250b57fad2e541140598d7f3bb67",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 28 RUE DU GENERAL GUILHEM",
        "geo_point_2d": [48.8623006199, 2.37905139275],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379051392752819, 48.86230061990073]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37905139275, 48.8623006199]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b5f873de5c9cd72fd4bb1d3c47a98a53b33dc468",
    "fields": {
        "arrondissement": "75012",
        "adresse": "283 RUE DE CHARENTON",
        "geo_point_2d": [48.8347382871, 2.393533357],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.393533357001099, 48.834738287077194]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.393533357, 48.8347382871]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b3f0179f5216133fc345d6ea3f57e8c108e5d075",
    "fields": {
        "arrondissement": "75012",
        "adresse": "2 RUE FERNAND FOUREAU",
        "geo_point_2d": [48.8461981515, 2.41126939777],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411269397772902, 48.846198151492416]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41126939777, 48.8461981515]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f53170e029777a40b2602a4844818362feb7d2da",
    "fields": {
        "arrondissement": "75012",
        "adresse": "SQUARE EMILE COHL",
        "geo_point_2d": [48.8419992063, 2.40989575246],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.409895752461853, 48.84199920626392]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40989575246, 48.8419992063]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "330a881c2ada940600281db00bf5f31c99845c82",
    "fields": {
        "arrondissement": "75013",
        "adresse": "46 AVENUE D ITALIE",
        "geo_point_2d": [48.8280565585, 2.3565324955],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35653249550023, 48.828056558519]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3565324955, 48.8280565585]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "32ed6e069ecf09f2f576902c404870c2dfade597",
    "fields": {
        "arrondissement": "75016",
        "adresse": "AVENUE PAUL DOUMER",
        "geo_point_2d": [48.8621579634, 2.28638203357],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.286382033570447, 48.862157963392185]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28638203357, 48.8621579634]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bab404934278f2c2effa31b29b67acc6aefd0db9",
    "fields": {
        "arrondissement": "75016",
        "adresse": "9 QUAI LOUIS BLERIOT",
        "geo_point_2d": [48.8508303952, 2.27789098998],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.2778909899783, 48.85083039519223]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27789098998, 48.8508303952]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3b3fd88db4f95238f628ed2a04a68a59b3aa4a2d",
    "fields": {
        "arrondissement": "75001",
        "adresse": "23 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8598552341, 2.34883723066],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.348837230656095, 48.85985523410493]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34883723066, 48.8598552341]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e757cbc700cee752666cd09164732bbe6a325fc9",
    "fields": {
        "arrondissement": "75003",
        "adresse": "face 171 RUE DU TEMPLE",
        "geo_point_2d": [48.8649756673, 2.36013286101],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.36013286100841, 48.86497566729413]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36013286101, 48.8649756673]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3a6bf137308257d10c655ae4d4a7bd3dba64b38f",
    "fields": {
        "arrondissement": "75004",
        "adresse": "21 bis BOULEVARD BOURDON",
        "geo_point_2d": [48.8499307063, 2.36673549587],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.366735495873733, 48.84993070629134]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36673549587, 48.8499307063]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5813fa0a7730bc9d747185d366337040aea280f6",
    "fields": {
        "arrondissement": "75004",
        "adresse": "QUAI DE L HOTEL DE VILLE",
        "geo_point_2d": [48.8541506718, 2.35602359966],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.356023599656362, 48.854150671810245]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35602359966, 48.8541506718]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c696c9ffcc306a04e33440bb62dcf5f063d6b45a",
    "fields": {
        "arrondissement": "75008",
        "adresse": "face 4 AVENUE DE MESSINE",
        "geo_point_2d": [48.8754179884, 2.31511517155],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.315115171552737, 48.87541798841173]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31511517155, 48.8754179884]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6d77b3f0c8bc707336ba4b266ba5882d816e2154",
    "fields": {
        "arrondissement": "75010",
        "adresse": "61 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.8761960453, 2.37218354456],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.372183544560666, 48.87619604525083]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37218354456, 48.8761960453]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "209a18f6d56fe46a998f5ab70fb8ecde4311382e",
    "fields": {
        "arrondissement": "75010",
        "adresse": "105 QUAI DE VALMY",
        "geo_point_2d": [48.8745920353, 2.36273383493],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3627338349338682, 48.87459203532375]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36273383493, 48.8745920353]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "eba4a799ad34ebd3984e2923667ab9c8c9b02b9d",
    "fields": {
        "arrondissement": "75011",
        "adresse": "SQUARE JULES VERNE",
        "geo_point_2d": [48.8700197163, 2.37529380457],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375293804571365, 48.870019716323576]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-jules-verne-2841",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37529380457, 48.8700197163]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7bf9679bb7451bc1de5a57a631e6cf491daa4723",
    "fields": {
        "arrondissement": "75012",
        "adresse": "PARC DE BERCY",
        "geo_point_2d": [48.8339831942, 2.3824713994],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.382471399395286, 48.83398319424073]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-georges-duhamel-2559",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3824713994, 48.8339831942]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bf88cf8b51b318ce842311f853abdad73d36fb46",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE EDOUARD VAILLANT",
        "geo_point_2d": [48.8662497961, 2.39992113552],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3999211355178423, 48.866249796126944]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-edouard-vaillant-2691",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39992113552, 48.8662497961]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "8fe202b74cc12da494328da11342b25a9133d518",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE DES SAINTS-SIMONIENS - MENILMONTANT",
        "geo_point_2d": [48.8708534007, 2.39696957937],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.396969579365494, 48.87085340068591]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-saint-simoniens-2694",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39696957937, 48.8708534007]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f143498d439a6a4b522a75208b6dc82b100af43a",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 3 RUE MARCEL SEMBAT",
        "geo_point_2d": [48.899016852, 2.33769097705],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.337690977054359, 48.899016851977834]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33769097705, 48.899016852]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "12711f78c07b80395b0c73fba0f754f3867f8553",
    "fields": {
        "arrondissement": "75017",
        "adresse": "face 2 AVENUE DE WAGRAM",
        "geo_point_2d": [48.8749477123, 2.29569743165],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.295697431651682, 48.87494771234443]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29569743165, 48.8749477123]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e8ec9d75cee5785060311be0947d9761912afbc1",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE RENE LE GALL",
        "geo_point_2d": [48.8313394865, 2.34813916839],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.348139168393053, 48.83133948649259]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-rene-le-gall-1766",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34813916839, 48.8313394865]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "66deba44ab5bce6a6ac7a66385b3b2797a8f748c",
    "fields": {
        "arrondissement": "75015",
        "adresse": "JARDIN DURANTON",
        "geo_point_2d": [48.8412776514, 2.28555547039],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.285555470390217, 48.841277651405896]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-duranton-2534",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28555547039, 48.8412776514]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "971127d5933ae8004bef5b0520fcfb2e5c983ea0",
    "fields": {
        "arrondissement": "75017",
        "adresse": "SQUARE SAINTE-ODILE",
        "geo_point_2d": [48.8878509699, 2.29358154028],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.29358154028354, 48.88785096993108]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-sainte-odile-2642",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29358154028, 48.8878509699]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cb92444bb4292d01de9740156b2b1caa584537f9",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE EMMANUEL FLEURY",
        "geo_point_2d": [48.8708129956, 2.41126495608],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411264956080895, 48.870812995602506]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-emmanuel-fleury-2720",
        "relais_bebe": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41126495608, 48.8708129956]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cecdae2be9bca63ead4dbdc60a4d9923812b5e12",
    "fields": {
        "arrondissement": "75020",
        "adresse": "1 RUE DE BUZENVAL",
        "geo_point_2d": [48.8491004434, 2.40258392889],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.402583928887361, 48.84910044336137]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40258392889, 48.8491004434]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b0d045c20f0202f36ff82cf42cc30a021f42ba1b",
    "fields": {
        "arrondissement": "75020",
        "adresse": "157 RUE DE MENILMONTANT",
        "geo_point_2d": [48.8705858895, 2.39820179219],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.39820179219435, 48.87058588945122]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39820179219, 48.8705858895]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "df506059f5b244cdc33ad6fe76b7f9c0876e8bbc",
    "fields": {
        "arrondissement": "75020",
        "adresse": "1 RUE BELGRAND",
        "geo_point_2d": [48.8649204164, 2.39982370309],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.399823703089333, 48.86492041641848]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39982370309, 48.8649204164]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bc67ee01c0c811f7d98c385f54c285ee60833014",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN CYPRIAN KAMIL NORWID",
        "geo_point_2d": [48.8281181285, 2.37754066713],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.377540667126578, 48.82811812852846]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-cyprian-norwid-2859",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37754066713, 48.8281181285]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1cc4a42a77d34e6d27ff03405a751cb9209f6fee",
    "fields": {
        "arrondissement": "75019",
        "adresse": "BOULEVARD D ALGERIE",
        "geo_point_2d": [48.8806802415, 2.40040879387],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.400408793867471, 48.88068024151086]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40040879387, 48.8806802415]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "51112eb5eaaff2ea55f3cbfc065889d8fa99f5a1",
    "fields": {
        "arrondissement": "75014",
        "adresse": "23 RUE DU DEPART",
        "geo_point_2d": [48.8421757114, 2.32316498322],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.323164983219899, 48.842175711413695]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32316498322, 48.8421757114]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b5144263c11d9bf0b126c5c24bc4ff7a06d04cb3",
    "fields": {
        "arrondissement": "75014",
        "adresse": "AVENUE DU MAINE",
        "geo_point_2d": [48.8322602186, 2.32530965544],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.32530965544221, 48.83226021863131]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32530965544, 48.8322602186]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "654773184bdaae40bf5130f3852d4fecb46610e9",
    "fields": {
        "arrondissement": "75011",
        "adresse": "oppos\u00e9 96 RUE OBERKAMPF",
        "geo_point_2d": [48.865770228, 2.37760700928],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3776070092808492, 48.865770227997636]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37760700928, 48.865770228]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "879d2bdc229801de3ea965a9f0ca50cc105f8efd",
    "fields": {
        "arrondissement": "75012",
        "adresse": "12 BOULEVARD DE BERCY",
        "geo_point_2d": [48.839621341, 2.37821862804],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.378218628043352, 48.839621340961756]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37821862804, 48.839621341]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f4f71a081c4fb27f8e9f34a70ffecfd8baecd523",
    "fields": {
        "arrondissement": "75012",
        "adresse": "face 98 QUAI DE LA RAPEE",
        "geo_point_2d": [48.8460085933, 2.36702780566],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.367027805657553, 48.846008593295046]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36702780566, 48.8460085933]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "20f494bb1a5fea80fa680d62b58e50df4d067193",
    "fields": {
        "arrondissement": "75013",
        "adresse": "126 BOULEVARD DE L HOPITAL",
        "geo_point_2d": [48.8348054383, 2.35780585089],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.357805850885124, 48.83480543828767]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35780585089, 48.8348054383]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "22d1abb975d887a3c913ae36da4834e30617caec",
    "fields": {
        "arrondissement": "75013",
        "adresse": "AVENUE CLAUDE REGAUD",
        "geo_point_2d": [48.8223447363, 2.37276364366],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.372763643662198, 48.82234473632177]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37276364366, 48.8223447363]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "535a8efb9c1727a87f55c38cb3718d061ffc8377",
    "fields": {
        "arrondissement": "75013",
        "adresse": "117 BOULEVARD VINCENT AURIOL",
        "geo_point_2d": [48.8337173046, 2.36512631285],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365126312854549, 48.83371730460286]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36512631285, 48.8337173046]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "886a8d9f1b38abc795841fb5bdc8c618a26da89e",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 200 RUE DE LA CONVENTION",
        "geo_point_2d": [48.8371892982, 2.29680197242],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.296801972420026, 48.83718929817782]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29680197242, 48.8371892982]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9440201122d4f0359f5e6aac744c94d85437b2bf",
    "fields": {
        "arrondissement": "75015",
        "adresse": "364 RUE LECOURBE",
        "geo_point_2d": [48.8362409436, 2.28169181692],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.281691816923769, 48.836240943583995]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28169181692, 48.8362409436]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "018258f31f8ff4353ab86fa7ba5229e36cec3826",
    "fields": {
        "arrondissement": "75001",
        "adresse": "2 RUE DE LA LINGERIE",
        "geo_point_2d": [48.8602837759, 2.34647836095],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.346478360952597, 48.86028377588715]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34647836095, 48.8602837759]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ad12dcc1979fb60628d0321e3ec1e84b8a1954f8",
    "fields": {
        "arrondissement": "75002",
        "adresse": "face 13 PLACE DE LA BOURSE",
        "geo_point_2d": [48.8689183647, 2.34062639508],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34062639508409, 48.868918364703134]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34062639508, 48.8689183647]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "990963af746f7eb090cf70ab4b19356e709008c5",
    "fields": {
        "arrondissement": "75002",
        "adresse": "15 BOULEVARD SAINT DENIS",
        "geo_point_2d": [48.869408299, 2.35350208569],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353502085687315, 48.86940829898522]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35350208569, 48.869408299]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ae6b41ad40c9c0c0662a75a267e9b729aec33355",
    "fields": {
        "arrondissement": "75002",
        "adresse": "27 BOULEVARD POISSONNIERE",
        "geo_point_2d": [48.8712998858, 2.34365407308],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343654073079795, 48.871299885835285]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34365407308, 48.8712998858]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c26f53e4a5db48c55c364985431eb2848a8e20e9",
    "fields": {
        "arrondissement": "75004",
        "adresse": "115 RUE SAINT MARTIN",
        "geo_point_2d": [48.8605238416, 2.35117112565],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351171125654263, 48.8605238415786]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35117112565, 48.8605238416]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ee426fc0119e988b001fe8ac5eb21547e70cf576",
    "fields": {
        "arrondissement": "75005",
        "adresse": "8 RUE JEAN CALVIN",
        "geo_point_2d": [48.8416407781, 2.34869157229],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.348691572286761, 48.841640778050696]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34869157229, 48.8416407781]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a52f78b83d856ca0333454d6f359182795a6c5a7",
    "fields": {
        "arrondissement": "75005",
        "adresse": "123 RUE SAINT JACQUES",
        "geo_point_2d": [48.8478120456, 2.34398782403],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343987824033075, 48.84781204558067]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34398782403, 48.8478120456]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "978be3530e43846296d356fb82363b8d94ef3392",
    "fields": {
        "arrondissement": "75006",
        "adresse": "135bis BOULEVARD DU MONTPARNASSE",
        "geo_point_2d": [48.8412025695, 2.33232860439],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.332328604387268, 48.841202569450836]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33232860439, 48.8412025695]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f04337f59d97e1bc6d3153b2d1e3a3f51c60f1d5",
    "fields": {
        "arrondissement": "75007",
        "adresse": "face 12 RUE DE BABYLONE",
        "geo_point_2d": [48.8516268311, 2.32518013795],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.325180137951545, 48.85162683107908]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32518013795, 48.8516268311]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ace6d741d1cb08a6a2bbb8fa4db439fd9d6fb608",
    "fields": {
        "arrondissement": "75008",
        "adresse": "RUE VIGNON",
        "geo_point_2d": [48.8725278401, 2.32653044647],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.326530446470897, 48.87252784014988]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32653044647, 48.8725278401]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3cb94de4402695edf7ecce3014b06065969ee343",
    "fields": {
        "arrondissement": "75009",
        "adresse": "45 BOULEVARD DE ROCHECHOUART",
        "geo_point_2d": [48.882675621, 2.34334023318],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343340233182707, 48.882675621045834]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34334023318, 48.882675621]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "24be9f1d08d3c63cd91d02aeadace18f203beb0e",
    "fields": {
        "arrondissement": "75010",
        "adresse": "1 AVENUE RICHERAND",
        "geo_point_2d": [48.8718385333, 2.36546559034],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365465590341057, 48.87183853334346]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36546559034, 48.8718385333]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "14ba59a755c04afd3593fa32ebfcbce97f612980",
    "fields": {
        "arrondissement": "75010",
        "adresse": "118 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.8773676983, 2.37097101088],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.370971010881823, 48.87736769831584]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37097101088, 48.8773676983]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "5a8e81d42030c2e2ad7abd153706608b60e6b62b",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 51 PLACE ALBERT KAHN",
        "geo_point_2d": [48.8957747346, 2.34600060446],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3460006044594532, 48.895774734607485]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34600060446, 48.8957747346]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "493819ec6d47589e4964eb710748ad314b5b6d79",
    "fields": {
        "arrondissement": "75018",
        "adresse": "74 BOULEVARD DE CLICHY",
        "geo_point_2d": [48.8835348826, 2.33353025354],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.333530253543147, 48.883534882615095]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33353025354, 48.8835348826]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2251a5f0ac74379b47ecd851cb5c86bd9943801b",
    "fields": {
        "arrondissement": "75001",
        "adresse": "Parc Rives de Seine",
        "geo_point_2d": [48.8578537652, 2.34428619931],
        "horaire": "10 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.344286199307675, 48.8578537652415]
            ]
        },
        "type": "WC PUBLICS PERMANENTS",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34428619931, 48.8578537652]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "816d0cf77d0d14de219874d2da7dfacba5a4d243",
    "fields": {
        "arrondissement": "75008",
        "adresse": "Avenue des Champs-Elys\u00e9es",
        "geo_point_2d": [48.8672625741, 2.31708987828],
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.317089878279596, 48.86726257414111]
            ]
        },
        "type": "LAVATORY",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31708987828, 48.8672625741]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4ca8f8c1cb7a5b2621d4f2e74b092c07d8e2b0ac",
    "fields": {
        "arrondissement": "75017",
        "adresse": "face 10 BOULEVARD DES BATIGNOLLES",
        "geo_point_2d": [48.8833450319, 2.32631183008],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.326311830075078, 48.88334503192717]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32631183008, 48.8833450319]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "46472e918e15191fa9372d87d1f7a8b0d4787bd0",
    "fields": {
        "arrondissement": "75013",
        "adresse": "PARC KELLERMANN",
        "geo_point_2d": [48.8185791039, 2.35493292057],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354932920573897, 48.81857910392337]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-kellermann-1794",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35493292057, 48.8185791039]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6613f40e014eff16a3866d9b6298340ad3ece380",
    "fields": {
        "arrondissement": "75005",
        "adresse": "JARDIN TINO ROSSI - MUSEE DE LA SCULPTURE EN PLEIN AIR",
        "geo_point_2d": [48.8469941193, 2.36159796274],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.361597962737386, 48.846994119299126]
            ]
        },
        "type": "URINOIR",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-tino-rossi-1786",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36159796274, 48.8469941193]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "24ce09c2ab15a4a752f40a607c3001b3b3db0fbb",
    "fields": {
        "arrondissement": "75018",
        "adresse": "JARDIN D'EOLE - TERRAIN DE BASKET",
        "geo_point_2d": [48.8861950735, 2.36477444557],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.364774445573531, 48.88619507354648]
            ]
        },
        "type": "URINOIR",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-francoise-helene-jourda-ex-20-rue-du-departement-18075",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36477444557, 48.8861950735]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0e9c6f0cd1314749bf963afd3dabd5c2ec6161e0",
    "fields": {
        "arrondissement": "75011",
        "adresse": "JARDIN BREGUET",
        "geo_point_2d": [48.8581554195, 2.37511074593],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375110745926088, 48.85815541945392]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-breguet-19383",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37511074593, 48.8581554195]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "52baad558cf06f464fead68a700b994a097172ab",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE SEVERINE",
        "geo_point_2d": [48.8651867542, 2.40976945297],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.409769452973536, 48.86518675420518]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-severine-1776",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40976945297, 48.8651867542]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1e0d56687b38773731ca6f3ff446c228754e4676",
    "fields": {
        "arrondissement": "75020",
        "adresse": "1 RUE PAGANINI",
        "geo_point_2d": [48.8514247509, 2.41130334418],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.411303344183451, 48.85142475093344]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41130334418, 48.8514247509]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ecd1a47f0655a73eaf19ba350045151e1cbfe251",
    "fields": {
        "arrondissement": "75005",
        "adresse": "SQUARES DES ARENES DE LUTECE ET CAPITAN",
        "geo_point_2d": [48.8454562227, 2.35324384799],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.35324384799468, 48.84545622271619]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-des-arenes-de-lutece-et-square-capitan-1760",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35324384799, 48.8454562227]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e1c1e7ef70435f558ecde5f7b3501ae235163381",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE RUES BELLEVILLE - TELEGRAPHE",
        "geo_point_2d": [48.874984989, 2.39928125458],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.399281254578799, 48.87498498901932]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-belleville-telegraphe-2724",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39928125458, 48.874984989]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0c85d9a08b4e0c1289f49acfbbc042e21b1a78c1",
    "fields": {
        "arrondissement": "75010",
        "adresse": "65 QUAI DE VALMY",
        "geo_point_2d": [48.8713689371, 2.36501315503],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.365013155028618, 48.871368937089386]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36501315503, 48.8713689371]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1c52657d22fa48febeb9c4e364ee75089ccb116a",
    "fields": {
        "arrondissement": "75011",
        "adresse": "oppos\u00e9 13 BOULEVARD DE MENILMONTANT",
        "geo_point_2d": [48.8592346115, 2.38912226795],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.389122267946412, 48.85923461154838]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38912226795, 48.8592346115]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "205898f0fec662bb290a4d2449064bb7fa201fbc",
    "fields": {
        "arrondissement": "75013",
        "adresse": "face 129 RUE DE LA GLACIERE",
        "geo_point_2d": [48.8266907075, 2.34180649318],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.341806493177042, 48.82669070746703]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34180649318, 48.8266907075]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "42060aa6dc552c94b536a5f758d37fe38368a5f3",
    "fields": {
        "arrondissement": "75015",
        "adresse": "76 RUE BRANCION",
        "geo_point_2d": [48.8319295613, 2.30273348542],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.302733485419519, 48.83192956134313]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30273348542, 48.8319295613]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b0cf9086deb209047e3993bd5957f001644e65ec",
    "fields": {
        "arrondissement": "75015",
        "adresse": "face 170 RUE DE LOURMEL",
        "geo_point_2d": [48.8390921098, 2.28255646378],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.282556463784302, 48.8390921098179]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.28255646378, 48.8390921098]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2a81aefddd2ba2a59efd2397805a70fdab5963f6",
    "fields": {
        "arrondissement": "75001",
        "adresse": "2 RUE SAINT DENIS",
        "geo_point_2d": [48.8580216491, 2.34737782238],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3473778223751722, 48.85802164909146]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34737782238, 48.8580216491]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c56576170748c85373fb62cc9cdbb8c18480f9ad",
    "fields": {
        "arrondissement": "75002",
        "adresse": "69 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8636624932, 2.35096273642],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.350962736416814, 48.86366249322703]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35096273642, 48.8636624932]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "62de1f35ba914edbc636ea8fe6ff790cfe4baf94",
    "fields": {
        "arrondissement": "75002",
        "adresse": "109 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8668198765, 2.35272665061],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352726650613073, 48.86681987649092]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35272665061, 48.8668198765]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "13a8cf40661493d581888d709a76695322ae4613",
    "fields": {
        "arrondissement": "75002",
        "adresse": "91 RUE D ABOUKIR",
        "geo_point_2d": [48.8681621887, 2.34845002884],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.34845002883678, 48.86816218874816]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34845002884, 48.8681621887]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b31e36c725230406b5e4311060d92fcb3c237fad",
    "fields": {
        "arrondissement": "75006",
        "adresse": "85 BOULEVARD RASPAIL",
        "geo_point_2d": [48.8476830908, 2.32796909231],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.327969092306715, 48.84768309080962]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32796909231, 48.8476830908]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2e54b83c7475a563280371dfad340a708fc9a777",
    "fields": {
        "arrondissement": "75008",
        "adresse": "32 AVENUE GEORGE V",
        "geo_point_2d": [48.8688403488, 2.30122008119],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.30122008119351, 48.86884034875473]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30122008119, 48.8688403488]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7e104ff495d7a5591c2f344ff0d6894af8e39021",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 81 QUAI DE VALMY",
        "geo_point_2d": [48.8725811862, 2.36407391779],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.364073917787642, 48.872581186246975]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36407391779, 48.8725811862]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b8bfefc0879f47b804fb8f7544aa4848f885a929",
    "fields": {
        "arrondissement": "75010",
        "adresse": "face 1 BOULEVARD DE LA VILLETTE",
        "geo_point_2d": [48.8722796194, 2.37662795276],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.376627952756624, 48.87227961943143]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37662795276, 48.8722796194]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1e77d8a4adf6fef2389f54d299ccc2f9aefdb2d2",
    "fields": {
        "arrondissement": "75011",
        "adresse": "JARDIN DAMIA",
        "geo_point_2d": [48.8547522453, 2.39400913597],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.394009135967313, 48.854752245321095]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-damia-2734",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39400913597, 48.8547522453]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "08559ef09e6c353ce0d6bdef6446d907061e2f1e",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 36 RUE LEIBNIZ",
        "geo_point_2d": [48.8964291398, 2.33462742555],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.334627425552953, 48.896429139789866]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33462742555, 48.8964291398]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2b69309abda3be0e91a26929a98255816b565448",
    "fields": {
        "arrondissement": "75018",
        "adresse": "1 RUE DE LA BONNE",
        "geo_point_2d": [48.8873617985, 2.34354515643],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343545156427323, 48.88736179846098]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34354515643, 48.8873617985]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "df0f774dd92a29b9c041ac78ece4cdd5a3bd3fd6",
    "fields": {
        "arrondissement": "75019",
        "adresse": "58 AVENUE DE FLANDRE",
        "geo_point_2d": [48.8881820357, 2.3737499283],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.373749928304557, 48.88818203567653]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3737499283, 48.8881820357]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7b6849b775ea58c8efb377903856f225d5be0b1c",
    "fields": {
        "arrondissement": "75019",
        "adresse": "29 AVENUE MATHURIN MOREAU",
        "geo_point_2d": [48.8784476361, 2.37394970487],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.373949704867119, 48.87844763612634]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37394970487, 48.8784476361]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "2bf7910f9e8479b5173d5152e884d55bf25edf17",
    "fields": {
        "arrondissement": "75003",
        "adresse": "JARDIN ANNE FRANK (HOTEL SAINT-AIGNAN)",
        "geo_point_2d": [48.861400272, 2.35452858279],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354528582794358, 48.86140027201584]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-anne-frank-2737",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35452858279, 48.861400272]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0779de54679651b5acf17b2d31254f17f79777d6",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE DE L'AVENUE BOUTROUX",
        "geo_point_2d": [48.8216649905, 2.37589956567],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.375899565672565, 48.8216649905329]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-clara-zetkin-ex-square-boutroux-2517",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37589956567, 48.8216649905]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3a1fe42a5d3a4d77397513c8f6ed456db308ec93",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE DE LA RUE JEAN DUNAND (ZAC BAUDRICOURT)",
        "geo_point_2d": [48.8230480212, 2.36437669794],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.364376697938306, 48.823048021230996]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-baudricourt-2853",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36437669794, 48.8230480212]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "41fba97b2f05e120aa7d33cd3466951c007b47b6",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE HENRI CADIOU",
        "geo_point_2d": [48.8344742599, 2.34250141533],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3425014153332793, 48.834474259944]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-henri-cadiou-2529",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34250141533, 48.8344742599]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "96ffdcae5fbdde9b5967794ceb1c956ec3aec89b",
    "fields": {
        "arrondissement": "75013",
        "adresse": "JARDIN BERTHE MORISOT",
        "geo_point_2d": [48.8262027837, 2.37483450105],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.37483450104622, 48.826202783723076]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-berthe-morisot-2561",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37483450105, 48.8262027837]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dc165744ed572f098d6b09a8a29a1f464349ebc8",
    "fields": {
        "arrondissement": "75016",
        "adresse": "JARDIN DE L'HOPITAL SAINTE-PERINE",
        "geo_point_2d": [48.8438176146, 2.26851128081],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.268511280811586, 48.84381761455926]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-sainte-perine-1806",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.26851128081, 48.8438176146]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4442fa805d04571b4931844de53ec5ad337105b0",
    "fields": {
        "arrondissement": "75020",
        "adresse": "JARDIN DE LA DALLE FOUGERE",
        "geo_point_2d": [48.8721801224, 2.41243178416],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.412431784164808, 48.872180122407244]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-leon-frapie-2722",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41243178416, 48.8721801224]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "07aa5c6ebc22cc75d1a17e47dc79a3cf016835fe",
    "fields": {
        "arrondissement": "75014",
        "adresse": "95 BOULEVARD DE PORT ROYAL",
        "geo_point_2d": [48.8382702297, 2.34180576645],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3418057664472203, 48.83827022970235]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34180576645, 48.8382702297]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "4c83dc44e3b95664bc4aacf89330092a9cab5509",
    "fields": {
        "arrondissement": "75011",
        "adresse": "face 170 AVENUE LEDRU ROLLIN",
        "geo_point_2d": [48.857042782, 2.37935147821],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.379351478214016, 48.85704278201933]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37935147821, 48.857042782]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9324c553edc8eb4ea0a19587b12be7f7f1c279aa",
    "fields": {
        "arrondissement": "75012",
        "adresse": "57 BOULEVARD DIDEROT",
        "geo_point_2d": [48.8471348151, 2.3842073245],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384207324504985, 48.84713481514031]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3842073245, 48.8471348151]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "49b816ee4cf01638a25f24d0dfc3be5a40455db5",
    "fields": {
        "arrondissement": "75012",
        "adresse": "oppos\u00e9 au 16 PLACE DE LA NATION",
        "geo_point_2d": [48.8474448031, 2.39548255058],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.395482550580248, 48.84744480307578]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39548255058, 48.8474448031]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1c5319723982cb0c2d4f8dc9b7ae1c0a3372575f",
    "fields": {
        "arrondissement": "75013",
        "adresse": "79 BOULEVARD KELLERMANN",
        "geo_point_2d": [48.8199697584, 2.34772693206],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.347726932055576, 48.81996975839777]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34772693206, 48.8199697584]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cd980765d14010981aca4b495ebb4844564fb459",
    "fields": {
        "arrondissement": "75015",
        "adresse": "68 RUE DE LA PROCESSION",
        "geo_point_2d": [48.8364136146, 2.30982319931],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.309823199313869, 48.83641361464791]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30982319931, 48.8364136146]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "df839ff0c788a0ee0a07337865e2e62463adc7a0",
    "fields": {
        "arrondissement": "75015",
        "adresse": "26 PLACE ETIENNE PERNET",
        "geo_point_2d": [48.8425893862, 2.29213723985],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.292137239852613, 48.842589386211785]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29213723985, 48.8425893862]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "73422c04cabda792b1f13a850313dfa5d6a64cf4",
    "fields": {
        "arrondissement": "75016",
        "adresse": "224 AVENUE DE VERSAILLES",
        "geo_point_2d": [48.8383970807, 2.2586198461],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.258619846101936, 48.83839708065923]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.2586198461, 48.8383970807]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "ef56a173a40af9917f5d112e214251e7c53f4a1a",
    "fields": {
        "arrondissement": "75001",
        "adresse": "RUE COQUILLIERE",
        "geo_point_2d": [48.8633209212, 2.34382299871],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343822998713276, 48.86332092124087]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34382299871, 48.8633209212]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "09985b02dfe3fe9e37385824bf51e460b38a0d40",
    "fields": {
        "arrondissement": "75003",
        "adresse": "90 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8660179265, 2.35254436608],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.352544366077968, 48.86601792652318]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35254436608, 48.8660179265]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "cdb5dcd7cc24cac896c6e908b1f6465eeb96c045",
    "fields": {
        "arrondissement": "75004",
        "adresse": "RUE DE L AVE MARIA",
        "geo_point_2d": [48.8532105514, 2.35958280455],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.359582804553575, 48.85321055139778]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35958280455, 48.8532105514]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "9c63523e06f2ea7ed16a493d0f47e32a0507b222",
    "fields": {
        "arrondissement": "75008",
        "adresse": "12 PLACE GEORGES GUILLAUMIN",
        "geo_point_2d": [48.8747742479, 2.30321066457],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.303210664567427, 48.87477424791768]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30321066457, 48.8747742479]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "007f8b0e2919da0795e51bc6745998b1badb8ff0",
    "fields": {
        "arrondissement": "75008",
        "adresse": "COURS LA REINE",
        "geo_point_2d": [48.865148838, 2.31808803466],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.318088034663091, 48.86514883797138]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31808803466, 48.865148838]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "22f05012a28288f7562654baf528e16a32f81a41",
    "fields": {
        "arrondissement": "75010",
        "adresse": "SQUARE ALBAN SATRAGNE",
        "geo_point_2d": [48.8757807114, 2.35586267246],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.3558626724604173, 48.875780711431624]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35586267246, 48.8757807114]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "631de89dda47121dfbd06620e0e0e7ac959f0e01",
    "fields": {
        "arrondissement": "75019",
        "adresse": "SQUARE MONSEIGNEUR MAILLET",
        "geo_point_2d": [48.8766939356, 2.39315838237],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.393158382368525, 48.87669393559698]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-du-regard-de-la-lanterne-2677",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39315838237, 48.8766939356]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3b7344da59dd0091512032177476b0728e669452",
    "fields": {
        "arrondissement": "75019",
        "adresse": "PARC DES BUTTES CHAUMONT",
        "geo_point_2d": [48.8823779733, 2.38277901511],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.382779015108047, 48.88237797329546]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-des-buttes-chaumont-1757",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38277901511, 48.8823779733]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "fef95d3446f37ca9caa1c9be8b6e43692aaddba7",
    "fields": {
        "arrondissement": "75020",
        "adresse": "PARC DE BELLEVILLE",
        "geo_point_2d": [48.8715411632, 2.38496892774],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.384968927744539, 48.87154116321315]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-des-couronnes-2748",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.38496892774, 48.8715411632]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "efe7d0529071426d9cf8e98b8e285e8d066231e4",
    "fields": {
        "arrondissement": "75018",
        "adresse": "oppos\u00e9 au 94 RUE JEAN HENRI FABRE",
        "geo_point_2d": [48.9010611673, 2.33553743936],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.335537439363272, 48.901061167312136]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33553743936, 48.9010611673]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "14e7f1ea9d4c21af6af99ee9711f34326b1c9c7b",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 17 RUE POLONCEAU",
        "geo_point_2d": [48.8856323532, 2.35340146609],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353401466086345, 48.88563235320072]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35340146609, 48.8856323532]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f55f5c62001ca96491ced3a485f7fb113b8ce104",
    "fields": {
        "arrondissement": "75003",
        "adresse": "SQUARE LEOPOLD ACHILLE",
        "geo_point_2d": [48.8582247589, 2.36329075825],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.363290758247611, 48.858224758864694]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-leopold-achille-2431",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36329075825, 48.8582247589]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b6eee8ef13736ba0b7e988d58a32ce163c1a2d72",
    "fields": {
        "arrondissement": "75013",
        "adresse": "SQUARE GUSTAVE MESUREUR",
        "geo_point_2d": [48.8337556782, 2.36252862705],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.362528627050125, 48.83375567823722]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-gustave-mesureur-2525",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36252862705, 48.8337556782]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "dbb6f459fd5eff64a4422e258cab14639afde517",
    "fields": {
        "arrondissement": "75015",
        "adresse": "PARC GEORGES BRASSENS",
        "geo_point_2d": [48.8316215313, 2.299950914],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.299950913999615, 48.83162153125084]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-georges-brassens-1805",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.299950914, 48.8316215313]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "73987f408097b01134adf3987ea7339a01e9a4dd",
    "fields": {
        "arrondissement": "75007",
        "adresse": "SQUARE BOUCICAUT",
        "geo_point_2d": [48.8511194387, 2.32564564251],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.325645642508822, 48.85111943871575]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-boucicaut-2462",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32564564251, 48.8511194387]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "19fc03fc89f1f8ad0d32290048c4769e71a5984a",
    "fields": {
        "arrondissement": "75009",
        "adresse": "SQUARE ALEX BISCARRE",
        "geo_point_2d": [48.8785874986, 2.33672838155],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336728381553657, 48.87858749857325]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-alex-biscarre-2464",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33672838155, 48.8785874986]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "bee97a1d86095c8e9526089e191d9e918a221201",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE DE LA RUE LEON FRAPIE",
        "geo_point_2d": [48.8724204037, 2.41214369996],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.412143699957274, 48.87242040371039]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-leon-frapie-2722",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.41214369996, 48.8724204037]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "6dc1e138fd00f626c66932a4b347141aa5f135e6",
    "fields": {
        "arrondissement": "75014",
        "adresse": "10 AVENUE DU GENERAL LECLERC",
        "geo_point_2d": [48.8330150832, 2.33118702009],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.331187020094139, 48.833015083207066]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33118702009, 48.8330150832]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "0e819df8499662f86f2f248fd04bf0e28afaf086",
    "fields": {
        "arrondissement": "75011",
        "adresse": "27 RUE DE LA ROQUETTE",
        "geo_point_2d": [48.854888192, 2.37285537871],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.372855378710675, 48.85488819201663]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37285537871, 48.854888192]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "e6af2eba659129da3dec0ac4befddaa4e38af5eb",
    "fields": {
        "arrondissement": "75011",
        "adresse": "66 BOULEVARD RICHARD LENOIR",
        "geo_point_2d": [48.8605716036, 2.37468010754],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.374680107539579, 48.86057160355866]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37468010754, 48.8605716036]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "358f5ea9b48eb4bbd39f73944a4e0753631fb910",
    "fields": {
        "arrondissement": "75011",
        "adresse": "oppos\u00e9 52 bis BOULEVARD RICHARD LENOIR",
        "geo_point_2d": [48.8593097812, 2.37200200666],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.372002006655221, 48.85930978120497]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.37200200666, 48.8593097812]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "015f49d05a6b57eae07cba82f519437c18d0b728",
    "fields": {
        "arrondissement": "75012",
        "adresse": "124 AVENUE DU GENERAL MICHEL BIZOT",
        "geo_point_2d": [48.8404563206, 2.40466278004],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.404662780036119, 48.8404563206381]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40466278004, 48.8404563206]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "23cdd48b002a2b81a2436ba27bdeb02881ae5093",
    "fields": {
        "arrondissement": "75013",
        "adresse": "4 RUE MARTIN BERNARD",
        "geo_point_2d": [48.826899102, 2.35132877598],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.351328775975912, 48.826899102018075]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35132877598, 48.826899102]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "894020ceedab968119e306db7a8a72693c763d8b",
    "fields": {
        "arrondissement": "75014",
        "adresse": "face 231 RUE RAYMOND LOSSERAND",
        "geo_point_2d": [48.8279445037, 2.30565404276],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.305654042759093, 48.8279445037034]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.30565404276, 48.8279445037]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "518ce253904cbe33cf18d06cc0935cfb4c6b4858",
    "fields": {
        "arrondissement": "75014",
        "adresse": "189 RUE D ALESIA",
        "geo_point_2d": [48.8312560852, 2.31610939352],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.316109393517265, 48.83125608516333]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31610939352, 48.8312560852]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "7d81aeba4dc365b7382f5f3131c72b26d23588f8",
    "fields": {
        "arrondissement": "75015",
        "adresse": "4 RUE DU COMMANDANT RENE MOUCHOTTE",
        "geo_point_2d": [48.839977939, 2.32141092251],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.321410922508021, 48.83997793898221]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32141092251, 48.839977939]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "c4488e1bd7803c9f81af706a684a84716a17fcbb",
    "fields": {
        "arrondissement": "75015",
        "adresse": "150 RUE DE LA CONVENTION",
        "geo_point_2d": [48.8394184414, 2.29145798026],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.291457980262013, 48.8394184413834]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.29145798026, 48.8394184414]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "005be67c65b3e3c1ab2870ac6da10068411b20a9",
    "fields": {
        "arrondissement": "75016",
        "adresse": "2 PLACE DE BARCELONE",
        "geo_point_2d": [48.8476823115, 2.27363259294],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.273632592942298, 48.847682311485265]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27363259294, 48.8476823115]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "19813dd57bf275d40b3bbee2015b19b4f8d54dcf",
    "fields": {
        "arrondissement": "75019",
        "adresse": "213 AVENUE JEAN JAURES",
        "geo_point_2d": [48.8889514423, 2.39309575988],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.393095759882974, 48.888951442257486]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39309575988, 48.8889514423]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d1a20fedbc8be72aaefaff76335adb8e13aeb818",
    "fields": {
        "arrondissement": "75003",
        "adresse": "7/9 BOULEVARD DU TEMPLE",
        "geo_point_2d": [48.8635546307, 2.36630552711],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.366305527110086, 48.8635546306763]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.36630552711, 48.8635546307]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "23eef15196cb62e90f611767a40ea571a14a05f1",
    "fields": {
        "arrondissement": "75004",
        "adresse": "6 QUAI DE GESVRES",
        "geo_point_2d": [48.8564861601, 2.34979646397],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.349796463968452, 48.85648616007825]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34979646397, 48.8564861601]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "482a09caf3145fcfede1e5f2ae2f2bbe3823233a",
    "fields": {
        "arrondissement": "75004",
        "adresse": "36 BOULEVARD DE SEBASTOPOL",
        "geo_point_2d": [48.8615373524, 2.35003085703],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.350030857031587, 48.86153735238374]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35003085703, 48.8615373524]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "a20905d929d04be0fcb5bf3313fdcfa62ea06fad",
    "fields": {
        "arrondissement": "75005",
        "adresse": "4 RUE JUSSIEU",
        "geo_point_2d": [48.8462252163, 2.35487219416],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.354872194164979, 48.84622521629628]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35487219416, 48.8462252163]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "90848dcf3346495e206e2a71042febde09b45590",
    "fields": {
        "arrondissement": "75005",
        "adresse": "78 BOULEVARD SAINT MARCEL",
        "geo_point_2d": [48.8374184706, 2.3535436411],
        "horaire": "6 h - 1 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353543641100616, 48.83741847058165]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3535436411, 48.8374184706]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "3ff82c74f019290b5d63734d2c1c5c95a5b4a6c2",
    "fields": {
        "arrondissement": "75006",
        "adresse": "186 BOULEVARD SAINT GERMAIN",
        "geo_point_2d": [48.8544281272, 2.33099521113],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.330995211131629, 48.854428127216]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33099521113, 48.8544281272]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "705b1b08df2026de9fb0811904b234ba1bda08a4",
    "fields": {
        "arrondissement": "75010",
        "adresse": "3 RUE AMBROISE PARE",
        "geo_point_2d": [48.8818143962, 2.35323834586],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353238345856508, 48.881814396150865]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35323834586, 48.8818143962]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b51c6c9a68b3b1c9d5bff13221f0f04c331d6f80",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE SARAH BERNHARDT",
        "geo_point_2d": [48.849620045, 2.40370183876],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.403701838756763, 48.8496200450313]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-sarah-bernhardt-1774",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.40370183876, 48.849620045]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "580ad483c791f9e646e48d93aabb1985e44c51d6",
    "fields": {
        "arrondissement": "75018",
        "adresse": "138 RUE DES POISSONNIERS",
        "geo_point_2d": [48.8963596202, 2.35301646036],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.353016460359746, 48.89635962022954]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.35301646036, 48.8963596202]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "77a5b946b834231bb3e3196221ccd116c56bca47",
    "fields": {
        "arrondissement": "75018",
        "adresse": "face 52 BOULEVARD DE ROCHECHOUART",
        "geo_point_2d": [48.8832470811, 2.34590618281],
        "horaire": "24 h / 24",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.345906182814424, 48.88324708107192]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34590618281, 48.8832470811]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "99a55110f684f1c7f848b4ef8ce43d8d44da477f",
    "fields": {
        "arrondissement": "75017",
        "adresse": "135 AVENUE DE CLICHY",
        "geo_point_2d": [48.8908073525, 2.31967010307],
        "horaire": "6 h - 22 h",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.319670103069588, 48.89080735250064]
            ]
        },
        "type": "SANISETTE",
        "acces_pmr": "Oui"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.31967010307, 48.8908073525]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "38314c106a7f86bcc1c6f1b65a93a9cd019a5313",
    "fields": {
        "arrondissement": "75014",
        "adresse": "SQUARE DE LA RUE DE CHATILLON",
        "geo_point_2d": [48.827954661, 2.32254351193],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.32254351193472, 48.82795466104957]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-lionel-assouad-2735",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.32254351193, 48.827954661]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "b8a017c030cb140ab7479168fcaa21cf2aa6d31b",
    "fields": {
        "arrondissement": "75015",
        "adresse": "PARC ANDRE CITROEN",
        "geo_point_2d": [48.8417462173, 2.27619643946],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.276196439464743, 48.84174621728003]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/parc-andre-citroen-1791",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.27619643946, 48.8417462173]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "1729b7b005deafcaab106500e755f0193f3c09e0",
    "fields": {
        "arrondissement": "75020",
        "adresse": "SQUARE SERGENT AURELIE SALEL",
        "geo_point_2d": [48.8671594062, 2.39129790897],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.391297908966135, 48.867159406218995]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-du-sergent-aurelie-salel-ex-sorbier-2717",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.39129790897, 48.8671594062]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "f9e7791d7967d860cb19b2d8f0d1de0148ef6c2a",
    "fields": {
        "arrondissement": "75018",
        "adresse": "PARC MARCEL BLEUNSTEIN-BLANCHET",
        "geo_point_2d": [48.8873387405, 2.34353546456],
        "acces_pmr": "Oui",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.343535464560588, 48.88733874054147]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/square-marcel-bleustein-blanchet-2695",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.34353546456, 48.8873387405]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}, {
    "datasetid": "sanisettesparis",
    "recordid": "d065290aa96325e840621350604f275ad82db7b1",
    "fields": {
        "arrondissement": "75014",
        "adresse": "PARC MONTSOURIS",
        "geo_point_2d": [48.8237616999, 2.33694433206],
        "acces_pmr": "Non",
        "horaire": "Voir fiche \u00e9quipement",
        "geo_shape": {
            "type": "MultiPoint",
            "coordinates": [
                [2.336944332056309, 48.823761699913064]
            ]
        },
        "type": "TOILETTES",
        "url_fiche_equipement": "https://www.paris.fr/equipements/jardin-et-aire-de-jeux-de-la-zac-alesia-montsouris-2867",
        "relais_bebe": "Non"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.33694433206, 48.8237616999]
    },
    "record_timestamp": "2019-12-02T14:42:19.599+01:00"
}];

const toiletsFinal = reorganizeDB();

// console.log(toiletsFinal);

toiletModel
    .insertMany(toiletsFinal)
    .then(dbSuccess => {
        console.log("Toilets inserted successfully", dbSuccess)
    })
    .catch(dbErr => {
        console.log("Oh no, error connecting to mongo", dbErr)
    });

module.exports = toiletsFinal;