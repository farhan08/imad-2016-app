console.log('Loaded!');
//move the image.
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft= '100px';
};
//counter code
var button= document.getElementById('counter');
button.onclick= function() {
  
    //create a request to the counter end  point
    var request= new XMLHttpRequest();
    
    //capture the resonse and store in the variable
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE) {
            // TAKE SOME ACTION
            if (request.status === 200) {
                var counter= request.responseText;
               var span= document.getElementById('count');
               span.innerHTML = counter.toString(); 
            }
        }
        // IF NOT DONE YET
    };
    // make the request
    request.open('GET','http://farhan08.imad.hasura-app.io/counter', true);
    request.send(null);
    
};