'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Camera, Mail, MapPin, Briefcase, Edit2, Check } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    title: 'Product Designer',
    bio: 'Passionate about creating beautiful and functional digital experiences.',
    location: 'San Francisco, CA',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
  })

  const [formData, setFormData] = useState(profile)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setProfile(formData)
    setIsEditing(false)
  }

  return (
    <DashboardLayout userRole="learner">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          My Profile
        </h1>
        <p className="text-foreground/60">
          Manage your profile and make a great impression.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-2xl space-y-6">
        {/* Avatar Section */}
        <div className="p-6 bg-card rounded-xl border border-border/40">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full flex items-center justify-center border-2 border-border">
                <Briefcase className="w-12 h-12 text-primary" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">
                {profile.name}
              </h2>
              <p className="text-foreground/60 mb-4">{profile.title}</p>
              <Button
                size="sm"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary/10"
                onClick={() => {
                  setIsEditing(!isEditing)
                  if (isEditing) setFormData(profile)
                }}
              >
                <Edit2 className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        {isEditing ? (
          <form className="space-y-6 p-6 bg-card rounded-xl border border-border/40">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Professional Title
              </label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                onClick={handleSave}
              >
                <Check className="w-4 h-4" />
                Save Changes
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary/10"
                onClick={() => {
                  setIsEditing(false)
                  setFormData(profile)
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <>
            {/* Info Cards */}
            <div className="p-6 bg-card rounded-xl border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
              <p className="text-foreground/70">{profile.bio}</p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="text-foreground">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="text-foreground">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
