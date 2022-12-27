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
nav.append(productsTab, aboutTab, contactTab);

// display section contents
const sectionContents = document.createElement('div');
sectionContents.setAttribute('id', 'sectionContents');

const PETE = { name: 'Pete', title: 'Owner' };
const KALANI = { name: 'Kalani', title: 'Sales' };
const VANTE = { name: 'Vante', title: 'Sales' };

function aboutSection() {
    const employees = [PETE, KALANI, VANTE];

    for (let em of employees) {
        const component = createEmployeeSection(em);
        sectionContents.append(component);
    }
}

function createEmployeeSection(employee) {
    const component = document.createElement('div');  // <div></div>
    component.setAttribute('id', employee.name);    // id="name"

    const name = document.createElement('h3')
    const title = document.createElement('h4');
    name.innerHTML = employee.name;
    title.innerHTML = employee.title;
    
    component.append(name, title);
    return component;
}

aboutSection();

displaySection.append(nav, sectionContents);


