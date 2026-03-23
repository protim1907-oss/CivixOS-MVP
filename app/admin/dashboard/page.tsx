import AppShell from "@/components/AppShell";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/dashboard", label: "User Management" },
  { href: "/admin/dashboard", label: "Moderation Oversight" },
  { href: "/admin/dashboard", label: "Appeals Final Review" },
  { href: "/admin/dashboard", label: "Policy Management" },
  { href: "/admin/dashboard", label: "AI Insights" },
];

export default function AdminDashboard() {
  return (
    <AppShell title="CivixOS" nav={nav} current="/admin/dashboard">
      <div className="card">
        <h1 className="hero-title">Admin Control Center</h1>
        <p className="hero-sub">Monitor platform health, moderation activity, user growth, and appeals outcomes.</p>
      </div>

      <div className="grid-4" style={{ marginTop: 24 }}>
        <div className="card"><div className="kpi">Total Users</div><div className="kpi-value">1,248</div></div>
        <div className="card"><div className="kpi">Active Discussions</div><div className="kpi-value">348</div></div>
        <div className="card"><div className="kpi">Open Appeals</div><div className="kpi-value">19</div></div>
        <div className="card"><div className="kpi">Moderator Actions</div><div className="kpi-value">272</div></div>
      </div>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>AI Insights Dashboard</h2>
          <p className="muted">AI Reviewed Posts: 1,284 · High Risk Posts: 124 · Avg Risk Score: 61%</p>
          <div className="post" style={{ marginTop: 12 }}>
            <strong>Top AI Risk Categories</strong>
            <p>Toxicity · Spam · Misinformation</p>
          </div>
        </div>
        <div className="card">
          <h2>Recent Admin Alerts</h2>
          <div className="post" style={{ marginTop: 12 }}>3 severe appeals awaiting final decision</div>
          <div className="post" style={{ marginTop: 12 }}>Moderator activity spiked 18% this week</div>
        </div>
      </div>
    </AppShell>
  );
}
