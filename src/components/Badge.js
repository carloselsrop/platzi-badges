import React from "react";
import confLogo from "../images/badge-header.svg";

/* Destructuring 
const Names1 = ({firstName, firstLast}) => {
    return (
        <div>
            <h1 className="font-bold text-4xl">{firstName}</h1>
            <h1 className="font-bold text-4xl">{firstLast}</h1>
        </div>
    )
}
*/

/* Nuevos componentes */
const Names1 = (props) => {
    return (
        <div>
            <h1 className="font-bold text-4xl">{props.firstName}</h1>
            <h1 className="font-bold text-4xl">{props.firstLast}</h1>
        </div>
    )
}

class Badge extends React.Component {
    render() {
        return (
            <div className="w-full h-screen">
                <div className="flex w-full h-24 bg-black justify-center">
                    <img src={confLogo} alt="Lo de la conferencia" />
                </div>
                <div className="flex items-center justify-center w-full h-40">
                    <img className="mr-4 rounded-full overflow-hidden" src={this.props.avatarURL} alt="Avatar" />
                    {/*spreadOperators = {...}*/}
                    <Names1 {...this.props} />
                </div>
                <div className="w-full h-24 bg-gray-200 ">
                    <p className="flex justify-center text-xl font-bold py-4">{this.props.jobTitle}</p>
                    <p className="flex justify-center text-md  items-center">{this.props.mediaTwitter}</p>
                </div>
                <div className={`flex w-full h-16 justify-center items-center ${this.props.isDanger ? 'text-red-500' : 'text-green-500'}`}>
                    {this.props.footer}
                </div>
            </div>
        );
    }
}
export default Badge;