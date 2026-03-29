import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {string} [type]
 * @property {string} [className]
 * @property {React.ReactNode} children
 * @property {'primary' | 'secondary' | 'white'} [variant]
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to, href, type, className, children, ...props }) {

    const variants = {
        primary: "bg-primary text-white sm:hover:bg-primary/90",
        secondary: "bg-secondary text-white sm:hover:bg-secondary/90",
        white: "border border-gray-300 bg-gray-100 sm:hover:bg-gray-200"
    }

    const classNames = `px-4 py-2 sm:py-3 rounded-md font-semibold transition duration-300 ease-in-out ${variants[variant]}${className ? ` ${className}` : ""}`;

    if (href) {
        return (
            <a
                {...props}
                href={href}
                className={classNames}
            >
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={classNames}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={classNames}
            type={type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;