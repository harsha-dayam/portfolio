
module.exports = function(grunt) {

  grunt.initConfig({
   respimg: {
    default: {
      options: {
        
         optimize: { // optimizing images
          input: {
            svgo: 0,
            image_optim: 0,
            picopt: 0,
            imageOptim: 3
          },
          output: {
            svgo: 0,
            image_optim: 0,
            picopt: 0,
            imageOptim: 3
          }
        }
      },
      files: [{
        expand: true,
        cwd: 'images',
        src: ['**.{gif,jpg,png,svg}'],
        dest: 'images_modified/'
      }]
    }
  },

  /* Clear out the images directory if it exists */
  clean: {
    dev: {
      src: ['images_modified'],
    },
  },

  /* Generate the images directory if it is missing */
  mkdir: {
    dev: {
      options: {
        create: ['images_modified']
      },
    },
  },

  /* Copy the "fixed" images that don't go through processing into the images/directory */
  copy: {
    dev: {
      files: [{
        expand: true,
        src: 'images/fixed/*.{gif,jpg,png}',
        dest: 'images_modified/'
      }]
    },
  },
});

  grunt.loadNpmTasks('grunt-respimg');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'respimg']);

};
