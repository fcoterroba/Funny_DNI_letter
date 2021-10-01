const persons = [
    ["Dwayne", "Douglas Johnson", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg", "02/05/1972"],
    ["Mark", "Sinclair Vincent", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png/220px-Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png", "18/06/1967"],
    ["Lionel Andrés", "Messi Cuccittini", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg", "24/06/1987"],
    ["Adolf", "Hitler", "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg", "02/08/1934"],
    ["Francisco", "Franco Bahamonde", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/RETRATO_DEL_GRAL._FRANCISCO_FRANCO_BAHAMONDE_%28adjusted_levels%29.jpg/220px-RETRATO_DEL_GRAL._FRANCISCO_FRANCO_BAHAMONDE_%28adjusted_levels%29.jpg", "01/10/1936"],
    ["Fernando", "Gálvez Gómez", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Yung_Beef_Rapero.jpg/220px-Yung_Beef_Rapero.jpg", "23/01/1990"],
    ["Aubrey", "Drake Graham", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/466px-Drake_July_2016.jpg", "24/10/1986"],
    ["Penélope", "Cruz Sánchez", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Premios_Goya_2018_-_Pen%C3%A9lope_Cruz.jpg/330px-Premios_Goya_2018_-_Pen%C3%A9lope_Cruz.jpg", "28/04/1974"],
    ["José Antonio Domínguez", "Bandera", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Antonio_Banderas_2019_%28cropped%29.jpg/330px-Antonio_Banderas_2019_%28cropped%29.jpg", "10/08/1960"],
    ["Campos", "Trigos", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Premios_Goya_2019_-_Paz_Vega_%28cropped%29.jpg/330px-Premios_Goya_2019_-_Paz_Vega_%28cropped%29.jpg", "02/01/1976"],
    ["Rafael", "Nadal Parera", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg/330px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff_%28cropped%29.jpg", "03/06/1986"],
    ["David", "de Gea Quintana", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/330px-David_de_Gea_2017.jpg", "07/11/1990"],
    ["Cristiano Ronaldo", "dos Santos Aveiro", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", "05/02/1985"​],
    ["Kimberly Noel", "Kardashian West", "https://upload.wikimedia.org/wikipedia/commons/e/e6/Kim_Kardashian_2019.jpg", "21/10/1980"],
    ["Kanye", "Omari West", "https://upload.wikimedia.org/wikipedia/commons/7/75/Kanye_West_in_2019.png", "08/06/1977"]
]
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => 
            object[key] === value);
}
function get_letter(dni){
    if (dni.length == 8) {
        const letters = {
        "T": 0,
        "R": 1,
        "W": 2,
        "A": 3,
        "G": 4,
        "M": 5,
        "Y": 6,
        "F": 7,
        "P": 8,
        "D": 9,
        "X": 10,
        "B": 11,
        "N": 12,
        "J": 13,
        "Z": 14,
        "S": 15,
        "Q": 16,
        "V": 17,
        "H": 18,
        "L": 19,
        "C": 20,
        "K": 21,
        "E": 22
    };


    document.getElementById("letra").innerHTML = getKeyByValue(letters, (dni%23));
    random_person = Math.floor(Math.random()*persons.length);
    document.getElementById("nombre_random").innerHTML = persons[random_person][0];
    document.getElementById("apellido_random").innerHTML = persons[random_person][1];
    document.getElementById("fecha_random").innerHTML = persons[random_person][3];
    document.getElementById("img_random").innerHTML = "<img src='"+persons[random_person][2]+"' id='img_dni'>";
    }
}
