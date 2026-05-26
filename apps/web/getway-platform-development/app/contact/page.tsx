import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'support@getway.com',
              subtext: 'We reply within 24 hours'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+1 (555) 123-4567',
              subtext: 'Mon - Fri, 9am - 6pm PST'
            },
            {
              icon: MapPin,
              title: 'Location',
              content: 'San Francisco, USA',
              subtext: 'Headquarters'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-card border border-border/40 rounded-xl p-8 text-center hover:border-secondary/40 transition-all">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-2">
                  {item.content}
                </p>
                <p className="text-sm text-foreground/60">
                  {item.subtext}
                </p>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-card border border-border/40 rounded-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              >
                <option value="">Select a category</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border-border/40"
                required
              />
              <label htmlFor="terms" className="text-sm text-foreground/70">
                I agree to the privacy policy and terms of service
              </label>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold inline-flex items-center justify-center gap-2"
              type="submit"
            >
              Send Message
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card border-y border-border/40 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the response time for inquiries?',
                a: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our support line.'
              },
              {
                q: 'Do you offer technical support?',
                a: 'Yes, we have a dedicated technical support team available to help with platform issues and questions.'
              },
              {
                q: 'Can I schedule a call with someone from your team?',
                a: 'Absolutely! Email us and we can arrange a time that works for you.'
              },
              {
                q: 'Do you offer partnerships or integrations?',
                a: 'We\'re always interested in partnership opportunities. Please reach out with details about your proposal.'
              },
              {
                q: 'What languages do you support?',
                a: 'Currently, we support English and French. We\'re working on adding more languages soon.'
              }
            ].map((item, index) => (
              <details key={index} className="group border-b border-border/40 pb-6 last:border-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {item.q}
                  </h3>
                  <span className="text-primary transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="text-foreground/70 mt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
