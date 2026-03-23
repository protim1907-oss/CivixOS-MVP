import AppShell from "@/components/AppShell";
import { reps } from "@/lib/data";

const nav = [
  { href: "/dashboard", label: "Home" },
  { href: "/discussion", label: "District Discussions" },
  { href: "/representatives", label: "Representatives" },
];

export default function RepresentativesPage() {
  return (
    <AppShell title="CivixOS" nav={nav} current="/representatives">
      <div className="card">
        <h1 className="hero-title">Texas Representatives</h1>
        <p className="hero-sub">Browse elected representatives and connect directly through CivixOS.</p>
      </div>

      <div className="grid-3" style={{ marginTop: 24 }}>
        {reps.map((rep) => (
          <div className="card" key={rep.email}>
            <div className="badge badge-blue">{rep.district}</div>
            <h2>{rep.name}</h2>
            <p className="muted">{rep.role}</p>
            <p><strong>Party:</strong> {rep.party}</p>
            <div className="actions" style={{ marginTop: 12 }}>
              <a href={`mailto:${rep.email}`}><button className="btn btn-green">Send Email</button></a>
              <button className="btn btn-purple">Open Chat</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
