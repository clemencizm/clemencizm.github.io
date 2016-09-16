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
        "github": "github.com/clemencizm",
        "twitter": "twitter.com/jamgraphic",
        "blog": "jam-graphic.tumblr.com/",
        "behance": "behance.net/clemencizm",
}; 

    var formattedEmail = HTMLemail.replace("%data%", contact.email);
    var formattedBehance = HTMLbehance.replace("%data%", contact.behance);
    var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", contact.github);
    $("#footerContacts").append(formattedEmail + formattedBehance + formattedTwitter + formattedGithub);



var bio = {
    "logoUrl": "images/logo-jam-graphic-diseno-digital.png",
    "profilUrl": "images/clemencizm.gif",
    "backgroundUrl": "images/background.jpg", 
    "welcomeMessage": "¡Hola! Soy Clemencizm, UX UI senior designer and profesional dreamer", 
    "skills": ["UX design", "UI", "look + feel", "visual concept", "css3", "html5", "web responsive", "bootstrap", "material design", "angular material", "gulp", "git for github", "sass", "SEO"
    ],
    "location": "Nací en Boulogne-sur-Mer, crecí entre Ouve-Wirquin y Lille, me libere en París y aprendí la vida en México.",
    "personalPlan": "Planeo re-nacer en Europa. Barcelona lo más probablemente.",
    "profesionalPlan": "Aúnque me encanta trabajar en agencia o companías, desarrollo proyecto por mi cuenta. ¡No dudes en contactarme!."
}  


  if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);

    }


var hobbies = {};
    hobbies["sports"] = "roller";
    hobbies["creative"] = "cine";
    hobbies["human"] = "family friends";
    hobbies["social"] = "...";
    hobbies["environmental"] = "jardinería"

var dreams = ["publicar mis historias cortar", "realizar corto metrajes", "publicar libros"]



/* JSON  Javascript Object Notation*/
var education = { 
    "schools" : [ 
        { 
            "name": "Académie Charpentier",
            "city" : "Paris, France",
            "diploma" : "Licencia Communicación Visual",
            "graduationYears" : "2001",
            "online" : ["http://www.academie-charpentier.fr/", "https://www.facebook.com/academie.charpentier.paris/"] 
        },
        { 
            "name" : "ASFORED",
            "city" : "Paris, France",
            "diploma" : "Licencia Production Editorial",
            "graduationYears" : "2003",
            "website" : "http://asfored.org/"
        },
        {
            "name" : "Master School Mx",
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

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var formattedGraduation = HTMLschoolDates.replace("%data%", education.schools[school].graduationYears);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].diploma);
    $(".education-entry:last").append(formattedName + formattedCity + formattedGraduation + formattedDegree);
}


var work = {
    "jobs" : [
        {
            "title" : "UX - IU designer Senior",
            "employer" : "Mundo Joven for Indigo",
            "dates" : "junio 2015 - junio 2016",
            "location" : "Ciudad de México, México",
            "description" : "Trabaje en colaboración estrecha con el otro diseñador de Mundo Joven y de mano con los desarrolladores en mejoras de website, en mockups de la App y en proyectos paralelos. "
        },
        {
            "title" : "Web Designer, Jefe de proyecto",
            "employer" : "Digital Solutions",
            "dates" : "septiembre 2012 - septiembre 2015",
            "location" : "Ciudad de México, México",
            "description" : "Encargada del diseño e integración del diseño en html5, css3, y jQuery. Seguimiento del proyecto con los desarrolladores."
        }
    ]
} 

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
}




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