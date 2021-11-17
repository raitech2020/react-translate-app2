import React from "react"
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

class Button extends React.Component {
    renderSubmit(language) {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        let text

        switch (language) {
            case "english":
                text = "Submit"
                break
            case "dutch":
                text = "Voorleggen"
                break
            case "urdu":
                text = "جمع کرائیں"
                break
            default:
                text = "Submit"
        }
        return text
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => {
                    return (
                        <button type="submit" className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {({language}) => {
                                    return (this.renderSubmit(language))
                                }}
                            </LanguageContext.Consumer>
                        </button>
                    )
                }}
            </ColorContext.Consumer>
        )
    }
}

export default Button
