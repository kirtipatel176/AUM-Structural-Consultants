import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowUpRight, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        throw new Error('Google Script URL not configured');
      }

      // Use text/plain to avoid CORS preflight, but send JSON content.
      // Google Apps Script can parse this if we handle e.postData.contents.
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.result !== 'success') {
        throw new Error('Script returned error: ' + JSON.stringify(result));
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error details:', error);
      setStatus('error');
      // Keep error visible longer for debugging if needed, or indefinitely until retry
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white overflow-hidden mt-24 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] scroll-mt-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-aum-orange rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[150px]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">

        {/* Header / CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-16 relative">
          {/* Elegant Gradient Separator */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
              Ready to <span className="text-aum-orange">structure</span> <br /> your vision?
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-lg">
              Partner with AUM Consultants for engineering solutions that stand the test of time. Let's discuss your next project.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <a href="mailto:AUMSTRUCTURALDESIGN@GMAIL.COM" className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-aum-orange hover:text-white transition-all duration-300">
              Get a Quote
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Column 1: Brand (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-4xl font-bold font-heading tracking-tighter">AUM</h3>
              <p className="text-xs font-bold text-aum-orange tracking-[0.4em] uppercase mt-1">Structural Consultants</p>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              We define the skyline with safety, sustainability, and innovation. Precision engineering for residential, commercial, and industrial sectors.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-bold font-heading mb-4">Explore</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Portfolio', 'Team'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-aum-orange transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Contact Info (Span 4) */}
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
                <div className="flex flex-col text-gray-400 text-sm">
                  <a href="tel:+919408411840" className="hover:text-white transition-colors">+91 94084 11840</a>
                  <a href="tel:+918401163977" className="hover:text-white transition-colors">+91 84011 63977</a>
                  <a href="tel:+918866232536" className="hover:text-white transition-colors">+91 88662 32536</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="text-aum-orange shrink-0 mt-1" size={20} />
                <a href="mailto:AUMSTRUCTURALDESIGN@GMAIL.COM" className="text-gray-400 text-sm break-all hover:text-white transition-colors">AUMSTRUCTURALDESIGN@GMAIL.COM</a>
              </li>
            </ul>

            {/* Map Preview */}
            <div className="h-40 w-full rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 mt-8 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7640284458!2d72.5367!3d23.1062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f4c4c4c4b%3A0x4c4c4c4c4c4c4c4c!2sGanesh%20Glory%2011!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Column 3: Contact Form (Span 5) */}
          <div className="lg:col-span-5 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-xl font-bold font-heading mb-2">Send us a Message</h4>
            <p className="text-gray-400 text-sm mb-6">Fill out the form below and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-aum-orange focus:bg-white/10 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-aum-orange focus:bg-white/10 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-aum-orange focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-aum-orange focus:bg-white/10 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-aum-orange hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    Failed. Try Again.
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-xs text-center mt-2">Thank you! We will contact you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs text-center mt-2">
                  Something went wrong. Please check your connection or try again later.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 relative text-xs text-gray-500 uppercase tracking-wider">
          {/* Elegant Gradient Separator */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

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