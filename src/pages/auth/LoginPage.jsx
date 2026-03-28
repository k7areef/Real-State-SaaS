import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import GoogleImage from "@assets/icons/google.png";
import AppleImage from "@assets/icons/apple.png";
import { supabase } from "@utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object().shape({
    email: Yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
});
const fields = [
    {
        id: "email",
        type: "email",
        name: "email",
        autoComplete: "on",
        label: "البريد الإلكتروني",
        placeholder: "البريد الإلكتروني",
    },
    {
        id: "password",
        type: "password",
        name: "password",
        label: "كلمة المرور",
        placeholder: "كلمة المرور",
    },
];

function LoginPage() {

    const navigate = useNavigate();

    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting } = actions;
        try {
            // Sign in with email and password
            const { error: loginError } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });
            if (loginError) throw loginError;

            // Get user profile {role}
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .select("role")
                .single();
            if (profileError) throw profileError;

            if (profileData.role === "guest") {
                // Navigate to home
                navigate("/");
            } else if (profileData.role === "super_admin") {
                // Navigate to admin dashboard
                navigate("/admin");
            } else if (profileData.role === "host") {
                // Navigate to host dashboard
                navigate("/dashboard");
            } else {
                // Unknown role error
                toast.error("دور المستخدم غير معروف");
                return;
            };

            // Show success message
            toast.success("مرحبا بك من جديد!");
        } catch (error) {
            console.error(error);
            // Show error message
            toast.error("خطأ في تسجيل الدخول");
        } finally {
            setSubmitting(false);
        }
    }, [navigate]);

    return (
        <div className="login-page py-10 md:py-10 min-h-screen flex items-center">
            <div className="container">
                <div className="login-form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {/* Fileds */}
                                <div className="fields mb-5 space-y-3">
                                    {fields.map((field, index) => (<FormikField
                                        key={index}
                                        {...{
                                            ...field,
                                            onChange: handleChange,
                                            value: values[field.name]
                                        }}
                                    />))}
                                </div>
                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center"
                                >
                                    <div className={`loading-spinner transition-all duration-300 grid ${isSubmitting ? 'grid-cols-[1fr] grid-rows-[1fr] me-2' : 'grid-cols-[0fr] grid-rows-[0fr]'}`}>
                                        <div className={`overflow-hidden transition-opacity duration-300 ${isSubmitting ? 'opacity-100' : 'opacity-0'}`}>
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        </div>
                                    </div>
                                    <span>تسجيل الدخول</span>
                                </Button>
                                {/* Social Login */}
                                <div className="social-login mt-10">
                                    {/* Divider */}
                                    <div className="h-0.5 bg-grey"></div>
                                    {/*  */}
                                    <div className="relative z-10 mx-auto bg-white w-fit px-4 -translate-y-1/2">أو عبر المنصات الاجتماعية</div>
                                    {/* Social Buttons */}
                                    <div className="social-buttons mt-3">
                                        {/* Google Button */}
                                        <Button
                                            type="button"
                                            variant="ghostOutline"
                                            title="المتابعة باستخدام جوجل"
                                            aria-label="المتابعة باستخدام جوجل"
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
                                            className="w-full mt-3"
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
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;