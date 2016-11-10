module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js.js',
        dest: 'dist/js.min.js'
      }
    },
    
    //html压缩
    htmlmin:{  
    	dist:{
    		options:{
    			removeComments:true,
    			collapseWhitespace:true
    		},
    		files:{
    			'dist/index.html':'src/index.html'
    		}
    	}
    },
    
    //css压缩
     cssmin: {
		    target: {
		        files: [{
		          expand: true,
		          cwd: 'src',//文件路劲
		          src: 'css.css',//要压缩的css
		          dest: 'dist',//压缩以后css路劲
		          ext: 'min.css'//后缀
		        }]
		    }
    },
//  //css合并
//		cssmin: {
//			  options: {
//			    shorthandCompacting: false,
//			    roundingPrecision: -1
//			  },
//			  target: {
//			    files: {
//			      'dist/hebing.css': ['src/lixueci.css','src/aaa.css'] 
//			      //压缩后css路劲     要合并的css1  要合并的css1
//			    }
//			  }
//		},
		//压缩合并css
//		 cssmin: {
//		    target: {
//		        files: [{
//		          expand: true,
//		          cwd: 'dist',//文件路劲
//		          src: 'css.css',//要压缩的css
//		          dest: 'dist',//压缩以后css路劲
//		          ext: 'min.css'//后缀
//		        }]
//		    }
//  }
  });

  //加载包含"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //默认被执行的任务列表
  grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

};