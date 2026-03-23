import Link from "next/link";
import { ReactNode } from "react";

type NavItem = { href: string; label: string };

export default function AppShell({
  title = "CivixOS",
  nav,
  current,
  children,
}: {
  title?: string;
  nav: NavItem[];
  current: string;
  children: ReactNode;
}) {
  return (
    <div className="layout">
      <div className="topbar">
        <div className="brand">{title}</div>
        <div className="toplinks">
          <span>Notifications</span>
          <span>Profile</span>
        </div>
      </div>
      <div className="shell">
        <aside className="sidebar">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`side-item ${current === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
