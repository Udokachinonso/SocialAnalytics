import {
  ArrowDownToLine,
  Eye,
  Heart,
  MousePointer2,
  UsersRound,
  type LucideIcon,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const metricIcons: Record<string, LucideIcon> = {
  reach: Eye,
  engagement: Heart,
  followers: UsersRound,
  clicks: MousePointer2,
}

export function MetricCard({
  title,
  value,
  change,
  note,
  icon,
}: {
  title: string
  value: string
  change: string
  note: string
  icon: string
}) {
  const Icon = metricIcons[icon] ?? ArrowDownToLine

  return (
    <Card className="metric-card">
      <CardHeader className="metric-card-header">
        <CardTitle className="metric-card-title">{title}</CardTitle>
        <span className="metric-icon-wrap" aria-hidden="true">
          <Icon />
        </span>
      </CardHeader>
      <CardContent className="metric-card-content">
        <div className="metric-value">{value}</div>
        <div className="metric-change-row">
          <span className="metric-change">{change}</span>
          <span className="metric-note">{note}</span>
        </div>
      </CardContent>
    </Card>
  )
}
