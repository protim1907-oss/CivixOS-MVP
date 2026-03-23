import Link from "next/link";

export default function AdminLogin() {
  return (
    <div className="login-wrap">
      <section className="login-left">
        <div className="brand">CivixOS</div>
        <div className="big-copy">Oversee the platform with governance and control</div>
        <p style={{ color: "#dbeafe", fontSize: 20, maxWidth: 540 }}>
          Manage users, review moderator decisions, monitor appeals, and maintain policy governance.
        </p>
      </section>
      <section className="login-right">
        <div className="card login-card">
          <div className="badge badge-purple">ADMIN</div>
          <h1 className="hero-title" style={{ marginTop: 20 }}>Sign in</h1>
          <p className="hero-sub">Demo login for admin access.</p>
          <div style={{ marginTop: 20 }}>
            <label>Admin Email</label>
            <input className="input" defaultValue="admin@civixos.com" />
          </div>
          <div style={{ marginTop: 16 }}>
            <label>Password</label>
            <input className="input" type="password" defaultValue="password" />
          </div>
          <div style={{ marginTop: 22 }}>
            <Link href="/admin/dashboard"><button className="btn btn-purple" style={{ width: "100%" }}>LOGIN</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
