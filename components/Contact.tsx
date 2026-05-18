import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Send } from 'lucide-react';

// ─── WhatsApp primary business number ─────────────────────────────────────────
// Format: country code + number, no spaces/dashes
const WHATSAPP_NUMBER = '919408411840'; // +91 94084 11840

// ─── Validation ────────────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ─── Component ─────────────────────────────────────────────────────────────────
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    if (!formData.name.trim())    newErrors.name    = 'Full name is required.';
    if (!formData.email.trim())   newErrors.email   = 'Email address is required.';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message text
    const text = [
      `Hello AUM Structural Consultants! 👋`,
      ``,
      `*Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Phone:* ${formData.phone.trim() || 'Not provided'}`,
      `*Subject:* ${formData.subject.trim()}`,
      ``,
      `*Message:*`,
      formData.message.trim(),
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ── Shared input class ─────────────────────────────────────────────────────
  const inputClass = (field: keyof typeof formData) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/10 transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/70 focus:border-red-400'
        : 'border-white/10 focus:border-aum-orange'
    }`;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white overflow-hidden mt-24 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] scroll-mt-28">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-aum-orange rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">

        {/* CTA Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-16 relative">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
              Ready to <span className="text-aum-orange">structure</span> <br /> your vision?
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-lg">
              Partner with AUM Consultants for engineering solutions that stand the test of time. Let's discuss your next project.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Column 1 — Brand + Nav */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-4xl font-bold font-heading tracking-tighter">AUM</h3>
              <p className="text-xs font-bold text-aum-orange tracking-[0.4em] uppercase mt-1">Structural Consultants</p>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              We define the skyline with safety, sustainability, and innovation. Precision engineering for residential, commercial, and industrial sectors.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin,  label: 'LinkedIn'  },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook,  label: 'Facebook'  },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="pt-8">
              <h4 className="text-lg font-bold font-heading mb-4">Explore</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Portfolio', 'Team'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="text-gray-400 hover:text-aum-orange transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 — Contact Info + Map */}
          <div className="lg:col-span-4 space-y-8 lg:pl-8">
            <h4 className="text-lg font-bold font-heading">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-aum-orange shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  D-418, Ganesh Glory 11,<br /> Jagatpur Rd, Gota,<br /> Ahmedabad, Gujarat 382470
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="text-aum-orange shrink-0 mt-1" size={20} />
                <div className="flex flex-col text-gray-400 text-sm gap-1">
                  <a href="tel:+919408411840" className="hover:text-white transition-colors">+91 94084 11840</a>
                  <a href="tel:+918401163977" className="hover:text-white transition-colors">+91 84011 63977</a>
                  <a href="tel:+918866232536" className="hover:text-white transition-colors">+91 88662 32536</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="text-aum-orange shrink-0 mt-1" size={20} />
                <a href="mailto:aumstructuraldesign@gmail.com"
                  className="text-gray-400 text-sm break-all hover:text-white transition-colors">
                  aumstructuraldesign@gmail.com
                </a>
              </li>
            </ul>

            {/* Map */}
            <div className="h-40 w-full rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 mt-8 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7640284458!2d72.5367!3d23.1062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f4c4c4c4b%3A0x4c4c4c4c4c4c4c4c!2sGanesh%20Glory%2011!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" title="Office Location"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Column 3 — Contact Form → WhatsApp */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-bold font-heading mb-1">Send us a Message</h4>
              <p className="text-gray-400 text-sm mb-6">
                Fill in the details below and click <strong className="text-white">Send Message</strong> — WhatsApp will open with your enquiry ready to send.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Full Name */}
                <div>
                  <input
                    id="contact-name" type="text" name="name" value={formData.name}
                    onChange={handleChange} placeholder="Full Name *" autoComplete="name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="contact-email" type="email" name="email" value={formData.email}
                      onChange={handleChange} placeholder="Email Address *" autoComplete="email"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      id="contact-phone" type="tel" name="phone" value={formData.phone}
                      onChange={handleChange} placeholder="Phone (optional)" autoComplete="tel"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    id="contact-subject" type="text" name="subject" value={formData.subject}
                    onChange={handleChange} placeholder="Subject * (e.g. Structural Design Inquiry)"
                    className={inputClass('subject')} list="subject-suggestions"
                  />
                  <datalist id="subject-suggestions">
                    <option value="Structural Design Inquiry" />
                    <option value="Project Consultation" />
                    <option value="Industrial Steel Structure" />
                    <option value="Retrofitting & Rehabilitation" />
                    <option value="BIM Documentation" />
                    <option value="General Enquiry" />
                  </datalist>
                  {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="contact-message" name="message" value={formData.message}
                    onChange={handleChange} placeholder="Tell us about your project requirements... *"
                    rows={4} className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>

                {/* WhatsApp Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1ebe5d] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  {/* WhatsApp SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.054 23.486a.5.5 0 0 0 .609.61l5.737-1.505A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 0 1-5.021-1.395l-.36-.214-3.735.979.995-3.635-.235-.374A9.709 9.709 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Send via WhatsApp
                  <Send size={16} />
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Opens WhatsApp with your message pre-filled. Works on mobile & desktop.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 relative text-xs text-gray-500 uppercase tracking-wider">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p>&copy; {new Date().getFullYear()} AUM Structural Consultants. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;