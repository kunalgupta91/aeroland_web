'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white';

  return (
    <div className="pt-16">
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {c.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {c.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-green-200 mt-3 max-w-xl mx-auto text-sm"
        >
          {c.description}
        </motion.p>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{c.form.success}</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Our team will reach out within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                    className="text-green-600 text-sm font-semibold underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { field: 'name',  label: c.form.name,  type: 'text',  required: true },
                    { field: 'email', label: c.form.email, type: 'email', required: true },
                    { field: 'phone', label: c.form.phone, type: 'tel',   required: false },
                  ].map(({ field, label, type, required }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {label} {required && <span className="text-green-600">*</span>}
                      </label>
                      <input
                        type={type}
                        required={required}
                        value={(form as Record<string, string>)[field]}
                        onChange={set(field)}
                        className={inputClass}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {c.form.message}
                    </label>
                    <textarea
                      rows={5}
                      placeholder={c.form.message_placeholder}
                      value={form.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-sm hover:bg-green-800 transition-colors flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100"
                  >
                    <FiSend /> {c.form.submit}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="bg-green-900 text-white rounded-2xl p-8">
                <h3 className="text-green-300 font-bold text-sm uppercase tracking-wider mb-5">
                  {c.info.authority}
                </h3>
                {[
                  { icon: <FiMapPin />, text: c.info.address },
                  { icon: <FiMail />,   text: c.info.email   },
                  { icon: <FiPhone />,  text: c.info.phone   },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-green-100">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h4 className="font-bold text-green-900 mb-2">⏱ Response Time</h4>
                <p className="text-sm text-gray-600">
                  Our team typically responds within 24–48 working hours.
                  For urgent inquiries, please call directly.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h4 className="font-bold text-green-900 mb-3">📋 What to Expect</h4>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  {[
                    'Detailed project brochure via email',
                    'Plot availability update for Pocket A & B',
                    'Exclusive investor briefing call',
                    'Site visit arrangement',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
