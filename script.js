let noButtonClickCount = 0; 
let noButtonState = 0; 

document.getElementById('noBtn').addEventListener('click', function() {
  switch (noButtonState) {
      case 0:
          // Primera vez haciendo clic en "No"
          document.getElementById('siBtn').style.fontSize = '40px';
          document.getElementById('siBtn').style.padding = '20px 50px';
          document.getElementById('siBtn').innerHTML = 'Sí';

          document.getElementById('noBtn').style.fontSize = '15px';
          document.getElementById('noBtn').style.padding = '10px 10px';
     
          noButtonClickCount++;
          noButtonState++;
          break;

      case 1:
          document.getElementById('siBtn').style.fontSize = '60px';
          document.getElementById('siBtn').style.padding = '30px 60px';
          document.getElementById('siBtn').innerHTML = 'Sí♥';

          document.getElementById('noBtn').style.fontSize = '10px';
          document.getElementById('noBtn').style.padding = '7px 7px';
          document.getElementById('noBtn').innerHTML = 'Nu e.e';
      
          noButtonState++;
          break;

      case 2:
          document.getElementById('siBtn').style.fontSize = '80px';
          document.getElementById('siBtn').style.padding = '40px 70px';
          document.getElementById('siBtn').innerHTML = 'Sí♥♥';

          document.getElementById('noBtn').style.fontSize = '5px';
          document.getElementById('noBtn').style.padding = '5px 5px';
      
          noButtonState++;
          break;
      
      case 3:
          document.getElementById('siBtn').style.fontSize = '100px';
          document.getElementById('siBtn').style.padding = '50px 80px';
          document.getElementById('siBtn').innerHTML = 'Sí♥♥♥';

          document.getElementById('noBtn').style.fontSize = '3px';
          document.getElementById('noBtn').style.padding = '3px 3px';
      
          noButtonState++;
          break;

      case 4:
          document.getElementById('siBtn').style.fontSize = '120px';
          document.getElementById('siBtn').style.padding = '50px 90px';
          document.getElementById('siBtn').innerHTML = 'Sí♥♥♥♥';

          document.getElementById('noBtn').style.fontSize = '1px';
          document.getElementById('noBtn').style.padding = '1px 1px';
      
          noButtonState++;
          break;

      case 5:
            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '50px 100px';
            document.getElementById('siBtn').innerHTML = '♥♥♥♥Sí♥♥♥♥';

            document.getElementById('noBtn').style.fontSize = '0px';
            document.getElementById('noBtn').style.padding = '0px 0px';
        
            noButtonState++;
            break;    

      case 6:
          document.getElementById('siBtn').style.fontSize = '160px';
          document.getElementById('siBtn').style.padding = '50px 110px';
          document.getElementById('siBtn').innerHTML = '♥♥♥Sí♥♥♥';

          document.getElementById('noBtn').style.display = "none";
      
          noButtonState++;
          break;

      default:
          // Por si acaso, maneja cualquier otro caso aquí
          break;
  }
});


/*______________________________ */
