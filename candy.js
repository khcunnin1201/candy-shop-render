const candyProducts = {
    Chocolate: {
        title: "Chocolate",
        subtitle: "The best use of a cocoa bean",
        items: [{name: "Kit Kat"},
            {name: "M & M's"},
            {name: "Almond Joy"},
            {name: "Cookies & Cream"},
            {name: "Reeses"}
        ]
    },
    Sour: {
        title: "Sweet & Sour",
        subtitle: "When you love the sour look",
        items: [{name: "Lemon Head"},
            {name: "Sour Patch Kid"},
            {name: "War Heads"},
            {name: "Sour Straws"},
            {name: "Toxic Waste"}
        ]
    },
    'Baked Goods': {
        title: "Baked Goods",
        subtitle: "Decadent desserts",
        items: [{name: "Tollhouse Pie"},
            {name: "Blueberry Muffins"},
            {name: "Lemon Cake"},
            {name: "Chocolate Chip Cookies"},
            {name: "Strawberry Cheesecake"}
        ]
    },
}

function render(state){
    document.getElementById("root").innerHTML=
    `${navigation(state)}
    ${renderHeader(state)}
    ${renderList(state.items)}`;
    document.querySelectorAll('nav a')
    .forEach((link) => link.addEventListener('click', handleNavigation));
}

function handleNavigation(event) {
    event.preventDefault();
    render(candyProducts[event.target.textContent]);
}

function renderHeader(state){
    return `<h1> ${state.title} </h1>
    <h2> ${state.subtitle} </h2>`;
}

function renderList(someList) {
    var builtUpHTML = '<ul>';
    someList.forEach(element => {
        builtUpHTML += '<li>' + element.name + '</li>'
    });
    builtUpHTML += '</ul>';
    return builtUpHTML;
};

function navigation(state){
    return `
        <nav>
            <ul>
                <li><a id="Home" href="#">Home</a></li>
                <li><a id="Chocolate" href="#">Chocolate</a></li>
                <li><a id="Sour" href="#">Sour</a></li>
                <li><a id="Baked" href="#">Baked Goods</a></li>
            </ul>
        </nav>`;
}


render(candyProducts['Chocolate']);