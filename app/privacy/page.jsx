import React from "react";
import NavBar from "@/components/NavBar";

const PrivacyPolicyPage = () => {
    return (
        <div className="w-screen h-full bg-slate-50">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-28 relative z-0 bg-sky-950"
            />
            <NavBar></NavBar>
            <div className="max-w-2xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">
                    At Ovie Production House, we take your privacy seriously. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard your
                    information when you visit our website (the “Site”). Please read this
                    privacy policy carefully. If you do not agree with the terms of this
                    privacy policy, please do not access the site.
                </p>
                <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information from you such as your name, email
                    address, or other contact information when you voluntarily submit it
                    to us through the Site.
                </p>
                <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
                <p className="mb-4">
                    The information we collect is used to provide and improve our
                    services. We may also use your information to communicate with you,
                    respond to your inquiries, and send you promotional materials.
                </p>
                <h2 className="text-xl font-bold mb-2">Information Sharing</h2>
                <p className="mb-4">
                    We may share your information with third-party service providers who
                    assist us in operating our website, conducting our business, or
                    servicing you. We may also share your information when required by law
                    or to protect our rights.
                </p>
                <h2 className="text-xl font-bold mb-2">Security</h2>
                <p className="mb-4">
                    We take reasonable measures to protect your information from
                    unauthorized access or disclosure. However, no method of transmission
                    over the internet, or method of electronic storage, is 100% secure.
                </p>
                <h2 className="text-xl font-bold mb-2">Updates to This Policy</h2>
                <p className="mb-4">
                    We may update this privacy policy from time to time. We will notify
                    you of any changes by posting the new privacy policy on this page.
                </p>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about our privacy policy, please
                    contact us at privacy@ovieproductions.com.
                </p>
                <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
                <p className="mb-4">
                    At Ovie Production House, we value your privacy and strive to make
                    your experience on our website as smooth as possible. This Cookie
                    Policy explains how we use cookies and similar technologies to
                    provide, customize, evaluate, improve, and protect our services. By
                    using our website, you consent to the use of cookies as described in
                    this policy.
                </p>
                <h2 className="text-xl font-bold mb-2">What Are Cookies?</h2>
                <p className="mb-4">
                    Cookies are small text files that are placed on your device by
                    websites that you visit. They are widely used to make websites work
                    more efficiently and to provide information to the owners of the site.
                </p>
                <h2 className="text-xl font-bold mb-2">How We Use Cookies</h2>
                <p className="mb-4">
                    We use cookies for a variety of purposes, including to:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Authenticate and identify you on our website;</li>
                    <li>Remember your preferences and settings;</li>
                    <li>Improve the performance and security of our website;</li>
                    <li>Analyze how users interact with our website;</li>
                    <li>Provide personalized content and advertising;</li>
                    <li>And more.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Types of Cookies We Use</h2>
                <p className="mb-4">
                    We use both session and persistent cookies on our website. Session
                    cookies are temporary and are deleted from your device when you close
                    your browser, while persistent cookies remain on your device until
                    they expire or are manually deleted.
                </p>
                <h2 className="text-xl font-bold mb-2">Managing Cookies</h2>
                <p className="mb-4">
                    You can control and/or delete cookies as you wish. You can delete all
                    cookies that are already on your computer and you can set most
                    browsers to prevent them from being placed. If you do this, however,
                    you may have to manually adjust some preferences every time you visit
                    a site and some services and functionalities may not work.
                </p>
                <h2 className="text-xl font-bold mb-2">Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Cookie Policy from time to time. We will notify you
                    of any changes by posting the new Cookie Policy on this page.
                </p>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about our Cookie Policy, please
                    contact us at cookies@ovieproductions.com.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
