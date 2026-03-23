import AppShell from "@/components/AppShell";
import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Home" },
  { href: "/discussion", label: "District Discussions" },
  { href: "/representatives", label: "Representatives" },
];

export default function CitizenDashboard() {
  return (
    <AppShell title="CivixOS" nav={nav} current="/dashboard">
      <div className="card">
        <h1 className="hero-title">Citizen Dashboard</h1>
        <p className="hero-sub">District: TX-12 · Your voice matters in shaping local policy.</p>
      </div>

      <div className="grid-4" style={{ marginTop: 24 }}>
        <div className="card"><div className="kpi">Active Discussions</div><div className="kpi-value">23</div></div>
        <div className="card"><div className="kpi">New Posts Today</div><div className="kpi-value">12</div></div>
        <div className="card"><div className="kpi">Upcoming Civic Events</div><div className="kpi-value">2</div></div>
        <div className="card"><div className="kpi">District Participation</div><div className="kpi-value">High</div></div>
      </div>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Trending Discussions</h2>
          <div className="post" style={{ marginTop: 12 }}>
            <strong>Public Transportation Expansion</strong>
            <p className="muted">Posts: 54 · Participants: 32</p>
            <Link href="/discussion"><button className="btn btn-primary">Join Discussion</button></Link>
          </div>
        </div>
        <div className="card">
          <h2>Quick Actions</h2>
          <div className="actions" style={{ marginTop: 12 }}>
            <Link href="/discussion"><button className="btn btn-primary">Start Discussion</button></Link>
            <Link href="/representatives"><button className="btn btn-purple">My Representatives</button></Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
