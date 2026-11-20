import { ArrowUpRight, Instagram, Linkedin, Music2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { channelBreakdown } from "@/components/dashboard/data"

const channelIcons = {
  instagram: Instagram,
  tiktok: Music2,
  linkedin: Linkedin,
}

export function ChannelBreakdown() {
  return (
    <Card className="dashboard-card channels-card" id="audience">
      <CardHeader className="section-card-header">
        <div>
          <div className="section-kicker">YOUR AUDIENCE</div>
          <CardTitle className="section-card-title">Channel mix</CardTitle>
          <CardDescription className="section-card-description">
            Reach by connected channel
          </CardDescription>
        </div>
        <a className="text-link" href="#accounts" aria-label="Manage connected accounts">
          Manage
        </a>
      </CardHeader>
      <CardContent className="channel-list" id="accounts">
        {channelBreakdown.map((channel) => {
          const Icon = channelIcons[channel.key]
          return (
            <div className="channel-row" key={channel.key}>
              <div className="channel-row-top">
                <div className="channel-identity">
                  <span className={`channel-icon ${channel.key}-surface`} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="channel-name-group">
                    <span className="channel-name">{channel.name}</span>
                    <span className="channel-handle">{channel.handle}</span>
                  </span>
                </div>
                <span className="channel-reach">{channel.reach}</span>
              </div>
              <div
                className="channel-progress-track"
                role="progressbar"
                aria-label={`${channel.name} share of total reach`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={channel.share}
              >
                <span
                  className={`channel-progress-fill ${channel.key}-fill`}
                  style={{ width: `${channel.share}%` }}
                />
              </div>
              <div className="channel-row-bottom">
                <span>{channel.share}% of total reach</span>
                <span className="channel-change"><ArrowUpRight aria-hidden="true" /> {channel.change}</span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
