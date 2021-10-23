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
    // ["Cristiano Ronaldo", "dos Santos Aveiro", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", "05/02/1985"​],
    ["Kimberly Noel", "Kardashian West", "https://upload.wikimedia.org/wikipedia/commons/e/e6/Kim_Kardashian_2019.jpg", "21/10/1980"],
    ["Kanye", "Omari West", "https://upload.wikimedia.org/wikipedia/commons/7/75/Kanye_West_in_2019.png", "08/06/1977"],
    ["Iker", "Casillas Fernández", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Iker_Casillas_2.jpg/330px-Iker_Casillas_2.jpg", "20/05/1981"],
    ["José", "Mourinho Félix", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jos%C3%A9_Mourinho.jpg/368px-Jos%C3%A9_Mourinho.jpg", "26/01/1963"],
    ["Thomas", "Cruise Mapother IV", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/375px-Tom_Cruise_by_Gage_Skidmore_2.jpg", "03/07/1962"],
    ["Nicole", "Mary Kidman", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/TIFF_2019_nicole_kidman_%2848701113091%29_%28cropped%29.jpg/300px-TIFF_2019_nicole_kidman_%2848701113091%29_%28cropped%29.jpg", "20/06/1967"],
    ["Leonardo", " Wilhelm DiCaprio", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/330px-Leonardo_Dicaprio_Cannes_2019.jpg", "11/11/1974"],
    ["Carlos", "Sainz Jr.", "https://upload.wikimedia.org/wikipedia/commons/0/05/Formel12021-SchlossGabelhofen%2815%29_%28cropped%29.jpg", "01/09/1994"],
    ["Ana", "Torroja Fungairiño", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ana_Torroja.jpg/800px-Ana_Torroja.jpg", "28/12/1959"],
    ["Joaquín Ramón", "Martínez Sabina", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Joaquin_Sabina.jpg/800px-Joaquin_Sabina.jpg", "12/02/1949"],
    ["Fernando", "Alonso Díaz", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alonso_2020_in_Renault_kit.jpg", "29/07/1981"],
    ["Enrique", "Ortiz de Landázuri Izarduy", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Enrique_Bunbury_-_16.jpg/1024px-Enrique_Bunbury_-_16.jpg", "11/08/1967"],
    ["David", "Summers Rodríguez", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hombres_G_2007.10.13_002.jpg/800px-Hombres_G_2007.10.13_002.jpg", "26/02/1964"],
    ["Mikel", "Erentxun", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mikel_Erentxun_2007.10.13_006.jpg/800px-Mikel_Erentxun_2007.10.13_006.jpg", "23/02/1965"],
    ["Pedro", "Martínez De la Rosa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Pedro_de_la_Rosa_2010_Malaysia.jpg/225px-Pedro_de_la_Rosa_2010_Malaysia.jpg", "24/02/1971"],
    ["Chema", "Alonso", "https://upload.wikimedia.org/wikipedia/commons/2/2a/Chema_Alonso.jpg", "17/06/1975"]
]
const personElement = document.getElementById('persons');
function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
function get_letter(dni) {
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


        document.getElementById("letra").innerHTML = getKeyByValue(letters, (dni % 23));
        random_person = Math.floor(Math.random() * persons.length);
        document.getElementById("nombre_random").innerHTML = persons[random_person][0];
        document.getElementById("apellido_random").innerHTML = persons[random_person][1];
        document.getElementById("fecha_random").innerHTML = persons[random_person][3];
        document.getElementById("img_random").innerHTML = "<img src='" + persons[random_person][2] + "' id='img_dni'>";
    }
}
// ON BACKSPACE & ON ENTERING EXTRA NUMBERS -> DELETE ALL INPUT 
document.getElementById("inputValue").addEventListener('keyup', (e) => {
    if (e.key == "Backspace" || document.getElementById("inputValue").value > 99999999) {
        document.getElementById("inputValue").value = null;
    }
})
const fetchContributors = () => {

    const url = 'https://api.github.com/repos/fcoterroba/Funny_DNI_letter/contributors'
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            personElement.textContent = data.length - 1;
        })
}
fetchContributors();

//Dark mode

const toggleColorMode = document.getElementById('color-mode-button');
const bodyElement = document.body;

function handleColorMode() {
    bodyElement.classList.toggle('dark-mode');
    toggleColorMode.innerHTML = bodyElement.classList.contains('dark-mode') ? 'Light' : 'Dark';
}
