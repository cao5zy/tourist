(function(factory){
    module.exports = factory(require('log4js').getLogger('service'),
			     require('./config'),
			     require('./implementation')
		         );
			 }
(function(logger, config, impl){
       return function(options){
               
	       this.add({"action": "add_route"}, function(msg, respond){
                    impl.{'name': 'add_route'}(msg.param, (data)=>respond(data, null));
	       });
	       

               this.add({"name": "test"}, function(args, response){
			           response(null, {'result': 'OK'});
	  		   });
	};
 }));