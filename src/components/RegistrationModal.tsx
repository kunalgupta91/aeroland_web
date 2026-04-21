'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useLanguage } from '@/context/LanguageContext';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pocket: '',
    budget: '',
    message: '',
  });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ''));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);

    if (name === 'email') {
      setFieldErrors((prev) => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Enter a valid email address' : undefined,
      }));
    }
    if (name === 'phone') {
      setFieldErrors((prev) => ({
        ...prev,
        phone: value && !validatePhone(value) ? 'Enter a valid 10-digit Indian mobile number' : undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { email?: string; phone?: string } = {};
    if (!validateEmail(formData.email)) errors.email = 'Enter a valid email address';
    if (!validatePhone(formData.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number';
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/register', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pocket: formData.pocket || undefined,
        budget: formData.budget || undefined,
        message: formData.message || undefined,
      });

      if (response.data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', pocket: '', budget: '', message: '' });

        setTimeout(() => {
          onClose();
          router.push('/about');
        }, 2000);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="gradient-green p-6 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:opacity-80 transition"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold">Register Your Interest</h2>
                <p className="text-green-100 text-sm mt-1">Join us on the journey to Punjab's future</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">Registration Successful!</h3>
                    <p className="text-gray-600 text-sm">
                      Thank you for your interest. Redirecting to About...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        disabled={isLoading}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 disabled:bg-gray-100 ${fieldErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-green-500'}`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        required
                        disabled={isLoading}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 disabled:bg-gray-100 ${fieldErrors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-green-500'}`}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                      )}
                    </div>

                    {/* Pocket */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Pocket
                      </label>
                      <select
                        name="pocket"
                        value={formData.pocket}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                      >
                        <option value="">Select Pocket</option>
                        <option value="A">Pocket A (North - Dyalpur)</option>
                        <option value="B">Pocket B (South - Matran)</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Investment Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="below-20">Below 20 Lakhs</option>
                        <option value="20-50">20 - 50 Lakhs</option>
                        <option value="50-100">50 - 100 Lakhs</option>
                        <option value="above-100">Above 100 Lakhs</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your interests..."
                        disabled={isLoading}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full gradient-green text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Registering...' : 'Register Interest'}
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      * Required fields. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
