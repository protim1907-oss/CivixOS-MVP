import Link from "next/link";

export default function HomePage() {
  return (
    <div className="login-wrap">
      <section className="login-left">
        <div className="brand">CivixOS</div>
        <div className="big-copy">Governance-first civic engagement MVP</div>
        <p className="muted" style={{ color: "#dbeafe", fontSize: 20, maxWidth: 540 }}>
          Citizen engagement, representative access, moderator workflows, admin governance, and AI moderation insights.
        </p>
        <ul className="list" style={{ color: "#fff", fontSize: 18 }}>
          <li>Citizen discussions and representative chat</li>
          <li>Moderator review, warnings, appeals, and audit trail</li>
          <li>Admin dashboards, oversight, and policy management</li>
        </ul>
      </section>
      <section className="login-right">
        <div className="card login-card">
          <h1 className="hero-title">Launch demo</h1>
          <p className="hero-sub">Choose an entry point.</p>
          <div className="actions" style={{ marginTop: 20, display: "grid" }}>
            <Link href="/login"><button className="btn btn-primary" style={{ width: "100%" }}>Citizen Login</button></Link>
            <Link href="/moderator/login"><button className="btn btn-orange" style={{ width: "100%" }}>Moderator Login</button></Link>
            <Link href="/admin/login"><button className="btn btn-purple" style={{ width: "100%" }}>Admin Login</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
