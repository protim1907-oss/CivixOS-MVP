import Link from "next/link";

export default function CitizenLogin() {
  return (
    <div className="login-wrap">
      <section className="login-left">
        <div className="brand">CivixOS</div>
        <div className="big-copy">Engage your district with clarity and trust</div>
        <p style={{ color: "#dbeafe", fontSize: 20, maxWidth: 520 }}>
          Access discussions, post questions, contact representatives, and participate in civic workflows.
        </p>
      </section>
      <section className="login-right">
        <div className="card login-card">
          <div className="badge badge-blue">CITIZEN</div>
          <h1 className="hero-title" style={{ marginTop: 20 }}>Sign in</h1>
          <p className="hero-sub">Demo login for citizen access.</p>
          <div style={{ marginTop: 20 }}>
            <label>Email</label>
            <input className="input" defaultValue="citizen@civixos.com" />
          </div>
          <div style={{ marginTop: 16 }}>
            <label>Password</label>
            <input className="input" type="password" defaultValue="password" />
          </div>
          <div style={{ marginTop: 22 }}>
            <Link href="/dashboard"><button className="btn btn-primary" style={{ width: "100%" }}>LOGIN</button></Link>
          </div>
          <p className="footer-note"><Link href="/">Back to home</Link></p>
        </div>
      </section>
    </div>
  );
}
