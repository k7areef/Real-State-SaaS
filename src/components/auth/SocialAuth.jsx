/**
 * @typedef {Object} SocialAuthProps
 * @property {boolean} [isDisabled=false] - Whether the social auth buttons should be disabled
 * @property {string} [className=""] - Additional CSS classes to apply to the container
 */

import React from 'react'
import Button from '@components/UI/Button'
import GoogleImage from "@assets/icons/google.png";
import AppleImage from "@assets/icons/apple.png";

/**
 * @param {SocialAuthProps} props
 */
function SocialAuth({ isDisabled, className = "" }) {
    return (
        <div className={`social-auth${className ? ` ${className}` : ""}`}>
            {/* Divider */}
            <div className="h-0.5 bg-grey"></div>
            {/*  */}
            <div className="relative z-10 mx-auto bg-white w-fit px-4 -translate-y-1/2">أو عبر المنصات الاجتماعية</div>
            {/* Social Buttons */}
            <div className="social-buttons mt-3 flex sm:items-center gap-3 *:flex-1 max-sm:flex-col">
                {/* Google Button */}
                <Button
                    type="button"
                    variant="ghostOutline"
                    title="المتابعة باستخدام جوجل"
                    aria-label="المتابعة باستخدام جوجل"
                    disabled={isDisabled}
                    className="w-full"
                >
                    <img
                        src={GoogleImage}
                        alt="صورة جوجل"
                        className="w-5 h-5 inline-block ml-2"
                    />
                    <span>المتابعة باستخدام جوجل</span>
                </Button>
                {/* Apple Button */}
                <Button
                    type="button"
                    variant="secondary"
                    title="المتابعة باستخدام أبل"
                    aria-label="المتابعة باستخدام أبل"
                    disabled={isDisabled}
                    className="w-full"
                >
                    <img
                        src={AppleImage}
                        alt="صورة أبل"
                        className="w-5 h-5 inline-block ml-2"
                    />
                    <span>المتابعة باستخدام أبل</span>
                </Button>
            </div>
        </div>
    )
}

export default SocialAuth