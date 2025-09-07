
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Hussain Syed, P.Eng., PMP®</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#projects" className="hover:text-neutral-600">Projects</a>
            <a href="#ksa" className="hover:text-neutral-600">KSA</a>
            <a href="#certs" className="hover:text-neutral-600">Certifications</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50">Let’s talk</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              PMP® Project Manager & Process Engineer for High‑Rise Facade Manufacturing
            </h1>
            <p className="mt-4 text-neutral-600 text-base md:text-lg">
              I lead, standardize, and improve production systems for curtain walls, window walls, and railings—bridging design and shop‑floor execution for first‑time‑right delivery.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm">
              <li className="rounded-full border border-neutral-300 px-3 py-1">P.Eng.</li>
              <li className="rounded-full border border-neutral-300 px-3 py-1">PMP®</li>
              <li className="rounded-full border border-neutral-300 px-3 py-1">ASQ Green Belt</li>
              <li className="rounded-full border border-neutral-300 px-3 py-1">ISO 9001:2015</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="rounded-2xl bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">View projects</a>
              <a href="/HussainSyed_PEng_PMP_2025.pdf" className="rounded-2xl border border-neutral-300 px-4 py-2 hover:bg-neutral-50">Download CV</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-neutral-100 border border-neutral-200 grid place-content-center text-neutral-400">
              <span className="text-sm">Hero image placeholder<br/> (factory / skyline / facade)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-6xl px-4 pb-6 md:pb-10">
        <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-3xl font-semibold">35%+</div>
              <div className="text-neutral-600 text-sm mt-1">Cycle‑time reduction via Lean</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-3xl font-semibold">22%</div>
              <div className="text-neutral-600 text-sm mt-1">Scrap reduction in extrusion cutting</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-3xl font-semibold">8D</div>
              <div className="text-neutral-600 text-sm mt-1">Zero repeat defects across 3 projects</div>
            </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          </div>
          <div className="md:col-span-2 text-neutral-700 leading-relaxed">
            <p>
              I’m a licensed Professional Engineer and <strong>PMP® certified project manager</strong> with 6+ years in facade manufacturing and installation. I lead cross‑functional initiatives that reduce waste, improve throughput, and ensure ISO 9001:2015 compliance. My toolkit includes time studies, SOPs, PFMEA, 5‑Why, and <strong>8D</strong> corrective actions.
            </p>
            <p className="mt-4">
              I’m now focused on contributing to <strong>Saudi Arabia’s Vision 2030</strong> megaprojects, bringing Lean Six Sigma and structured problem‑solving to large‑scale builds across Riyadh, Jeddah, NEOM, and Red Sea developments.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <article className="rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
            <div className="aspect-[4/3] bg-neutral-100 grid place-content-center text-neutral-400 text-sm">Image placeholder</div>
            <div className="p-5">
              <h3 className="font-semibold">Glass Reorder Cost Reduction</h3>
              <p className="mt-2 text-sm text-neutral-600">Reduced annual glass reorder costs from <strong>$1.2M in 2023</strong> to <strong>$200k in 2024</strong> by implementing planning controls, error checks, and supplier alignment.</p>
              <a href="#case-glass" className="mt-3 inline-block text-sm text-neutral-900 hover:underline">Read case study →</a>
            </div>
          </article>

          <article className="rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
            <div className="aspect-[4/3] bg-neutral-100 grid place-content-center text-neutral-400 text-sm">Image placeholder</div>
            <div className="p-5">
              <h3 className="font-semibold">Window Production Throughput Improvement</h3>
              <p className="mt-2 text-sm text-neutral-600">Increased monthly window production by addressing bottlenecks and ensuring project starts only when all sub-department parts were ready.</p>
              <a href="#case-windows" className="mt-3 inline-block text-sm text-neutral-900 hover:underline">Read case study →</a>
            </div>
          </article>

          <article className="rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
            <div className="aspect-[4/3] bg-neutral-100 grid place-content-center text-neutral-400 text-sm">Image placeholder</div>
            <div className="p-5">
              <h3 className="font-semibold">Railing Estimation & Pricing System</h3>
              <p className="mt-2 text-sm text-neutral-600">Built new pricing sheets consolidating material, labor, and process data, enabling precise, consistent, and faster railing quotations.</p>
              <a href="#case-estimation" className="mt-3 inline-block text-sm text-neutral-900 hover:underline">Read case study →</a>
            </div>
          </article>
        </div>
      </section>

      {/* KSA Alignment */}
      <section id="ksa" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-neutral-200 p-6 md:p-8 bg-neutral-50">
          <h2 className="text-2xl font-semibold tracking-tight">Ready for Saudi Arabia’s Vision 2030</h2>
          <ul className="mt-4 list-disc pl-6 text-neutral-700 space-y-1 text-sm">
            <li>High‑rise facade systems (curtain walls, window walls, railings) for towers & mixed‑use.</li>
            <li>Bridging manufacturing and site execution; strong cross‑functional leadership.</li>
            <li>Lean/CI delivery: cycle‑time reduction, scrap control, 8D culture.</li>
            <li>Open to roles in Riyadh, Jeddah, NEOM, and Red Sea projects.</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Certifications & Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 text-sm space-y-1">
              <li>PMP® — Project Management Institute (2025)</li>
              <li>P.Eng. (Ontario, Canada)</li>
              <li>ASQ Lean Six Sigma Green Belt</li>
              <li>ISO 9001:2015 Internal Auditor</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Core Skills</h3>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 text-sm space-y-1">
              <li>Lean, Kaizen, 8D, FMEA, Control Plans</li>
              <li>Process mapping, SOPs, Time studies</li>
              <li>AutoCAD, ERP (M1), MS Project / P6</li>
              <li>Facade manufacturing & installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section id="case-glass" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl font-semibold">Case Study: Glass Reorder Cost Reduction</h2>
        <div className="mt-4 space-y-3 text-neutral-700 text-sm leading-relaxed">
          <p><strong>Challenge:</strong> In 2023, excessive reorders of glass led to $1.2M in additional costs, caused by planning errors, miscommunication, and inconsistent specifications.</p>
          <p><strong>Action:</strong> Introduced standardized ordering processes, cross-departmental checks before placing orders, and supplier alignment meetings. Applied Lean tools and root cause analysis to identify and prevent repeat errors.</p>
          <p><strong>Result:</strong> Reduced annual reorder costs to $200k by 2024, saving $1M and improving customer confidence.</p>
          <div className="mt-6">
            <a href="/case-studies/GlassReorder.pdf" className="inline-block rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Download PDF</a>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section id="case-windows" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl font-semibold">Case Study: Window Production Throughput Improvement</h2>
        <div className="mt-4 space-y-3 text-neutral-700 text-sm leading-relaxed">
          <p><strong>Challenge:</strong> Window production suffered delays due to hidden bottlenecks in assembly, glazing, and logistics, causing uneven monthly output.</p>
          <p><strong>Action:</strong> Conducted a full process flow analysis, identified constraints, and introduced policies requiring all sub-department parts to be ready before project start. Implemented visual management to track readiness.</p>
          <p><strong>Result:</strong> Monthly production capacity increased significantly, workflow became stable, and delivery commitments were consistently met.</p>
          <div className="mt-6">
            <a href="/case-studies/WindowProduction.pdf" className="inline-block rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Download PDF</a>
          </div>
        </div>
      </section>

      {/* Case Study 3 */}
      <section id="case-estimation" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-xl font-semibold">Case Study: Railing Estimation & Pricing System</h2>
        <div className="mt-4 space-y-3 text-neutral-700 text-sm leading-relaxed">
          <p><strong>Challenge:</strong> Estimation team lacked a standardized pricing method, leading to inconsistent and delayed railing quotations.</p>
          <p><strong>Action:</strong> Collaborated with the team to build detailed pricing sheets covering material costs, labor hours, and process data. Designed a unified costing framework accessible across departments.</p>
          <p><strong>Result:</strong> Enabled accurate, fast, and consistent railing quotations, increasing bid competitiveness and client trust.</p>
          <div className="mt-6">
            <a href="/case-studies/RailingEstimation.pdf" className="inline-block rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Download PDF</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-neutral-200 p-6 md:p-8 bg-neutral-50">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-neutral-700">Open to roles across Saudi Arabia: <strong>Project Manager, Process Engineering Consultant, or QA/QC Lead</strong> in building materials & facade manufacturing.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <a href="mailto:youremail@example.com" className="rounded-2xl border border-neutral-300 px-4 py-3 bg-white hover:bg-neutral-50">youremail@example.com</a>
            <a href="https://www.linkedin.com/in/your-profile" className="rounded-2xl border border-neutral-300 px-4 py-3 bg-white hover:bg-neutral-50">LinkedIn</a>
            <a href="/HussainSyed_PEng_PMP_2025.pdf" className="rounded-2xl border border-neutral-300 px-4 py-3 bg-white hover:bg-neutral-50">Download Resume (PDF)</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} Hussain Syed. Built with care.
      </footer>
    </main>
  );
}
