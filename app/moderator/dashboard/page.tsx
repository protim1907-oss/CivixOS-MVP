import AppShell from "@/components/AppShell";
import { flaggedCases } from "@/lib/data";

const nav = [
  { href: "/moderator/dashboard", label: "Dashboard" },
  { href: "/moderator/dashboard", label: "Flagged Queue" },
  { href: "/moderator/dashboard", label: "Appeals" },
  { href: "/moderator/dashboard", label: "Audit Trail" },
];

export default function ModeratorDashboard() {
  return (
    <AppShell title="CivixOS" nav={nav} current="/moderator/dashboard">
      <div className="card">
        <h1 className="hero-title">Welcome, Moderator</h1>
        <p className="hero-sub">Review flagged content, coordinate with representatives, and manage appeals from one workspace.</p>
      </div>

      <div className="grid-4" style={{ marginTop: 24 }}>
        <div className="card"><div className="kpi">Flagged Posts</div><div className="kpi-value">15</div></div>
        <div className="card"><div className="kpi">Pending Appeals</div><div className="kpi-value">6</div></div>
        <div className="card"><div className="kpi">Actions Today</div><div className="kpi-value">22</div></div>
        <div className="card"><div className="kpi">Representative Chats</div><div className="kpi-value">4</div></div>
      </div>

      <div className="grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Flagged Content Queue</h2>
          {flaggedCases.map((item) => (
            <div className="post" key={item.content} style={{ marginTop: 14 }}>
              <strong>{item.content}</strong>
              <p className="muted">Policy: {item.policy} · {item.when}</p>
              <div className="actions">
                <button className="btn btn-primary">Review</button>
                <button className="btn btn-orange">Warn</button>
                <button className="btn btn-red">Remove</button>
                <button className="btn btn-purple">Escalate</button>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Representative Chat</h2>
          <div className="chat-window" style={{ marginTop: 12 }}>
            <div className="chat-msg user">Can your office clarify the district petition timeline?</div>
            <div className="chat-msg rep">We will share an update with your moderation team by tomorrow afternoon.</div>
            <div className="chat-msg user">Thank you. We will notify users once confirmed.</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
