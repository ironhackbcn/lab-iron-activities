import React, { Component } from 'react';
import { mainContext } from "../App";

class Main extends Component {

    render() {
        return (
            <main className="d-flex flex-wrap justify-content-around">
                <mainContext.Consumer>
                    {(context) => {
                        return context.listTours()
                    }}
                </mainContext.Consumer>
            </main>
        );
    }

}

export default Main;