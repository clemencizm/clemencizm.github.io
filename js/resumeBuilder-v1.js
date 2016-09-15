var months = ["Diciembre", "Enero", "Febrero", "Marzo", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
    
var date = new Date();
var localTime = date.getTime();
var localOffset = date.getTimezoneOffset() * 60000;
var utc = localTime + localOffset;

var offset_spain = 2;   
var timestamp_spain = new Date(utc + (3600000*offset_spain));
document.getElementById("time_es").innerHTML = timestamp_spain.getDate() + " " + months[timestamp_spain.getMonth()] + " " + timestamp_spain.getFullYear() + ", " + timestamp_spain.getHours() + ":" + timestamp_spain.getMinutes();

var offset_mexico = -5;   
var timestamp_mexico = new Date(utc + (3600000*offset_mexico));
document.getElementById("time_mx").innerHTML = timestamp_mexico.getDate() + " " + months[timestamp_mexico.getMonth(-1)] + " " + timestamp_mexico.getFullYear() + ", " + timestamp_mexico.getHours() + ":" + timestamp_mexico.getMinutes();

var contact = {
        "email": "clemence.lc@gmail.com",
        "skype": "jamgraphic",
        "github": "https://github.com/clemencizm",
        "twitter": "https://twitter.com/jamgraphic",
        "blog": "http://jam-graphic.tumblr.com/",
        "behance": "https://www.behance.net/clemencizm",
}; 
$(document).ready(function() {
$("#main").append(contact.blog);
});

var bio = {
    "logoUrl": "images/logo-jam-graphic-diseno-digital.png",
    "profilUrl": "images/clemencizm.gif",
    "backgroundUrl": "images/background.jpg", 
    "welcomeMessage": "¡Hola! Soy Clemencizm, UX UI senior designer and profesional dreamer", 
    "skills": [
        "UX", "UI", "look + feel", "visual concept", "diseño gráfico", "css3", "html5", "web responsive", "bootstrap", "material design", "angular material", "gulp", "git for github", "sass", "SEO"
    ],
    "location": "Nací en Boulogne-sur-Mer, crecí entre Ouve-Wirquin y Lille, me libere en París y aprendí la vida en México.",
    "personalPlan": "Planeo re-nacer en Europa. Barcelona lo más probablemente.",
    "profesionalPlan": "Aúnque me encanta trabajar en agencia o companías, desarrollo proyecto por mi cuenta. ¡No dudes en contactarme!."
}  
$("#main").append(bio.location);


var hobbies = {};
    hobbies["sports"] = "roller";
    hobbies["creative"] = "cine";
    hobbies["human"] = "family friends";
    hobbies["social"] = "...";
    hobbies["environmental"] = "jardinería"
$("#main").append(hobbies["sports"],hobbies["environmental"]);

var dreams = ["publicar mis historias cortar", "realizar corto metrajes", "publicar libros"]
$("#main").append(dreams);


/* JSON  Javascript Object Notation*/
var education = { 
    "schools" : [ //schools is an array as it has sereval objects 
        { // 1st object
            "name": "Académie Charpentier",
            "city" : "Paris, France",
            "diploma" : "Licencia Communicación Visual",
            "graduationYears" : "2001",
            "online" : ["http://www.academie-charpentier.fr/", "https://www.facebook.com/academie.charpentier.paris/"] // array in the object
        },
        { // 2nd object
            "name" : "ASFORED",
            "city" : "Paris, France",
            "diploma" : "Licencia Production Editorial",
            "graduationYears" : "2003",
            "website" : "http://asfored.org/"
        },
        {
            "name" : "Master SChool Mx",
            "city" : "México City, México",
            "diploma" : "",
            "graduationYears" : 2010,
            "website" : ""
        }
    ],
    "onlineCourses" : [
        {
            "subject" : "Javascript Basic",
            "graduationYears" : 2016,
            "websites" : [
                "W3Schools", "Udadity.com", "Sitepoint.com", "Code School"
            ]
        }
    ]
}

$("#main").append(education.schools[1].name);


var work = {
    "jobs" : [
        {
            "title" : "UX - IU designer Senior",
            "employer" : "Mundo Joven for Indigo",
            "dates" : "junio 2015 - junio 2016",
            "location" : "Ciudad de México, México",
            "description" : "Trabaje en colaboración estrecha con el otro diseñador de Mundo Joven y de mano con los desarrolladores en mejoras de website, en mockups de la App y en proyectos paralelos. "
        }
    ]
}
$("#main").append(work.jobs);




var firstName ="Soy Clémence Izm";
var formattedName = HTMLheaderName.replace("%data%", firstName);

var role = "diseñadora UX UI senior";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#name").append(formattedName);
$("#name").append(formattedRole);


// prevent javascript hacks to change the content by changing every < > for there coded version
var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    return newHTML;
};