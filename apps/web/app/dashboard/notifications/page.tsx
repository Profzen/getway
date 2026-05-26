import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Bell, MessageSquare, Star, CheckCircle, AlertCircle, Heart, Trash2 } from 'lucide-react'

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'message',
      icon: MessageSquare,
      title: 'New message from Sarah Chen',
      description: 'Sarah replied to your project proposal',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'opportunity',
      icon: Star,
      title: 'New opportunity matched for you',
      description: 'Web Developer needed - $50/hr',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'review',
      icon: Heart,
      title: 'You received a 5-star review',
      description: 'Marcus Johnson reviewed your service',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'project',
      icon: CheckCircle,
      title: 'Project completion deadline approaching',
      description: 'Mobile App Development - Due in 2 days',
      time: '5 hours ago',
      unread: false
    },
    {
      id: 5,
      type: 'alert',
      icon: AlertCircle,
      title: 'Payment received',
      description: 'You received $2,500 for Web Development project',
      time: '1 day ago',
      unread: false
    },
    {
      id: 6,
      type: 'opportunity',
      icon: Star,
      title: 'Your profile was viewed 12 times',
      description: 'Growing interest in your services!',
      time: '2 days ago',
      unread: false
    }
  ]

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        {/* Header with Actions */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary/10" size="sm">
              Mark all as read
            </Button>
          </div>
        </div>

        {/* Notification Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Messages', 'Opportunities', 'Reviews', 'Payments'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border/40 text-foreground hover:border-secondary/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notif) => {
            const Icon = notif.icon
            return (
              <div
                key={notif.id}
                className={`p-6 rounded-xl border transition-all flex items-start gap-4 ${
                  notif.unread
                    ? 'bg-primary/5 border-primary/40'
                    : 'bg-card border-border/40 hover:border-secondary/40'
                }`}
              >
                {/* Icon */}
                <div
                  className={`p-3 rounded-lg flex-shrink-0 ${
                    notif.unread
                      ? 'bg-primary/20'
                      : 'bg-background'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${notif.unread ? 'text-primary' : 'text-foreground/60'}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`font-semibold ${notif.unread ? 'text-foreground' : 'text-foreground/80'}`}>
                        {notif.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        {notif.description}
                      </p>
                      <p className="text-xs text-foreground/50 mt-2">
                        {notif.time}
                      </p>
                    </div>
                    {notif.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    )}
                  </div>
                </div>

                {/* Actions */}
                <button
                  className="p-2 hover:bg-background rounded-lg transition-colors flex-shrink-0"
                  title="Delete notification"
                >
                  <Trash2 className="w-4 h-4 text-foreground/50 hover:text-foreground" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Notification Settings Info */}
        <div className="mt-12 p-6 bg-card border border-border/40 rounded-xl">
          <h3 className="font-bold text-foreground mb-4">Notification Settings</h3>
          <p className="text-foreground/70 mb-4">
            You can customize your notification preferences in your account settings.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="/dashboard/settings">Go to Settings</a>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
