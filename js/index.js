const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav
const navItems = document.querySelectorAll('nav a');
navItems.forEach((item, i) => {
  item.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

// CTA
const ctaH1 = document.querySelector('.cta-text h1');
const ctaBtn = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
ctaH1.innerHTML = "DOM <br> Is <br> Awesome";
ctaBtn.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta['img-src'];

// Main Content - Top
const featuresH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featuresContent = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

// Main Content - Middle Img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Main Content - Bottom
const servicesH4 = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productH4.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

// Contact
const contactH4 = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');
contactH4.textContent = siteContent.contact['contact-h4'];
address.innerHTML = "123 Way 456 Street <br> Somewhere, USA";
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;

// Footer
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;

// Add New Content

// Change the color of the navigation text to be green.
navItems.forEach(item => {
  item.style.color = 'green';
});

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
const blog = document.createElement('a');
blog.href = '#';
blog.textContent = 'Blog';
blog.style.color = 'green';

const ourTeam = document.createElement('a');
ourTeam.href = '#';
ourTeam.textContent = 'Our Team';
ourTeam.style.color = 'green';

const nav = document.querySelector('nav');
nav.appendChild(blog);
nav.prepend(ourTeam);