import { useState } from 'react';
import MemberCard from '../components/common/MemberCard';
import MissionCard from '../components/common/MissionCard';
import SectionTitle from '../components/common/SectionTitle';

const missions = [
  {
    id: 1,
    title: 'JSX와 Tailwind',
    description:
      '메인 제목을 바꾸고, 색상을 수정하고, 짧은 자기소개 문장을 추가해보세요.',
    target: 'src/pages/HomePage.js',
  },
  {
    id: 2,
    title: 'Props와 컴포넌트',
    description:
      '멤버 객체를 하나 더 추가하고 카드가 자동으로 늘어나는지 확인해보세요.',
    target: 'src/components/common/MemberCard.js',
  },
  {
    id: 3,
    title: '배열과 map()',
    description:
      '새 미션이나 멤버 데이터를 추가하고 화면이 함께 바뀌는지 확인해보세요.',
    target: 'src/pages/HomePage.js',
  },
  {
    id: 4,
    title: 'useState와 이벤트',
    description:
      '아래 입력창에 질문을 적고 추가하면서 state가 어떻게 바뀌는지 살펴보세요.',
    target: 'src/pages/HomePage.js',
  },
];

const members = [
  { id: 1, name: '의종', track: '프론트엔드', mbti: 'ENFP', favorite: 'React' },
  { id: 2, name: '지수', track: '디자인', mbti: 'ISFJ', favorite: 'Figma' },
  { id: 3, name: '단유', track: '백엔드', mbti: 'INTP', favorite: 'Node.js' },
];

const initialQuestions = [
  'props는 데이터를 어떻게 컴포넌트로 전달할까요?',
  '왜 인터랙션이 있는 화면에서는 useState를 사용할까요?',
];

function HomePage() {
  const [completedMissionIds, setCompletedMissionIds] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [questions, setQuestions] = useState(initialQuestions);

  function toggleMission(id) {
    setCompletedMissionIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id]
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuestion = questionInput.trim();

    if (!trimmedQuestion) {
      return;
    }

    setQuestions((currentQuestions) => [...currentQuestions, trimmedQuestion]);
    setQuestionInput('');
  }

  return (
    <section className="px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="React를 처음 배우는 사람을 위한 실습 프로젝트"
          description="이 스타터는 브랜치 기반 실습을 위해 만들어졌습니다. 각자 저장소를 clone한 뒤, 개인 브랜치를 만들고 미션을 순서대로 진행하면 됩니다."
        />

        <div className="mt-8 rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            추천 진행 순서
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            1. 프로젝트 clone 2. 개인 브랜치 생성 3.
            <span className="mx-2 rounded bg-white px-2 py-1 font-mono text-slate-900">
              npm start
            </span>
            실행 4. 미션을 하나씩 진행 5. 미션마다 commit
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                실습 미션
              </h2>
              <div className="mt-4 grid gap-4">
                {missions.map((mission) => (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    isCompleted={completedMissionIds.includes(mission.id)}
                    onToggle={toggleMission}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                멤버 카드
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                이 영역은 props 전달과
                <span className="mx-2 rounded bg-slate-100 px-2 py-1 font-mono text-slate-900">
                  map()
                </span>
                렌더링을 연습하기 좋습니다.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {members.map((member) => (
                  <MemberCard
                    key={member.id}
                    name={member.name}
                    track={member.track}
                    mbti={member.mbti}
                    favorite={member.favorite}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                State 실습
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                아래 입력창에 질문을 추가하면서 제어 컴포넌트와 state 변화를 연습해보세요.
              </p>

              <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-slate-700" htmlFor="question">
                  새 질문
                </label>
                <input
                  id="question"
                  type="text"
                  value={questionInput}
                  onChange={(event) => setQuestionInput(event.target.value)}
                  placeholder="예시: onClick은 어떻게 동작하나요?"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white"
                >
                  질문 추가
                </button>
              </form>

              <ul className="mt-5 space-y-3">
                {questions.map((question) => (
                  <li
                    key={question}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                다음으로 해볼 것
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Tailwind 클래스로 텍스트와 여백을 바꿔보기
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  미션 객체와 멤버 객체를 하나씩 더 추가해보기
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  자기 브랜치에서 단계별로 commit 해보기
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;



