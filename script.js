document.addEventListener('DOMContentLoaded', () => {

  // Get references to the default image and the GIF elements
  const previewImage = document.getElementById('previewImage');
  const previewGif = document.getElementById('previewGif');

  // Titles
  const titles = [
    document.getElementById('title1'),
    document.getElementById('title2'),
    document.getElementById('title3'),
    document.getElementById('title4'),
    document.getElementById('title5'),
    document.getElementById('title6'),
  ];

  // Map each title to a specific GIF file
  const gifs = [
    'Asset/GIF for website/500 days of summer.gif',
    'Asset/GIF for website/00aac956704997605f19455ab44f3c98.gif',
    'Asset/brutalist-gif-small.gif',
    'Asset/GIF for website/WarfareGifTrailer2.gif',
    'Asset/GIF for website/friendshipgif1.gif',
    'Asset/GIF for website/ed713f7a9a475645a1065a3216539eff.gif',
  ];

  const images = [
    'Asset/500-Days-of-Summer-Cropped.jpg',
    'Asset/81999.jpg',
    'Asset/mspfilm-The_Brutalist-1920x1080-1.jpg',
    'Asset/WF-Textless-Thumb.jpg',
    'Asset/FRIENDSHIP_TRAILER_ThumbTextless.jpg',
    'Asset/wallpaperflare.com_wallpaper.jpg',
  ];

  let currentIndex = 0;
  let userInteracting = false;

  function showGif(index) {
    previewGif.src = gifs[index];
    previewGif.style.opacity = 1;
    previewImage.style.opacity = 0;
  }

  function showImage(index) {
    previewImage.src = images[index];
    previewImage.style.opacity = 1;
    previewGif.style.opacity = 0;
  }

  function cycleFilms() {
    if (!userInteracting) {
      showGif(currentIndex);
      setTimeout(() => showImage(currentIndex), 4000);
      currentIndex = (currentIndex + 1) % titles.length;
    }
  }

  setInterval(cycleFilms, 5000);

  titles.forEach((title, index) => {
    title.addEventListener('mouseenter', () => {
      userInteracting = true;
      showGif(index);
    });

    title.addEventListener('mouseleave', () => {
      userInteracting = false;
      showImage(index);
    });
  });

  // Scroll-down arrow logic
  const scrollDown = document.getElementById('scrollDown');
  const nextSection = document.getElementById('films');
  if (scrollDown && nextSection) {
    scrollDown.addEventListener('click', () => {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("text-container");
  const text = "Over the past five years, I have worked with bloggers such as @elivosk and reputable companies like Moonly, Nike, and UNode50 in New York. Together, we have created original documentary films that have been recognised at various festivals.";
  const words = text.split(" ").map(word => {
      const span = document.createElement("span");
      span.classList.add("word");
      span.textContent = word;
      textContainer.appendChild(span);
      return span;
  });
  
  let revealed = false;
  function checkScroll() {
      if (revealed) return;
      const rect = textContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight) {
          words.forEach((word, index) => {
              let delay = index * 50;
              setTimeout(() => {
                  word.style.opacity = 1;
              }, delay);
          });
          revealed = true;
          window.removeEventListener("scroll", checkScroll);
      }
  }
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function checkScroll() {
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
              section.style.opacity = 1;
              section.style.transform = "translateY(0)";
              section.querySelector(".line").style.width = "100%";

              setTimeout(() => {
                  section.querySelector(".description").style.opacity = 1;
              }, 500);
          } else {
              section.style.opacity = 0;
              section.style.transform = "translateY(30px)";
              section.querySelector(".line").style.width = "0%";
              section.querySelector(".description").style.opacity = 0;
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("scroll", function() {
  const textLines = document.querySelectorAll(".text-line");
  textLines.forEach((line, index) => {
      const rect = line.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
          setTimeout(() => {
              line.classList.add("visible");
          }, index * 500);
      }
  });
});

document.addEventListener("scroll", function () {
  let laurels = document.querySelectorAll(".laurel");
  let delay = 0;
  
  laurels.forEach((laurel, index) => {
      let rect = laurel.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
          setTimeout(() => {
              laurel.classList.add("show");
          }, delay);
          delay += 300; // Delay each item by 300ms
      }
  });
});

//Pre, Current, Post//
document.addEventListener("scroll", () => {
  let stages = document.querySelectorAll(".stage");

  stages.forEach((stage) => {
      let rect = stage.getBoundingClientRect();
      let progressBar = stage.querySelector(".progress-bar");
      let viewportHeight = window.innerHeight;
      let stageHeight = stage.offsetHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
          let scrollProgress = Math.min(100, ((viewportHeight - rect.top) / stageHeight) * 100);
          progressBar.style.width = `${scrollProgress}%`;
      } else {
          progressBar.style.width = "0%";
      }
  });
});

//Footer Card//
function revealOnScroll() {
  const contactSection = document.querySelector('.contact-section');
  const position = contactSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
      contactSection.classList.add('show');
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger check on page load

// Text Swap on Hover
const contactLinks = document.querySelectorAll('.contact-link');

const hoverTexts = {
  "elvandlie@gmail.com": "Work with me!",
  "Instagram": "@yourInstagram",
  "Vimeo": "@yourVimeo",
  "YouTube": "@yourYouTube",
  "Behance": "@yourBehance"
};

contactLinks.forEach(link => {
  const span = link.querySelector('span');
  const originalText = span.textContent;

  link.addEventListener('mouseenter', () => {
      span.style.opacity = '0';
      setTimeout(() => {
          span.textContent = hoverTexts[originalText] || originalText;
          span.style.opacity = '1';
      }, 200);
  });

  link.addEventListener('mouseleave', () => {
      span.style.opacity = '0';
      setTimeout(() => {
          span.textContent = originalText;
          span.style.opacity = '1';
      }, 200);
  });
});
