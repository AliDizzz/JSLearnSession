//------------------------------------------------- MEMO ----------------------------------------------


// == ADDITION et SOUSTRACTION ==

//Pour ajouter deux variables, utilisez le signe  +  :

let totalCDs = 67;
let totalVinyls = 34;

let totalMusic = totalCDs + totalVinyls;


//À l'inverse, la soustraction utilise le signe  -  :
let cookiesInJar = 10;
let cookiesRemoved = 2;

let cookiesLeftInJar = cookiesInJar - cookiesRemoved;


//Pour ajouter ou soustraire un nombre d'une variable, vous pouvez utiliser les opérateurs  +=  et  -=  :
let cookiesInJar = 10;
/* manger deux cookies */
cookiesInJar -= 2;  //il reste 8 cookies
/* cuisson d'un nouveau lot de cookies */ 
cookiesInJar += 12; // il y a maintenant 20 cookies dans la boîte


//Enfin, vous pouvez utiliser  ++  ou  --  pour ajouter ou soustraire 1 (incrément ou décrément) :
let numberOfLikes = 10;

numberOfLikes++;  // cela fait 11
numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?


// == MULTIPLICATION et DIVISION ==

//Les opérations de multiplication et de division utilisent les opérateurs  *  et  /  :
let costPerProduct = 20;
let numberOfProducts = 5;
 
let totalCost = costPerProduct * numberOfProducts;
 
let averageCostPerProduct = totalCost / numberOfProducts;


//Comme pour l'addition et la soustraction, il existe aussi les opérateurs  *=  et  /= pour multiplier ou diviser un nombre :
let numberOfCats = 2;

numberOfCats *= 6;  // numberOfCats vaut maintenant 2*6 = 12; 
numberOfCats /= 3;  // numberOfCats vaut maintenant 12/3 = 4;

// ============= Variable non changeable ========================
const hoursPerDay = 24 ;

const minutesPerHour = 60 ;

const secondsPerMinute = 60 ;

// == TYPE DE VARIABLE ==

// number (nombre) ;

// string (chaîne de caractères) ;

// boolean (valeur logique).

// == CREER UN OBJET ==

let episode = {
    title: 'Dark Beginnings',
    duration: 45,
    hasBeenWatched: false
    };

    let episodeTitle = episode.title;
    let episodeDuration = episode.duration;
    let episodeHasBeenWatched = episode.hasBeenWatched;

    // === CLASS CONSTRUCTOR ===


    // Il y a un ensemble d'instructions à suivre à l'intérieur du  constructor  pour créer une instance de la classe  Book.
    // Pour attribuer le titre, l'auteur et le nombre de pages reçus à cette instance, utilisez le mot clé  this  et la notation dot.
    class Book {
        constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
        }
    }
    //Ici, le mot clé  this  fait référence à la nouvelle instance. 
    //Donc, il utilise la notation dot pour attribuer les valeurs reçues aux clés correspondantes.

    // =====================================EXEMPLE
class Episode {
    constructor(title,duration,hasBeenWatched) {

    this.title = title ;
    this.duration = duration ;
    this.hasBeenWatched = hasBeenWatched ;
    }
}
    let firstEpisode = new Episode('caca', 45, true);
    let secondEpisode = new Episode('pipi', 45, true);
    let thirdEpisode = new Episode('popo', 45, false);

  // =====================================EXEMPLE