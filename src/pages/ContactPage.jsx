import { useState } from 'react'
import { supabase } from '../lib/supabaseClient' 

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase
      .from('contact_requests')
      .insert([form])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setForm({ full_name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <>
      <nav className="border-b border-primary/10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight font-display" href="/">
                m<span style={{ color: "#E8200A" }}>ARK</span>it
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a className="hidden md:block text-sm font-medium">Reaching out to us...</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 font-display">
            Let's build your engine.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
            Tell us about your brand and what you want to automate.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  className="form-input w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none h-14 px-4 text-base placeholder:text-slate-400 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  className="form-input w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none h-14 px-4 text-base placeholder:text-slate-400 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold uppercase tracking-wider">
                Phone Number
              </label>
              <input
                className="form-input w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none h-14 px-4 text-base placeholder:text-slate-400 focus:outline-none transition-colors"
                placeholder="+91 - XXXXX XXXXX"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold uppercase tracking-wider">
                How can we help?
              </label>
              <textarea
                className="form-input w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none p-4 text-base placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project requirements..."
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <button
                className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-none hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Request'}
              </button>
            </div>

            {/* Success / Error messages */}
            {status === 'success' && (
              <p className="text-green-600 font-medium">
                ✅ Request sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </main>

      <footer className="border-t border-primary/10 bg-white dark:bg-slate-950 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <a className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight mb-4 font-display inline-block" href="/">
                m<span style={{ color: "#E8200A" }}>ARK</span>it
              </a>
              <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-6">
                <span style={{ fontSize: "14px" }}>Your brand. Our engine. Everywhere.</span>
              </p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">language</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">share</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">mail</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs">© 2024 mARKit Technologies. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-slate-400">
              <a className="hover:text-primary" href="#">Terms of Service</a>
              <a className="hover:text-primary" href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}