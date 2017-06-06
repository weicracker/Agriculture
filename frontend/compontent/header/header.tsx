import * as React from "react";
import { NavBar, Icon } from 'antd-mobile';
import * as reactNative from "react-native";
interface nav {
    name: string;
    mode?: string;
}
class Header extends React.Component<nav, undefined>{
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
export default Header;