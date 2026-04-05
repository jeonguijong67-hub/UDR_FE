# UDR React Practice Starter

React를 처음 쓰는 사람들을 위한 동아리 실습용 스타터입니다.

이 저장소를 clone한 뒤, 각자 이름으로 branch를 만들어 실습을 진행하면 됩니다.

## Branch Rule

예시:

```bash
git clone <repository-url>
cd udr
git checkout -b practice/minji
npm install
npm start
```

브랜치 이름 예시:

- `practice/minji`
- `practice/jisoo`
- `practice/hyunwoo`

## Practice Goal

이 실습에서 익히는 핵심은 아래 4가지입니다.

- JSX 문법 익히기
- 컴포넌트와 props 이해하기
- `map()`으로 리스트 렌더링하기
- `useState`로 입력값과 화면 바꾸기

## Practice Order

### Mission 1. 텍스트와 스타일 바꾸기

파일:

- `src/pages/HomePage.js`

할 일:

- 메인 제목을 자기 소개 문장으로 바꾸기
- 배경색이나 텍스트 색 바꾸기
- Tailwind 클래스 2개 이상 직접 추가해보기

### Mission 2. 컴포넌트와 props

파일:

- `src/components/common/MemberCard.js`
- `src/pages/HomePage.js`

할 일:

- `members` 배열에 자기 정보 1개 추가하기
- 카드에 한 줄 정보 더 추가하기
- props가 어떻게 전달되는지 확인하기

### Mission 3. 배열 렌더링

파일:

- `src/pages/HomePage.js`

할 일:

- `missions` 배열에 새 미션 1개 추가하기
- `members` 배열에 새 멤버 1개 추가하기
- 배열 데이터가 바뀌면 화면이 같이 바뀌는지 확인하기

### Mission 4. state와 이벤트

파일:

- `src/pages/HomePage.js`

할 일:

- 질문 입력창에 텍스트 입력해보기
- 버튼 클릭 시 질문이 목록에 추가되는 흐름 읽어보기
- 제출 후 input이 비워지는 이유 설명해보기

### Mission 5. 자유 확장

추천 아이디어:

- 삭제 버튼 만들기
- 좋아요 버튼 만들기
- 완료한 미션 개수 보여주기
- 필터 버튼 만들기

## File Guide

- `src/app/App.js`: 앱 시작점
- `src/layouts/MainLayout.js`: 공통 레이아웃
- `src/pages/HomePage.js`: 이번 실습의 메인 페이지
- `src/components/common`: 재사용 컴포넌트
- `src/styles/globals.css`: 전역 스타일과 Tailwind 시작점

## Scripts

```bash
npm start
npm run build
```

## 운영 팁

- 미션 하나 끝날 때마다 commit 하기
- 모르는 코드는 바로 지우지 말고 먼저 읽어보기
- 화면이 바뀌면 어떤 state나 props가 바뀌었는지 같이 보기
- 마지막에는 각자 branch를 기준으로 발표하거나 PR 연습까지 이어가기
