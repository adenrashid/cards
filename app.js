var spans = document.querySelectorAll('span');
var allgone = document.querySelector('p');

// event target. not just mouse targetting, any event. 
// event handler - so event object will be passed in for you 

// if (spans[i].style.opacity = '0') {
    //     console.log('hi');

function handleClick(event) {
    event.target.classList.add('hiding');
    var counter = 0;
    for (var i = 0; i < spans.length; i ++) {
        if (spans[i].classList.contains('hiding')) {
            counter++;
        }
    }
    if (counter == 3) {
        document.querySelector('p').classList.add('allgone');
    }
}

// instead of event.target put in spans[i]
// spans[i].classList.contains('hiding') can be replaced by event.target.classList.contains('hiding')

for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', handleClick);
}

var background = document.querySelector('body');
var darkButton = document.querySelectorAll('button')[0];
var lightButton = document.querySelectorAll('button')[1];

function darkTheme() {
    // background.style.backgroundColor = 'grey';
    document.body.classList.toggle('darkMode')
};

function lightTheme() {
    background.style.backgroundColor = 'pink';
};

darkButton.addEventListener('click', darkTheme);
lightButton.addEventListener('click', lightTheme);

// give a div at the highest possible level so that when you switch the theme there is only one entry point that you need to change, by adding class

// cant click on it if visibility is hidden 
// use opacity - this will allow you to still click on it, not visibility 
// tooling - slightly different effects 
// can put data in classes, hack , classes arent really meant for data, but it will work 
// can use data attribute
// event.target.dataset to get the data-x="" x is the name

// querySelector --> dot in front of class name. .classList doesnt use a dot
// .classList.contains
// asking if the classList has what youre looking for spans[0].classList.contains('hiding')