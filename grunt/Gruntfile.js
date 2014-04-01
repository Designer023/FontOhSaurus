module.exports = function(grunt) {
    //Variables

    //REQUIRES SASS 3.3 rc 2 (for the BEM goodness!)

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


      

    //Webfont generator
    webfont: {
        icons: {
          src: '../src/icons/*.svg',
          dest: '../dest/fonts',
          destCss: '../dest/css',

          options: {
            hashes: false,
              font: 'ui-font',
              stylesheet: 'css',
              destHtml: '../dest',
              templateOptions: {
                baseClass: 'font-ui',
                classPrefix: 'font-ui--',
              } 
          }
           
        }
      },
    //Webfont generator

    //notify
    notify: {
      startFont: {
        options: {
          title: 'Grrr',  // optional
          message: 'Prepping font!', //required
        }
      },
      finishFont: {
        options: {
          title: 'Raaaaaaaawr!!!',  // optional
          message: 'Font has been created!', //required
        }
      },
    }


    });//end grunt package configs

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-notify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', []);
    grunt.registerTask('font', ['notify:startFont', 'webfont', 'notify:finishFont']);

};
