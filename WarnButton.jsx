import React from 'react';
import { Button } from 'react-materialize';

class WarnButton extends React.Component {
    constructor(props) {
        super(props);
        let defaultColor = "green", defaultAltColor = "red";
        let defaultContent = "delete", defaultAltContent = "delete?";
        this.state = {
            color: props.color || defaultColor,
            warn: false,
            content: props.children || defaultContent
        };

        this.statePresets = [
            {
                color: this.props.color || defaultColor,
                content: this.props.children || defaultContent
            },
            {
                color: this.props.altColor || defaultAltColor,
                content: this.props.altContent || this.props.children || defaultAltContent
            }
        ];

        this.toggleState = this.toggleState.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    toggleState(e) {
        if (this.state.warn)
            this.props.action(e);
        this.setState({ warn: !this.state.warn, ...this.statePresets[this.state.warn ? 0 : 1] });

    }
    resetState(e) {
        this.setState({ warn: false, ...this.statePresets[0] });
    }
    render() {
        return (
            <Button {...this.props.buttonProps}
                flat={this.state.warn}
                className={this.state.color}
                onClick={this.toggleState}
                onBlur={this.resetState}
            >
                {this.state.content}
            </Button>
        );
    }
}

export default WarnButton;