export type ReportingPeriod = "7D" | "30D" | "90D"
export type ChannelKey = "instagram" | "tiktok" | "linkedin"

export const periods: ReportingPeriod[] = ["7D", "30D", "90D"]

export const metricsByPeriod: Record<ReportingPeriod, Array<{
  title: string
  value: string
  change: string
  note: string
  icon: "reach" | "engagement" | "followers" | "clicks"
}>> = {
  "7D": [
    { title: "Total reach", value: "84.2K", change: "+12.8%", note: "vs. previous 7 days", icon: "reach" },
    { title: "Engagement rate", value: "6.24%", change: "+0.8%", note: "vs. previous 7 days", icon: "engagement" },
    { title: "New followers", value: "824", change: "+9.6%", note: "vs. previous 7 days", icon: "followers" },
    { title: "Link clicks", value: "3,104", change: "+15.2%", note: "vs. previous 7 days", icon: "clicks" },
  ],
  "30D": [
    { title: "Total reach", value: "248.6K", change: "+18.2%", note: "vs. previous 30 days", icon: "reach" },
    { title: "Engagement rate", value: "5.84%", change: "+0.7%", note: "vs. previous 30 days", icon: "engagement" },
    { title: "New followers", value: "2,845", change: "+12.4%", note: "vs. previous 30 days", icon: "followers" },
    { title: "Link clicks", value: "12,408", change: "+8.6%", note: "vs. previous 30 days", icon: "clicks" },
  ],
  "90D": [
    { title: "Total reach", value: "712.4K", change: "+21.6%", note: "vs. previous 90 days", icon: "reach" },
    { title: "Engagement rate", value: "5.61%", change: "+0.4%", note: "vs. previous 90 days", icon: "engagement" },
    { title: "New followers", value: "7,903", change: "+16.8%", note: "vs. previous 90 days", icon: "followers" },
    { title: "Link clicks", value: "34,082", change: "+10.3%", note: "vs. previous 90 days", icon: "clicks" },
  ],
}

export const chartDataByPeriod: Record<ReportingPeriod, Array<{
  date: string
  instagram: number
  tiktok: number
  linkedin: number
}>> = {
  "7D": [
    { date: "Nov 14", instagram: 12, tiktok: 9, linkedin: 5 },
    { date: "Nov 15", instagram: 14, tiktok: 11, linkedin: 6 },
    { date: "Nov 16", instagram: 13, tiktok: 10, linkedin: 7 },
    { date: "Nov 17", instagram: 17, tiktok: 13, linkedin: 7 },
    { date: "Nov 18", instagram: 16, tiktok: 15, linkedin: 8 },
    { date: "Nov 19", instagram: 21, tiktok: 16, linkedin: 9 },
    { date: "Nov 20", instagram: 24, tiktok: 18, linkedin: 10 },
  ],
  "30D": [
    { date: "Oct 22", instagram: 18, tiktok: 13, linkedin: 8 },
    { date: "Oct 26", instagram: 21, tiktok: 14, linkedin: 9 },
    { date: "Oct 30", instagram: 19, tiktok: 18, linkedin: 10 },
    { date: "Nov 03", instagram: 25, tiktok: 20, linkedin: 11 },
    { date: "Nov 07", instagram: 24, tiktok: 18, linkedin: 13 },
    { date: "Nov 11", instagram: 31, tiktok: 23, linkedin: 15 },
    { date: "Nov 15", instagram: 29, tiktok: 26, linkedin: 16 },
    { date: "Nov 20", instagram: 38, tiktok: 29, linkedin: 18 },
  ],
  "90D": [
    { date: "Aug 23", instagram: 16, tiktok: 12, linkedin: 8 },
    { date: "Sep 02", instagram: 20, tiktok: 14, linkedin: 9 },
    { date: "Sep 12", instagram: 18, tiktok: 17, linkedin: 10 },
    { date: "Sep 22", instagram: 25, tiktok: 18, linkedin: 11 },
    { date: "Oct 02", instagram: 24, tiktok: 21, linkedin: 13 },
    { date: "Oct 12", instagram: 29, tiktok: 23, linkedin: 14 },
    { date: "Oct 22", instagram: 27, tiktok: 24, linkedin: 16 },
    { date: "Nov 01", instagram: 34, tiktok: 27, linkedin: 17 },
    { date: "Nov 10", instagram: 32, tiktok: 29, linkedin: 18 },
    { date: "Nov 20", instagram: 42, tiktok: 34, linkedin: 21 },
  ],
}

export const channelBreakdown: Array<{
  key: ChannelKey
  name: string
  handle: string
  reach: string
  share: number
  change: string
}> = [
  { key: "instagram", name: "Instagram", handle: "@northstudio", reach: "114.8K", share: 46, change: "+22.4%" },
  { key: "tiktok", name: "TikTok", handle: "@north.studio", reach: "82.6K", share: 33, change: "+16.1%" },
  { key: "linkedin", name: "LinkedIn", handle: "North Studio", reach: "51.2K", share: 21, change: "+11.8%" },
]

export const topPosts = [
  { id: "studio-day", title: "A little more color in your everyday", channel: "Instagram", key: "instagram" as const, reach: "64.2K", engagement: "8.4%", published: "2 days ago", marker: "01" },
  { id: "launch-notes", title: "Three lessons from our latest launch", channel: "LinkedIn", key: "linkedin" as const, reach: "28.1K", engagement: "6.2%", published: "3 days ago", marker: "02" },
  { id: "behind-scenes", title: "Come spend a morning at the studio", channel: "TikTok", key: "tiktok" as const, reach: "42.8K", engagement: "7.9%", published: "4 days ago", marker: "03" },
]
