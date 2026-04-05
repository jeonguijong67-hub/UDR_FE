function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a className="text-lg font-semibold tracking-tight" href="/">
            UDR React 실습
          </a>
          <div className="text-sm text-slate-600">
            스타터를 clone한 뒤, 각자 브랜치를 만들어 단계별로 실습해보세요.
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
