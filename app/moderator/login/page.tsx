import Link from "next/link";

export default function ModeratorLogin() {
  return (
    <div className="login-wrap">
      <section className="login-left">
        <div className="brand">CivixOS</div>
        <div className="big-copy">Moderate with clarity, speed, and accountability</div>
        <p style={{ color: "#dbeafe", fontSize: 20, maxWidth: 540 }}>
          Review flagged content, enforce policy consistently, manage appeals, and escalate critical issues.
        </p>
      </section>
      <section className="login-right">
        <div className="card login-card">
          <div className="badge badge-orange">MODERATOR</div>
          <h1 className="hero-title" style={{ marginTop: 20 }}>Sign in</h1>
          <p className="hero-sub">Demo login for moderator access.</p>
          <div style={{ marginTop: 20 }}>
            <label>Moderator Email</label>
            <input className="input" defaultValue="moderator@civixos.com" />
          </div>
          <div style={{ marginTop: 16 }}>
            <label>Password</label>
            <input className="input" type="password" defaultValue="password" />
          </div>
          <div style={{ marginTop: 22 }}>
            <Link href="/moderator/dashboard"><button className="btn btn-orange" style={{ width: "100%" }}>LOGIN</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
