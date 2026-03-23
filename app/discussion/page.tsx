import AppShell from "@/components/AppShell";
import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Home" },
  { href: "/discussion", label: "District Discussions" },
  { href: "/representatives", label: "Representatives" },
];

export default function DiscussionPage() {
  return (
    <AppShell title="CivixOS" nav={nav} current="/discussion">
      <div className="card">
        <h1 className="hero-title">District Discussion Thread</h1>
        <p className="hero-sub">Public Transportation Expansion · District: TX-12</p>
      </div>

      <div className="card">
        <div className="actions">
          <button className="btn btn-primary">Ask a Question</button>
          <button className="btn btn-orange">Tag Representative</button>
          <button className="btn btn-green">Send Email</button>
          <Link href="/representatives"><button className="btn btn-purple">Chat with Representative</button></Link>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 24, gridTemplateColumns: "2fr 1fr" }}>
        <div className="card">
          <h2>Discussion Thread</h2>
          <div className="post" style={{ marginTop: 16 }}>
            <div className="badge badge-blue">Main Post</div>
            <h3>Should the city invest more in bike lanes and public transit access?</h3>
            <p className="muted">This thread gathers citizen questions, documents, and responses for district review.</p>
          </div>

          <div className="post" style={{ marginTop: 16 }}>
            <strong>Citizen Post</strong>
            <p>“This proposal is useless and anyone supporting it is dishonest...”</p>
            <p className="muted">Posted by John D. · just now</p>
          </div>

          <div className="ai-box" style={{ marginTop: 16 }}>
            <div className="badge badge-red">High Risk · 82%</div>
            <h3 style={{ color: "#991b1b" }}>AI Moderation Insights</h3>
            <p>• Toxicity / Abuse: Detected</p>
            <p>• Spam: Not Detected</p>
            <p>• Misinformation Pattern: Possible</p>
            <div className="actions" style={{ marginTop: 12 }}>
              <button className="btn btn-purple">Flag for Moderator Review</button>
              <button className="btn btn-ghost">View Full AI Analysis</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Representative Access</h2>
          <div className="post" style={{ marginTop: 12 }}>
            <strong>Rep. Kay Granger</strong>
            <p className="muted">U.S. Representative · TX-12</p>
            <div className="actions">
              <button className="btn btn-primary">View Profile</button>
              <button className="btn btn-purple">Open Chat</button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
