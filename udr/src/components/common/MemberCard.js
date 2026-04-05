function MemberCard({ name, track, mbti, favorite }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {track}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">MBTI: {mbti}</p>
      <p className="mt-1 text-sm leading-6 text-slate-600">
        선호 스택: {favorite}
      </p>
    </article>
  );
}

export default MemberCard;
