import React from "react";

export default function Index() {
  const roadmaps= [
    {name: "Web Fullstack", url:"/web"},
    {name: "GIT", url:"/git"},
    {name: "Bases de Datos", url:"/db"}
  ]
  return (
    <ul>
     {roadmaps.map(element => <li key={element.name}><a href={element.url}>{element.name}</a></li> )}
    </ul>
  );
}