// Data persistence
const defaultGroups = [
    {
        id: "nid_1",
        name: "Nivel 1 (Básico 1)",
        questions: [
            { q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Tierra", "Saturno", "Júpiter", "Marte"], correct: 2 },
            { q: "¿Cuántos continentes hay en la Tierra?", opts: ["5", "6", "7", "8"], correct: 2 },
            { q: "¿Qué gas respiran principalmente los humanos para vivir?", opts: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Hidrógeno"], correct: 1 },
            { q: "¿Cuánto es 7 × 8?", opts: ["54", "56", "58", "64"], correct: 1 },
            { q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
            { q: "¿Cuál es el hueso más largo del cuerpo humano?", opts: ["Húmero", "Fémur", "Tibia", "Radio"], correct: 1 },
            { q: "¿En qué país se encuentra la Torre Eiffel?", opts: ["Italia", "Francia", "Alemania", "España"], correct: 1 },
            { q: "¿Cuántos días tiene un año bisiesto?", opts: ["365", "366", "364", "360"], correct: 1 },
            { q: "¿Qué instrumento mide la temperatura?", opts: ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"], correct: 1 },
            { q: "¿Cuál es el resultado de 100 ÷ 4?", opts: ["20", "25", "30", "40"], correct: 1 },
            { q: "¿Cuál es el metal cuyo símbolo químico es Fe?", opts: ["Plata", "Hierro", "Oro", "Cobre"], correct: 1 },
            { q: "¿Cuál es el idioma más hablado del mundo por hablantes nativos?", opts: ["Inglés", "Español", "Mandarín", "Hindi"], correct: 2 },
            { q: "¿Cuántos lados tiene un hexágono?", opts: ["5", "6", "7", "8"], correct: 1 },
            { q: "¿Qué planeta es conocido como el “planeta rojo”?", opts: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1 },
            { q: "¿Cuál es el animal terrestre más rápido?", opts: ["León", "Guepardo", "Tigre", "Antílope"], correct: 1 }
        ]
    },
    {
        id: "nid_1_2",
        name: "Nivel 1 (Básico 2)",
        questions: [
            { q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Tierra", "Saturno", "Júpiter", "Marte"], correct: 2 },
            { q: "¿Cuántos continentes hay en la Tierra?", opts: ["5", "6", "7", "8"], correct: 2 },
            { q: "¿Qué gas respiran principalmente los humanos para vivir?", opts: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Hidrógeno"], correct: 1 },
            { q: "¿Cuánto es 7 × 8?", opts: ["54", "56", "58", "64"], correct: 1 },
            { q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
            { q: "¿Cuál es el hueso más largo del cuerpo humano?", opts: ["Húmero", "Fémur", "Tibia", "Radio"], correct: 1 },
            { q: "¿En qué país se encuentra la Torre Eiffel?", opts: ["Italia", "Francia", "Alemania", "España"], correct: 1 },
            { q: "¿Cuántos días tiene un año bisiesto?", opts: ["365", "366", "364", "360"], correct: 1 },
            { q: "¿Qué instrumento mide la temperatura?", opts: ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"], correct: 1 },
            { q: "¿Cuál es el resultado de 100 ÷ 4?", opts: ["20", "25", "30", "40"], correct: 1 },
            { q: "¿Cuál es el metal cuyo símbolo químico es Fe?", opts: ["Plata", "Hierro", "Oro", "Cobre"], correct: 1 },
            { q: "¿Cuál es el idioma más hablado del mundo por hablantes nativos?", opts: ["Inglés", "Español", "Mandarín", "Hindi"], correct: 2 },
            { q: "¿Cuántos lados tiene un hexágono?", opts: ["5", "6", "7", "8"], correct: 1 },
            { q: "¿Qué planeta es conocido como el “planeta rojo”?", opts: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1 },
            { q: "¿Cuál es el animal terrestre más rápido?", opts: ["León", "Guepardo", "Tigre", "Antílope"], correct: 1 }
        ]
    },
    {
        id: "nid_1_3",
        name: "Nivel 1 (Básico 3)",
        questions: [
            { q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Tierra", "Saturno", "Júpiter", "Marte"], correct: 2 },
            { q: "¿Cuántos continentes hay en la Tierra?", opts: ["5", "6", "7", "8"], correct: 2 },
            { q: "¿Qué gas respiran principalmente los humanos para vivir?", opts: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Hidrógeno"], correct: 1 },
            { q: "¿Cuánto es 7 × 8?", opts: ["54", "56", "58", "64"], correct: 1 },
            { q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
            { q: "¿Cuál es el hueso más largo del cuerpo humano?", opts: ["Húmero", "Fémur", "Tibia", "Radio"], correct: 1 },
            { q: "¿En qué país se encuentra la Torre Eiffel?", opts: ["Italia", "Francia", "Alemania", "España"], correct: 1 },
            { q: "¿Cuántos días tiene un año bisiesto?", opts: ["365", "366", "364", "360"], correct: 1 },
            { q: "¿Qué instrumento mide la temperatura?", opts: ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"], correct: 1 },
            { q: "¿Cuál es el resultado de 100 ÷ 4?", opts: ["20", "25", "30", "40"], correct: 1 },
            { q: "¿Cuál es el metal cuyo símbolo químico es Fe?", opts: ["Plata", "Hierro", "Oro", "Cobre"], correct: 1 },
            { q: "¿Cuál es el idioma más hablado del mundo por hablantes nativos?", opts: ["Inglés", "Español", "Mandarín", "Hindi"], correct: 2 },
            { q: "¿Cuántos lados tiene un hexágono?", opts: ["5", "6", "7", "8"], correct: 1 },
            { q: "¿Qué planeta es conocido como el “planeta rojo”?", opts: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1 },
            { q: "¿Cuál es el animal terrestre más rápido?", opts: ["León", "Guepardo", "Tigre", "Antílope"], correct: 1 }
        ]
    },
    {
        id: "nid_2",
        name: "Nivel 2 (Básico-Medio 1)",
        questions: [
            { q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 1 },
            { q: "¿Cuántos planetas hay en el sistema solar?", opts: ["7", "8", "9", "10"], correct: 1 },
            { q: "¿Qué órgano bombea la sangre en el cuerpo humano?", opts: ["Pulmón", "Cerebro", "Corazón", "Hígado"], correct: 2 },
            { q: "¿Cuál es el resultado de 9²?", opts: ["18", "72", "81", "90"], correct: 2 },
            { q: "¿Qué país tiene más población del mundo?", opts: ["India", "Estados Unidos", "China", "Indonesia"], correct: 0 },
            { q: "¿Cuál es el idioma oficial de Brasil?", opts: ["Español", "Portugués", "Inglés", "Francés"], correct: 1 },
            { q: "¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?", opts: ["180", "206", "220", "250"], correct: 1 },
            { q: "¿Qué planeta está más cerca del Sol?", opts: ["Venus", "Tierra", "Mercurio", "Marte"], correct: 2 },
            { q: "¿Cuál es el resultado de 15 × 3?", opts: ["30", "40", "45", "50"], correct: 2 },
            { q: "¿Qué continente es el más grande?", opts: ["África", "Europa", "Asia", "América"], correct: 2 },
            { q: "¿Cuál es el símbolo químico del oro?", opts: ["Ag", "Au", "O", "Go"], correct: 1 },
            { q: "¿Cuántos minutos tiene una hora?", opts: ["50", "60", "70", "100"], correct: 1 },
            { q: "¿Qué animal es conocido por tener una memoria muy desarrollada?", opts: ["Perro", "Elefante", "Gato", "Caballo"], correct: 1 },
            { q: "¿Cuál es el resultado de 144 ÷ 12?", opts: ["10", "11", "12", "14"], correct: 2 },
            { q: "¿Qué gas es el más abundante en la atmósfera terrestre?", opts: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], correct: 1 }
        ]
    },
    {
        id: "nid_2_2",
        name: "Nivel 2 (Básico-Medio 2)",
        questions: [
            { q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 1 },
            { q: "¿Cuántos planetas hay en el sistema solar?", opts: ["7", "8", "9", "10"], correct: 1 },
            { q: "¿Qué órgano bombea la sangre en el cuerpo humano?", opts: ["Pulmón", "Cerebro", "Corazón", "Hígado"], correct: 2 },
            { q: "¿Cuál es el resultado de 9²?", opts: ["18", "72", "81", "90"], correct: 2 },
            { q: "¿Qué país tiene más población del mundo?", opts: ["India", "Estados Unidos", "China", "Indonesia"], correct: 0 },
            { q: "¿Cuál es el idioma oficial de Brasil?", opts: ["Español", "Portugués", "Inglés", "Francés"], correct: 1 },
            { q: "¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?", opts: ["180", "206", "220", "250"], correct: 1 },
            { q: "¿Qué planeta está más cerca del Sol?", opts: ["Venus", "Tierra", "Mercurio", "Marte"], correct: 2 },
            { q: "¿Cuál es el resultado de 15 × 3?", opts: ["30", "40", "45", "50"], correct: 2 },
            { q: "¿Qué continente es el más grande?", opts: ["África", "Europa", "Asia", "América"], correct: 2 },
            { q: "¿Cuál es el símbolo químico del oro?", opts: ["Ag", "Au", "O", "Go"], correct: 1 },
            { q: "¿Cuántos minutos tiene una hora?", opts: ["50", "60", "70", "100"], correct: 1 },
            { q: "¿Qué animal es conocido por tener una memoria muy desarrollada?", opts: ["Perro", "Elefante", "Gato", "Caballo"], correct: 1 },
            { q: "¿Cuál es el resultado de 144 ÷ 12?", opts: ["10", "11", "12", "14"], correct: 2 },
            { q: "¿Qué gas es el más abundante en la atmósfera terrestre?", opts: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], correct: 1 }
        ]
    },
    {
        id: "nid_2_3",
        name: "Nivel 2 (Básico-Medio 3)",
        questions: [
            { q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 1 },
            { q: "¿Cuántos planetas hay en el sistema solar?", opts: ["7", "8", "9", "10"], correct: 1 },
            { q: "¿Qué órgano bombea la sangre en el cuerpo humano?", opts: ["Pulmón", "Cerebro", "Corazón", "Hígado"], correct: 2 },
            { q: "¿Cuál es el resultado de 9²?", opts: ["18", "72", "81", "90"], correct: 2 },
            { q: "¿Qué país tiene más población del mundo?", opts: ["India", "Estados Unidos", "China", "Indonesia"], correct: 0 },
            { q: "¿Cuál es el idioma oficial de Brasil?", opts: ["Español", "Portugués", "Inglés", "Francés"], correct: 1 },
            { q: "¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?", opts: ["180", "206", "220", "250"], correct: 1 },
            { q: "¿Qué planeta está más cerca del Sol?", opts: ["Venus", "Tierra", "Mercurio", "Marte"], correct: 2 },
            { q: "¿Cuál es el resultado de 15 × 3?", opts: ["30", "40", "45", "50"], correct: 2 },
            { q: "¿Qué continente es el más grande?", opts: ["África", "Europa", "Asia", "América"], correct: 2 },
            { q: "¿Cuál es el símbolo químico del oro?", opts: ["Ag", "Au", "O", "Go"], correct: 1 },
            { q: "¿Cuántos minutos tiene una hora?", opts: ["50", "60", "70", "100"], correct: 1 },
            { q: "¿Qué animal es conocido por tener una memoria muy desarrollada?", opts: ["Perro", "Elefante", "Gato", "Caballo"], correct: 1 },
            { q: "¿Cuál es el resultado de 144 ÷ 12?", opts: ["10", "11", "12", "14"], correct: 2 },
            { q: "¿Qué gas es el más abundante en la atmósfera terrestre?", opts: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], correct: 1 }
        ]
    },
    {
        id: "nid_3",
        name: "Nivel 3 (Medio 1)",
        questions: [
            { q: "¿Quién pintó la Mona Lisa?", opts: ["Picasso", "Da Vinci", "Van Gogh", "Dalí"], correct: 1 },
            { q: "¿Cuál es el país más grande del mundo?", opts: ["China", "Canadá", "Rusia", "EE.UU."], correct: 2 },
            { q: "¿En qué año llegó el hombre a la Luna?", opts: ["1969", "1965", "1971", "1959"], correct: 0 },
            { q: "¿Cuál es el símbolo químico de la Plata?", opts: ["Pt", "Au", "Ag", "Pl"], correct: 2 },
            { q: "¿Quién escribió 'Don Quijote de la Mancha'?", opts: ["Lope de Vega", "Quevedo", "Cervantes", "Góngora"], correct: 2 },
            { q: "¿Cuál es el océano más frío?", opts: ["Atlántico", "Índico", "Antártico", "Ártico"], correct: 3 },
            { q: "¿Cuál es la capital de Australia?", opts: ["Sídney", "Melbourne", "Canberra", "Perth"], correct: 2 },
            { q: "¿Qué tipo de animal es la ballena azul?", opts: ["Pez", "Mamífero", "Crustáceo", "Anfibio"], correct: 1 },
            { q: "¿En qué continente está Egipto?", opts: ["Asia", "África", "Europa", "Oceanía"], correct: 1 },
            { q: "¿Dónde originaron los juegos olímpicos?", opts: ["Roma", "Grecia", "Egipto", "Persia"], correct: 1 },
            { q: "¿Qué material de los siguientes es el más duro?", opts: ["Acero", "Titanio", "Diamante", "Grafeno"], correct: 2 },
            { q: "¿Cuál es la raíz cuadrada de 144?", opts: ["11", "12", "13", "14"], correct: 1 },
            { q: "¿Qué gas principal absorben las plantas para la fotosíntesis?", opts: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno", "Metano"], correct: 1 },
            { q: "¿Cuál es el planeta más brillante visto desde la Tierra?", opts: ["Marte", "Júpiter", "Venus", "Saturno"], correct: 2 },
            { q: "¿Qué país europeo tiene forma de bota?", opts: ["Grecia", "España", "Italia", "Portugal"], correct: 2 }
        ]
    },
    {
        id: "nid_3_2",
        name: "Nivel 3 (Medio 2)",
        questions: [
            { q: "¿Quién pintó la Mona Lisa?", opts: ["Picasso", "Da Vinci", "Van Gogh", "Dalí"], correct: 1 },
            { q: "¿Cuál es el país más grande del mundo?", opts: ["China", "Canadá", "Rusia", "EE.UU."], correct: 2 },
            { q: "¿En qué año llegó el hombre a la Luna?", opts: ["1969", "1965", "1971", "1959"], correct: 0 },
            { q: "¿Cuál es el símbolo químico de la Plata?", opts: ["Pt", "Au", "Ag", "Pl"], correct: 2 },
            { q: "¿Quién escribió 'Don Quijote de la Mancha'?", opts: ["Lope de Vega", "Quevedo", "Cervantes", "Góngora"], correct: 2 },
            { q: "¿Cuál es el océano más frío?", opts: ["Atlántico", "Índico", "Antártico", "Ártico"], correct: 3 },
            { q: "¿Cuál es la capital de Australia?", opts: ["Sídney", "Melbourne", "Canberra", "Perth"], correct: 2 },
            { q: "¿Qué tipo de animal es la ballena azul?", opts: ["Pez", "Mamífero", "Crustáceo", "Anfibio"], correct: 1 },
            { q: "¿En qué continente está Egipto?", opts: ["Asia", "África", "Europa", "Oceanía"], correct: 1 },
            { q: "¿Dónde originaron los juegos olímpicos?", opts: ["Roma", "Grecia", "Egipto", "Persia"], correct: 1 },
            { q: "¿Qué material de los siguientes es el más duro?", opts: ["Acero", "Titanio", "Diamante", "Grafeno"], correct: 2 },
            { q: "¿Cuál es la raíz cuadrada de 144?", opts: ["11", "12", "13", "14"], correct: 1 },
            { q: "¿Qué gas principal absorben las plantas para la fotosíntesis?", opts: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno", "Metano"], correct: 1 },
            { q: "¿Cuál es el planeta más brillante visto desde la Tierra?", opts: ["Marte", "Júpiter", "Venus", "Saturno"], correct: 2 },
            { q: "¿Qué país europeo tiene forma de bota?", opts: ["Grecia", "España", "Italia", "Portugal"], correct: 2 }
        ]
    },
    {
        id: "nid_3_3",
        name: "Nivel 3 (Medio 3)",
        questions: [
            { q: "¿Quién pintó la Mona Lisa?", opts: ["Picasso", "Da Vinci", "Van Gogh", "Dalí"], correct: 1 },
            { q: "¿Cuál es el país más grande del mundo?", opts: ["China", "Canadá", "Rusia", "EE.UU."], correct: 2 },
            { q: "¿En qué año llegó el hombre a la Luna?", opts: ["1969", "1965", "1971", "1959"], correct: 0 },
            { q: "¿Cuál es el símbolo químico de la Plata?", opts: ["Pt", "Au", "Ag", "Pl"], correct: 2 },
            { q: "¿Quién escribió 'Don Quijote de la Mancha'?", opts: ["Lope de Vega", "Quevedo", "Cervantes", "Góngora"], correct: 2 },
            { q: "¿Cuál es el océano más frío?", opts: ["Atlántico", "Índico", "Antártico", "Ártico"], correct: 3 },
            { q: "¿Cuál es la capital de Australia?", opts: ["Sídney", "Melbourne", "Canberra", "Perth"], correct: 2 },
            { q: "¿Qué tipo de animal es la ballena azul?", opts: ["Pez", "Mamífero", "Crustáceo", "Anfibio"], correct: 1 },
            { q: "¿En qué continente está Egipto?", opts: ["Asia", "África", "Europa", "Oceanía"], correct: 1 },
            { q: "¿Dónde originaron los juegos olímpicos?", opts: ["Roma", "Grecia", "Egipto", "Persia"], correct: 1 },
            { q: "¿Qué material de los siguientes es el más duro?", opts: ["Acero", "Titanio", "Diamante", "Grafeno"], correct: 2 },
            { q: "¿Cuál es la raíz cuadrada de 144?", opts: ["11", "12", "13", "14"], correct: 1 },
            { q: "¿Qué gas principal absorben las plantas para la fotosíntesis?", opts: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno", "Metano"], correct: 1 },
            { q: "¿Cuál es el planeta más brillante visto desde la Tierra?", opts: ["Marte", "Júpiter", "Venus", "Saturno"], correct: 2 },
            { q: "¿Qué país europeo tiene forma de bota?", opts: ["Grecia", "España", "Italia", "Portugal"], correct: 2 }
        ]
    },
    {
        id: "nid_4",
        name: "Nivel 4 (Difícil 1)",
        questions: [
            { q: "¿Quién formuló la teoría de la relatividad?", opts: ["Newton", "Tesla", "Einstein", "Galileo"], correct: 2 },
            { q: "¿Cuál es el hueso más pequeño del cuerpo humano?", opts: ["Yunque", "Martillo", "Estribo", "Falange"], correct: 2 },
            { q: "¿Cuál es la capital de Islandia?", opts: ["Oslo", "Estocolmo", "Helsinki", "Reikiavik"], correct: 3 },
            { q: "¿Quién dirigió la película 'El Padrino'?", opts: ["Spielberg", "Scorsese", "Coppola", "Tarantino"], correct: 2 },
            { q: "¿En qué país está la región de Transilvania?", opts: ["Hungría", "Rumanía", "Bulgaria", "Serbia"], correct: 1 },
            { q: "¿En qué año cayó el Muro de Berlín?", opts: ["1989", "1991", "1987", "1990"], correct: 0 },
            { q: "¿Cuál es el lago más profundo del mundo?", opts: ["Tanganica", "Superior", "Victoria", "Baikal"], correct: 3 },
            { q: "¿Cuál es la montaña más alta de África?", opts: ["Atlas", "Everest", "Kilimanjaro", "Elbrus"], correct: 2 },
            { q: "¿En qué año comenzó la Segunda Guerra Mundial?", opts: ["1938", "1939", "1941", "1945"], correct: 1 },
            { q: "¿Cómo se llama el proceso por el cual una oruga es mariposa?", opts: ["Mutación", "Evolución", "Metamorfosis", "Transición"], correct: 2 },
            { q: "¿Qué divisa oficial se utiliza en el país de Japón?", opts: ["Yuan", "Won", "Yen", "Baht"], correct: 2 },
            { q: "¿Qué estructura del ojo humano define su color?", opts: ["Pupila", "Córnea", "Retina", "Iris"], correct: 3 },
            { q: "¿Quién pintó el famoso cuadro expresionista 'El Grito'?", opts: ["Munch", "Dalí", "Picasso", "Monet"], correct: 0 },
            { q: "¿En qué año se disolvió la Unión Soviética?", opts: ["1989", "1990", "1991", "1992"], correct: 2 },
            { q: "¿Cómo se llama el miedo irracional a los espacios cerrados?", opts: ["Aracnofobia", "Agorafobia", "Claustrofobia", "Acrofobia"], correct: 2 }
        ]
    },
    {
        id: "nid_4_2",
        name: "Nivel 4 (Difícil 2)",
        questions: [
            { q: "¿Quién formuló la teoría de la relatividad?", opts: ["Newton", "Tesla", "Einstein", "Galileo"], correct: 2 },
            { q: "¿Cuál es el hueso más pequeño del cuerpo humano?", opts: ["Yunque", "Martillo", "Estribo", "Falange"], correct: 2 },
            { q: "¿Cuál es la capital de Islandia?", opts: ["Oslo", "Estocolmo", "Helsinki", "Reikiavik"], correct: 3 },
            { q: "¿Quién dirigió la película 'El Padrino'?", opts: ["Spielberg", "Scorsese", "Coppola", "Tarantino"], correct: 2 },
            { q: "¿En qué país está la región de Transilvania?", opts: ["Hungría", "Rumanía", "Bulgaria", "Serbia"], correct: 1 },
            { q: "¿En qué año cayó el Muro de Berlín?", opts: ["1989", "1991", "1987", "1990"], correct: 0 },
            { q: "¿Cuál es el lago más profundo del mundo?", opts: ["Tanganica", "Superior", "Victoria", "Baikal"], correct: 3 },
            { q: "¿Cuál es la montaña más alta de África?", opts: ["Atlas", "Everest", "Kilimanjaro", "Elbrus"], correct: 2 },
            { q: "¿En qué año comenzó la Segunda Guerra Mundial?", opts: ["1938", "1939", "1941", "1945"], correct: 1 },
            { q: "¿Cómo se llama el proceso por el cual una oruga es mariposa?", opts: ["Mutación", "Evolución", "Metamorfosis", "Transición"], correct: 2 },
            { q: "¿Qué divisa oficial se utiliza en el país de Japón?", opts: ["Yuan", "Won", "Yen", "Baht"], correct: 2 },
            { q: "¿Qué estructura del ojo humano define su color?", opts: ["Pupila", "Córnea", "Retina", "Iris"], correct: 3 },
            { q: "¿Quién pintó el famoso cuadro expresionista 'El Grito'?", opts: ["Munch", "Dalí", "Picasso", "Monet"], correct: 0 },
            { q: "¿En qué año se disolvió la Unión Soviética?", opts: ["1989", "1990", "1991", "1992"], correct: 2 },
            { q: "¿Cómo se llama el miedo irracional a los espacios cerrados?", opts: ["Aracnofobia", "Agorafobia", "Claustrofobia", "Acrofobia"], correct: 2 }
        ]
    },
    {
        id: "nid_4_3",
        name: "Nivel 4 (Difícil 3)",
        questions: [
            { q: "¿Quién formuló la teoría de la relatividad?", opts: ["Newton", "Tesla", "Einstein", "Galileo"], correct: 2 },
            { q: "¿Cuál es el hueso más pequeño del cuerpo humano?", opts: ["Yunque", "Martillo", "Estribo", "Falange"], correct: 2 },
            { q: "¿Cuál es la capital de Islandia?", opts: ["Oslo", "Estocolmo", "Helsinki", "Reikiavik"], correct: 3 },
            { q: "¿Quién dirigió la película 'El Padrino'?", opts: ["Spielberg", "Scorsese", "Coppola", "Tarantino"], correct: 2 },
            { q: "¿En qué país está la región de Transilvania?", opts: ["Hungría", "Rumanía", "Bulgaria", "Serbia"], correct: 1 },
            { q: "¿En qué año cayó el Muro de Berlín?", opts: ["1989", "1991", "1987", "1990"], correct: 0 },
            { q: "¿Cuál es el lago más profundo del mundo?", opts: ["Tanganica", "Superior", "Victoria", "Baikal"], correct: 3 },
            { q: "¿Cuál es la montaña más alta de África?", opts: ["Atlas", "Everest", "Kilimanjaro", "Elbrus"], correct: 2 },
            { q: "¿En qué año comenzó la Segunda Guerra Mundial?", opts: ["1938", "1939", "1941", "1945"], correct: 1 },
            { q: "¿Cómo se llama el proceso por el cual una oruga es mariposa?", opts: ["Mutación", "Evolución", "Metamorfosis", "Transición"], correct: 2 },
            { q: "¿Qué divisa oficial se utiliza en el país de Japón?", opts: ["Yuan", "Won", "Yen", "Baht"], correct: 2 },
            { q: "¿Qué estructura del ojo humano define su color?", opts: ["Pupila", "Córnea", "Retina", "Iris"], correct: 3 },
            { q: "¿Quién pintó el famoso cuadro expresionista 'El Grito'?", opts: ["Munch", "Dalí", "Picasso", "Monet"], correct: 0 },
            { q: "¿En qué año se disolvió la Unión Soviética?", opts: ["1989", "1990", "1991", "1992"], correct: 2 },
            { q: "¿Cómo se llama el miedo irracional a los espacios cerrados?", opts: ["Aracnofobia", "Agorafobia", "Claustrofobia", "Acrofobia"], correct: 2 }
        ]
    },
    {
        id: "nid_5",
        name: "Nivel 5 (Extremo 1)",
        questions: [
            { q: "¿Cuál es la fosa oceánica más profunda del planeta?", opts: ["Fosa de Java", "Fosa de las Marianas", "Fosa de Tonga", "Fosa de Puerto Rico"], correct: 1 },
            { q: "¿Qué científica/o descubrió accidentalmente la penicilina?", opts: ["Pasteur", "Fleming", "Koch", "Curie"], correct: 1 },
            { q: "¿Cuál es el estado más extenso en área de los Estados Unidos?", opts: ["Texas", "California", "Alaska", "Montana"], correct: 2 },
            { q: "¿Qué científico introdujo la selección natural junto a Darwin?", opts: ["Lamarck", "Mendel", "Wallace", "Huxley"], correct: 2 },
            { q: "¿A qué sustancia se denomina oficialmente vitamina B12?", opts: ["Riboflavina", "Biotina", "Cobalamina", "Tiamina"], correct: 2 },
            { q: "¿Qué Maravilla del Mundo Antiguo aún sigue en pie?", opts: ["Jardines Babilonia", "Faro de Alejandría", "Coloso de Rodas", "Pirámide de Guiza"], correct: 3 },
            { q: "¿De qué animal proviene la auténtica leche del queso mozzarella original?", opts: ["Vaca", "Cabra", "Oveja", "Búfala"], correct: 3 },
            { q: "¿Cuál es el mineral más duro cuantificado en la escala de Mohs?", opts: ["Corindón", "Topacio", "Diamante", "Cuarzo"], correct: 2 },
            { q: "¿Quién fue el primer emperador en la historia del imperio romano?", opts: ["Julio César", "Augusto", "Nerón", "Calígula"], correct: 1 },
            { q: "¿Qué imperio precolombino sudamericano construyó Machu Picchu?", opts: ["Maya", "Azteca", "Olmeca", "Inca"], correct: 3 },
            { q: "¿Cuál es el elemento químico más frecuente y abundante del universo?", opts: ["Helio", "Oxígeno", "Carbono", "Hidrógeno"], correct: 3 },
            { q: "¿Cuál es el río más caudaloso (mayor volumen) del mundo?", opts: ["Nilo", "Amazonas", "Congo", "Misisipi"], correct: 1 },
            { q: "¿Quién fue la primera mujer galardonada con un Premio Nobel?", opts: ["Rosalind Franklin", "Marie Curie", "Lise Meitner", "Ada Lovelace"], correct: 1 },
            { q: "¿Cuál es la capital de Nueva Zelanda?", opts: ["Sídney", "Auckland", "Wellington", "Canberra"], correct: 2 },
            { q: "¿Quién es el dios griego que rige sobre el inframundo?", opts: ["Ares", "Apolo", "Hades", "Poseidón"], correct: 2 }
        ]
    },
    {
        id: "nid_5_2",
        name: "Nivel 5 (Extremo 2)",
        questions: [
            { q: "¿Cuál es la fosa oceánica más profunda del planeta?", opts: ["Fosa de Java", "Fosa de las Marianas", "Fosa de Tonga", "Fosa de Puerto Rico"], correct: 1 },
            { q: "¿Qué científica/o descubrió accidentalmente la penicilina?", opts: ["Pasteur", "Fleming", "Koch", "Curie"], correct: 1 },
            { q: "¿Cuál es el estado más extenso en área de los Estados Unidos?", opts: ["Texas", "California", "Alaska", "Montana"], correct: 2 },
            { q: "¿Qué científico introdujo la selección natural junto a Darwin?", opts: ["Lamarck", "Mendel", "Wallace", "Huxley"], correct: 2 },
            { q: "¿A qué sustancia se denomina oficialmente vitamina B12?", opts: ["Riboflavina", "Biotina", "Cobalamina", "Tiamina"], correct: 2 },
            { q: "¿Qué Maravilla del Mundo Antiguo aún sigue en pie?", opts: ["Jardines Babilonia", "Faro de Alejandría", "Coloso de Rodas", "Pirámide de Guiza"], correct: 3 },
            { q: "¿De qué animal proviene la auténtica leche del queso mozzarella original?", opts: ["Vaca", "Cabra", "Oveja", "Búfala"], correct: 3 },
            { q: "¿Cuál es el mineral más duro cuantificado en la escala de Mohs?", opts: ["Corindón", "Topacio", "Diamante", "Cuarzo"], correct: 2 },
            { q: "¿Quién fue el primer emperador en la historia del imperio romano?", opts: ["Julio César", "Augusto", "Nerón", "Calígula"], correct: 1 },
            { q: "¿Qué imperio precolombino sudamericano construyó Machu Picchu?", opts: ["Maya", "Azteca", "Olmeca", "Inca"], correct: 3 },
            { q: "¿Cuál es el elemento químico más frecuente y abundante del universo?", opts: ["Helio", "Oxígeno", "Carbono", "Hidrógeno"], correct: 3 },
            { q: "¿Cuál es el río más caudaloso (mayor volumen) del mundo?", opts: ["Nilo", "Amazonas", "Congo", "Misisipi"], correct: 1 },
            { q: "¿Quién fue la primera mujer galardonada con un Premio Nobel?", opts: ["Rosalind Franklin", "Marie Curie", "Lise Meitner", "Ada Lovelace"], correct: 1 },
            { q: "¿Cuál es la capital de Nueva Zelanda?", opts: ["Sídney", "Auckland", "Wellington", "Canberra"], correct: 2 },
            { q: "¿Quién es el dios griego que rige sobre el inframundo?", opts: ["Ares", "Apolo", "Hades", "Poseidón"], correct: 2 }
        ]
    },
    {
        id: "nid_5_3",
        name: "Nivel 5 (Extremo 3)",
        questions: [
            { q: "¿Cuál es la fosa oceánica más profunda del planeta?", opts: ["Fosa de Java", "Fosa de las Marianas", "Fosa de Tonga", "Fosa de Puerto Rico"], correct: 1 },
            { q: "¿Qué científica/o descubrió accidentalmente la penicilina?", opts: ["Pasteur", "Fleming", "Koch", "Curie"], correct: 1 },
            { q: "¿Cuál es el estado más extenso en área de los Estados Unidos?", opts: ["Texas", "California", "Alaska", "Montana"], correct: 2 },
            { q: "¿Qué científico introdujo la selección natural junto a Darwin?", opts: ["Lamarck", "Mendel", "Wallace", "Huxley"], correct: 2 },
            { q: "¿A qué sustancia se denomina oficialmente vitamina B12?", opts: ["Riboflavina", "Biotina", "Cobalamina", "Tiamina"], correct: 2 },
            { q: "¿Qué Maravilla del Mundo Antiguo aún sigue en pie?", opts: ["Jardines Babilonia", "Faro de Alejandría", "Coloso de Rodas", "Pirámide de Guiza"], correct: 3 },
            { q: "¿De qué animal proviene la auténtica leche del queso mozzarella original?", opts: ["Vaca", "Cabra", "Oveja", "Búfala"], correct: 3 },
            { q: "¿Cuál es el mineral más duro cuantificado en la escala de Mohs?", opts: ["Corindón", "Topacio", "Diamante", "Cuarzo"], correct: 2 },
            { q: "¿Quién fue el primer emperador en la historia del imperio romano?", opts: ["Julio César", "Augusto", "Nerón", "Calígula"], correct: 1 },
            { q: "¿Qué imperio precolombino sudamericano construyó Machu Picchu?", opts: ["Maya", "Azteca", "Olmeca", "Inca"], correct: 3 },
            { q: "¿Cuál es el elemento químico más frecuente y abundante del universo?", opts: ["Helio", "Oxígeno", "Carbono", "Hidrógeno"], correct: 3 },
            { q: "¿Cuál es el río más caudaloso (mayor volumen) del mundo?", opts: ["Nilo", "Amazonas", "Congo", "Misisipi"], correct: 1 },
            { q: "¿Quién fue la primera mujer galardonada con un Premio Nobel?", opts: ["Rosalind Franklin", "Marie Curie", "Lise Meitner", "Ada Lovelace"], correct: 1 },
            { q: "¿Cuál es la capital de Nueva Zelanda?", opts: ["Sídney", "Auckland", "Wellington", "Canberra"], correct: 2 },
            { q: "¿Quién es el dios griego que rige sobre el inframundo?", opts: ["Ares", "Apolo", "Hades", "Poseidón"], correct: 2 }
        ]
    },
    {
        id: "nid_6",
        name: "Nivel 6 (Geografía Mundial)",
        questions: [
            { q: "¿En qué país se encuentra la ciudad de Dubái?", opts: ["Argelia", "Emiratos Árabes Unidos", "Arabia Saudita", "Catar"], correct: 1 },
            { q: "¿Cuál es el río más largo de América del Norte?", opts: ["Colorado", "Misuri", "Misisipi", "San Lorenzo"], correct: 2 },
            { q: "¿Qué cordillera separa Europa de Asia?", opts: ["Himalaya", "Andes", "Rocosas", "Urales"], correct: 3 },
            { q: "¿Cuál es el país más pequeño del mundo?", opts: ["Mónaco", "Nauru", "El Vaticano", "San Marino"], correct: 2 },
            { q: "¿En qué continente está el desierto del Sahara?", opts: ["Asia", "África", "Oceanía", "Europa"], correct: 1 }
        ]
    },
    {
        id: "nid_7",
        name: "Nivel 7 (Historia del Arte)",
        questions: [
            { q: "¿Quién pintó 'La noche estrellada'?", opts: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], correct: 1 },
            { q: "¿A qué movimiento pertenece Salvador Dalí?", opts: ["Cubismo", "Surrealismo", "Impresionismo", "Expresionismo"], correct: 1 },
            { q: "¿Dónde está expuesta la 'Mona Lisa'?", opts: ["Prado", "Louvre", "Metropolitan", "Uffizi"], correct: 1 },
            { q: "¿Qué escultor hizo la estatua del David?", opts: ["Donatello", "Bernini", "Miguel Ángel", "Rafael"], correct: 2 },
            { q: "¿En qué país nació Pablo Picasso?", opts: ["Francia", "Italia", "España", "México"], correct: 2 }
        ]
    },
    {
        id: "nid_8",
        name: "Nivel 8 (Deportes)",
        questions: [
            { q: "¿Qué país ganó el Mundial de Fútbol de 2018?", opts: ["Brasil", "Alemania", "Francia", "Argentina"], correct: 2 },
            { q: "¿En qué deporte destacó Michael Jordan?", opts: ["Béisbol", "Golf", "Baloncesto", "Fútbol americano"], correct: 2 },
            { q: "¿Cuántos anillos olímpicos hay?", opts: ["4", "5", "6", "7"], correct: 1 },
            { q: "¿Cuánto dura un partido de fútbol reglamentario?", opts: ["60 mins", "80 mins", "90 mins", "100 mins"], correct: 2 },
            { q: "¿En qué país nació el judo?", opts: ["China", "Japón", "Corea del Sur", "Tailandia"], correct: 1 }
        ]
    },
    {
        id: "nid_9",
        name: "Nivel 9 (Mitología)",
        questions: [
            { q: "¿Quién es el dios romano del mar?", opts: ["Poseidón", "Júpiter", "Neptuno", "Plutón"], correct: 2 },
            { q: "¿Qué monstruo mítico tiene serpientes en lugar de cabello?", opts: ["Esfinge", "Medusa", "Quimera", "Sirena"], correct: 1 },
            { q: "¿Quién era el dios supremo de los vikingos (mitología nórdica)?", opts: ["Thor", "Loki", "Freyr", "Odín"], correct: 3 },
            { q: "¿Cómo se llama el caballo alado de la mitología griega?", opts: ["Minotauro", "Pegaso", "Centauro", "Grifo"], correct: 1 },
            { q: "¿Qué héroe griego era invulnerable excepto en su talón?", opts: ["Hércules", "Perseo", "Teseo", "Aquiles"], correct: 3 }
        ]
    },
    {
        id: "nid_10",
        name: "Nivel 10 (Cine y Televisión)",
        questions: [
            { q: "¿Quién interpreta a Jack Dawson en Titanic?", opts: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"], correct: 2 },
            { q: "¿Qué personaje dice 'Yo soy tu padre'?", opts: ["Han Solo", "Darth Vader", "Luke Skywalker", "Yoda"], correct: 1 },
            { q: "¿En qué serie aparece el trono de hierro?", opts: ["El Señor de los Anillos", "The Witcher", "Vikingos", "Juego de Tronos"], correct: 3 },
            { q: "¿Qué premio es el máximo galardón de la Academia de Cine de Hollywood?", opts: ["Globo de Oro", "Emmy", "Óscar", "Bafta"], correct: 2 },
            { q: "¿De qué color es la píldora que toma Neo en Matrix?", opts: ["Azul", "Roja", "Verde", "Amarilla"], correct: 1 }
        ]
    },
    {
        id: "nid_11",
        name: "Nivel 11 (Ciencia y Naturaleza)",
        questions: [
            { q: "¿Cuál es el gas más ligero de todos?", opts: ["Helio", "Oxígeno", "Hidrógeno", "Nitrógeno"], correct: 2 },
            { q: "¿A qué temperatura hierve el agua a nivel del mar?", opts: ["50°C", "80°C", "100°C", "120°C"], correct: 2 },
            { q: "¿Qué parte de la planta realiza la fotosíntesis?", opts: ["Raíz", "Tallo", "Hoja", "Flor"], correct: 2 },
            { q: "¿Cuál es el metal líquido a temperatura ambiente?", opts: ["Plomo", "Hierro", "Mercurio", "Cobre"], correct: 2 },
            { q: "¿Cómo se llama el proceso en el que el hielo pasa a gas sin ser líquido?", opts: ["Fusión", "Sublimación", "Evaporación", "Condensación"], correct: 1 }
        ]
    },
    {
        id: "nid_12",
        name: "Nivel 12 (Gastronomía)",
        questions: [
            { q: "¿De qué país es típico el sushi?", opts: ["China", "Tailandia", "Japón", "Vietnam"], correct: 2 },
            { q: "¿Qué ingrediente principal tiene el guacamole?", opts: ["Mango", "Aguacate", "Tomate", "Papaya"], correct: 1 },
            { q: "¿Cuál es la bebida más consumida del mundo después del agua?", opts: ["Café", "Refrescos", "Cerveza", "Té"], correct: 3 },
            { q: "¿De dónde proviene originariamente el cacao?", opts: ["Europa", "América", "África", "Asia"], correct: 1 },
            { q: "¿Qué queso italiano se suele rallar sobre la pasta?", opts: ["Gorgonzola", "Parmesano", "Mozzarella", "Provolone"], correct: 1 }
        ]
    },
    {
        id: "nid_13",
        name: "Nivel 13 (Música)",
        questions: [
            { q: "¿Quién es conocido como el 'Rey del Pop'?", opts: ["Elvis Presley", "Prince", "Michael Jackson", "Freddie Mercury"], correct: 2 },
            { q: "¿De qué legendaria banda inglesa formaba parte John Lennon?", opts: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"], correct: 1 },
            { q: "¿Cuántas cuerdas tiene un violín estándar?", opts: ["3", "4", "5", "6"], correct: 1 },
            { q: "¿Cuál es la capital mundial de la música clásica?", opts: ["París", "Roma", "Viena", "Londres"], correct: 2 },
            { q: "¿A qué cantante pertenece el álbum 'Thriller'?", opts: ["Madonna", "Stevie Wonder", "David Bowie", "Michael Jackson"], correct: 3 }
        ]
    },
    {
        id: "nid_14",
        name: "Nivel 14 (Literatura)",
        questions: [
            { q: "¿Quién escribió la saga de Harry Potter?", opts: ["C.S. Lewis", "J.R.R. Tolkien", "J.K. Rowling", "Stephen King"], correct: 2 },
            { q: "¿Qué famoso vampiro creó Bram Stoker?", opts: ["Nosferatu", "Drácula", "Lestat", "Edward Cullen"], correct: 1 },
            { q: "¿En qué novela del español Cervantes el protagonista enloquece?", opts: ["La Galatea", "El Quijote", "Novelas Ejemplares", "Persiles"], correct: 1 },
            { q: "¿Quién es el autor de 'El principito'?", opts: ["Victor Hugo", "Antoine de Saint-Exupéry", "Julio Verne", "Albert Camus"], correct: 1 },
            { q: "¿Cómo se llama la primera parte de la 'Divina Comedia'?", opts: ["Purgatorio", "Cielo", "Infierno", "Limbo"], correct: 2 }
        ]
    },
    {
        id: "nid_15",
        name: "Nivel 15 (Astronomía)",
        questions: [
            { q: "¿Cuál es el planeta con los anillos más notorios?", opts: ["Júpiter", "Urano", "Neptuno", "Saturno"], correct: 3 },
            { q: "¿Qué tipo de estrella es el Sol?", opts: ["Enana roja", "Enana amarilla", "Gigante azul", "Supergigante roja"], correct: 1 },
            { q: "¿Cuál es la galaxia en la que se encuentra la Tierra?", opts: ["Andrómeda", "Cigarro", "Vía Láctea", "Sombrero"], correct: 2 },
            { q: "¿Quién fue el primer ser humano en el espacio?", opts: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], correct: 2 },
            { q: "¿Qué nombre recibe el enorme agujero negro en el centro de nuestra galaxia?", opts: ["Sagitario A*", "Cygnus X-1", "V404", "Messier 87"], correct: 0 }
        ]
    },
    {
        id: "nid_16",
        name: "Nivel 16 (Curiosidades)",
        questions: [
            { q: "¿De qué color es la sangre de los pulpos?", opts: ["Roja", "Transparente", "Verde", "Azul"], correct: 3 },
            { q: "¿Cuántos corazones tiene un pulpo?", opts: ["1", "2", "3", "4"], correct: 2 },
            { q: "¿Las huellas de qué animal son muy similares a las humanas?", opts: ["Koala", "Gorila", "Chimpancé", "Oso"], correct: 0 },
            { q: "¿Qué material produce la picadura del pez globo?", opts: ["Veneno cianuro", "Tetrodotoxina", "Ácido nítrico", "Arsénico"], correct: 1 },
            { q: "¿Cuál es la única letra que no aparece en la tabla periódica?", opts: ["Y", "X", "J", "K"], correct: 2 }
        ]
    },
    {
        id: "nid_17",
        name: "Nivel 17 (Videojuegos)",
        questions: [
            { q: "¿De qué color es Mario y Luigi, respectivamente?", opts: ["Rojo-Amarillo", "Verde-Rojo", "Rojo-Verde", "Verde-Amarillo"], correct: 2 },
            { q: "¿Cuál es el videojuego más vendido de todos los tiempos?", opts: ["GTA V", "Tetris", "Minecraft", "Super Mario Bros"], correct: 2 },
            { q: "¿Cómo se llama la princesa que Link debe rescatar en su saga?", opts: ["Zelda", "Peach", "Daisy", "Rosalina"], correct: 0 },
            { q: "¿Qué compañía desarrolló la consola PlayStation?", opts: ["Sega", "Nintendo", "Sony", "Microsoft"], correct: 2 },
            { q: "¿Cuál es el nombre del protagonista principal en 'Halo'?", opts: ["Geralt", "Jefe Maestro", "Marcus Fenix", "Kratos"], correct: 1 }
        ]
    },
    {
        id: "nid_18",
        name: "Nivel 18 (Cuerpo Humano)",
        questions: [
            { q: "¿Dónde se encuentra la glándula tiroides?", opts: ["Cuello", "Cerebro", "Abdomen", "Pecho"], correct: 0 },
            { q: "¿Qué célula transporta el oxígeno en nuestra sangre?", opts: ["Plaquetas", "Glóbulos blancos", "Glóbulos rojos", "Neuronas"], correct: 2 },
            { q: "¿Cuántos dientes tiene un adulto promedio sin extraer las del juicio?", opts: ["28", "30", "32", "34"], correct: 2 },
            { q: "¿Cuál es el músculo que nunca deja de latir?", opts: ["Bíceps", "Diafragma", "Corazón", "Lengua"], correct: 2 },
            { q: "¿Qué vitamina se produce en el humano al exponerse a la luz del sol?", opts: ["Vitamina A", "Vitamina C", "Vitamina B12", "Vitamina D"], correct: 3 }
        ]
    },
    {
        id: "nid_19",
        name: "Nivel 19 (Animales)",
        questions: [
            { q: "¿Cuál es el animal más pesado sobre la tierra firme?", opts: ["Rinoceronte", "Elefante", "Hipopótamo", "Jirafa"], correct: 1 },
            { q: "¿Qué animal produce perlas?", opts: ["Peine de mar", "Ostra", "Cangrejo", "Medusa"], correct: 1 },
            { q: "¿Cuál es el único mamífero capaz de volar activamente?", opts: ["Ardilla voladora", "Avestruz", "Murciélago", "Ornitorrinco"], correct: 2 },
            { q: "¿Qué tipo de animal es un caballito de mar?", opts: ["Pez", "Reptil", "Mamífero", "Crustáceo"], correct: 0 },
            { q: "¿Qué pájaro es el símbolo mundial de la paz?", opts: ["Águila", "Cuervo", "Cisne", "Paloma Blanca"], correct: 3 }
        ]
    },
    {
        id: "nid_20",
        name: "Nivel 20 (Tecnologías)",
        questions: [
            { q: "¿Qué significa las siglas 'WWW' en internet?", opts: ["World Wide Web", "World Web Wide", "Western World Web", "Web World Wide"], correct: 0 },
            { q: "¿Quién fundó Microsoft a los 19 años?", opts: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"], correct: 1 },
            { q: "¿A qué marca pertenece el sistema operativo iOS?", opts: ["Google", "Samsung", "Apple", "Nokia"], correct: 2 },
            { q: "¿Cuál fue la primera red social en alcanzar mil millones de usuarios?", opts: ["Twitter", "Instagram", "Facebook", "MySpace"], correct: 2 },
            { q: "¿Cómo se llama la moneda digital más famosa creada en 2009?", opts: ["Ethereum", "Ripple", "Litecoin", "Bitcoin"], correct: 3 }
        ]
    },
    {
        id: "nid_21",
        name: "Nivel 21 (Capitales)",
        questions: [
            { q: "¿Cuál es la capital de Austria?", opts: ["Berna", "Viena", "Budapest", "Zúrich"], correct: 1 },
            { q: "¿Cuál es la capital de Colombia?", opts: ["Medellín", "Cali", "Bogotá", "Cartagena"], correct: 2 },
            { q: "¿Cuál es la capital de Egipto?", opts: ["El Cairo", "Alejandría", "Damasco", "Amán"], correct: 0 },
            { q: "¿Cuál es la capital de Kenia?", opts: ["Abuya", "Nairobi", "Dakar", "Pretoria"], correct: 1 },
            { q: "¿Cuál es la capital de Filipinas?", opts: ["Yakarta", "Manila", "Bangkok", "Hanói"], correct: 1 }
        ]
    },
    {
        id: "nid_22",
        name: "Nivel 22 (Matemáticas)",
        questions: [
            { q: "¿Cómo se llama un polígono de 5 lados?", opts: ["Hexágono", "Octógono", "Pentágono", "Heptágono"], correct: 2 },
            { q: "¿Cuáles son los primeros 3 dígitos de Pi?", opts: ["3.13", "3.14", "3.15", "3.16"], correct: 1 },
            { q: "¿En qué teorema se basa la fórmula a² + b² = c²?", opts: ["Tales", "Newton", "Pitágoras", "Euclides"], correct: 2 },
            { q: "¿Qué número representa una X en números romanos?", opts: ["5", "10", "50", "100"], correct: 1 },
            { q: "¿Cuál es el resultado de 18 ÷ (3 + 3) * 2?", opts: ["1", "3", "6", "12"], correct: 2 }
        ]
    },
    {
        id: "nid_23",
        name: "Nivel 23 (Lenguas del Mundo)",
        questions: [
            { q: "¿Con qué alfabeto se suele escribir el idioma ruso?", opts: ["Latino", "Arábigo", "Cirílico", "Griego"], correct: 2 },
            { q: "¿Qué idioma es nativo de la región de Cataluña?", opts: ["Vasco", "Gallego", "Catalán", "Araméo"], correct: 2 },
            { q: "¿Qué lengua derivada del latín se habla en Rumanía?", opts: ["Húngaro", "Eslovaco", "Rumano", "Polaco"], correct: 2 },
            { q: "¿De qué raíz lingüística proviene el francés?", opts: ["Germánica", "Romance", "Eslava", "Céltica"], correct: 1 },
            { q: "¿Cuál es el idioma nativo de la mayoría de Brasil?", opts: ["Español", "Inglés", "Francés", "Portugués"], correct: 3 }
        ]
    },
    {
        id: "nid_24",
        name: "Nivel 24 (Inventos)",
        questions: [
            { q: "¿Quién se considera el inventor principal de la imprenta moderna?", opts: ["Leonardo da Vinci", "Gutenberg", "Newton", "Galileo"], correct: 1 },
            { q: "¿Quién inventó el teléfono que patentó en 1876?", opts: ["Graham Bell", "Edison", "Tesla", "Marconi"], correct: 0 },
            { q: "¿A quién se le atribuye la creación de la dinamita?", opts: ["Einstein", "Oppenheimer", "Alfred Nobel", "Curie"], correct: 2 },
            { q: "¿Qué hermanos inventaron el primer aeroplano funcional?", opts: ["Hermanos Montgolfier", "Hermanos Wright", "Hermanos Lumière", "Hermanos Grimm"], correct: 1 },
            { q: "¿Quién inventó el termómetro de mercurio?", opts: ["Celsius", "Kelvin", "Fahrenheit", "Pascal"], correct: 2 }
        ]
    },
    {
        id: "nid_25",
        name: "Nivel 25 (Dibujos Animados)",
        questions: [
            { q: "¿Cómo se llama el perro de gran tamaño en 'Scooby-Doo'?", opts: ["Scrappy", "Astro", "Pluto", "Scooby"], correct: 3 },
            { q: "¿Quién vive en una piña debajo del mar?", opts: ["Calamardo", "Patricio", "Bob Esponja", "Arenita"], correct: 2 },
            { q: "¿De qué color es Homero Simpson?", opts: ["Verde", "Rosa", "Blanco", "Amarillo"], correct: 3 },
            { q: "¿En qué ciudad ficticia vive Batman?", opts: ["Metropolis", "Gotham City", "Nueva York", "Star City"], correct: 1 },
            { q: "¿A quién persigue constantemente el Coyote?", opts: ["Bugs Bunny", "Pato Lucas", "Silvestre", "Correcaminos"], correct: 3 }
        ]
    },
    {
        id: "nid_26",
        name: "Nivel 26 (Superhéroes)",
        questions: [
            { q: "¿Cuál es la verdadera identidad de Spider-Man?", opts: ["Bruce Wayne", "Peter Parker", "Clark Kent", "Barry Allen"], correct: 1 },
            { q: "¿Qué material forma el escudo del Capitán América?", opts: ["Vibranium", "Adamantium", "Acero", "Kryptonita"], correct: 0 },
            { q: "¿De qué planeta es originario Superman?", opts: ["Marte", "Asgard", "Krypton", "Tierra"], correct: 2 },
            { q: "¿Cómo se llama el mayordomo de Batman?", opts: ["Robin", "Lucius", "Alfred", "Gordon"], correct: 2 },
            { q: "¿Qué equipo de héroes lidera Cíclope en Marvel?", opts: ["Vengadores", "Liga de la Justicia", "X-Men", "Cuatro Fantásticos"], correct: 2 }
        ]
    },
    {
        id: "nid_27",
        name: "Nivel 27 (Récords del Mundo)",
        questions: [
            { q: "¿Cuál es el edificio más alto del mundo actualmente?", opts: ["Empire State", "Torre Eiffel", "Burj Khalifa", "Torre de Shanghái"], correct: 2 },
            { q: "¿Quién es el humano más rápido del mundo en 100m?", opts: ["Tyson Gay", "Usain Bolt", "Carl Lewis", "Asafa Powell"], correct: 1 },
            { q: "¿A qué país pertenece el récord de mayor población natural?", opts: ["India", "EEUU", "Rusia", "Indonesia"], correct: 0 },
            { q: "¿Qué animal posee el cerebro más grande de la Tierra?", opts: ["Elefante", "Cachalote", "Delfín", "Ballena Azul"], correct: 1 },
            { q: "¿Cuál fue la serie de televisión más cara jamás producida (hasta 2022)?", opts: ["Stranger Things", "Game of Thrones", "Los Anillos de Poder", "The Crown"], correct: 2 }
        ]
    },
    {
        id: "nid_28",
        name: "Nivel 28 (Cultura Asiática)",
        questions: [
            { q: "¿Qué es el 'Kimchi' coreano?", opts: ["Vegetales fermentados", "Sopa de pescado", "Arroz frito", "Té verde"], correct: 0 },
            { q: "¿Cómo se llaman las tradicionales guerreras japonesas a la sombra de los samuráis?", opts: ["Ninjas", "Geishas", "Onna-bugeisha", "Kunoichi"], correct: 2 },
            { q: "¿En qué país se originó el budismo?", opts: ["Japón", "China", "India", "Tailandia"], correct: 2 },
            { q: "¿Qué es el Origami?", opts: ["Arte marcial", "Cocina tradicional", "Plegado de papel", "Música folklórica"], correct: 2 },
            { q: "¿Cómo se llama el tren de alta velocidad en Japón?", opts: ["Maglev", "Shinkansen", "TGV", "AVE"], correct: 1 }
        ]
    },
    {
        id: "nid_29",
        name: "Nivel 29 (Historia Siglo XX)",
        questions: [
            { q: "¿En qué año se hundió el Titanic?", opts: ["1910", "1912", "1914", "1916"], correct: 1 },
            { q: "¿Qué virus causó una pandemia mortal en 1918?", opts: ["Peste Negra", "Cólera", "Gripe Española", "Polio"], correct: 2 },
            { q: "¿Qué persona pronunció el discurso 'I have a dream'?", opts: ["Malcolm X", "Nelson Mandela", "Martin Luther King Jr.", "JFK"], correct: 2 },
            { q: "¿En qué ciudad se lanzó la primera bomba atómica en 1945?", opts: ["Nagasaki", "Tokio", "Kioto", "Hiroshima"], correct: 3 },
            { q: "¿Quién fue el líder revolucionario ruso que lideró a los bolcheviques?", opts: ["Stalin", "Trotski", "Putin", "Lenin"], correct: 3 }
        ]
    },
    {
        id: "nid_30",
        name: "Nivel 30 (Nivel Dios - Imposibles)",
        questions: [
            { q: "¿Cuál es el nombre del miedo a las palabras largas?", opts: ["Claustrofobia", "Aracnofobia", "Hipopotomonstrosesquipedaliofobia", "Aerofobia"], correct: 2 },
            { q: "¿Qué letra no aparece en el nombre de NINGÚN estado de EE.UU.?", opts: ["Z", "Q", "J", "X"], correct: 1 },
            { q: "¿Cuál de estos colores nunca aparece en una bandera nacional?", opts: ["Violeta", "Naranja", "No hay, todos aparecen", "Gris"], correct: 2 },
            { q: "¿A cuánto equivale el número de Graham o de Shannon resuelto?", opts: ["Infinito", "Demasiado grande", "0", "1"], correct: 1 },
            { q: "¿Cuántas aristas tiene un icosaedro regular?", opts: ["12", "20", "30", "60"], correct: 2 }
        ]
    }
];

let gameData = JSON.parse(localStorage.getItem('concursito_jan_data_v4_v3'));

// Migración desde base de datos antigua a v2 (grupos) o nueva instalación
if (!gameData || !Array.isArray(gameData) || !gameData[0].id) {
    gameData = defaultGroups;
    saveData();
}

function saveData() {
    localStorage.setItem('concursito_jan_data_v4_v3', JSON.stringify(gameData));
}

let activeQuestions = [];
let currentEditGroupId = gameData[0]?.id;
let playingGroupId = null;

// App navigation
const app = {
    login: () => {
        const input = document.getElementById('login-pass').value;
        const target = [147, 147, 147, 171, 147, 150, 153, 156, 159, 162];

        let valid = input.length === target.length;
        if (valid) {
            for (let i = 0; i < input.length; i++) {
                if (input.charCodeAt(i) * 3 !== target[i]) valid = false;
            }
        }

        if (valid) {
            const remember = document.getElementById('login-remember');
            if (remember && remember.checked) {
                localStorage.setItem('concursito_logged_in', 'true');
            }
            app.showView('menu');
            document.getElementById('login-pass').value = '';
            document.getElementById('login-error').style.display = 'none';
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    },
    showView: (viewId) => {
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        document.getElementById('view-' + viewId).style.display = 'block';
        if (viewId === 'stream-game') {
            document.body.classList.add('chroma-bg-active');
        } else {
            document.body.classList.remove('chroma-bg-active');
        }
    },
    showAndSetup: (viewId) => {
        app.showView(viewId);
        if (viewId === 'host-setup') host.setup();
        if (viewId === 'editor') editor.render();
    }
};

// Editor
const editor = {
    render: () => {
        const select = document.getElementById('edit-group-select');
        select.innerHTML = gameData.map(g => `<option value="${g.id}" ${g.id === currentEditGroupId ? 'selected' : ''}>${g.name}</option>`).join('');

        const group = gameData.find(g => g.id === currentEditGroupId);
        const list = document.getElementById('questions-list');

        if (!group || group.questions.length === 0) {
            list.innerHTML = '<p>No hay preguntas guardadas en este grupo.</p>';
            return;
        }

        list.innerHTML = group.questions.map((q, i) => `
            <div class="q-item">
                <div class="q-text"><b>${i + 1}.</b> ${q.q}</div>
                <button class="btn-danger small-btn" onclick="editor.delete(${i})">Borrar</button>
            </div>
        `).join('');
    },
    onSelectGroup: () => {
        currentEditGroupId = document.getElementById('edit-group-select').value;
        editor.render();
    },
    newGroup: () => {
        const name = prompt("Nombre del nuevo grupo:");
        if (name) {
            const newGroup = { id: 'g_' + Date.now(), name, questions: [] };
            gameData.push(newGroup);
            currentEditGroupId = newGroup.id;
            saveData();
            editor.render();
        }
    },
    deleteGroup: () => {
        if (gameData.length <= 1) return alert("No puedes borrar el único grupo que tienes.");
        if (confirm("¿Seguro que quieres borrar este grupo entero y todas sus preguntas?")) {
            gameData = gameData.filter(g => g.id !== currentEditGroupId);
            currentEditGroupId = gameData[0].id;
            saveData();
            editor.render();
        }
    },
    addQuestion: () => {
        const q = document.getElementById('edit-q').value;
        const opts = [
            document.getElementById('edit-opt0').value,
            document.getElementById('edit-opt1').value,
            document.getElementById('edit-opt2').value,
            document.getElementById('edit-opt3').value,
        ];
        const correct = parseInt(document.getElementById('edit-correct').value);

        if (!q || opts.some(o => o.trim() === '')) return alert("Rellena todos los campos.");

        const group = gameData.find(g => g.id === currentEditGroupId);
        if (group) {
            group.questions.push({ q, opts, correct });
            saveData();
        }
        editor.render();

        // Clear forms
        document.getElementById('edit-q').value = '';
        opts.forEach((o, i) => document.getElementById('edit-opt' + i).value = '');
        document.getElementById('edit-correct').value = '0';
    },
    delete: (index) => {
        if (confirm('¿Seguro que quieres borrar esta pregunta?')) {
            const group = gameData.find(g => g.id === currentEditGroupId);
            group.questions.splice(index, 1);
            saveData();
            editor.render();
        }
    }
};

// PeerJS config
const PREFIX = 'concursito-jan-tv-';
let peerInstance = null;
let connection = null;

// Host logic
let currentQIndex = 0;
let currentState = {
    qIndex: 0,
    selected: null,
    revealed: false,
    lifelines: [false, false, false, false],
    rouletteResult: null,
    rouletteState: null,
    eliminatedOptions: [],
    answersHistory: [],
    timerEndTime: null
};

const host = {
    setup: () => {
        if (gameData.length === 0) {
            alert("No hay grupos de preguntas.");
            return app.showView('menu');
        }

        const sel = document.getElementById('host-group-select');
        sel.innerHTML = gameData.map(g => `<option value="${g.id}">${g.name} (${g.questions.length} preg.)</option>`).join('');

        playingGroupId = sel.value;
        activeQuestions = gameData.find(g => g.id === playingGroupId).questions;

        let savedCode = localStorage.getItem('concursito_room_code');
        if (!savedCode) {
            savedCode = Math.floor(1000 + Math.random() * 9000).toString();
            localStorage.setItem('concursito_room_code', savedCode);
        }
        document.getElementById('host-room-code').innerText = savedCode;

        if (peerInstance) peerInstance.destroy();
        peerInstance = new Peer(PREFIX + savedCode);

        peerInstance.on('open', id => {
            console.log('Host creado:', id);
            document.getElementById('host-setup-status').innerText = 'Sala creada. Esperando a que OBS se conecte...';
        });

        peerInstance.on('connection', conn => {
            connection = conn;
            document.getElementById('host-setup-status').innerText = '¡OBS Conectado exitosamente!';
            document.getElementById('host-setup-status').style.backgroundColor = '#2e7d32'; // dark green
            document.getElementById('btn-start-host').disabled = false;

            // Re-sync on reload
            if (document.getElementById('view-host-game').style.display === 'block' && activeQuestions.length > 0) {
                host.sendState();
            }
        });

        peerInstance.on('error', err => {
            document.getElementById('host-setup-status').innerText = 'Error: ' + err.type;
            document.getElementById('host-setup-status').style.backgroundColor = '#b71c1c'; // red
        });
    },
    selectGroup: (id) => {
        playingGroupId = id;
        activeQuestions = gameData.find(g => g.id === playingGroupId).questions;
    },
    playRoulette: () => {
        if (currentState.lifelines[0] || currentState.rouletteState) return;
        currentState.lifelines[0] = true;
        currentState.rouletteState = 'spinning';

        const wheelValues = [0, 1, 2, 0, 1, 2, 0, 1, 2, 3];
        let targetIndex = Math.floor(Math.random() * 10);
        let result = wheelValues[targetIndex];

        const trollVal = document.getElementById('troll-roulette-val');
        if (trollVal && trollVal.value !== 'auto') {
            const desired = parseInt(trollVal.value);
            const possibleIndices = [];
            for (let i = 0; i < wheelValues.length; i++) {
                if (wheelValues[i] === desired) possibleIndices.push(i);
            }
            if (possibleIndices.length > 0) {
                targetIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
                result = desired;
            }
        }

        currentState.rouletteResult = { index: targetIndex, value: result };

        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            incorrects.sort(() => Math.random() - 0.5);
            currentState.eliminatedOptions.push(...incorrects.slice(0, result));
        }

        host.renderQ();
        host.sendState();

        setTimeout(() => {
            currentState.rouletteState = 'finished';
            host.sendState();
            host.renderQ();
        }, 4500);
    },
    playLlamada: () => {
        if (currentState.lifelines[1]) return;
        currentState.lifelines[1] = true;
        currentState.timerEndTime = Date.now() + 32000;
        host.renderQ();
        host.sendState();
    },
    play5050: () => {
        if (currentState.lifelines[2]) return;
        currentState.lifelines[2] = true;
        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            incorrects.sort(() => Math.random() - 0.5);
            currentState.eliminatedOptions.push(...incorrects.slice(0, 2));
        }
        host.renderQ();
        host.sendState();
    },
    playDescarte: () => {
        if (currentState.lifelines[3]) return;
        currentState.lifelines[3] = true;
        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            if (incorrects.length > 0) {
                incorrects.sort(() => Math.random() - 0.5);
                currentState.eliminatedOptions.push(incorrects[0]);
            }
        }
        host.renderQ();
        host.sendState();
    },
    startGame: () => {
        if (activeQuestions.length === 0) {
            alert("El grupo seleccionado no tiene preguntas.");
            return;
        }
        app.showView('host-game');
        currentQIndex = 0;
        currentState = {
            qIndex: 0,
            selected: null,
            revealed: false,
            lifelines: [false, false, false, false],
            rouletteResult: null,
            rouletteState: null,
            eliminatedOptions: [],
            answersHistory: [],
            timerEndTime: null,
            isGameOver: false,
            correctCount: 0,
            incorrectCount: 0
        };
        host.renderQ();
        host.sendState();
    },
    renderQ: () => {
        if (currentState.isGameOver) return;
        const q = activeQuestions[currentQIndex];
        if (!q) return;

        document.getElementById('host-q-counter').innerText = `Pregunta ${currentQIndex + 1} / ${activeQuestions.length}`;
        document.getElementById('host-current-q').innerHTML = `<b>${q.q}</b>`;

        const jumpSelect = document.getElementById('host-jump-q');
        if (jumpSelect) {
            if (jumpSelect.children.length !== activeQuestions.length) {
                jumpSelect.innerHTML = activeQuestions.map((_, i) => `<option value="${i}">Pregunta ${i + 1}</option>`).join('');
            }
            jumpSelect.value = currentQIndex;
        }

        [0, 1, 2, 3].forEach(i => {
            const cb = document.getElementById('elim-' + i);
            if (cb) cb.checked = currentState.eliminatedOptions.includes(i);
            
            const btn = document.getElementById('btn-h-opt' + i);
            btn.innerText = ['A', 'B', 'C', 'D'][i] + ': ' + q.opts[i] + (i === q.correct ? ' ✓ (Correcta)' : '');

            btn.className = 'opt-btn';
            
            if (i === q.correct) {
                btn.style.boxShadow = 'inset 0 0 10px rgba(76, 175, 80, 0.5)';
                btn.style.border = '2px solid #4CAF50';
                btn.style.color = '#a5d6a7';
            } else {
                btn.style.boxShadow = 'none';
                btn.style.border = '2px solid rgba(255,255,255,0.12)';
                btn.style.color = 'white';
            }

            if (currentState.eliminatedOptions && currentState.eliminatedOptions.includes(i) && currentState.rouletteState !== 'spinning') {
                btn.classList.add('used');
                btn.style.opacity = '0.3';
                btn.style.pointerEvents = 'none';
            } else {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }

            if (currentState.revealed) {
                if (i === q.correct) {
                    btn.classList.add('correct');
                } else if (i === currentState.selected && currentState.selected !== q.correct) {
                    btn.classList.add('incorrect');
                }
            } else {
                if (i === currentState.selected) {
                    btn.classList.add('selected');
                }
            }
        });

        [0, 1, 2, 3].forEach(i => {
            const btn = document.getElementById('h-life-' + i);
            if (btn) btn.className = currentState.lifelines[i] ? 'used' : '';
        });
    },
    selectOption: (index) => {
        if (currentState.revealed || currentState.isGameOver) return;

        if (currentState.selected === index) {
            currentState.selected = null;
        } else {
            currentState.selected = index;
        }

        host.renderQ();
        host.sendState();
    },
    revealCorrect: () => {
        if (currentState.revealed || currentState.isGameOver) return;
        currentState.revealed = true;
        if (activeQuestions[currentQIndex]) {
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }
        host.renderQ();
        host.sendState();
    },
    initQuestionState: () => {
        currentState.qIndex = currentQIndex;
        currentState.selected = null;
        currentState.revealed = false;
        currentState.rouletteResult = null;
        currentState.rouletteState = null;
        currentState.eliminatedOptions = [];
        currentState.timerEndTime = null;
        host.renderQ();
        host.sendState();
    },
    prevQuestion: () => {
        if (currentQIndex > 0) {
            currentQIndex--;
            host.initQuestionState();
        }
    },
    jumpToQuestion: (index) => {
        index = parseInt(index);
        if (index >= 0 && index < activeQuestions.length) {
            currentQIndex = index;
            host.initQuestionState();
        }
    },
    toggleEliminate: (optIndex) => {
        if (currentState.eliminatedOptions.includes(optIndex)) {
            currentState.eliminatedOptions = currentState.eliminatedOptions.filter(i => i !== optIndex);
        } else {
            currentState.eliminatedOptions.push(optIndex);
        }
        host.renderQ();
        host.sendState();
    },
    nextQuestion: () => {
        if (currentState.isGameOver) return;

        if (activeQuestions[currentQIndex] && !currentState.revealed) {
            // Si no reveló antes de cambiar, no puntuamos o marcamos false? 
            // Better to force reveal or assume incorrect.
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }

        if (currentQIndex < activeQuestions.length - 1) {
            currentQIndex++;
            host.initQuestionState();
        } else {
            // FIN DEL JUEGO
            let corrects = 0;
            let incorrects = 0;
            for (let i = 0; i < activeQuestions.length; i++) {
                if (currentState.answersHistory[i]) corrects++;
                else incorrects++;
            }
            currentState.isGameOver = true;
            currentState.correctCount = corrects;
            currentState.incorrectCount = incorrects;
            currentState.totalCount = activeQuestions.length;
            host.sendState();
            
            const grade = (corrects / activeQuestions.length) * 10;
            let textGrade = grade >= 9 ? "Excelente" : grade >= 7 ? "Notable" : grade >= 6 ? "Bien" : grade >= 5 ? "Suficiente" : "Suspenso";
            let color = grade >= 5 ? "#a5d6a7" : "#ff5252";
            let title = grade >= 5 ? "¡Juego Terminado!" : "¡Has Perdido!";
            document.getElementById('host-current-q').innerHTML = `<h2 style="color:${color};">${title}</h2><p>Aciertos: ${corrects} | Fallos: ${incorrects} <br> Nota: ${grade.toFixed(1)} (${textGrade})</p>`;
        }
    },
    forceCorrect: (index) => {
        if (activeQuestions[currentQIndex]) {
            activeQuestions[currentQIndex].correct = index;
            host.renderQ();
            host.sendState();
        }
    },
    reviveLifelines: () => {
        currentState.lifelines = [false, false, false, false];
        host.renderQ();
        host.sendState();
    },
    modifyTime: (secs) => {
        if (currentState.timerEndTime && currentState.timerEndTime > Date.now()) {
            currentState.timerEndTime += secs * 1000;
        } else if (secs > 0) {
            currentState.timerEndTime = Date.now() + (secs * 1000);
        }
        host.sendState();
    },
    triggerConfetti: () => {
        currentState.confetti = (currentState.confetti || 0) + 1;
        host.sendState();
    },
    triggerBlackout: () => {
        currentState.blackout = !currentState.blackout;
        host.sendState();
    },
    sendState: () => {
        if (connection) {
            connection.send({
                state: currentState,
                questionData: activeQuestions[currentState.qIndex]
            });
        }
    }
};

// Stream (OBS) logic
const stream = {
    connectToHost: () => {
        const code = document.getElementById('stream-room-input').value;
        if (!code || code.length < 4) return alert("Introduce un código válido (4 números).");
        localStorage.setItem('concursito_last_room', code);

        document.getElementById('stream-error').innerText = 'Conectando...';
        document.getElementById('stream-error').style.color = 'white';

        if (peerInstance) peerInstance.destroy();
        peerInstance = new Peer();

        peerInstance.on('open', () => {
            connection = peerInstance.connect(PREFIX + code);

            connection.on('open', () => {
                app.showView('stream-game');

                connection.on('data', data => {
                    stream.renderUpdate(data);
                });
            });

            connection.on('error', err => {
                document.getElementById('stream-error').innerText = 'Error al conectar con el Host.';
                document.getElementById('stream-error').style.color = '#ff5252';
            });
        });

        peerInstance.on('error', err => {
            document.getElementById('stream-error').innerText = 'No se encontró la sala ' + code;
            document.getElementById('stream-error').style.color = '#ff5252';
        });
    },
    renderUpdate: (data) => {
        const { state, questionData } = data;
        
        if (window.streamState && window.streamState.confetti !== state.confetti) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 9999 });
            }
        } else if (!window.streamState && state.confetti) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 9999 });
            }
        }
        
        window.streamState = state;
        
        if (state.isGameOver) {
            document.getElementById('s-gameover-overlay').style.display = 'flex';
            document.getElementById('s-go-correct').innerText = state.correctCount;
            document.getElementById('s-go-incorrect').innerText = state.incorrectCount;
            
            const total = state.totalCount || (state.correctCount + state.incorrectCount);
            const grade = total > 0 ? (state.correctCount / total) * 10 : 0;
            let textGrade = "";
            let color = "";
            let title = "";
            if (grade >= 9) { textGrade = "Excelente"; color = "#a5d6a7"; title = "¡Has Ganado!"; }
            else if (grade >= 7) { textGrade = "Notable"; color = "#a5d6a7"; title = "¡Has Ganado!"; }
            else if (grade >= 6) { textGrade = "Bien"; color = "#a5d6a7"; title = "¡Has Ganado!"; }
            else if (grade >= 5) { textGrade = "Suficiente"; color = "#ffeb3b"; title = "¡Has Ganado!"; }
            else { textGrade = "Suspenso"; color = "#ff5252"; title = "¡Has Perdido!"; }
            
            const titleEl = document.getElementById('s-go-title');
            if (titleEl) {
                titleEl.innerText = title;
                titleEl.style.color = color;
                titleEl.style.textShadow = `0 0 30px ${color}80`;
            }
            
            const gradeEl = document.getElementById('s-go-grade');
            if (gradeEl) {
                gradeEl.innerText = `Nota: ${grade.toFixed(1)} (${textGrade})`;
            }
            return;
        } else {
            document.getElementById('s-gameover-overlay').style.display = 'none';
        }

        const blackout = document.getElementById('s-blackout');
        if (blackout) {
            if (state.blackout) blackout.style.display = 'flex';
            else blackout.style.display = 'none';
        }

        const totalQs = 15; // Usually 15, we assume the host sends state but we just stick to 15 bubbles visually
        const progPercent = (state.qIndex / (totalQs - 1)) * 100;
        document.getElementById('s-progress').style.setProperty('--prog-line', `${progPercent}%`);

        [0, 1, 2, 3].forEach(i => {
            const el = document.getElementById('s-life-' + i);
            if (state.lifelines[i]) el.classList.add('used');
            else el.classList.remove('used');
        });

        const rOverlay = document.getElementById('s-roulette-overlay');
        const rWheel = document.getElementById('r-wheel');
        if (state.rouletteState === 'spinning') {
            rOverlay.style.display = 'flex';
            if (state.rouletteResult) {
                // Ensure transition isn't skipped on display:none to display:flex
                rWheel.style.transition = 'none';
                rWheel.style.transform = 'rotate(0deg)';
                void rWheel.offsetWidth; // Force CSS flush

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        rWheel.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)';
                        const targetRot = - (360 * 5) - (state.rouletteResult.index * 36 + 18);
                        rWheel.style.transform = `rotate(${targetRot}deg)`;
                    });
                });
            }
        } else if (state.rouletteState === 'finished') {
            rOverlay.style.display = 'none';
        } else {
            rOverlay.style.display = 'none';
            rWheel.style.transition = 'none';
            rWheel.style.transform = `rotate(0deg)`;
            void rWheel.offsetWidth;
            rWheel.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)';
        }

        const progEl = document.getElementById('s-progress');
        let progHtml = '';
        for (let i = 0; i < totalQs; i++) {
            let cls = 'progress-step';
            if (i < state.qIndex) {
                cls += state.answersHistory[i] ? ' correct' : ' incorrect';
            }
            else if (i === state.qIndex) {
                if (state.revealed && state.answersHistory && typeof state.answersHistory[i] !== 'undefined') {
                    cls += state.answersHistory[i] ? ' correct' : ' incorrect';
                } else {
                    cls += ' current';
                }
            }
            else cls += ' empty';

            progHtml += `<div class="${cls}">${i + 1}</div>`;
        }
        progEl.innerHTML = progHtml;

        document.getElementById('s-question').innerText = questionData.q;

        [0, 1, 2, 3].forEach(i => {
            const optEl = document.getElementById('s-opt' + i);
            optEl.querySelector('.text').innerText = questionData.opts[i];

            optEl.className = 'option';

            if (state.eliminatedOptions && state.eliminatedOptions.includes(i) && state.rouletteState !== 'spinning') {
                optEl.classList.add('eliminated');
            }

            if (state.revealed) {
                if (i === questionData.correct) {
                    optEl.classList.add('correct');
                } else if (i === state.selected && state.selected !== questionData.correct) {
                    optEl.classList.add('incorrect');
                }
            } else {
                if (i === state.selected) {
                    optEl.classList.add('selected');
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    if (room) {
        document.getElementById('stream-room-input').value = room;
        stream.connectToHost();
    } else {
        const lastRoom = localStorage.getItem('concursito_last_room');
        if (lastRoom) document.getElementById('stream-room-input').value = lastRoom;
        
        if (localStorage.getItem('concursito_logged_in') === 'true') {
            app.showView('menu');
        } else {
            app.showView('login');
        }
    }
});

setInterval(() => {
    if (!document.getElementById('view-stream-game').style.display) return;
    const timerOverlay = document.getElementById('s-timer-overlay');
    if (!timerOverlay || !window.streamState) return;

    const endTime = window.streamState.timerEndTime;
    const now = Date.now();

    if (endTime && endTime > now) {
        timerOverlay.style.display = 'flex';
        let left = Math.ceil((endTime - now) / 1000);
        if (left > 30) left = 30;

        const txtEl = document.getElementById('s-timer-text');
        if (txtEl.innerText != left) txtEl.innerText = left;

        if (left <= 5) txtEl.style.color = '#ff5252';
        else txtEl.style.color = 'white';

    } else {
        timerOverlay.style.display = 'none';
    }

    // (Confetti is now handled by canvas-confetti directly on trigger)
}, 200);
