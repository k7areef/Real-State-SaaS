/**
 * @typedef {Object} AppLogoProps
 * @property {string} [className]
 */

import { Link } from "react-router-dom";

/**
 * @param {AppLogoProps} props
 */
function AppLogo({ className }) {
    return (
        <Link
            to={'/'}
            className={`font-medium text-primary text-2xl${className ? ` ${className}` : ''}`}
        >
            عقاري
        </Link>
    )
}

export default AppLogo;