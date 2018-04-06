var counter=1;

function addObject(kontener){
    counter++;
	var znacznik = document.createElement('input');
    znacznik.setAttribute('type', 'checkbox');
    znacznik.setAttribute('name', 'languages');
    znacznik.setAttribute('value', counter);
    znacznik.className = 'upload';
    var kontener = document.getElementById(kontener);
    var newCheckBox = document.getElementById("textBox1").value;
    znacznik.textContent=newCheckBox;
    var znacznik1 = document.createElement('label');
    znacznik1.setAttribute('for', 'textBox1'+counter);
    znacznik1.textContent=newCheckBox;
    kontener.appendChild(znacznik);
    kontener.appendChild(znacznik1);    
  
}

function resett()
{
    var inputs=document.getElementsByTagName("input");
    for (var i in inputs)
        if (inputs[i].type=="checkbox") inputs[i].checked=false;
}


function sendJSON(){
   

    var arr = { City: 'Moscow', Age: 25 };
$.ajax({
    url: 'Ajax.ashx',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: false,
    success: function(msg) {
        alert(msg);
    }
});

        //  var ar=[];
        //     $('.main2').each(function(){
        //         if($(this).is(':checked'))
        //         {
        //             ar.push({
        //                 language:$(this).attr('name')
                    
        //             }); 
                
        //         }        
        //     });
        //     alert(ar);
        //     $.ajax({
        //         method: "POST",
        //         url: "google.com",
        //         data: {ar}
        //     })
        //     .done(function( msg ) {
        //         alert( "Data Saved: " + msg );
        //       });
  
                
}