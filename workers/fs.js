

function init(app,cb) {
    var request=require('request');
var Horseman=require('node-horseman');
url=app.url||"http://cxz.to/cartoonserials/i3Hvkze1vVrkyDFlpBEEU-simpsony.html";

var horseman=new Horseman();
horseman.open(url)
.click("a[href='#fl0']")
.waitForNextPage()
.html('div.b-files-folders')
.then(function(body){
   //console.log(body);
    cb(body);
}).finally(function(){
    return horseman.close();
})
return app;
}
module.exports=function(app,req,cb){
  
    var obj=init(app,cb);
   
    return cb(obj.body)
}