$(document).ready(function(){
    $("#loginform").submit(function(e){
     $("#confirm").text('');  
     $("#waiting").text('waiting....');
     e.preventDefault(); 
     $.ajax({
         type:'POST',
         url :'login.php',
         data : $(this).serialize(),
         success: function(response){
             debugger 
             var jsonDATA = JSON.parse(response);
            
                
                        }
                });
                });
               });
//       $.post("index.php",
//       {
//         name: "Donald Duck",
//         city: "Duckburg"
//       },
//       function(data,status){
//         alert("Data: " + data + "\nStatus: " + status);
//       });
//     });
//   });