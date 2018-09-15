var gulp = require("gulp");
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var concat = require("gulp-concat");
var babel = require('gulp-babel');
var sass = require('gulp-sass');


gulp.task("html", function(){
	gulp.src("app/**/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("css", function(){
	gulp.src("app/css/**/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());

})

gulp.task("js", function(){
	gulp.src(["app/**/*.js","!app/libs/*.js"])
//	.pipe(babel({
//		presets: ['@babel/env']
//	}))
//	.pipe(uglify())
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("server", function(){
	connect.server({
        livereload: true,
        port: 2333,
        root:"dist"
    });
})

gulp.task("watch", function(){
	gulp.watch("app/**/*.js",["js"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/**/*.html",["html"]);
	gulp.watch("app/scss/**/*.scss",["sass"]);
});

gulp.task("img", function(){
	gulp.src("app/images/**/*")
	.pipe(gulp.dest("dist/images"));
});

//复制移动第三方js
gulp.task("libs", function(){
	gulp.src("app/libs/**/*")
	.pipe(gulp.dest("dist/libs"));
})

gulp.task("sass", function(){
	//吧scss文件编译成css，并且放到dist里面
	gulp.src("app/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("default",["server","html","js","css","watch","img","sass","libs"]);
