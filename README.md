bug => bicho

0. Trabajo en equipo y sincronizado
    - git y github
    - GIT:
        - enviar cambios
        - recibir cambios
        - resolver conflictos
    - Github: (bitbucket, gitlab, etc)
        - almancenar de forma centralizada nuestro proyecto frontend
        - pasos:
            - crearnos nuestra cuenta
            - crear nuevo repositorio
            - invitar a colaboradores
            - clonar el repositorio en nuestra computadora
              > git --version => para saber las version del git
              > git clone URL => para descargarnos por primera vez el repositorio
              > git status    => para saber qué archivos hemos modificado
              > git diff archivo => Muestra los cambios que hemos realizado en un archivo
              > git add archivo => indica al git que este archivo ya está preparado para hacerle commit
              > git reset archivo => revierte el git add
              > git commit -m "mensaje" => indica al git que estamos confirmando los cambios para hacerle push
              > git push origin main => envia hacia el repositorio todos los commits locales              
              > git pull origin main => descarga los commits del repositorio hacia nuestro local
              > git log => podemos ver el historial de commits

              > git checkout -b nueva-rama => Genera una nueva rama partiendo de la rama en la que te encuentres parado
                    feature/nombre-rama => ramas para crear nuevas funcionalidades
                    hotfix/nombre-rama => rama para resolver problemas de produccion

              > git checkout rama-x => Me cambio a la rama "rama-x"

              > git fetch => Actualiza tu local con el reposito remoto, trae las ramas que hay en el remoto

    - Buenas practicas:
        - git pull de mi rama al iniciar el dia
        - Para crear una nueva feature, hay que posicionarnos en la rama develop y actualizarla primero con pull

    - Herramientas:
        - Visuales para gestionar git:
          - Tortoise
          - Visual Studio GIT
        - Visual Studio Code (VsCode)
          - Extensiones:
              - git lens

1. HTML y CSS

2. Pagina web: Layout
  - contenido principal
  - contenido secundario

3. Proyecto: Pagina web de compras
  - Angular
      - javascript
      - html
      - css
      
4. Prueba rober

5. Prueba Vanessa

6. Terminos
   - workspace: carpeta donde estan tus proyectos

// Reto: crear un archivo nuevo y subir al repositorio
// Reto: crear otro archivo nuevo y subir al repositorio
// Reto: resolver un conflicto
