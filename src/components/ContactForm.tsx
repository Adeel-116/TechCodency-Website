'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaServicestack, FaComment } from 'react-icons/fa';
import GetStartedButton from '@/components/GetStartedButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Web Development & Design',
    'Mobile App Development',
    'E-commerce Solutions',
    'Digital Marketing & SEO',
    'Brand Identity & Design',
    'UI/UX Design',
    'Custom Software Development',
    'Social Media Management',
    'Content Marketing',
    'Other'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! (Check console)');
  };

  return (
    <section className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-5xl font-bold text-center text-[#C9F31D] mb-10">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/40 p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#9FEC1C]"><FaUser /> <span>Name</span></div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-4 bg-gray-800 rounded-xl text-white border border-gray-700 mt-2"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#9FEC1C]"><FaEnvelope /> <span>Email</span></div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-4 bg-gray-800 rounded-xl text-white border border-gray-700 mt-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9FEC1C]"><FaPhone /> <span>Phone</span></div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-4 bg-gray-800 rounded-xl text-white border border-gray-700 mt-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9FEC1C]"><FaServicestack /> <span>Service</span></div>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-800 rounded-xl text-white border border-gray-700 mt-2"
            >
              <option value="">Choose a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#9FEC1C]"><FaComment /> <span>Project Details</span></div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-4 bg-gray-800 rounded-xl text-white border border-gray-700 mt-2 resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <GetStartedButton
              buttonTitle="GET MY FREE QUOTE"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
