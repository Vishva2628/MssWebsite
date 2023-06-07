$(document).ready(function(){

  /* Page Title Code Start */
  let docTitle = document.title;
  window.addEventListener('blur', ()=>{
    document.title = 'Come Back : (';
  });
  window.addEventListener("focus",()=> {
    document.title = docTitle;
  });
  /* Page Title Code End */

  ////////////////////////////// Page Scroll Progress Bar Start////////////////////////////////////
  /* window.onload = function() {
    const container = document.querySelector('.container');
    const svg = document.querySelector('svg');
    const progressBar = document.querySelector('.progress-bar');
    const pct = document.querySelector('.pct');
    const totalLength = progressBar.getTotalLength();
      
    setTopValue(svg);
    
    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;
    
    window.addEventListener('scroll', () => {
      setProgress(container, pct, progressBar, totalLength);
    });
    
    window.addEventListener('resize', () => {
      setTopValue(svg);
    });
  }
  
  function setTopValue(svg) {
    svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
  }
  
  
  function setProgress(container, pct, progressBar, totalLength) {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    
    const percentage = scrollTop / (scrollHeight - clientHeight);
    if(percentage === 1) {
      container.classList.add('completed');
    } else {
      container.classList.remove('completed');
    }
    pct.innerHTML = Math.round(percentage * 100) + '%';
    progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;  
  } */
////////////////////////////// Page Scroll Progress Bar End ////////////////////////////////////

/* Back To Top SEction Start */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
/* Back To Top SEction End */
  /* Page Search Validation End*/
  
  /*  */
  /* ///////////////// Code For Google Translater  */

  /* ///////////////// Code For Google Translater  */

  /* $(window).on('load', function() {
    $('#loading').fadeIn('slow');
        setTimeout(function() {
          $('#loading').fadeOut('slow');
        }, 1000);
  });
  $('#loading').fadeIn('slow');
        setTimeout(function() {
          $('#loading').fadeOut('slow');
        }, 7000); */
        /* Home Menu */

       /*  $("#show-sidebar").click(function() {
            $("#sidebar").toggle('slow');
          });  */


          //////////////////////////// Random Image Start  ///////////////////////////////////////
         /*  const imageArray = [
           "./img/home/Home-Founders-O&U-kritika.jpg",
           "./img/home/Home-Founders-O&U-premvihar.jpg",
           "./img/home/Home-Founders-O&U-Ngo.jpg",
           "./img/home/Home-Founders-premkumar.jpg",
           "./img/home/Home-Ladyandal.jpg",
           "./img/home/Home-O&U-C_stadium.jpg",
           "./img/home/Home--O&U-improving-chtpet.jpg",
           "./img/home/Home-O&U-improving-tbm.jpg",
           "./img/home/Home--O&U-LAIB.jpg",
           "./img/home/Home-sir_mutha-schl.jpg",
           "./img/home/Home-so1st-Gif.gif",
           "./img/home/Home-BF-MS.jpg",
           "./img/home/Home-BF-MSS-c.jpg",
           "./img/home/Home-BF-MS-tbm.jpg",
           "./img/home/Home-EBF-BF.jpg",
           "./img/home/Home-concert-hall.jpg",
           "./img/home/Home-Founders-4-gif.gif"
          ];
          
          const image = document.querySelector("img");
          const randomImg = document.querySelector("img");
          
          window.onload = () => generateRandomPicture(imageArray);
          
          randomImg.addEventListener("mousemove", () => generateRandomPicture(imageArray));
          
          function generateRandomPicture(array){
            let randomNum = Math.floor(Math.random() * array.length); 
            image.setAttribute("src", array[randomNum]);
          
            // Generate a random index within the range of the array length
          var randomIndex = Math.floor(Math.random() * imageArray.length);
          
          // Retrieve the value at the random index
          var randomValue = imageArray[randomIndex];
          
          // Print the random index and its corresponding value
          console.log("Random Index: " + randomIndex);
          console.log("Random Value: " + randomValue);
          
          if(randomIndex == 0 || randomIndex == 1 || randomIndex == 2 || randomIndex == 3 || randomIndex == 4 || randomIndex == 10 || randomIndex == 12){
          
              const something = document.getElementById('something');
          
              something.href = "/projects/mssWebsite/about.html";
          
          }if(randomIndex == 5 || randomIndex == 6 || randomIndex == 7 || randomIndex == 8 || randomIndex == 9 || randomIndex == 11 || randomIndex == 15){
          
          const something = document.getElementById('something');
          
          something.href = "/projects/mssWebsite/effect.html";
          } else{
            const something = document.getElementById('something');
          
          something.href = "/projects/mssWebsite/generative_art.html";
          }
        }  */
         //////////////////////////// Random Image End  /////////////////////////////////

         

///////////////////////////////  About Us Page Slides Start /////////////////////
/* document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_1', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_2', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel_3', {
perPage    : 3,
breakpoints: {
  640: {
    perPage: 2,
  },
},
} ).mount();
} ); */
///////////////////////////////  About Us Page Slides End /////////////////////

/////////////////////////////    Gallery Start     ///////////////////////////
[...document.querySelectorAll('.column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});
/////////////////////////////    Gallery End     ///////////////////////////

});