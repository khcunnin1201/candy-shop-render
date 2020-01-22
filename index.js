

function header(state) {
    return `
<header>
    <h1 id="myhead">${state.title}</h1>
</header>`;
}

function navigation(state) {
    return `
<nav>
    <ul>
        <li><a id="Home" href="#">My home page</a></li>
        <li><a id="Blog" href="#">Blog</a></li>
        <li><a id="About" href="#">About</a></li>
        <li><a id="Contact" href="#">Contact</a></li>
    </ul>
</nav>`;
}

function content(state) {
    return `
<main>
    <div>${state.content}</div>
</main>`;
}

function footer(state) {
    return `
<footer>
    <p>This page is (c)2020 Cunningham</p>
</footer>`;
}

const allStates = {
    Home: { 
        title: "Home Page",
        content: "this is my homepage content"
    },
    Blog: {
        title: "blog page",
        content: "this is my blogging content"
    },
    About: {
        title: "about page",
        content: "this is my about content"
    },
    Contact: {
        title: "contact page",
        content: "call me at 867-5309"
    }
};

function render(state) {
    document.getElementById("root").innerHTML=`
        ${header(state)}
        ${navigation(state)}
        ${content(state)}
        ${footer(state)}
    `;
    document.querySelectorAll('nav a')
    .forEach((link) => link.addEventListener('click', handleNavigation));
}

function handleNavigation(event) {
    event.preventDefault();
    render(allStates[event.target.id]);
}
render(allStates['Home']);