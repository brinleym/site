import MyLink from "./MyLink"
import { FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";

export default function ContactInfo() {
    return (
        <ul>
            <li>
                <MyLink 
                    url="https://www.linkedin.com/in/brinley-macnamara" 
                    text="LinkedIn" 
                    options={{ isExternal: true, color: "#0077b5", icon: FaLinkedin }} />
            </li>
            <li>
                <MyLink 
                    url="mailto:brinley.macnamara@gmail.com" 
                    text="Email" 
                    options={{ isExternal: true, icon: MdAlternateEmail }} />
            </li>
        </ul>
    );
}