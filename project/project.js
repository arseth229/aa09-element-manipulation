




window.onload = () => {
    document.body.innerHTML = '<h1 id="name">Arul Seth</h1>'

    const unList = document.createElement('ul');
    unList.setAttribute('class', 'my-details');

    const listArr = ["I live in San Antonio, Texas and it's currently ", "I'm 22 years old", "I'm currently in a coding bootCamp", 
    "I'm very interested in space exploration"];

    listArr.forEach((string) => {
       const item = document.createElement('li');
       item.innerText = string;
       item.setAttribute('class', 'detail');
       unList.appendChild(item);
    })

    document.body.appendChild(unList);


    let clock = new Date().toString().split(' ')[4];
    const pageClock = document.createElement('span');
    pageClock.innerText = clock;
    const timePlace = unList.children[0]; 
    timePlace.appendChild(pageClock);
    const here = document.createTextNode(' here');
    timePlace.appendChild(here);
    


    const timeChange = () => {
        setInterval(() => {
            clock = new Date().toString().split(' ')[4];
            pageClock.innerText = clock;
        }, 1000);
    }

    timeChange();
}









