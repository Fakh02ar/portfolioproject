import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_20250620_service_id',     // 🔁 Replace with your EmailJS Service ID
        'template_20250620_template_id',    // 🔁 Replace with your Template ID
        formRef.current,
        'public_20250620_public_key'      // 🔁 Replace with your Public Key (API key)
      )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <div>
      {/* Title */}
      <div id="contact" className="text-center mt-32 px-4">
        <span className="uppercase montserrat font-bold text-[24px] sm:text-[30px] leading-[38px] tracking-[0.35538em] text-black border-[6px] sm:border-[10px] border-black px-6 sm:px-[65px] py-4 sm:py-[25px] inline-block">
          Contact me
        </span>
      </div>

      {/* Description */}
      <div className="mt-20 max-w-[600px] mx-auto">
        <p className="raleway leading-[30px] px-5 lg:px-0 tracking-[0.03em]">
          You can contact me via e-mail <span className="font-bold raleway">(fakharzm355@gmail.com)</span> or use the form below.
        </p>

        {/* Decorative Image */}
        <div className="flex justify-center">
          <img src="/Black.png" alt="decorative" className="mt-20" />
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-16 w-full space-y-10 px-4">
          {/* Input Fields */}
          {[
            { name: 'name', label: 'Enter your name*', type: 'text', required: true },
            { name: 'email', label: 'Enter your email*', type: 'email', required: true },
            { name: 'phone', label: 'Phone number', type: 'tel', required: false },
          ].map(({ name, label, type, required }) => (
            <div key={name} className="relative">
              <div className="absolute left-0 top-0 h-full w-[5px] bg-black" />
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
              <input
                type={type}
                name={name}
                required={required}
                value={formData[name]}
                onChange={handleChange}
                className="pl-4 pr-2 pt-2 pb-1 w-full bg-transparent outline-none text-gray-900 font-semibold tracking-wider uppercase"
              />
              {formData[name] === '' && (
                <label htmlFor={name} className="absolute left-4 top-1 text-sm text-gray-700 uppercase tracking-wider pointer-events-none">
                  {label}
                </label>
              )}
            </div>
          ))}

          {/* Textarea */}
          <div className="relative mb-1">
            <div className="absolute left-0 top-0 h-full w-[5px] bg-black" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="pl-4 pr-2 pt-2 pb-1 w-full bg-transparent outline-none text-gray-900 font-semibold tracking-wider resize-none uppercase"
            />
            {formData.message === '' && (
              <label htmlFor="message" className="absolute left-4 top-1 text-sm text-gray-700 uppercase tracking-wider pointer-events-none">
                Your message*
              </label>
            )}
          </div>

          {/* Note */}
          <p className="text-[12px] font-bold text-black">
            Fields marked with an asterisk must be filled.
          </p>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-4">
            <button type="submit" className="relative inline-block group cursor-pointer mt-5">
              <span className="border-l-3 border-r-3 text-center montserrat text-lg font-semibold px-8 py-2 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:rounded group-hover:border group-hover:border-black">
                Submit
              </span>
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-center mt-4 font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
