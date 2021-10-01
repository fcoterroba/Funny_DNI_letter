const persons = [
    ["Dwayne", "Douglas Johnson", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg", "02/05/1972"],
    ["Mark", "Sinclair Vincent", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png/220px-Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png", "18/06/1967"],
    ["Lionel Andrés", "Messi Cuccittini", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg", "24/06/1987"],
    ["Adolf", "Hitler", "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg", "02/08/1934"],
    ["Francisco", "Franco Bahamonde", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/RETRATO_DEL_GRAL._FRANCISCO_FRANCO_BAHAMONDE_%28adjusted_levels%29.jpg/220px-RETRATO_DEL_GRAL._FRANCISCO_FRANCO_BAHAMONDE_%28adjusted_levels%29.jpg", "01/10/1936"],
    ["Fernando", "Gálvez Gómez", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Yung_Beef_Rapero.jpg/220px-Yung_Beef_Rapero.jpg", "23/01/1990"],
    ["Aubrey", "Drake Graham", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/466px-Drake_July_2016.jpg", "24/10/1986"],
    ["Iker", "Casillas Fernández", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Iker_Casillas_2.jpg/330px-Iker_Casillas_2.jpg", "20/05/1981"],
    ["José", "Mourinho Félix", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jos%C3%A9_Mourinho.jpg/368px-Jos%C3%A9_Mourinho.jpg", "26/01/1963"],
    ["Thomas", "Cruise Mapother IV", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/375px-Tom_Cruise_by_Gage_Skidmore_2.jpg", "03/07/1962"],
    ["Nicole", "Mary Kidman", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/TIFF_2019_nicole_kidman_%2848701113091%29_%28cropped%29.jpg/300px-TIFF_2019_nicole_kidman_%2848701113091%29_%28cropped%29.jpg", "20/06/1967"],
    ["Leonardo", " Wilhelm DiCaprio", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg", "11/11/1974"],
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
