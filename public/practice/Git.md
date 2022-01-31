# Guia de Ejercicios para **GIT**

## Contenidos
* [Introducción](#introduccion)
* [Ramas](#ramas)
* [Remoto](#remoto)
* [Convenciones](#convenciones)

**Antes de realizar la guia recuerda tener instalado Git y tener configurado tu usuario**
*para configurar un usuario:*
```
git config --global user.email "TU MAIL"
git config --global user.name "TU NOMBRE"
```

<a name="introduccion"></a>
### Introducción

1. Crear un repositorio local(*git init*)
2. Realiza cambios en el proyecto y verifica el estado del repo(*git status*)
3. Agrega a staging area los cambios realizados (*git add*)
4. Repite los pasos **2** y **3**, y haz un commit(*git commit*)
5. Repite el paso **2** con varios archivos, agrega a staging area solo uno de esos cambios y haz un commit
6. Continua realizando cambios y haz un commit con estos
7. Ve el historial de cambios(*git log*) 
8. Realiza cambios en varios archivos, agrega solo un a staging area y haz un reset de los otros cambios(*git reset*)
9. Realiza un cambio pequeño y agregalo al ultimo commit(*git commit --amend*)
10. Crea un .gitignore y añade un archivo a este, commitea el cambio y realiza cambios sobre el archivo a ignorar, revisa el status

<a name="ramas"></a>
### Ramas

1. Ve las ramas de tu repo(*git branch*)
2. Crea una nueva rama y cambia tu espacio de trabajo a esta(*git checkout* o *git branch y git checkout*)
3. Realiza cambios en esta nueva rama y realiza commits
4. Ve el historial de cambios
5. Vuelve a la rama principal y verifica que los cambios realizados en la otra rama no esten
6. Realiza un merge de la rama secundaria asi los cambios aparecen(*git merge*)
7. Crea otra rama y realiza un cambio sobre esta, commitealo y mergealo. Luego ve a la rama secundaria y realiza un cambio en el mismo archivo y mismo lugar pero con contenido diferente, commitealo y mergea con main, esto deberia desencadenar un conflicto, resuelvelo.
8. Crea tus propios alias para comandos
```
git config --global alias.lol "log --graph --pretty=format:'%C(magenta)%h%Creset%C(auto)%d%Creset %C(cyan)<%an>%Creset%C(green)[%ad]%C(reset): %s' --date=short --all"

git config --global alias.amend "commit --amend --no-edit"
```

<a name="remoto"></a>
### Remoto

1. Ve la lista de remotos(*git remote*)
2. Añade un repositorio remoto (*git remote add*)
3. Sube tus cambios al repositorio remoto(*git push*)
4. Descarga un repositorio remoto, el mismo sobre el que pusheaste, en una nueva carpeta(*git clone*)
5. Realiza cambios sobre este nuevo proyecto, guardalos y pushea
6. En el repositorio local original traete los nuevos cambios del remoto(*git pull* o *git fetch y git merge*)
7. Realiza un cambio y subelo con ambos repositorios locales, resuelve el conflicto


<a name="convenciones"></a>
### Convenciones

1. Investiga sobre Conventional Commit y GitFlow, aplicalo en un proyecto profesional