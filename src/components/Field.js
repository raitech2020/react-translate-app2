import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    static contextType = LanguageContext

    render() {
        // const text = this.context === 'english' ? 'Name' : 'Naam'
        let text

        switch (this.context.language) {
            case 'english':
                text = 'Name'
                break
            case 'dutch':
                text = 'Naam'
                break
            case 'urdu':
                text = 'نام'
                break
            default:
                text = 'Name'
        }

        return (
            <div className="ui field">
                <label htmlFor="name">{text}</label>
                <input type="text" id="name"/>
            </div>
        )
    }
}

export default Field
