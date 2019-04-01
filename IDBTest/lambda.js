exports.handler = function(event, context, callback) {
    
    console.log("Hello world!!");
    callback(null, {"message": "Hwllo executed"});
}