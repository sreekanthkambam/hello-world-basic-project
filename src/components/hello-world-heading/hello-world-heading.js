import './hello-world-heading.css';
import HelloWorldHeadingImage from './resources/images/helloworld.png';

export class HelloWorldHeading {

    render() {
        const body = document.querySelector('body');

        const heading = document.createElement('h1');
        heading.innerHTML = 'Hello World';
        body.appendChild(heading);

        const img = document.createElement('img');
        img.alt = 'Hello World Heading';
        img.src = HelloWorldHeadingImage;
        img.classList.add('hello-world-heading');
        body.appendChild(img);
    }

}
