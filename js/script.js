const style1_path = './css/styles.css';
const style2_path = './css/styles2.css';

window.onload = () => {
    let saved_style = localStorage.getItem('stylesheet');
    if (saved_style === null) saved_style = style1_path;
    document.getElementById('my-stylesheet').setAttribute('href', saved_style);
}

const switchMode = () => {
    const elem = document.getElementById('my-stylesheet');
    if (elem.getAttribute('href') === style1_path) {
        elem.setAttribute('href', style2_path);
        localStorage.setItem('stylesheet', style2_path);
    }
    else {
        elem.setAttribute('href', style1_path);
        localStorage.setItem('stylesheet', style1_path);
    }
}

// * For Home Page Only

// if (document.title.includes('Home')) {
//     document.addEventListener('mousemove', (event) => {
//         const bg = document.querySelector('.greetings-bg');
//         bg.style.transform = `scale(1.2) translate(calc((${event.clientX}px - 50vw) * 0.1), calc((${event.clientY}px - 50vh) * 0.1))`
//     })
// }

const addMouseEffect = (target_element, scale) => {
    document.addEventListener('mousemove', (event => {
        document.querySelector(target_element).style.transform = `scale(${scale}) translate(calc((-${event.clientX}px + 50vw) * 0.1), calc((-${event.clientY}px + 50vh) * 0.1))`
    }));
}
addMouseEffect('.bgbg', 1.2);