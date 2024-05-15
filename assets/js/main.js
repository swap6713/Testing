

// pre loader

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1000); // Delay hiding the preloader by 5000 milliseconds (5 seconds)
});




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


$(window).on('scroll', function() {
  // Get the position of the bottom of the viewport
  var viewportBottom = $(window).scrollTop() + $(window).height();

  // Get the position of the bottom of the page
  var pageBottom = $(document).height();

  // Check if the bottom of the viewport is within 100 pixels of the bottom of the page
  if (pageBottom - viewportBottom < 100) {
      // Remove 'active-link' class from all navigation links
      $('.nav__link').removeClass('active-link');

      // Add 'active-link' class to the "Contact Us" link
      $('.nav__link[href="#contactus"]').addClass('active-link');
  } else {
      // Remove 'active-link' class from the "Contact Us" link when scrolling up
      $('.nav__link[href="#contactus"]').removeClass('active-link');
  }
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    smartSpeed:1500,
    autoplayTimeout:5500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// loading animation for menu

// $(document).ready(function(){
//   $(window).scroll(function() {
//     // Check if the viewport width is greater than 768px and not at the top of the page
//     if(window.innerWidth > 768 && $(window).scrollTop() != 0) {
//         // Change the src attribute of the img tag
//         $('.nav__logo.h1 img').attr('src', 'assets/img/favicon.svg');
//     }
//   });

//   $(".owl-carousel").on('changed.owl.carousel', function(e) {
//       // Check if the viewport width is greater than 768px and at the top of the page
//       if(window.innerWidth > 768 && $(window).scrollTop() == 0) {
//           // Get the current active slide
//           var current = e.relatedTarget.relative(e.item.index);
//           // Check if the third slide is active
//           if(current == 2) { // Index is 0 based
//               // Change the src attribute of the img tag
//               $('.nav__logo.h1 img').attr('src', 'assets/img/favicondrk.svg');
//           } else {
//               // Change it back to the original when not on the third slide
//               $('.nav__logo.h1 img').attr('src', 'assets/img/favicondrk.svg');
//           }
//       }
//   });
// });

$(document).ready(function(){
  // Function to update the logo
  function updateLogo() {
    // Check if the viewport width is greater than 768px
    if(window.innerWidth > 768) {
      // If not at the top of the page, use the 'favicon' logo
      if($(window).scrollTop() != 0) {
        $('.nav__logo.h1 img').attr('src', 'assets/img/favicon.svg');
      } else {
        // If at the top of the page, use the 'favicondrk' logo
        $('.nav__logo.h1 img').attr('src', 'assets/img/favicondrk.svg');
      }
    } else {
      // If the viewport width is 768px or less, always use the 'favicon' logo
      $('.nav__logo.h1 img').attr('src', 'assets/img/favicon.svg');
    }
  }

  // Update the logo when the page is loaded
  updateLogo();

  // Update the logo when the window is resized
  $(window).resize(updateLogo);

  // Update the logo when the window is scrolled
  $(window).scroll(updateLogo);
});



// colour change of nav link


$(document).ready(function() {
  var navLinks = $('.nav__link');

  // Function to update the color of nav links
  function updateColor() {
    if ($(window).scrollTop() > 0) {
      if (window.matchMedia("(min-width: 768px)").matches) { // PC view
        navLinks.css('color', '#ffffff');
      } else { // Phone view
        navLinks.css('color', '#ffffff');
      }
    } else {
      if (window.matchMedia("(min-width: 768px)").matches) { // PC view
        navLinks.css('color', '#003333');
      } else { // Phone view
        navLinks.css('color', '#ffffff');
      }
    }
  }

  // Update the color when the page is loaded
  updateColor();

  // Update the color when the window is resized
  $(window).resize(updateColor);

  // Update the color when the window is scrolled
  $(window).scroll(updateColor);
});


// ----------------Hero section 3rd slide----------------

$(document).ready(function() {
  function checkWidth() {
      var windowSize = $(window).width();

      if (windowSize <= 600) {
          $('.desktop').attr('src', 'assets/img/home100.svg');
      } else {
          $('.desktop').attr('src', 'assets/img/Home99.svg');
      }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
});






// menu animation

document.addEventListener("DOMContentLoaded", function() {
    const targets = document.querySelectorAll('.menu_content, .single-food');
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('appear')) {
            entry.target.classList.add('appear');
          }
        } else {
          entry.target.classList.remove('appear');
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    targets.forEach(target => {
      observer.observe(target);
    });
});
// ============team animation ==========




// usp animation


$(document).ready(function() {
    // create a new Intersection Observer instance
    let observer = new IntersectionObserver((entries, observer) => {
      // loop over the entries
      entries.forEach(entry => {
        // if the element is in view
        if (entry.isIntersecting) {
          // reset the image position and opacity
          $(entry.target).css('top', '-50%').css('opacity', '0');
          // add the fade in and slide down animation using jQuery
          $(entry.target).animate({opacity: '1', top: '0'}, 2000);
        }
      });
    });
  
    // start observing the image
    observer.observe(document.querySelector('.img1'));
  });




  // footer animation
  $(document).ready(function() {
    // create a new Intersection Observer instance
    let observer = new IntersectionObserver((entries, observer) => {
        // loop over the entries
        entries.forEach(entry => {
            // if the element is in view
            if (entry.isIntersecting) {
                // reset the footer opacity
                $(entry.target).css('opacity', '0');
                // add the fade in animation using jQuery
                $(entry.target).animate({opacity: '1'}, 2000);
            }
        });
    });

    // start observing the footer
    observer.observe(document.querySelector('.animate-footer'));
});





/* sliding in right to left */

// $(document).ready(function() {
//   let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting && !entry.target.animationTriggered) {
//         entry.target.animationTriggered = true;
//         if ($(entry.target).hasClass('collabimg')) {
//           $(entry.target).css('left', '-50%').css('opacity', '0');
//         } else if ($(entry.target).hasClass('cafeimg')) {
//           $(entry.target).css('left', '50%').css('opacity', '0');
//         }
//         $(entry.target).animate({opacity: '1', left: '0'}, 3000, function() {
//           // Reset the flag when the animation ends
//           entry.target.animationTriggered = false;
//         });
//       }
//     });
//   });

//   observer.observe(document.querySelector('.collabimg'));
//   observer.observe(document.querySelector('.cafeimg'));
// });

$(document).ready(function() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.animationTriggered) {
        entry.target.animationTriggered = true;
        $(entry.target).addClass('animate');
      } else {
        entry.target.animationTriggered = false;
        $(entry.target).removeClass('animate');
      }
    });
  });

  observer.observe(document.querySelector('.collabimg'));
  observer.observe(document.querySelector('.cafeimg'));
});



const images = document.querySelectorAll('.cateringimg img');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = Array.from(images).indexOf(entry.target) * 0.1;
            entry.target.style.animationDelay = `${delay}s`;
            entry.target.classList.add('flip');
        } else {
            entry.target.classList.remove('flip');
        }
    });
}, { threshold: 0.5 });

images.forEach(image => {
    observer.observe(image);
});



const teamMembers = document.querySelectorAll('.team__member');

const teamMemberObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = Array.from(teamMembers).indexOf(entry.target) * 0.2;
            entry.target.style.animationDelay = `${delay}s`;
            entry.target.classList.add('zoom-in');
        } else {
            // Remove the animation class when the element is not in the viewport
            entry.target.classList.remove('zoom-in');
        }
    });
}, { threshold: 0. });

teamMembers.forEach(member => {
    teamMemberObserver.observe(member);
});



// const footerColumns = document.querySelectorAll('.footer-column');

// const footerColumnObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const delay = Array.from(footerColumns).indexOf(entry.target) * 0.3;
//             entry.target.style.animationDelay = `${delay}s`;
//             entry.target.classList.add('fade-in');
//         } else {
//             entry.target.classList.remove('fade-in');
//         }
//     });
// }, { threshold: 0.1 });

// footerColumns.forEach(column => {
//   footerColumnObserver.observe(column);
// });












const aboutusElement = document.querySelector('#aboutus');
let typedAboutus;

const aboutusElementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Unobserve the element to prevent multiple triggers
            aboutusElementObserver.unobserve(aboutusElement);

            // Destroy the previous Typed.js instance if it exists
            if (typedAboutus) {
                typedAboutus.destroy();
            }

            // Initialize a new Typed.js instance
            typedAboutus = new Typed('#aboutus', {
                strings: ["Founders Journey"],
                typeSpeed: 30,
                showCursor: false // Don't show the cursor
            });
        }
    });
}, { threshold: 0.1 });

aboutusElementObserver.observe(aboutusElement);



const typedElement = document.querySelector('#typed');
let typed;

const typedElementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Unobserve the element to prevent multiple triggers
            typedElementObserver.unobserve(typedElement);

            // Destroy the previous Typed.js instance if it exists
            if (typed) {
                typed.destroy();
            }

            // Initialize a new Typed.js instance
            typed = new Typed('#typed', {
                strings: ["Stars of Top Nourish"],
                typeSpeed: 30,
                showCursor: false // Don't show the cursor
            });
        }
    });
}, { threshold: 0.1 });

typedElementObserver.observe(typedElement);


const collabElement = document.querySelector('#collab');
let typedCollab;

const collabElementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Unobserve the element to prevent multiple triggers
            collabElementObserver.unobserve(collabElement);

            // Destroy the previous Typed.js instance if it exists
            if (typedCollab) {
                typedCollab.destroy();
            }

            // Initialize a new Typed.js instance
            typedCollab = new Typed('#collab', {
                strings: ["Caffeine Partner"],
                typeSpeed: 30,
                showCursor: false // Don't show the cursor
            });
        }
    });
}, { threshold: 0.1 });

collabElementObserver.observe(collabElement);



const cateringElement = document.querySelector('#caterings');
let typedCatering;

const cateringElementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Unobserve the element to prevent multiple triggers
            cateringElementObserver.unobserve(cateringElement);

            // Destroy the previous Typed.js instance if it exists
            if (typedCatering) {
                typedCatering.destroy();
            }

            // Initialize a new Typed.js instance
            typedCatering = new Typed('#caterings', {
                strings: ["We offer Catering"],
                typeSpeed: 30,
                showCursor: false // Don't show the cursor
            });
        }
    });
}, { threshold: 0.1 });

cateringElementObserver.observe(cateringElement);




const teamsElement = document.querySelector('#teams');
let typedTeams;

const teamsElementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Unobserve the element to prevent multiple triggers
            teamsElementObserver.unobserve(teamsElement);

            // Destroy the previous Typed.js instance if it exists
            if (typedTeams) {
                typedTeams.destroy();
            }

            // Initialize a new Typed.js instance
            typedTeams = new Typed('#teams', {
                strings: ["Skilled hands behind it"],
                typeSpeed: 30,
                showCursor: false // Don't show the cursor
            });
        }
    });
}, { threshold: 0.1 });

teamsElementObserver.observe(teamsElement);



