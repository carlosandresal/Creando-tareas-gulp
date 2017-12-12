var gulp = require('gulp'),
 sass = require('gulp-sass'),
 browserSync = require('browser-sync'),
 sourcemaps = require('gulp-sourcemaps'),
 autoprefixer = require('gulp-autoprefixer'),
 uglify = require('gulp-uglify'),
 pug = require('gulp-pug');

var reload = browserSync.reload;
// Crear tareas y hacer llamados asincronos
/*
gulp.task('hola', function(cb){
	setTimeout(function(){
		console.log('Hola');
		cb();
	}, 2000);
});
*/
// hacer que se ejecute primero la tarea hola
/*
gulp.task('mundo', ['hola'], function(){
	console.log('Mundo')
});

gulp.task('default', ['hola', 'mundo']);
*/


//Gulp plugins // solo leer y grabar
 gulp.task('sass', function(){
 	return gulp.src('src/style.sass')// leer el archivo
 		.pipe(sourcemaps.init())
 		.pipe(sass().on('error', sass.logError))//COMPILAR SASS .on escuchar error
 		.pipe(autoprefixer({ browsers: ['last 2 version'], cascade:false }))// agregar ultimos dos autoprefixer a el css
 		.pipe(sourcemaps.write())// escribirel css
 		.pipe(gulp.dest('.tmp'))// Guardar el archivo
 		.pipe(reload({ stream: true })); // Enviar cambios al navegador
 });

 // gulp watch

 gulp.task('watch', function(){
 	gulp.watch('src/style.sass', ['sass']);
 	gulp.watch('src/*.pug', ['pug']);
 	gulp.watch('.tmp/*.html').on('change', reload);
 });

 // gulp server

 gulp.task('serve', ['sass', 'pug'], function(){
 	browserSync({
 		server: {
 			baseDir: ['.tmp', 'src']
 		}
 	});
 	gulp.start('watch');
 });

 // gulp sourmaps

 // pattern gulp
 gulp.task('pug', function(){
 	return gulp.src('src/*.pug')//Utilizamos glob para complilar todo .pug de la carpeta
 		.pipe(pug())
 		.pipe(gulp.dest('.tmp'));
 }); 

 gulp.task('default', ['sass']);


 //instalar gulp-sass

 // Poner producto en produccion. Optimazing y deployment
 // Primer paso es optimizat todo nuestro codigo asi le damos menos archivo a cargar archivo menos pesados
//Tarea build
//esta tarea va a tener como tareas deppendientes pug y sass
// en produccion no necesitamos source maps, si necesitamos, la compilacion y el autoprefixer
// 
gulp.task('sass:prod', function(){
	return gulp.src('src/style.sass')
	.pipe(sass().on('error', sass.logError))//sass(outputStyle: 'compressed')
	.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
	.pipe(gulp.dest('dist'))
});

gulp.task('pug:prod', function(){
	return gulp.src('src/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'))
});

// minificado javascript
gulp.task('js', function(){
	return gulp.src('src/app.js')
		.pipe(uglify({compress: true}))
		.pipe(gulp.dest('dist'))
});

gulp.task('build', ['sass:prod', 'pug:prod', 'js']);

//fin tarea de produccion

