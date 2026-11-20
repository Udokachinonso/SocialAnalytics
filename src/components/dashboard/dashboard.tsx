"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChannelBreakdown } from "@/components/dashboard/channel-breakdown"
import { ContentPerformance } from "@/components/dashboard/content-performance"
import { chartDataByPeriod, metricsByPeriod, periods, type ReportingPeriod } from "@/components/dashboard/data"
import { MetricCard } from "@/components/dashboard/metric-card"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { ReportCard } from "@/components/dashboard/report-card"
import { Sidebar } from "@/components/dashboard/sidebar"

export function Dashboard() {
  const [period, setPeriod] = useState<ReportingPeriod>("30D")
  const [searchQuery, setSearchQuery] = useState("")
  const [exportMessage, setExportMessage] = useState("")
  const metrics = metricsByPeriod[period]

  function exportReport() {
    const rows = [
      ["Metric", "Value", "Change"],
      ...metrics.map(({ title, value, change }) => [title, value, change]),
      [],
      ["Date", "Instagram reach (K)", "TikTok reach (K)", "LinkedIn reach (K)"],
      ...chartDataByPeriod[period].map(({ date, instagram, tiktok, linkedin }) => [date, String(instagram), String(tiktok), String(linkedin)]),
    ]
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n")
    const downloadUrl = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = `socially-report-${period.toLowerCase()}.csv`
    link.click()
    URL.revokeObjectURL(downloadUrl)
    setExportMessage("Your report is ready to download.")
  }

  return (
    <div className="dashboard-app">
      <Sidebar />
      <div className="dashboard-main">
        <header className="topbar">
          <div className="topbar-breadcrumb">
            <span>North Studio</span>
            <span className="breadcrumb-slash">/</span>
            <strong>Overview</strong>
          </div>
          <div className="topbar-actions">
            <span className="demo-indicator"><span /> Sample data</span>
            <Button className="export-button" onClick={exportReport}>
              <Download data-icon="inline-start" aria-hidden="true" />
              Export report
            </Button>
          </div>
        </header>

        <main className="dashboard-content" id="overview">
          <div className="page-heading-row">
            <div className="page-heading">
              <p className="page-eyebrow">FRIDAY, NOVEMBER 20</p>
              <h1>Social overview</h1>
              <p className="page-description">A clear view of how your channels are growing.</p>
            </div>
            <div className="period-control" role="group" aria-label="Reporting period">
              {periods.map((item) => (
                <button
                  key={item}
                  className={`period-button${period === item ? " is-active" : ""}`}
                  type="button"
                  aria-pressed={period === item}
                  onClick={() => setPeriod(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <section className="metrics-grid" aria-label={`${period} key metrics`}>
            {metrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
          </section>

          <section className="overview-grid" aria-label="Performance overview">
            <PerformanceChart period={period} />
            <ChannelBreakdown />
          </section>

          <section className="bottom-grid" aria-label="Content and reporting">
            <div className="content-panel-wrap">
              <ContentPerformance query={searchQuery} onQueryChange={setSearchQuery} />
            </div>
            <ReportCard />
          </section>
          <p className="dashboard-footnote" role="status" aria-live="polite">{exportMessage}</p>
        </main>
      </div>
    </div>
  )
}
