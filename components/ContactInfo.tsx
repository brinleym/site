import MyLink from "./MyLink"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <ul>
            <li>
                <MyLink url="https://www.linkedin.com/in/brinley-macnamara" text="LinkedIn" options={{ isExternal: true, color: "#0077b5", icon: FaLinkedin }} />
            </li>
        </ul>
    )
}