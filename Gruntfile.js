module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/**\n' + '* Package: <%= pkg.name %> - v<%= pkg.version %> \n' + '* Description: <%= pkg.description %> \n' + '* Last build: <%= grunt.template.today("yyyy-mm-dd") %> \n' + '* @author <%= pkg.author %> \n' + '* @license <%= pkg.license %> \n' + '*/\n',

    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: [
          'src/<%= pkg.name %>.module.js', 'src/<%= pkg.name %>.*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        mangle: false,
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/angular-speech.css': 'src/angular-speech.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['build']
      },
      styles: {
        files: ['src/*.scss'],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.',
          open: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'sass']);
  grunt.registerTask('default', ['serve']);

}
