import GIT from './git.json';
import Web from './web';
/*import React from './react.json';
import Node from './node.json';*/

export default function getData(name){
    switch(name){
        case "GIT": return([GIT]); 
        case "Web": return(Web);
        /*case "React": return(React);
        case "Node": return(Node);*/
        default: return(Web);
    }
};