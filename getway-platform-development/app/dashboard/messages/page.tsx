import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Search, Send, Phone, Video, Info } from 'lucide-react'

export default function Messages() {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Designer',
      initials: 'SC',
      lastMessage: 'When can you start the project?',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'CEO, TechStartup',
      initials: 'MJ',
      lastMessage: 'The proposal looks great!',
      time: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Project Manager',
      initials: 'ER',
      lastMessage: 'Looking forward to working together',
      time: '3 hours ago',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Developer',
      initials: 'DK',
      lastMessage: 'Thanks for the feedback on the code',
      time: 'Yesterday',
      unread: 1,
      online: false
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      avatar: 'User',
      message: 'Hi! I\'ve reviewed your portfolio and I\'m impressed with your work.',
      time: '10:30 AM',
      own: false
    },
    {
      id: 2,
      sender: 'You',
      message: 'Thank you! I\'d love to discuss the project details.',
      time: '10:35 AM',
      own: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      avatar: 'User',
      message: 'When can you start the project?',
      time: '10:42 AM',
      own: false
    }
  ]

  return (
    <DashboardLayout>
      <div className="h-full flex gap-6">
        {/* Conversations List */}
        <div className="w-full lg:w-80 bg-card border border-border/40 rounded-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-border/40">
            <h2 className="text-2xl font-bold text-foreground mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="overflow-y-auto flex-1">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 border-b border-border/40 hover:bg-background cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      {conv.initials}
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm">{conv.name}</h3>
                    <p className="text-xs text-foreground/60">{conv.role}</p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      {conv.unread}
                    </div>
                  )}
                </div>
                <p className="text-xs text-foreground/70 truncate">{conv.lastMessage}</p>
                <p className="text-xs text-foreground/50 mt-1">{conv.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="hidden lg:flex flex-1 flex-col bg-card border border-border/40 rounded-xl overflow-hidden">
          {/* Chat Header */}
          <div className="p-6 border-b border-border/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">👩‍</div>
              <div>
                <h3 className="font-bold text-foreground">Sarah Chen</h3>
                <p className="text-sm text-foreground/60">Product Designer • Online</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="hover:bg-secondary/10">
                <Phone className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-secondary/10">
                <Video className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-secondary/10">
                <Info className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-3 ${msg.own ? 'flex-row-reverse' : ''}`}
              >
                {!msg.own && <div className="text-2xl">{msg.avatar}</div>}
                <div className={`flex flex-col ${msg.own ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      msg.own
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border/40'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <p className="text-xs text-foreground/50 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-border/40">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="icon">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Empty State for Mobile */}
        <div className="lg:hidden flex-1 flex items-center justify-center bg-card border border-border/40 rounded-xl">
          <div className="text-center space-y-4">
            <p className="text-foreground/70">Select a conversation to continue chatting</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
