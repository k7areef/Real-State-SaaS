/**
 * @typedef {Object} FormikFieldProps
 * @prop {Object} field
 * @prop {string} label
 * @prop {string} typeField
 * @prop {string} parentClassName
 * @prop {string} icon
 */

/**
 * @param {FormikFieldProps} props
 */

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage } from "formik";
import React from "react";

const iconsmap = {
    location: faLocationDot
}

function FormikField({ label, typeField = "input", icon, parentClassName, ...props }) {

    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    const sharedStyles = `w-full p-3 bg-grey border border-transparent rounded-md transition duration-300 ease-in-out read-only:border-transparent not-read-only:focus:border-primary`;

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    return (
        <div className={`formik-field${parentClassName ? " " + parentClassName : ""} relative`}>
            {
                icon && iconsmap[icon] &&
                <FontAwesomeIcon icon={iconsmap[icon]} className="absolute right-3 bottom-4.5" />
            }
            {label && <label htmlFor={props.id} className="w-fit block mb-2">{label}</label>}
            {
                typeField === "input" ? (
                    <input
                        {...props}
                        className={sharedStyles}
                    />
                ) : null
            }
            {/* Error Message */}
            {
                typeField !== "radio_group" && (
                    <ErrorMessage name={props.name} component="p" className="text-red-500! mt-2" />
                )
            }
        </div >
    )
}

export default FormikField;