
function init(app) {
    var request=require('request');
    var cheerio=require('cheerio');


    
     var arr=[];
    var cb=function(item){
    
     return item.toString();
    }
  request("http://animevost.org/",function(err,res,body){
   (function(){
      var $=cheerio.load(body);
  //     console.log($('.block_4')._root[0].children[0].next.next);
   })();
     

   });
  //     console.log(app.locals.body);
   return app; 
}
module.exports=function(app){
  
    return init(app)
}