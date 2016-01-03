
function init(app) {
    var request=require('request');

    
     var arr=[];
    var cb=function(item){
    
     return item.toString();
    }
  var tess= request("http://animevost.org/",function(err,res,body){
   (function(){
       app.body=body;
   })();
     

   });
  //     console.log(app.locals.body);
   return app; 
}
module.exports=function(app){
  
    return init(app)
}