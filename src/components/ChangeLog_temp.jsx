import { useEffect, useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export function ChangeLog() {
  const location = useLocation()

  const params = useMemo(() => new URLSearchParams(location.search), [location.search])

  const [version, setVersion] = useState("Unknown")
  const [commit, setCommit] = useState("N/A")
  const [commitUrl, setCommitUrl] = useState("")

  useEffect(() => {
    let isMounted = true

    async function init() {
      // From query params first
      let v = params.get("version")
      let c = params.get("commit")
      let cu = params.get("commitUrl") || ""

      // If missing, try latest.json (same behavior as your script)
      if (!v || !c) {
        try {
          const res = await fetch(`/latest.json?cache=${Date.now()}`, { cache: "no-store" })
          if (res.ok) {
            const data = await res.json()
            if (!v && data.version) v = data.version
            if (!c && data.commit) c = data.commit
            if (!cu && data.commitUrl) cu = data.commitUrl
          }
        } catch (err) {
          // ignore; we’ll keep fallbacks
          console.error("Failed to load latest.json", err)
        }
      }

      // Final fallbacks
      v = v || "Unknown"
      c = c || "N/A"

      if (!isMounted) return
      setVersion(v)
      setCommit(c)
      setCommitUrl(cu)
    }

    init()
    return () => {
      isMounted = false
    }
  }, [params])

  return (
    <main className="min-h-screen w-full bg-[#050816] text-[#e5e7eb] px-4 py-8 flex justify-center">
      <section className="w-full max-w-[960px]">
        <div className="rounded-[24px] border border-[#1f2937] bg-[#020617] shadow-[0_18px_45px_rgba(15,23,42,0.8)] p-6 md:p-8">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(79,70,229,0.09)] px-[10px] py-1 text-[11px] uppercase tracking-[0.14em] text-[#6366f1]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                LOAD LOG LITE
              </div>

              <h1 className="mt-2 text-[24px] font-bold tracking-[0.03em]">
                Changelog
              </h1>

              <p className="mt-1 text-[13px] text-[#9ca3af]">
                Public release notes for deployments triggered from GitHub Actions. Useful when the repo is private but you still want people to see what changed.
              </p>

              <div className="mt-3">
                <Link to="/" className="text-[#6366f1] hover:underline">
                  ← Back home
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.8)] bg-[#141a2b] px-[9px] py-1 text-[11px] text-[#9ca3af]">
                <span className="h-[5px] w-[5px] rounded-full bg-[#6366f1]" />
                <span><strong className="font-semibold text-[#e5e7eb]">Environment</strong> Prod</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.8)] bg-[#141a2b] px-[9px] py-1 text-[11px] text-[#9ca3af]">
                <span className="h-[5px] w-[5px] rounded-full bg-[#22c55e]" />
                <span><strong className="font-semibold text-[#e5e7eb]">Status</strong> Healthy</span>
              </div>
            </div>
          </header>

          {/* Latest deployment */}
          <section className="mt-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af]">
                Latest deployment
              </h2>
              <p className="text-[12px] text-[#9ca3af]">
                Populated from <code className="px-1">?version=</code> and <code className="px-1">?commit=</code> (or latest.json).
              </p>
            </div>

            <div className="mt-3 rounded-[20px] border border-[rgba(55,65,81,0.7)] bg-[radial-gradient(circle_at_top,#111827_0,#020617_55%,#020617_100%)] px-[18px] py-[16px]">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#9ca3af]">
                Active deployment
              </div>

              <div className="mt-1 text-[20px] font-bold">
                Version — {version}
              </div>

              <div className="mt-2 flex flex-wrap gap-3 text-[12px] text-[#9ca3af]">
                <span className="inline-flex items-center gap-2">
                  <span>Commit</span>
                  {commitUrl ? (
                    <a
                      href={commitUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[rgba(55,65,81,0.8)] bg-[rgba(15,23,42,0.9)] px-2 py-[2px] font-mono text-[11px] text-[#6366f1] hover:underline"
                    >
                      {commit}
                    </a>
                  ) : (
                    <span className="rounded-full border border-[rgba(55,65,81,0.8)] bg-[rgba(15,23,42,0.9)] px-2 py-[2px] font-mono text-[11px] text-[#6366f1]">
                      {commit}
                    </span>
                  )}
                </span>

                <span className="inline-flex items-center gap-2">
                  Channel
                  <span className="rounded-full border border-[rgba(55,65,81,0.8)] bg-[rgba(15,23,42,0.9)] px-2 py-[2px] text-[11px]">
                    GitHub Actions
                  </span>
                </span>
              </div>

              <ul className="mt-4 list-disc pl-4 text-[13px] text-[#9ca3af]">
                <li>No specific notes were provided for this version yet. Scroll down to see previous releases.</li>
              </ul>
            </div>
          </section>

          {/* Release history (your manual entries) */}
          <section className="mt-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af]">
                Release history
              </h2>
              <p className="text-[12px] text-[#9ca3af]">Add entries here whenever you ship something meaningful</p>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-dashed border-[rgba(31,41,55,0.8)] pt-4">
              <article className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[rgba(75,85,99,0.9)]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[14px] font-semibold">v0.0.3 – Changelog Page added</span>
                    <span className="text-[12px] text-[#9ca3af]">2025-12-11</span>
                  </div>
                  <div className="mt-1 text-[13px] text-[#9ca3af]">this page you're looking at was created</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["New", "Frontend", "Driver tools"].map((t) => (
                      <span key={t} className="rounded-full border border-[rgba(55,65,81,0.8)] bg-[rgba(15,23,42,0.9)] px-2 py-[2px] text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[rgba(75,85,99,0.9)]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[14px] font-semibold">v0.0.1 – Public launch</span>
                    <span className="text-[12px] text-[#9ca3af]">2025-12-11</span>
                  </div>
                  <div className="mt-1 text-[13px] text-[#9ca3af]">
                    First public version of Load Log Lite with local-storage persistence, basic stats, and a clean trucking-focused UI.
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["New", "Frontend", "Driver tools"].map((t) => (
                      <span key={t} className="rounded-full border border-[rgba(55,65,81,0.8)] bg-[rgba(15,23,42,0.9)] px-2 py-[2px] text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-between gap-3 text-[11px] text-[#9ca3af]">
            <span>Latest deployment: {version}</span>
            <span>
              Linked from Discord deploy messages ·{" "}
              <a
                href="https://loads.fattieslearnscoding.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#6366f1] hover:underline"
              >
                loads.fattieslearnscoding.com
              </a>
            </span>
          </footer>
        </div>
      </section>
    </main>
  )
}
