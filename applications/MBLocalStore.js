
// Modèles avec prix sans le coût du terrain et la taxe associé à celui-ci
const modeles = {
  '--Choisissez votre modèles--': [0,""],
  'aldebaran': [181671,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-aldebaran_thumb.jpg"],
  'altair': [159021,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-altair_thumb.jpg"],
  'andromed': [168705,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-andromede_thumb.jpg"],
  'aries': [164856,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-ariesf5_thumb.jpg"],
  'capella': [128257,"hhttps://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-capella_thumb.jpg"],
  'centaure': [158168,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-centaure_thumb.jpg"],
  'deimos': [162213,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-deimos_thumb.jpg"],
  'jupiter': [190423,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-jupiter_thumb.jpg"],
  'lune': [128210,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-lune_thumb.jpg"],
  //'mars': [128210,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-mars_thumb.jpg"],
  //'mercure': [113767,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-neptune1.jpg"],
  'neptune': [113767,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-neptune1_thumb.jpg"],
  'orion': [251743,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-orion_thumb.jpg"],
  'pegase': [136355,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-pegase_thumb.jpg"],
  'pluton': [123497,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-pluton_thumb.jpg"],
  'saturne': [143372,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-saturne_thumb.jpg"],
  'uranus': [120808,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-uranus_thumb.jpg"],
  'venus': [141996,"https://pavillons-galaxie.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/3124/2020/05/maison-venus_thumb.jpg"]
}; 

  var stores = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-0.2345844, 49.2479604],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain AMFREVILLE",
              "phoneFormatted": "(+33) 65 45 85 45",
              "phone": "065458545",
              "address": "14860 AMFREVILLE",
              "city": "Amfreville",
              "country": "France",
              "postalCode": "14860",
              "state": "Calvados.",
              "price": "150 000 €",
              "size": "982",
              "description": "Terrain de 982 m², 15 km de CAEN, 10 km de la mer",
              "link" :"https://www.annuaire-mairie.fr/mairie-amfreville-14.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//14370 Argences 49.1270417, -0.1640626 Terrain de 334m2, 18 km de CAEN
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.1640626,49.1270417
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain Argences",
              "phoneFormatted": "(+33) 233514155",
              "phone": "02 33 51 41 55",
              "address": "14370 Argences",
              "city": "Argences",
              "country": "France",
              "postalCode": "14610",
              "state": "Calvados",
              "price": "54 000 €",
              "size": "334",
              "description": "Terrain de 334 m², 18 km de CAEN",
              "link":"https://www.annuaire-mairie.fr/ville-argences.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {
            //Terrain ASNELLES  49 800,00 € 	14960 ASNELLES	49.3383333, -0.5827778	334	Terrain de 334m2, 18 km de CAEN		https://www.annuaire-mairie.fr/mairie-asnelles.html

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5440986,
                49.1707767
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain ASNELLES",
              "phoneFormatted": "(+33)231255264",
              "phone": "0231255264",
              "address": "14960 ASNELLES",
              "city": "ASNELLES",
              "country": "France",
              "crossStreet": "Calvados",
              "postalCode": "14960 ",
              "state": "Calvados.",
              "price": "49 800€",
              "size":"334",
              "description": "Terrain de 334 m², 18 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-asnelles.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {
            //  Terrain BANNEVILLE LA CAMPAGNE	 80 000,00 € 14940 BANNEVILLE LA CAMPAGNE	49.168119, -0.2190716	581	Terrain de 581 m2, 15 km de CAEN		https://www.annuaire-mairie.fr/mairie-banneville-la-campagne.html

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2190716,
                49.168119
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain BANNEVILLE LA CAMPAGNE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14940 BANNEVILLE LA CAMPAGNE",
              "city": "BANNEVILLE LA CAMPAGNE",
              "country": "France",
              "postalCode": "14940",
              "state": "Calavados.",   
              "price": "80 000 €",
              "size": "581",
               "description": "Terrain de 581 m², 15 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-banneville-la-campagne.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain BELLENGREVILLE  54 500,00 € -	14370  BELLENGREVILLE	49.1255556, -0.21	490	Terrain de 490 m2, 14 km de CAEN		www.annuaire-mairie.fr/mairie-bellengreville.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.21,
                49.1255556
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain BELLENGREVILLE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14370  BELLENGREVILLE",
              "city": "BELLENGREVILLE",
              "country": "France",
              "postalCode": "14370",
              "state": "Calavados.",   
              "price": "54 500 €",
              "size": "490",
               "description": "Terrain de 490 m², 14 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-bellengreville.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain BENOUVILLE	- 77 500,00 € - 14970  BENOUVILLE	49.2466066, -0.2781925	356	Terrain de 356 m2, 9 km de CAEN, 5 km de la mer		www.annuaire-mairie.fr/mairie-benouville.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2781925,
                49.2466066
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain BENOUVILLE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14970  BENOUVILLE",
              "city": "BENOUVILLE",
              "country": "France",
              "postalCode": "14970",
              "state": "Calavados.",   
              "price": "77 500 €",
              "size": "490",
               "description": "Terrain de 356 m², 9 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-benouville.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain BRETTEVILLE SUR LAIZE -  58 500,00 € 	14680  BRETTEVILLE SUR LAIZE	49.0447015, -0.3270014	419	Terrain de 419 m2, 21 km de CAEN, 22 km de FALAISE		www.annuaire-mairie.fr/mairie-bretteville-sur-laize.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.3270014,
                49.0447015
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain BRETTEVILLE SUR LAIZE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14680  BRETTEVILLE SUR LAIZE",
              "city": "BRETTEVILLE SUR LAIZE",
              "country": "France",
              "postalCode": "14680",
              "state": "Calavados.",   
              "price": "58 500 €",
              "size": "419",
              "description": "Terrain de 419 m², 21 km de CAEN, 22 km de FALAISE",
              "link": "https://www.annuaire-mairie.fr/mairie-bretteville-sur-laize.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain CHEUX -  73 000,00 € -	14210  CHEUX	49.1669444, -0.5247222	354	Terrain de 354 m2, 21 km de CAEN		www.annuaire-mairie.fr/mairie-cheux.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.359425054188,
                38.958058116661
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain CHEUX",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14210  CHEUX",
              "city": "CHEUX",
              "country": "France",
              "postalCode": "14210",
              "state": "Calavados.",   
              "price": "73 000 €",
              "size": "354",
              "description": "Terrain de 354 m², 21 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-cheux.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain COULOMBS	-  69 000,00 €  - 14480  COULOMBS	49.2487973, -0.5669687	449	Terrain de 449 m2, 22 km de CAEN, 13 km de BAYEUX		www.annuaire-mairie.fr/mairie-coulombs.html
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5669687,
                49.2487973
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain COULOMBS",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14480  COULOMBS",
              "city": "COULOMBS",
              "country": "France",
              "postalCode": "14480",
              "state": "Calavados.",   
              "price": "69 000 €",
              "size": "449",
               "description": "Terrain de 449 m², 22 km de CAEN, 13 km de BAYEUX",
              "link": "https://www.annuaire-mairie.fr/mairie-coulombs.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain ESQUAY NOTRE DAME - 67 804 € -	14210  ESQUAY NOTRE DAME	49.1129522, -0.4724922	555	Terrain de 555 m2, 20 km de CAEN		www.annuaire-mairie.fr/mairie-esquay-notre-dame.html/
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.4724922,
                49.1129522
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain ESQUAY NOTRE DAME",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14210  ESQUAY NOTRE DAME",
              "city": "ESQUAY NOTRE DAME",
              "country": "France",
              "postalCode": "14210",
              "state": "Calavados.",   
              "price": "67 804 €",
              "size": "555",
               "description": "Terrain de 555 m², 20 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-esquay-notre-dame.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain EVRECY - 75000 € - 	14210  EVRECY	49.0999195, -0.5011439	473	Terrain de 473 m2, 15 km de CAEN		https://www.annuaire-mairie.fr/mairie-evrecy.html

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5011439,
                49.0999195
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain EVRECY",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14210  EVRECY",
              "city": "BENOUVILLE",
              "country": "France",
              "postalCode": "14210",
              "state": "Calavados.",   
              "price": "75 000 €",
              "size": "473",
              "description": "Terrain de 473 m², 15 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-evrecy.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain FALAISE - 40 400 € -	14700  FALAISE	48.8964741, -0.1999129	430	Terrain de 430 m2, 40 km de CAEN		http://www.annuaire-mairie.fr/mairie-falaise.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.1999129,
                48.8964741
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain FALAISE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14970  FALAISE",
              "city": "FALAISE",
              "country": "France",
              "postalCode": "14700",
              "state": "Calavados.",   
              "price": "77 500 €",
              "size": "430",
              "description": "Terrain de 430 m², 40 km de CAEN",
              "link": "http://www.annuaire-mairie.fr/mairie-falaise.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain FONTENAY LE MARMION - 70400 € -	14320  FONTENAY LE MARMION	49.0944705, -0.3526225	535	Terrain de 535 m2, 18 km de CAEN		www.annuaire-mairie.fr/mairie-fontenay-le-marmion.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.3526225,
                49.0944705
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain FONTENAY LE MARMION",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14320 FONTENAY LE MARMION",
              "city": "FONTENAY LE MARMION",
              "country": "France",
              "postalCode": "14700",
              "state": "Calavados.",   
              "price": "77 500 €",
              "size": "535",
              "description": "Terrain de 535 m², 18 km de CAEN",
              "link": "http://www.annuaire-mairie.fr/mairie-fontenay-le-marmion.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain GRAINVILLE SUR ODON	- 69 000 € - 14210  GRAINVILLE SUR ODON	49.1400788, -0.5296272	551	Terrain de 551 m2, 19 km de CAEN		https://www.annuaire-mairie.fr/mairie-grainville-sur-odon.html

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5296272,
                49.1400788
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain GRAINVILLE SUR ODON",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14210 GRAINVILLE SUR ODON",
              "city": "GRAINVILLE SUR ODON",
              "country": "France",
              "postalCode": "14210",
              "state": "Calavados.",   
              "price": "69 000 €",
              "size": "551",
              "description": "Terrain de 551 m², 19 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-grainville-sur-odon.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain MALTOT	-  105 000 € - 14930  MALTOT	49.13, -0.4216667	584	Terrain de 584m2, 15 km de CAEN		https://www.annuaire-mairie.fr/mairie-maltot.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.4216667,
                49.13
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain MALTOT",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14930 MALTOT",
              "city": "MALTOT",
              "country": "France",
              "postalCode": "14930",
              "state": "Calavados.",   
              "price": "105 000 €",
              "size": "584",
              "description": "Terrain de 584 m², 15 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-maltot.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain MOULT - 56 000 € -	14370  MOULT	49.1400788, -0.5296272	481	Terrain de 481 m2, 17 km de CAEN		https://www.annuaire-mairie.fr/mairie-moult.html/
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5296272,
                49.1400788
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain MOULT",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14370  MOULT",
              "city": "MOULT",
              "country": "France",
              "postalCode": "14370",
              "state": "Calavados.",   
              "price": "56 000 €",
              "size": "481",
              "description": "Terrain de 481 m², 17 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-moult.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain PONT L'EVEQUE - 52 000 € -	14130 PONT L'EVEQUE	49.1400788, -0.5296272	413	Terrain de 413 m2, 45 km de CAEN, 12 km de DEAUVILLE		https://www.annuaire-mairie.fr/mairie-pont-l'eveque.html/

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5296272,
                49.1400788
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain PONT L'EVEQUE",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14130 PONT L'EVEQUE",
              "city": "PONT L'EVEQUE",
              "country": "France",
              "postalCode": "14130",
              "state": "Calavados.",   
              "price": "52 000 €",
              "size": "413",
              "description": "Terrain de 413 m², 45 km de CAEN, 12 km de DEAUVILLE",
              "link": "https://www.annuaire-mairie.fr/mairie-pont-l'eveque.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain SAINT MANVIEU NORRY	14740  SAINT MANVIEU NORRY	49.1795223, -0.5007789	360	Terrain de 360 m2, 17 km de CAEN		https://www.annuaire-mairie.fr/mairie-saint-manvieu-norrey.html/
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.5007789,
                49.1795223
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain SAINT MANVIEU NORRY",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14740 SAINT MANVIEU NORRY",
              "city": "SAINT MANVIEU NORRY",
              "country": "France",
              "postalCode": "14740",
              "state": "Calavados.",   
              "price": "63 000 €",
              "size": "360",
              "description": "Terrain de 360 m², 17 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-saint-manvieu-norrey.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain SAINT SYLVAIN -  60 900,00 € -	14190  SAINT SYLVAIN	49.0563595, -0.2169256	468	Terrain de 468 m2, 27 km de CAEN, 20 km de FALAISE		https://www.annuaire-mairie.fr/mairie-saint-sylvain.html

            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2169256,
                49.0563595
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain SAINT SYLVAIN",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14190 SAINT SYLVAIN",
              "city": "SAINT SYLVAIN",
              "country": "France",
              "postalCode": "14370",
              "state": "Calavados.",   
              "price": "60 900 €",
              "size": "468",
              "description": "Terrain de 468 m², 27 km de CAEN, 20 km de FALAISE",
              "link": "https://www.annuaire-mairie.fr/mairie-moult.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }
          },
          {//Terrain SECQUEVILLE EN BESSIN - 117 000 € -	14740  SECQUEVILLE EN BESSIN	49.2340027, -0.5189443	780	Terrain de 780 m2, 15 km de CAEN, 18 km de BAYEUX		https://www.annuaire-mairie.fr/mairie-secqueville-en-bessin.html
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2169256,
                49.0563595
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain SECQUEVILLE EN BESSIN",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14740 SECQUEVILLE EN BESSIN",
              "city": "SAINT SECQUEVILLE EN BESSIN",
              "country": "France",
              "postalCode": "14740",
              "state": "Calavados.",   
              "price": "117 000 €",
              "size": "780",
              "description": "Terrain de 780 m², 15 km de CAEN, 18 km de BAYEUX",
              "link": "https://www.annuaire-mairie.fr/mairie-secqueville-en-bessin.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }    
          },
          {//Terrain SUBLES -  63 000,00 € -	14400  SUBLES	49.2434942, -0.7451689	468	Terrain de 598 m2, 34 km de CAEN, 6 km de BAYEUX		https://www.annuaire-mairie.fr/mairie-subles.html
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2169256,
                49.0563595
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain SUBLES",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14400 SECQUEVILLE EN BESSIN",
              "city": "SAINT SECQUEVILLE EN BESSIN",
              "country": "France",
              "postalCode": "14400",
              "state": "Calavados.",   
              "price": "63 000 €",
              "size": "598",
              "description": "Terrain de 598 m², 34 km de CAEN, 6 km de BAYEUX",
              "link": "https://www.annuaire-mairie.fr/mairie-subles.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }     
          },
          {//Terrain TROARN -  71 700,00 € -	14670 TROARN	49.1819395, -0.1820625	417	Terrain de 417 m2, 10 km de CAEN		https://www.annuaire-mairie.fr/mairie-troarn.html
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -0.2169256,
                49.0563595
              ],
              "zoom": 13.4
            },
            "properties": {
              "title": "Terrain TROARN",
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "14670 TROARN",
              "city": "TROARN",
              "country": "France",
              "postalCode": "14670",
              "state": "Calavados.",   
              "price": "71 700 €",
              "size": "417",
              "description": "Terrain de 417 m², 10 km de CAEN",
              "link": "https://www.annuaire-mairie.fr/mairie-subles.html",
              "image": "https://pavillons-galaxie.fr/assets/images/modele-maisons/maison-neptune1.jpg"
            }            
          }
        ]
      };
      
      /**
       * Attribuez un identifiant unique à chaque store. 
       * Vous utiliserez cet identifiant plus tard pour associer 
       * chaque point de la carte à une liste dans la barre latérale.
      */
      stores.features.forEach(function(store, i){
        store.properties.id = i;
      });

      /**
       * Attendez que la carte se charge pour lui apporter des modifications.
      */
      map.on('load', function (e) {
        /** 
         * C'est là que votre '.addLayer ()' était, 
         * au lieu d'ajouter uniquement la source sans styliser un calque
        */
        map.addSource("places", {
          "type": "geojson",
          "data": stores
        });

        /**
         * Ajoutez toutes les éléments à la page:
         * - Les listes d'emplacements situé dans la sidebar (à gauche de l'écran)
         * - Les marqueurs sur la carte
        */
        buildLocationList(stores);
        addMarkers();
      });

      /**
       * Ajoutez un marqueur à la carte pour chaque fiche de store.
      **/
      function addMarkers() {
        /* Pour chaque entité de l'objet GeoJSON ci-dessus: */
        stores.features.forEach(function(marker) {
          /* Créez un élément div pour le marqueur. */
          var el = document.createElement('div');
          /* Attribuez un identifiant unique au marqueur. */
          el.id = "marker-" + marker.properties.id;
          /* Attribuez la classe `marker` à chaque marqueur pour son futur style. */
          el.className = 'marker';
          
          /**
           * Créer un marqueur avec la div défini au dessus afin de l'ajouter à la carte.
          **/
          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          
          /**
           * On écoute l'événement click de l'élément afin de gérer ces trois choses:
           * 1. Se déplacer sur le bon point
           * 2. Ferme tous les autres popups et affiche le popup lié au magasin cliqué
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
          **/
          el.addEventListener('click', function(e){
            /* Déplacement vers le bon point géographique */
            flyToStore(marker);
            /* Fermeture de toutes les popup ouvertes 
            * et affichage de celle liée à l'élément cliqué
            */
            createPopUp(marker);
            /* Mise en évidence de la liste de la slidebar */
            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + marker.properties.id);
            listing.classList.add('active');
          });
        });
      }

      /**
       * Ajout du listing via la boucle sur les éléments du store de la sidebar .
      **/
      function buildLocationList(data) {
        data.features.forEach(function(store, i){
          /**
           * Accès raccourcie à la propriété du store afin de la réutiliser plus tard
          **/
          var prop = store.properties;

          /* Rattachement du listing dans une variable pour la lier à la sidebar. */
          var listings = document.getElementById('listings');
          var listing = listings.appendChild(document.createElement('div'));
          /* Assignation d'un id unique au listing*/
          listing.id = "listing-" + prop.id;
          /* Assigne la classe 'item' dans le listing afin de gérer le style css*/
          listing.className = 'item';

          /* Ajout des liens au listing créé précédement */
          var link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = "link-" + prop.id;
          link.innerHTML = prop.title;

          /* Ajout des details du kisting lié aux store */
          var details = listing.appendChild(document.createElement('div'));
          details.innerHTML = prop.address;
          if (prop.size) {
            details.innerHTML += ' · ' + prop.size +" m²";
          }


          /**
          * Ajout d'un écouteur au click des liens :
           * 1. mise à jour du currentFeature en fonction du "store" associé cliqué
           * 2. Déplacement vers le bon point (via les coordonées géographiques)
           * 3. Fermeture de la popup ouverte et ouverture de celle rattachée à l'élément cliqué
           * 4. Mise en évidence de la liste de la slidebar (et suppression de la mise en évidence préxcédente) 
          **/
          link.addEventListener('click', function(e){
            for (var i=0; i < data.features.length; i++) {
              if (this.id === "link-" + data.features[i].properties.id) {
                var clickedListing = data.features[i];
                flyToStore(clickedListing);
                createPopUp(clickedListing);
              }
            }
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        });
      }
      /**
       * Utilisation de flyTo (bibliothèque Map box js) pour centrer la caméra sur le bon
       * point avec un effet "smooth"  
      **/
      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom:  currentFeature.geometry.zoom
        });
      }
      /**
       * Creation de la popup  Maxbox GL JS `.
      **/
//fonction d'ajout d'espace tous les 3 chiffres
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
var urlImages=[];
//fonction permettant de dynamiser la création des option du select avec les données de l'objets modeles
var createModels = function( mods){
  var str=``;//création template string
  // On préparre la boucle avec les datas pour générer les option du select dans le DOM
  for (const property in mods) {
    var modele = property; // la property créée comporte le nom de l'objet(ici le modèle), mods est rattaché à l'objet modele
    urlImages=mods[property][1];// mods[property] renvoi donc la valeur lié au nom de l'élément dans l'objet, le [1] à l'url de l'image
    console.log('urlImages>>>>>>>>>',urlImages);
    var prices=mods[property][0];// mods[property] renvoi donc la valeur lié au nom de l'élément dans l'objet, le [0] aux prix
    str += `<option data-img="${urlImages}" data-price="${prices}" value="${modele}">${modele.toUpperCase()}</option>`;
  }
  return str;//on retourne la chaine créée à chaque itération de la boucle dans le DOM
}
function createPopUp(currentFeature) {   
  
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var fraisTerrain = 10;
  var imgBig = (''+currentFeature.properties.image).replace('_thumb','');
  var imgThumb = currentFeature.properties.image;
  console.log(imgBig,imgThumb);
  var popup = new mapboxgl.Popup({closeOnClick: false})
  .setLngLat(currentFeature.geometry.coordinates)
  .setHTML(`
            <h4><a href="${currentFeature.properties.link}">${currentFeature.properties.title}</a></h4>
            <div class="poster"><a data-fancybox="images" class="fancy" href="${imgBig}"><img src="${imgThumb}" /></a></div>
            <div class="description">${currentFeature.properties.description}</div>
            <div class="listeModel">
              <select name="modeleList" id="modeleSelect">${createModels(modeles)}</select>
            </div>
            <div class="price">${currentFeature.properties.price}</div>
  `).addTo(map);

  let dropdown = document.querySelector('#modeleSelect');
  if (dropdown) dropdown.addEventListener('change', function(event) {
    var uid = parseInt(this.options[this.selectedIndex].getAttribute('data-price'),10);
    var images = this.options[this.selectedIndex].getAttribute('data-img');
    var imagesBig = (''+images).replace('_thumb','');
    var jsonPrice =  parseInt((''+currentFeature.properties.price).replace(/\s+/g, '').split('€')[0],10);
    var frais = jsonPrice * fraisTerrain /100;//10% du prix du terrain
    var price =uid+jsonPrice+frais;//on calcule le prix final : modèle + terrain + frais
    //on ajoute le prix avec la gestion des espaces  tous les  3 chiffres et ",00 €"
    document.querySelector('.price').innerHTML=(numberWithSpaces(price)+',00 €');
    console.log('urlImages >>  ',urlImages,'      this.options[this.selectedIndex] >> ',this.options[this.selectedIndex], 'this.selectedIndex >> ',this.selectedIndex); 
    document.querySelector('.poster a').setAttribute('href',imagesBig);
    document.querySelector('.poster img').setAttribute('src',images);
  });
}
$("a.fancy").fancybox();
