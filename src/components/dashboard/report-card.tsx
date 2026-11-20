import { ArrowRight, CalendarDays, Check, Clock3, Sparkles } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ReportCard() {
  return (
    <Card className="dashboard-card report-card" id="reports">
      <CardHeader className="section-card-header report-card-header">
        <div>
          <div className="section-kicker">WEEKLY SNAPSHOT</div>
          <CardTitle className="section-card-title">A week in a glance</CardTitle>
        </div>
        <span className="report-sparkle" aria-hidden="true"><Sparkles /></span>
      </CardHeader>
      <CardContent className="report-card-content">
        <CardDescription className="report-description">
          Your audience showed up. Reach grew across every channel this week.
        </CardDescription>
        <div className="report-highlight">
          <span className="report-highlight-icon" aria-hidden="true"><Check /></span>
          <div>
            <span className="report-highlight-value">+18.2%</span>
            <span className="report-highlight-label">reach compared to last week</span>
          </div>
        </div>
        <div className="report-meta-row">
          <span><CalendarDays aria-hidden="true" /> Every Monday</span>
          <span><Clock3 aria-hidden="true" /> 9:00 AM</span>
        </div>
        <a className="report-link" href="#reports">
          Explore your report <ArrowRight aria-hidden="true" />
        </a>
      </CardContent>
    </Card>
  )
}
