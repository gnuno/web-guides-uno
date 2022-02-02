# Guia de Ejercicios para **Frontend**

## Contenidos
* [HTML](#html)
* [CSS](#css)
* [Java Script](#js)
* [Java Script y el DOM](#jsdom)
* [Java Script Asincronico](#jsasincronico)

<a name="html"></a>
### HTML

1. Crea un primer documento html
2. Agregale un titulo principal
3. Agregale un titulo secundario junto con un parrafo
4. Agregale una imagen
5. Agregale una lista de links debajo del titulo principal
6. Agregale dos botones debajo del parafo
7. Crea un nuevo documento html en el cual agregaras el mismo titulo y lista de contenidos, ademas de una tabla que muestre diferentes objetos con sus campos
8. Crea un nuevo documento html en el cual agregaras el mismo titulo y lisa de contenidos, ademas de un formulario para registrarse
9. Haz que la lista de contenidos te permita navegar en los diferentes documentos html
10. Revisa si puedes agregar etiquetas semanticas como nav, section, header y demas
11. Agregale un pie de pagina a cada documento


<a name="css"></a>
### CSS

*En base al documento creado anteriormente*
1. Agregale colores de fondo
2. Agregale color a los textos, cambia la tipografia de algunos textos
3. Agregale borde y sombra al header 
4. Dale borde y sombra a los botones, tambien modifica su padding y margin
5. Agrega margin a los elementos que veas necesarios
6. Alinea el parrafo en el centro, y modifica los tamaños de fuente de este, de los botones y titulos
7. Alinea horizontalmente algunas secciones
8. Estiliza los links, agrega pseudoclases a los links y botones(::hover)
9. Intenta replicar el siguiente layout
![](img/layout1.png)
10. Aplica responsive design en todo el sitio
11. Crea un nuevo documento y crea una lista de elementos, estos elementos tiene un titulo, una foto, y una lista de caracteristicas. Crea esta lista usando FlexBox
12. Estiliza las imagenes para que se vean bien por mas que tengan dferentes medidas
13. Investiga y aplica los estilos utilizando SASS
14. Crea variables con SASS asi reutilizas los colores, fuentes y otras medidas

<a name="js"></a>
### Java Script

1. Crea una variable edad e imprimela por consola
2. En base a la variable edad, imprime por consola si es mayor de edad o menor de edad
3. Agrega un par de casos mas, indica que es un niñe si tiene menos de 12, si tiene menos de 18 es adolescente, si tiene menos de 27 es joven, si tiene menos de 65 es adulto, y si es mayor o igual a 65 es anciano
4. Crea un array, recorrelo e imprime sus valores por consola
5. Crea un array y rellenalo con un for
6. Crea un array, recorrelo e imprime por consola si es mayor o menor de edad
7. Crea una funcion que devuelva true o false en caso de que la edad recibida se trate de un mayor de edad
8. Crea una funcion que reciba un array y muestre sus valores por consola
9. Crea un objeto persona que posea nombre, edad, y una funcion para saber si es mayor
10. Crea una funcion capaz de devolver un objeto instanciado con los valores recibidos por parametros
11. Crea una funcion capaz de extender(nuevos atributos o metodos) al objeto recibido por parametro
12. Crea la funcion toString para el objeto, esta debe devolver un string formateado con los propios valores(interpolacion)
13. Asignale a una constante una funcion anonima que reciba dos parametros y los sume
14. Asignale a una constante una funcion anonima que reciba n(rest) parametros y los sume
15. Modifica las ultimas dos funciones con la notacion de flecha gorda(arrow function)
16. Crea una funcion anonima que reciba 2 numeros y otra funcion(callback), esta tendra la tarea de retornar lo que retorna el callback pasandole los 2 valores(por ejemplo funct(1,2,suma) = 3, o funct(2,4,multiplicacion) = 8)
17. Crea una funcion que dado un numero muestre su factorial por pantalla
18. Dado un array, recorrelo con un foreach y pasale el callback de la funcion que calcula el factorial
19. Dado un array, recorrelo con map y pasale el callback de la funcion que calcula el factorial, asignalo a un nuevo array y verifica que este se haya rellenado
20. Dado un array de objetos persona, recorrelo con filter y pasale el callback de una funcion que retorne true o false si la persona es mayor, verifica el resultado
21. Crea una funcion que elimine tildes, espacios al inicio y al final, y mayusculas de un string
22. Crea una funcion que verifique que un string cumpla con la condicion de ser un mail


<a name="jsdom"></a>
### Java Script y el DOM

1. Linkea un documento HTML con un archivo JS
2. Obtiene un elemendo del DOM y muestralo por consola
3. Obtiene un boton del DOM y crea un listener para el evento click, haz un console log al ser clickeado
4. Modifica el callback del evento para cambiar el contenido de un texto
5. Crea un nuevo boton y añadele un listener para cambiar la visibilidad de un bloque
6. Crea un nuevo boton y añadele un listener que cree un nuevo nodo y lo inserte en un contenedor
7. Replica lo anterior pero que cargue una lista de nodos en un contenedor
8. Manipula los estilos de un elemento al tocar un boton
9. Crea un boton que cambie los estilos de toda la pagina(tema claro y oscuro)
10. Crear string templates para el punto **7**

<a name="jsasincronico"></a>
### Java Script Asincronico

1. Realiza un Fetch hacia una API publica, encadenalo con una promesa para hacer console log de la respuesta
2. Utiliza la respuesta de esta API para modificar el DOM
3. Encadena una nueva promesa
4. Agrega un catch en caso de error en la promesa
5. Reemplaza el encadenamiento de promesas con async/await
6. Realiza un post con un formulario y espera la respuesta de este