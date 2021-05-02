import GIT from "./git.json";
import BDD from "./bdd.json";
import Web from "./web";

const baseUrl = "/guia/"
const courses = [
    { data: Web, name: "Web FullStack", url: baseUrl+"web", contents: getContents(Web, true), proGuide: true},
    { data: BDD, name: "Bases de Datos", url: baseUrl+"db", contents: getContents(BDD, false), proGuide: false},
    { data: GIT, name: "GIT", url: baseUrl+"git", contents: getContents(GIT, false), proGuide: false}
];

export function getCourses() {
    return courses;
}

function getContents(data, proGuide) {
    var contents = " - ";

    proGuide ? (data.map(guide => contents = contents + guide.title + " - ")) 
        : (data.content.map(modules => (modules.void ? "" : contents = contents + modules.name + " - ")))

    return contents;
}

export function getData(name) {
    switch (name) {
        case "git":
            return {
                data: [GIT],
                title: "git",
                description: "En esta guia de git, una herramienta que todo desarrollador debe acostumbrarse y manejar con fluidez, vas a aprender a versionar tu codigo, a trabajar con repositorios remotos y con repositorios con mas de 1 colaborador, abriendote las puertas a colaborar en proyectos y sumandote una gran skill a tu CV.",
                telegram: "https://t.me/unogit"
            };
        case "db":
            return {
                data: [BDD],
                title: "Bases de Datos",
                description: "Todo desarrollador FullStack o BackEnd debe tener los conocimientos basicos en Bases de Datos, por eso en esta guia vas a aprender para que sirven estas, como se modelan, como se administran y como se programa en SQL.",
                telegram: "https://t.me/DDBBUNO"
            };
        case "web":
            return {
                data: Web,
                title: "Web Fullstack",
                description: "El rol al que muchos aspiran, no se asusten por la cantidad de contenidos, es un camino largo que debe disfrutarse, en esta guia vas a aprender los basico de FrontEnd(HTML-CSS-JS), un poco de git, conceptos mas avanzados de FrontEnd(SASS-FrameworksJS) y por ultimo el camino del BackEnd(Bases de Datos-API). \nTe recomiendo hacer las primeras 3 unidades y luego elegir entre el camino de FrontEnd o el de BackEnd.",
                telegram: "https://t.me/javascript_uno"
            };
        default:
            return ""
    }
}
