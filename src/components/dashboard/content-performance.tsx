"use client"

import { useMemo } from "react"
import { ArrowUpRight, Instagram, Linkedin, Music2, Search } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { topPosts } from "@/components/dashboard/data"

const channelIcons = {
  instagram: Instagram,
  tiktok: Music2,
  linkedin: Linkedin,
}

export function ContentPerformance({ query, onQueryChange }: { query: string; onQueryChange: (value: string) => void }) {
  const filteredPosts = useMemo(
    () => topPosts.filter((post) => `${post.title} ${post.channel}`.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )

  return (
    <Card className="dashboard-card content-card" id="content">
      <CardHeader className="section-card-header content-card-header">
        <div>
          <div className="section-kicker">CONTENT</div>
          <CardTitle className="section-card-title">Top performing posts</CardTitle>
          <CardDescription className="section-card-description">
            What resonated with your audience
          </CardDescription>
        </div>
        <a className="text-link" href="#content" aria-label="View all content">
          View all <ArrowUpRight aria-hidden="true" />
        </a>
      </CardHeader>
      <CardContent className="content-card-content">
        <label className="content-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Search top performing content</span>
          <input
            type="search"
            aria-label="Search top performing content"
            placeholder="Search posts"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
        <div className="post-list" role="list" aria-label="Top performing posts">
          {filteredPosts.length > 0 ? filteredPosts.map((post) => {
            const Icon = channelIcons[post.key]
            return (
              <div className="post-row" role="listitem" key={post.id}>
                <div className={`post-thumbnail ${post.key}-thumb`} aria-hidden="true">
                  <span>{post.marker}</span>
                </div>
                <div className="post-main">
                  <span className="post-title">{post.title}</span>
                  <span className="post-channel">
                    <Icon aria-hidden="true" /> {post.channel} <span className="post-separator">·</span> {post.published}
                  </span>
                </div>
                <div className="post-stat">
                  <span className="post-stat-value">{post.reach}</span>
                  <span className="post-stat-label">reach</span>
                </div>
                <div className="post-stat engagement-stat">
                  <span className="post-stat-value">{post.engagement}</span>
                  <span className="post-stat-label">engagement</span>
                </div>
              </div>
            )
          }) : (
            <p className="empty-search">No posts match that search.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
