# Inicio con gulp
Tener gulp instalado globalmente con:

```
[sudo] npm install -g gulp 
```

#### Configuracion de un proyecto para gulp
###### Agregar el archivo package.json

Al igual que con cualquier proseso con otros proyecto y gestores de tareas, agregamos un archivo "package.json" al proyecto
con el comando:

```
npm init 
```


###### Instalar gulp al proyecto

Se instala gulp al proyecto y lo guardamos como una dependencia de desarrollo con:

```
npm install gulp --save-dev 
```


###### Agregar gulpfile.js 

En el directorio raiz del proyecto agregamos un archivo llamado "gulpfile.js".

Para comenzar daremos el archivo de acceso al paquete "gulp" que acabamos de instalar en el directorio "node_modules",
al anadir esta linea en la parte superior de tu "gulpfile":

```javascript
var gulp = require('gulp');
```

###### Instalar plugins de gulp

estrictamente hablando, Gulp, no *necesita* realmente usar plugins porque puede hacer usi de paquetes nom. Sin embargo, hay varios plugins disponibles que estan especificamente optimizados para ser usados con Gulp, y cuando estás iniciando te pueden parecer más fácil de usar.

Busca los plugins de Gulp en: [http://gulpjs.com/plugins/](http://gulpjs.com/plugins/)

Con el terminal apuntando a tu directorio del "Proyecto" ejecuta el comando:

```
npm install plugin_name --save-dev
```

* Primero, no necitamos instalar un plugin "watch"  ya que gulp tiene uno integrado
* Segundo, instalar el plugin "gulp-concat" para tener todos nuestros archivos **concatenados** antes de minificar todo.

**NOTA:** se puede usar un plugin llamado "gulp-minify-css" pero emplea el mismo paquete "clean-css".

Con el terminal en la raiz del proyecto se pueden ejecutar e instalar estos plugins para gulp.

``` 
npm install gulp-sass --save-dev 
```
``` 
npm install gulp-autoprefixer --save-dev 
```
``` 
npm install gulp-minify-css --save-dev 
```
``` 
npm install gulp-pug --save-dev 
```
``` 
npm install gulp-uglify --save-dev 
```
```
npm install gulp-concat --save-dev 
```

##### Agregar plugins a gulp

Necesitamos habilitar  cada uno de los plugins, esta vez dentro de "gulpfile", para esto usamos el metodo *require()*, nativo de NodeJS.

* **Ejemplo**

```javascript
var sass = require('gulp-sass');
```

# Como Crear Tareas con gulp

compilar tarea con pug

```javascript
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function(
	return gulp.src('src/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('.tmp'));
));

gulp.task('watch', function(){
	gulp.watch('src/*.pug' ['pug']);
	gulp.watch('.tmp/*html').on('change', reload);
});

gulp.task('default', ['pug']);
```













