"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  chartDataByPeriod,
  type ChannelKey,
  type ReportingPeriod,
} from "@/components/dashboard/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const channelConfig = {
  instagram: { label: "Instagram", color: "var(--chart-1)" },
  tiktok: { label: "TikTok", color: "var(--chart-2)" },
  linkedin: { label: "LinkedIn", color: "var(--chart-3)" },
} satisfies ChartConfig

const channelKeys: ChannelKey[] = ["instagram", "tiktok", "linkedin"]

export function PerformanceChart({ period }: { period: ReportingPeriod }) {
  const [visibleChannels, setVisibleChannels] = useState<ChannelKey[]>(channelKeys)
  const chartData = chartDataByPeriod[period]

  function toggleChannel(channel: ChannelKey) {
    setVisibleChannels((current) => {
      if (current.includes(channel)) {
        return current.length === 1 ? current : current.filter((item) => item !== channel)
      }
      return [...current, channel]
    })
  }

  return (
    <Card className="dashboard-card performance-card" id="analytics">
      <CardHeader className="section-card-header">
        <div>
          <div className="section-kicker">PERFORMANCE</div>
          <CardTitle className="section-card-title">Reach over time</CardTitle>
          <CardDescription className="section-card-description">
            Daily reach across your connected channels
          </CardDescription>
        </div>
        <span className="chart-metric-badge">Reach</span>
      </CardHeader>
      <CardContent className="performance-card-content">
        <div className="chart-summary-row">
          <div className="chart-total">
            <span className="chart-total-value">{period === "7D" ? "84.2K" : period === "90D" ? "712.4K" : "248.6K"}</span>
            <span className="chart-total-caption">total reach</span>
          </div>
          <span className="chart-trend">
            <ArrowUpRight aria-hidden="true" /> {period === "7D" ? "12.8%" : period === "90D" ? "21.6%" : "18.2%"}
            <span>vs. previous period</span>
          </span>
        </div>
        <ChartContainer config={channelConfig} className="performance-chart">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 12, right: 8, left: -16, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 5" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              minTickGap={18}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tickCount={5}
              domain={[0, "dataMax + 8"]}
              tickFormatter={(value: number) => `${value}K`}
            />
            <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => `${Number(value).toFixed(1)}K`}
                />
              }
            />
            {channelKeys.map((channel) =>
              visibleChannels.includes(channel) ? (
                <Line
                  key={channel}
                  type="monotone"
                  dataKey={channel}
                  stroke={`var(--color-${channel})`}
                  strokeWidth={2.5}
                  isAnimationActive={false}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              ) : null
            )}
          </LineChart>
        </ChartContainer>
        <div className="chart-legend" role="group" aria-label="Show or hide channels">
          {channelKeys.map((channel) => (
            <button
              className={`legend-toggle${visibleChannels.includes(channel) ? " is-visible" : ""}`}
              key={channel}
              type="button"
              aria-pressed={visibleChannels.includes(channel)}
              onClick={() => toggleChannel(channel)}
            >
              <span className={`legend-dot ${channel}-dot`} />
              {channelConfig[channel].label}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
