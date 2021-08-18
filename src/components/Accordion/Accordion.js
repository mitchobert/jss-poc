import React, { Component } from 'react';
import classNames from 'classnames';
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
          <span>{this.props.title}</span>
          {this.state.collapsed && (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
          )}
          {!this.state.collapsed && (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
          )}
        </div>
        {this.state.collapsed && (
          <div className={classNames('accordionContent', { expanded: this.state.collapsed })}>{this.props.children}</div>
        )}
      </AccordionStyles>
    );
  }
}

export default Accordion;