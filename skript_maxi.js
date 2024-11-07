let tabelle = [

    {
        "position":
            [
                1, 2, 3, 4, 5, 6
            ]
    },
    {
        "gebaecksorte":
            [
                "Zwetschgenmännle",
                "Reiterle",
                "Elise Pflaume-Zimt",
                "Südliche Elise",
                "Caschew Schoko-Traum",
                "Bio-Christstollen"
            ]
    },
    {
        "menge":
            [
                120, 98, 130, 100, 103, 55
            ]
    },
    {
        "einzelpreis":
            [
                5.00, 3.00, 9.50, 9.50, 9.50, 10
            ]
    },
    {
        "sorge gesamt":
            [
                null, null, null, null, null, null
            ]
    }
]

let untertabelle = [
    {
        "Zwischensumme": null
    },
    {
        "Steuersatz": 19
    },
    {
        "Mehrwertsteuer": null
    },
    {
        "Gesamt": null
    }

]


let x = [
    "0", "A", "B", "C", "D", "E"
]

let y = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
]


var skript = {
    1: "Tabellenzelle B zwei",
    2: "Tabellenzelle B drei",
    3: "Tabellenzelle B vier",
    4: "Tabellenzelle B fünf",
    5: "Tabellenzelle B sechs",
    6: "Tabellenzelle B sieben",
    7: "Tabellenzelle E zwei",
    8: "Wie berechne ich die Einnahmen für Bio-Christstollen?"
}



// Maxis Skript
var tz = "Tabellenzelle ";
let e = "die Einnahmen ";
let wbi = "wie berechne ich ";



let gebaecksorten =
    [
        "Zwetschgenmännle",
        "Reiterle",
        "Elise Pflaume-Zimt",
        "Südliche Elise",
        "Caschew Schoko-Traum",
        "Bio-Christstollen"
    ];

let menge =
    [
        120, 98, 130, 100, 103, 55
    ];


let einzelpreis =
    [
        5.00, 3.00, 9.50, 9.50, 9.50, 10
    ];


let steuersatz = 0.19;


let tabelle_excel = [

    [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
    ],
    [
        "A", "Position", "eins", "zwei", "drei", "vier", "fünf", "sechs"
    ],
    [
        "B",
        "Gebaecksorte",
        "Zwetschgenmännle",
        "Reiterle",
        "Elise Pflaume-Zimt",
        "Südliche Elise",
        "Caschew Schoko-Traum",
        "Bio-Christstollen"
    ],
    [
        "C",
        "Menge", "120", "98", "130", "100", "103", "55"
    ],
    ["D",
        "Einzelpreis", "5 Euro", "3 Euro", "9 Euro 50", "9 Euro 50", "9 Euro 50", "10 Euro", "Zwischensumme", "Steuersatz", "Mehrwertsteuer", "Gesamtsumme"
    ],
    ["E",
        "Sorte Gesamt", "leer", "leer", "leer", "leer", "leer", "leer", "leer", "19%", "leer", "leer"
    ]
]


let tabelle_excel2 = [
    {
        "0":
            [
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
            ]
    },
    {
        "A":
            [
                "A", "Position", "1", "2", "3", "4", "5", "6"
            ]
    },
    {
        "B":
            [
                "B",
                "Gebaecksorte",
                "Zwetschgenmännle",
                "Reiterle",
                "Elise Pflaume-Zimt",
                "Südliche Elise",
                "Caschew Schoko-Traum",
                "Bio-Christstollen"
            ]
    },
    {
        "C":
            [
                "C",
                "Menge", "120", "98", "130", "100", "103", "55"
            ]
    },
    {
        "D":
            ["D",
                "Einzelpreis", "5 Euro", "3 Euro", "9 Euro 50", "9 Euro 50", "9 Euro 50", "10 Euro", "Zwischensumme", "Steuersatz", "Mehrwertsteuer", "Gesamtsumme"
            ]
    },
    {
        "E" :
            ["E",
                "Sorte Gesamt", "leer", "leer", "leer", "leer", "leer", "leer", "leer", "leer", "19%", "leer", "leer"
            ]
    }
]
