# Guides UNO
Repositorio de la web ***[guides uno]()***.
## Sobre el Proyecto

Este es un proyecto impulsado por **GNUno**, el cual consta de un conjunto de **'planes de estudio'** de diferentes tecnologias para que alguien que recien inicia tenga un camino a seguir, junto a recursos como videos, video-tutoriales y bibliografia recomendada, ademas del soporte que puede dar la comunidad en los grupos de telegram.

## SetUp
Requisitos previos
- node(npm)

Para ejecutar y realizar cambios ejecutar
```
npm install
npm start
```

## Contribuir
### Pequena Contribucion
![Pequena Contribucion](./public/img/basicContribute.gif)

Lo primero que tenes que hacer para hacer cualquier aporte es hacer un fork del ***repositorio***, luego te descargas/clonas tu fork para empezar a trabajar. La metodologia es la de siempre, ir haciendo cambios y commits, para al final hacer un push a tu repo.

Para finalizar con el aporte lo que tenes que hacer es crear un Pull Request, diriguiendote al repositorio en github en el que subiste los cambios y dandole al boton ***Pull Request***.

### Proponiendo Cambios
![Pequena Contribucion](./public/img/issueContribute.gif)

Otra manera de contribuir es proponiendo cambios o nuevas funcionalidades, o informando sobre fallos de la app, todo esto lo podes hacer creando un nuevo ***[Issue](https://github.com/gnuno/web-guides-uno/issues)***.

### Creando Guias
![Pequena Contribucion](./public/img/bigContribute.gif)

Para esto se deben seguir los mismos pasos que para una pequena contribucion, pero te ahorramos de leer el codigo y entender donde tocar. Lo primero que tenes que hacer es crear en la carpeta ***data*** tu guia .json, podes copiar y pegar el ***template.json*** y editar desde ahi.

En esa nueva guia creada tenes que ir creando tus unidades, especificando los temas, y si es posible dejando links de referencia. Una vez tengas tu guia completa tenes que ir a ***dataProvider.jsx*** y hacer lo siguiente: 
- Importar el json
- Agregarlo al objeto courses 
- Crear un case en la funcion ***getData***

**NOTA**: Si tu guia sera muy larga y queres modularizarla mas tenes que crear un array de templates, como se ve en ***web.js***, en ***dataProvider*** esta sera una ***proGuide***(booleanos en true), y por ultimo en el case simplemente la prop data ira sin [], ya que data debe recibir un array, y una proGuide lo es.

## Licencia
[Licencia](./LICENCE)