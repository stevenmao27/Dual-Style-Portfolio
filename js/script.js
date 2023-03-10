const style1_path = './css/styles.css';
const style2_path = './css/styles2.css';

window.onload = () => {
    // load stylesheet
    let saved_style = localStorage.getItem('stylesheet');
    if (saved_style === null) saved_style = style1_path;
    document.getElementById('my-stylesheet').setAttribute('href', saved_style);

    // style2 animation
    if (saved_style === style2_path) {
        setTimeout(() => {
            const line = document.querySelector('.style2-line');
            line.style.height = '100%';
        }, 1000);
    }

    // mouse parallax effect
    const addMouseEffect = (target_element, scale) => {
        document.addEventListener('mousemove', (event => {
            document.querySelector(target_element).style.transform = `scale(${scale}) translate(calc((-${event.clientX}px + 50vw) * 0.1), calc((-${event.clientY}px + 50vh) * 0.1))`
        }));
    }
    addMouseEffect('.bgbg', 1.2); //might be laggy on some devices
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


    // style2 animation
    setTimeout(() => { //makes sure the stylesheet is loaded
        const line = document.querySelector('.style2-line');
        let lineHeight = (elem.getAttribute('href') === style2_path) ? '100%' : '0%';
        setTimeout(() => { //smooth animation
            line.style.height = lineHeight;
        }, 500);
    }, 1000);
}