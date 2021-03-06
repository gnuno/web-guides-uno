import GIT from './git.json';
import BDD from './bdd.json';
import Web from './web';
/*import React from './react.json';
import Node from './node.json';*/

export default function getData(name){
    switch(name){
        case "git": return({data:[GIT], title:"git", description:"esto es un road to git"}); 
        case "db": return({data:[BDD], title:"Bases de Datos", description:"esto es un road to bases de datos"});
        case "web": return({data:Web, title:"Web Fullstack", description:"esto es un road to desarrollo web fullstack"});
        /*case "react": return({data:React, title:"ReactJS", description:"esto es un road to react"});
        case "node": return({data:Node, title:"NodeJS", description:"esto es un road to node"});*/
        default: return({data:Web, title:"Web Fullstack", description:"esto es un road to desarrollo web fullstack"});
    }
};