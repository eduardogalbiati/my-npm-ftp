var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var env = require('gulp-env');

gulp.task( 'deploy', function () {
    env({
        file: 'env.json',
        vars: {
        }
    });
    var conn = ftp.create( {
        host:     process.env.FTP_SERVER,
        user:     process.env.FTP_USER,
        password: process.env.FTP_PASS,
        parallel: 10,
        log:      gutil.log
    } );
 
    var globs = [
        process.env.SYNC_LOCAL_FOLDER
    ];
 
    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( process.env.SYNC_REMOTE_FOLDER ) )
        .pipe( conn.dest( process.env.SYNC_REMOTE_FOLDER ) ); 
} );