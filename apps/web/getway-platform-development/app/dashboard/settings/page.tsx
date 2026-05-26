import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Bell, Lock, User, Mail, Globe, LogOut } from 'lucide-react'

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Settings</h1>

        {/* Account Settings */}
        <div className="bg-card border border-border/40 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Account Settings</h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <input
                type="text"
                defaultValue="johndoe"
                className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bio
              </label>
              <textarea
                defaultValue="Passionate developer and entrepreneur"
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        {/* Email & Communication */}
        <div className="bg-card border border-border/40 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Email & Communication</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Email Preferences</h3>
              <div className="space-y-3">
                {[
                  { label: 'Opportunity notifications', enabled: true },
                  { label: 'Message notifications', enabled: true },
                  { label: 'Weekly digest', enabled: false },
                  { label: 'Marketing emails', enabled: false }
                ].map((pref, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={pref.enabled}
                      className="w-4 h-4 rounded border-border/40"
                    />
                    <span className="text-foreground/80">{pref.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Update Preferences
              </Button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border/40 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Desktop notifications', enabled: true },
              { label: 'Email notifications', enabled: true },
              { label: 'SMS notifications', enabled: false },
              { label: 'Push notifications', enabled: true }
            ].map((notif, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                <span className="text-foreground/80">{notif.label}</span>
                <div className={`w-12 h-6 rounded-full transition-colors ${notif.enabled ? 'bg-primary' : 'bg-muted'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-card border border-border/40 rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Privacy & Security</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Profile Visibility</h3>
              <select className="w-full px-4 py-2 bg-background border border-border/40 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Public (visible to everyone)</option>
                <option>Private (only connections can see)</option>
                <option>Hidden (no one can see)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className="w-4 h-4 rounded border-border/40"
                />
                <span className="text-foreground/80">Show my availability status</span>
              </label>
            </div>

            <div className="pt-6 border-t border-border/40">
              <h3 className="font-semibold text-foreground mb-4">Change Password</h3>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary/10">
                Update Password
              </Button>
            </div>

            <div className="pt-6 border-t border-border/40">
              <h3 className="font-semibold text-foreground mb-4">Two-Factor Authentication</h3>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary/10">
                Enable 2FA
              </Button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-card border border-destructive/40 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-destructive mb-6">Danger Zone</h2>

          <div className="space-y-4">
            <div className="p-4 bg-destructive/5 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Delete Account</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                Delete Account
              </Button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="flex gap-4 pt-6">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary/10">
            Cancel
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
