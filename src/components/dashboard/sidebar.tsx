import {
  BarChart3,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Settings2,
  Users,
} from "lucide-react"

const primaryLinks = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard, current: true },
  { label: "Analytics", href: "#analytics", icon: BarChart3 },
  { label: "Content", href: "#content", icon: FileText },
  { label: "Audience", href: "#audience", icon: Users },
  { label: "Reports", href: "#reports", icon: CircleHelp },
]

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Workspace navigation">
      <div className="sidebar-inner">
        <a className="brand-lockup" href="#overview" aria-label="Socially home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <span className="brand-name">socially</span>
            <span className="brand-caption">SOCIAL ANALYTICS</span>
          </span>
        </a>

        <button className="workspace-switcher" type="button" aria-label="Current workspace: North Studio">
          <span className="workspace-avatar">N</span>
          <span className="workspace-copy">
            <span className="workspace-label">Workspace</span>
            <span className="workspace-name">North Studio</span>
          </span>
          <span className="workspace-chevron" aria-hidden="true">⌄</span>
        </button>

        <div className="sidebar-section">
          <p className="sidebar-section-label">MENU</p>
          <nav className="primary-nav" aria-label="Primary navigation">
            {primaryLinks.map(({ label, href, icon: Icon, current }) => (
              <a
                key={label}
                className={`sidebar-link${current ? " is-current" : ""}`}
                href={href}
                aria-current={current ? "page" : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-section channels-nav-section">
          <div className="sidebar-section-heading">
            <p className="sidebar-section-label">CHANNELS</p>
            <span className="channel-count">3</span>
          </div>
          <a className="sidebar-channel-link" href="#accounts">
            <span className="sidebar-channel-dot instagram-dot" />
            <span>Instagram</span>
            <span className="connected-dot" aria-label="Connected" />
          </a>
          <a className="sidebar-channel-link" href="#accounts">
            <span className="sidebar-channel-dot tiktok-dot" />
            <span>TikTok</span>
            <span className="connected-dot" aria-label="Connected" />
          </a>
          <a className="sidebar-channel-link" href="#accounts">
            <span className="sidebar-channel-dot linkedin-dot" />
            <span>LinkedIn</span>
            <span className="connected-dot" aria-label="Connected" />
          </a>
        </div>

        <div className="sidebar-bottom">
          <a className="sidebar-link utility-link" href="#reports">
            <Settings2 aria-hidden="true" />
            <span>Settings</span>
          </a>
          <div className="sidebar-profile">
            <span className="profile-avatar" aria-hidden="true">AM</span>
            <span className="profile-copy">
              <span className="profile-name">Alex Morgan</span>
              <span className="profile-role">Social lead</span>
            </span>
            <span className="profile-menu" aria-hidden="true">•••</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
