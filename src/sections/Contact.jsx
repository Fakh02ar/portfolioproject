import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
          If you are interested in cooperation or would like to hire me for your project - please contact me by e-mail{' '}
          <span className="font-bold raleway">(fakharzm355@gmail.com)</span> or use the form below.
        </p>

        {/* Decorative Image */}
        <div className="flex justify-center">
          <img src="/Black.png" alt="decorative" className="mt-20" />
        </div>

        {/* Contact Form */}
        <form className="mt-16 w-full space-y-10 px-4">
          {/* Input Fields */}
          {[
            { id: 'name', label: 'Enter your name*', type: 'text', required: true },
            { id: 'email', label: 'Enter your email*', type: 'email', required: true },
            { id: 'phone', label: 'Phone number', type: 'tel', required: false },
          ].map(({ id, label, type, required }) => (
            <div key={id} className="relative">
              <div className="absolute left-0 top-0 h-full w-[5px] bg-black" />
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />

              <input
                type={type}
                id={id}
                required={required}
                value={formData[id]}
                onChange={handleChange}
                className="pl-4 pr-2 pt-2 pb-1 w-full bg-transparent outline-none text-gray-900 font-semibold tracking-wider uppercase"
              />
              {formData[id] === '' && (
                <label
                  htmlFor={id}
                  className="absolute left-4 top-1 text-sm text-gray-700 uppercase tracking-wider pointer-events-none"
                >
                  {label}
                </label>
              )}
            </div>
          ))}

          {/* Textarea Field */}
          <div className="relative mb-1">
            <div className="absolute left-0 top-0 h-full w-[5px] bg-black" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="pl-4 pr-2 pt-2 pb-1 w-full bg-transparent outline-none text-gray-900 font-semibold tracking-wider resize-none uppercase"
            />
            {formData.message === '' && (
              <label
                htmlFor="message"
                className="absolute left-4 top-1 text-sm text-gray-700 uppercase tracking-wider pointer-events-none"
              >
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
