
module.exports = function(grunt) {

  grunt.initConfig({
     concat: 
     {
     
        dist: 
        {
          src: ['css/variables.scss','css/mixins.scss','css/reset.scss','css/style_desctop.scss','css/style_mobile.scss','css/style_tablet.scss','css/style_common.scss'],
          dest: 'css/main.scss'
        }
     },
     uglify:
     {
          dist:
          {
            src:['js/dist/script.min.js'],
            dest:'js/dist/script.min.js'
          }
     },
     sass:
     {
        dist: 
        {
          files: 
          [{
            expand: true,
            cwd: 'css',
            src: ['main.scss'],
            dest: 'css',
            ext: '.css'
          }]
        }


     },
     watch: 
     {
          sass: 
          {
            
            files: ['css/*.scss'],
            tasks: ['concat','sass']
          }
     }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat','uglify','sass']);


};
