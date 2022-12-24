console.log("fired");

const displaySection = document.getElementById('displaySection');

// nav bar
const nav = document.createElement('div');
const aboutTab = document.createElement('div');
const productsTab = document.createElement('div');
const contactTab = document.createElement('div');

aboutTab.innerHTML = 'about';
productsTab.innerHTML = 'products';
contactTab.innerHTML = 'contact';
nav.setAttribute('id', 'navbar');
nav.append(aboutTab, productsTab, contactTab);

// display section contents
const sectionContents = document.createElement('div');
sectionContents.setAttribute('id', 'sectionContents');




displaySection.append(nav, sectionContents);


