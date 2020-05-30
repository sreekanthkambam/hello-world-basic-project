import './hello-world-button.css';
import HelloWorldImage from './resources/images/helloworld.png';
import BodyBackGroundImage from '../../resources/images/hello-world-bg.jpeg';

export class HelloWorldButton {

    render() {
        const body = document.querySelector('body');

        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        body.appendChild(button);

        const img = document.createElement('img');
        img.alt = 'Hello World';
        img.src = HelloWorldImage;
        body.appendChild(img);

        const img2 = document.createElement('img');
        img2.alt = 'Hello World';
        img2.src = BodyBackGroundImage;
        body.appendChild(img2);
    }

}
