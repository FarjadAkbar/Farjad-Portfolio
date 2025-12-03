"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import { BsEnvelope, BsTelephone, BsClock, BsArrowRight, BsWhatsapp } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";
import BookingModal from "@/components/booking-modal";
import Image from "next/image";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Grid Pattern Layer */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(180, 180, 180, 0.2) 1px, transparent 1px), linear-gradient(rgba(180, 180, 180, 0.2) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
                backgroundPosition: "center center",
              }}
            ></div>
            
            {/* Pattern Image Layer */}
            <div
              className="absolute inset-0 w-full h-full opacity-40"
              style={{
                backgroundImage: `url('/pattren.png')`,
                backgroundSize: "30px 30px",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
              }}
            ></div>
            
            {/* Radial Gradient Overlay for Content Highlight */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: `radial-gradient(70% 70% at center, transparent 0%, transparent 10%, rgba(255, 255, 255, 0.14) 25%, rgba(255, 255, 255, 0.333) 40%, rgba(255, 255, 255, 0.57) 60%, rgba(255, 255, 255, 0.808) 80%, rgba(255, 255, 255, 0.95) 100%)`,
              }}
            ></div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center" style={{ zIndex: 1 }}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Let's Build Your Digital Presence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to launch a website that generates real leads? I'm here to help. Book a free strategy call or reach out directly.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fast Response Time</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Expert Freelancer</p>
                    <p className="text-sm text-gray-600">4+ years of experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Global Reach</p>
                    <p className="text-sm text-gray-600">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
                >
                  Book Discovery Call
                  <BsArrowRight className="group-hover:translate-x-1 transition" />
                </button>
                <a
                  href="#contact-form"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition flex items-center justify-center gap-2"
                >
                  Send Us a Message
                  <BsArrowRight />
                </a>
              </div>
              </motion.div>
            </div>
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/id/30/800/600"
                alt="Contact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <motion.div
            className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-orange-300 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsEnvelope className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Drop us a line</p>
            <a
              href="mailto:farjadakbar4@gmail.com"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition"
            >
              Send Email
              <BsArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-orange-300 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsWhatsapp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Chat with us directly</p>
            <a
              href="https://wa.me/+923312740314?text=Hi!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition"
            >
              Start Chat
              <BsArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-orange-300 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsClock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Available via appointment</p>
            <a
              href="tel:+923312740314"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition"
            >
              +923312740314
              <BsTelephone />
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <form
            ref={formRef}
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              formRef.current?.reset();
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                budget: "",
                inquiryType: "",
                message: "",
              });
              
              if (error) {
                toast.error(error);
                return;
              }
              if (data) {
                toast.success("Email sent successfully!");
              }
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="senderName"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="senderEmail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                  Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $3,000">Under $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                  <option value="$20,000+">$20,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                What can we help you with? *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition"
              >
                <option value="">Select inquiry type</option>
                <option value="New Project Inquiry">New Project Inquiry</option>
                <option value="AI-Powered Features & Chatbots">AI-Powered Features & Chatbots</option>
                <option value="Dashboard & SaaS Development">Dashboard & SaaS Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Partnership Opportunity">Partnership Opportunity</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support & Maintenance">Support & Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                minLength={20}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition resize-none"
                placeholder="Tell us more about your inquiry, goals, timeline, or any specific questions..."
              />
              <p className="text-sm text-gray-500 mt-2">Minimum 20 characters</p>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Send Message
                <BsArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-orange-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600">Here's what you can expect when you reach out to us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600">
                We'll get back to you within 24 hours to understand your project needs and goals
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Call</h3>
              <p className="text-gray-600">
                Schedule a free consultation to discuss your vision, timeline, and budget
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Proposal</h3>
              <p className="text-gray-600">
                Receive a detailed proposal with timeline, deliverables, and custom pricing tailored to your project scope
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
