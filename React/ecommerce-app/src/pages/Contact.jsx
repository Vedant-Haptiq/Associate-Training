import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 1234567890",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "support@clothify.com",
      description: "Online support",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "123 Baner-Pashan Road",
      description: "Baner-Pashan Road, Pune",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 8am-5pm",
      description: "Sat-Sun: 10am-3pm",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Contact Form */}
            <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-yellow-950 mb-6">
                Contact Us
              </h2>

              {submitted && (
                <div className="mb-4 bg-green-100 text-yellow-950  text-sm rounded p-3 border border-green-200">
                  Thank you! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-yellow-950  mb-1"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-950"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-yellow-950  mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-950"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-yellow-950  mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-950"
                    placeholder="Reason for contact"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-950"
                    placeholder="Your message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-950 hover:bg-white hover:text-yellow-950  text-white font-medium py-2 px-4 rounded flex justify-center items-center gap-2 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 max-w-2xl w-full">
              <div>
                <h2 className="text-2xl font-semibold text-yellow-950 mb-2">
                  Contact Information
                </h2>
                <p className="text-yellow-950 text-sm">
                  Need help? Feel free to contact us through any method below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <div className="text-yellow-950 mt-1">{info.icon}</div>

                    <div>
                      <h3 className="text-base font-medium text-yellow-950">
                        {info.title}
                      </h3>
                      <p className="text-sm text-yellow-950 font-normal">
                        {info.content}
                      </p>
                      <p className="text-xs text-yellow-950">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-yellow-950 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Let's Catchup!</h1>
          <p className="text-xl text-blue-100">We'd love to hear from you.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
