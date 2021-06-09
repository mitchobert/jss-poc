import React, { Component } from 'react';
import AccordionStyles from './Accordion.styles';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }

    render() {
        return (
            <AccordionStyles>
                <div
                    className="accordionPanel"
                    onClick={this.handleClick}
                >
                    {this.props.title}
                </div>
                {this.state.collapsed && (
                    <div className="accordionContent">{this.props.children}</div>
                )}
            </AccordionStyles>
        );
    }
}

export default Accordion;