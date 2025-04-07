import React from "react";

const ContactUsPage = () => {
    return (
        <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-7xl mx-auto"> 
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        We’d love to hear from you! Whether you have a question or need assistance, feel free to contact us.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    <div className="space-y-6 h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.401128580711!2d-122.41941868481865!3d37.77492917975913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858150569fcdff%3A0x7d4c33b43cd0b728!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1613400324463!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>

                        <div>
                            <h4 className="font-semibold text-gray-700">Address:</h4>
                            <p className="text-gray-500"> Bole Rode, around Japan Embassy, Rand Realstate Building 11th flour</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Phone:</h4>
                            <p className="text-gray-500">+25116162777</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Email:</h4>
                            <p className="text-gray-500">bingetgroup@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
