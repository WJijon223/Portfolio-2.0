import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        setIsLoading(false);
        alert("Sent!");
        setFormData({
          from_name: "",
          email_id: "",
          message: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        alert(JSON.stringify(err));
      });
  };

  return (
    <div
      className="px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24"
      id="contact"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 lg:mb-10 text-white">
        Connect with me!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg md:max-w-xl lg:max-w-2xl mx-auto space-y-4 md:space-y-5 lg:space-y-6"
      >
        <div className="space-y-1 md:space-y-2 lg:space-y-2">
          <label
            htmlFor="from_name"
            className="block text-white font-medium text-base md:text-lg lg:text-xl"
          >
            Name:
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg lg:text-xl"
            required
          />
        </div>

        <div className="space-y-1 md:space-y-2 lg:space-y-2">
          <label
            htmlFor="email_id"
            className="block text-white font-medium text-base md:text-lg lg:text-xl"
          >
            Email:
          </label>
          <input
            type="email"
            name="email_id"
            id="email_id"
            value={formData.email_id}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg lg:text-xl"
            required
          />
        </div>

        <div className="space-y-1 md:space-y-2 lg:space-y-2">
          <label
            htmlFor="message"
            className="block text-white font-medium text-base md:text-lg lg:text-xl"
          >
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Say something nice!"
            rows="5"
            className="w-full px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg lg:text-xl"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-slate-400 hover:bg-slate-500 disabled:bg-slate-300 text-white font-medium py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 rounded-lg transition-colors duration-200 text-base md:text-lg lg:text-xl"
        >
          {isLoading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
}
