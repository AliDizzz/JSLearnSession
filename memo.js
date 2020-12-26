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

// == TYPE DE VARIABLE (primitifs) ==

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

    // ===================================== EXEMPLE
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

    let episodes = [firstEpisode, secondEpisode, thirdEpisode]; // Array

  // ===================================== EXEMPLE

    //Accédez aux données d'un objet
    let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};

let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250


//MANIPULER DES CLASS

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250); 
// Cette ligne crée l'objet suivant : { title: "L'Histoire de Tao", author: "Will Alexander", pages: 250 }

//============================================ARRAY===========================================================
//=== Propriété length d'un ARRAY ===
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];

let howManyGuests = guests.length; // 3 ellements

//=== L'ajout et la suppression d'éléments ===

//Pour ajouter un élément à la fin d'un tableau, utilisez sa méthode push :
guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests

//Pour ajouter votre élément au début du tableau plutôt qu'à la fin, utilisez la méthode  unshift  :
guests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests

//Pour supprimer le dernier élément d'un tableau, appelez sa méthode  pop, sans passer aucun argument :
guests.pop(); // supprimer le dernier élément du tableau


//============================= PROGRAMME AVEC LA FONCTION MAIN ===

// ------   Utilisez des valeurs  boolean   ------
// En JavaScript, si on utilise des  boolean (bouléens, en français) simples pour les instructions
//  if / else, la syntaxe se présente comme suit :

if (myBoolean) {
    // réaction à la valeur vraie de myBoolean
} else {
    // réaction à la valeur faux de myBoolean
}

//Donc, pour vérifier si un utilisateur est connecté, vous pouvez procéder comme suit :

let userLoggedIn = true;

if (userLoggedIn) {
    console.log("Utilisateur connecté!");
} else {
    console.log("Alerte, intrus!");
}

//-----------  Utilisez des expressions ---------------

//Les expressions de comparaison vous permettent de comparer deux valeurs par les opérateurs suivants :

// <    inférieur à ;

// <=   inférieur ou égal à ;

// ==   égal à ;

// >=    supérieur ou égal à ;

// >    supérieur à ;

// !=    différent de.


const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}

//Vous pouvez aussi chaîner les instructions  if /else  pour réagir à des conditions potentielles multiples :

if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}
//Le chaînage d'instructions permet de prévoir différents résultats en fonction des différentes situations.

//---------------------  Comprenez les conditions multiples ---------------------

//l'égalité simple vérifie la valeur, mais pas le type. Donc ceci renvoie la valeur  true  : 
5 == "5"

//par contre, l'égalité stricte vérifie à la fois la valeur et le type. Donc :
5 === "5"
//renvoie  false, car on compare un  number  à un  string. 
//De même, il y a deux opérateurs d'inégalité  !=  et  !==, avec la même distinction.

//  &&  — ET logique — pour vérifier si deux conditions sont toutes les deux vraies ;

//  ||   — OU logique — pour vérifier si au moins une condition est vraie ;

//  !   — NON logique — pour vérifier si une condition n'est pas vraie. 

let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true

// EXEMPLE 
if (minutesWatched === 0) {
        this.watchedText = 'Not yet watched';
        this.continueWatching = false;
    } else if (minutesWatched > 0 && minutesWatched < duration) {
        this.watchedText = 'watching';
        this.continueWatching = true;
    } else if (minutesWatched === duration) {
        this.watchedText = 'Already watched';
        this.continueWatching = false;
    }


    // ------ SCOPE DE BLOC  ------

    let userLoggedIn = true;

if (userLoggedIn) {
    let welcomeMessage = 'Welcome back!';
} else {
    let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage); // renvoie une erreur
//
//=>
//
let userLoggedIn = true;
let welcomeMessage = ''; // déclarer la variable ici

if (userLoggedIn) {
    welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
    welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'


//----------  INSTRUCTION SWITCH  -----------

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};
//Vous pouvez ici utiliser une instruction  switch, qui prend la variable à vérifier et une liste de valeurs comme différents cas :

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}