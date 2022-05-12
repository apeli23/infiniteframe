import React, { Component } from 'react'
import html2canvas from 'html2canvas';

export default class Frame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link: '',
        }

        this.captionRef = React.createRef()
    }

    async captionHandler() {
        console.log('captionHandler')
    }

    readFile(file) {
        return new Promise(function (resolve, reject) {
            let fr = new FileReader();

            fr.onload = function () {
                resolve(fr.result);
            };

            fr.onerror = function () {
                reject(fr);
            };

            fr.readAsDataURL(file);
        });
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <h2>Nextjs Infinity Frame</h2>
                    {this.state.link ? <a href={this.state.link}><h3>frame caption link</h3></a> : ""}
                    <button variant="contained" color="primary" onClick={() => {this.
                        captionHandler()}}>Capture Frame</button>
                </div>
                <div>
                    <div className="container" ref={this.captionRef}>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                        <div className="frame"></div>
                    </div>
                </div>
            </div>
        )
    }
}
