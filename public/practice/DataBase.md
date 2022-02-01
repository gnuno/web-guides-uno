# Guia de Ejercicios para **Bases de Datos**

## Contenidos
* [Modelo Relacional](#mr)
* [SQL Basico](#sqlbasico)
* [Joins](#joins)
* [Funciones de Agregacion](#agregacion)
* [Subconsultas](#subconsultas)

<a name="mr"></a>
### Modelo Relacional

1. Listar las entidades necesarias para el siguiente enunciado:
```
    Basico: 
        Almacenar una lista de productos con su precio, stock y categoria
    Basico+: 
        Ademas almacenar la lista posible de categorias
    Intermedio: 
        Ademas almacenar las compras, con el articulo comprado, el precio de esta y las unidades
    Intermedio+: 
        Permitir que se puedan comrpar varios productos en solo una compra, para esto se necesita una nueva entidad que posea una fecha y una lista de comrpas(esta lista es puramente relacional)
    Avanzado:
        Ademas almacenar los usuarios que realicen estas compras, y que pueda guardar los productos en favoritos
```
2. Detallar los campos y las relaciones que tendran estas
3. Detallar las cardinalidades entre las relaciones
4. Establecer las claves primarias y las foraneas

<a name="sqlbasico"></a>
### SQL Basico

1. Crear la base de datos modelada [aqui](#mr), con sus claves primarias
2. Insertar datos a estas tablas
3. Actualizar los precios de los productos usando UPDATE
4. Eliminar algunos productos usando DELETE
5. Resolver las siguientes consultas:  
*Nota: al no especificar los datos a insertar ir adaptando las consultas a su favor*
```
    a. Listar los productos, luego ordenarlos por precio de mayor a menor, luego alrevez
    b. Listar los productos de una determinada categoria
    c. Listar los productos con un precio mayor a un determinado numero
    d. Listar los productos que tengan poco stock
    e. Listar los productos que tengan poco stock o sean mas caros que un determinado numero
    f. Listar los id de producto de determinada categoria
    g. Listar las compras que hayan llevado 2 o mas del mismo articulo
    h. Mostrar el promedio de los precios de productos
    i. Mostrar el Maximo y Minimo stock de productos
    j. Mostrar la sumatoria de articulos comprados de una determinada categoria
```


<a name="joins"></a>
### Joins

1. A la base de datos agregarle las claves foraneas
2. Asegurarse de respetar las claves foraneas en los datos insertados
3. Resolver las siguientes consultas:
```
    a. Mostrar los productos junto con su categoria
    b. Mostrar las comrpas con su lista de productos comprados
    c. Mostrar las compras con su lista de productos comprados y los detalles del producto
    d. Mostrar las compras con su lista de productos comprados, los detalles del producto y su categoria
    e. Mostrar las compras con su lista de productos comprados, los detalles del producto y su categoria, y el usuario que ha realizado la compra
    f. A partir del punto anterior eliminar las compras realizados por los usuarios menores de edad
    g. A partir del punto e eliminar las compras de los productos con poco stock
    h. Mostrar los productos favoritos de cada usuario
```


<a name="agregacion"></a>
### Funciones de Agregacion

1. Calcular el promedio de los productos por categoria, luego tambien mostrar el nombre de la categoria correspondiente
2. Calcular el gasto total realizado en cada compra
3. Calcular el gasto realizado por cada usuario
4. Calcular el promedio de productos favoritos por usuarios
5. Sobre el punto 1 solo mostrar las categorias con mas de X productos
6. Sobre el punto 2 solo mostrar las compras que superen el monto X
7. Obtener la categoria con menor y maximo stock


<a name="subconsultas"></a>
### Subconsultas

1. Mostrar los usuarios que hayan comprado algun producto de precio menor a X
2. Mostrar los usuarios que no hayan comprado algun producto de la categoria X