

function init(app) {
    var request=require('request');
var phantom=require('phantom');


phantom.create(function (ph) {
  ph.createPage(function (page) {
    /* the page actions */
  });
}, {
  dnodeOpts: {
    weak: false
  }
});
  //     console.log(app.locals.body);
   return app; 
}
module.exports=function(app){
  
    return init(app)
}