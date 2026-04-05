function MissionCard({ mission, isCompleted, onToggle }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            미션 {mission.id}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            {mission.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {mission.description}
          </p>
          <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 font-mono text-xs text-slate-700">
            수정 파일: {mission.target}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggle(mission.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            isCompleted
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-slate-900 text-white'
          }`}
        >
          {isCompleted ? '완료' : '체크'}
        </button>
      </div>
    </article>
  );
}

export default MissionCard;
