import React from "react"
import {
    SafeAreaView,
    TextInput
} from "react-native"

import { styles } from './styles'

class SafeTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.workaroundFocus = this.workaroundFocus.bind(this);
    }
    componentDidMount() {
        const { autoFocus } = this.props
        console.log(autoFocus)
        if (autoFocus != false)
            setTimeout(() => {
                this.workaroundFocus();
            }, 100);
    }

    workaroundFocus() {
        this.textInput.blur();

        setTimeout(() => {
            this.textInput.focus();
        }, 100);
    }
    render() {
        const { props } = this
        return (
            <SafeAreaView style={styles.btnZIndex}>
                <TextInput
                    onPressIn={this.workaroundFocus}
                    ref={(input) => this.textInput = input}
                    {...props}
                />
            </SafeAreaView>
        );
    }
}

export default SafeTextInput;