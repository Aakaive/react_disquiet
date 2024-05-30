This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


-----------------------------

#프로젝트 진행 구상
1. 컴포넌트 리스트업
2. 컴포넌트 단위로 요소 리스트업
3. 리스트 작성된 요소들 중, 공통으로 스타일 적용되는 요소들을 그룹화하기
4. 컴포넌트 별 동작 명세
5. 각 컴포넌트를 브랜치하여 로직 작성 및 스타일링하여 통합하기.
6. url 사용 알아보기.(서버 요청)
7. url을 통해 표시 컨텐츠 필터링 하는 방법 알아보기(스크립트가 아니라 쿼리 수행하기. 트래픽 줄이고 클라이언트 부담 감소 위함.)
8. 포스트 약 3개 분량만 데이터 베이스 스키마 작성하기
9. 스키마를 프로젝트에 포함하여, 펫칭한 후 데이터를 불러 와 페이지에 표시하기.
10. 구글 로그인 적용시켜보기(권한 부여)


-----------------------------

[컴포넌트 리스트]

1. 사이트 탑
 1) 좌측
  - 로고
  - 검색창
 2) 우측(반응형 적용 : 작은 화면에서 메뉴 감추고, 토글 스위치 클릭 시 메뉴 박스 표시하기.)
  - 사이트 내비게이션 라벨
   = 호버링 내비게이션 리스트
  - [로그인]/[회원가입] 버튼
   = 클릭 이벤트로 로그인 창 플로팅 -> 로그인 시 권한 부여(세션???)
2. 사이트 바디ㄱ
3. 사이트 바디 - 메인(중앙)
 1) 게시글 작성 폼
  - 유저 아이콘
  - 우측 작성 버튼
   = [게시글 작성] 버튼
   = [프로덕트 공유] 버튼
4. 사이트 바디 - 사이드(좌측)
 1) 토픽 카테고리 선택 박스
  - 메뉴를 감춤/보이기 선택하는 [토글 스위치]
  - [카테고리] 리스트
5. 사이트 바디 - 사이드(우측)
 1) 광고배너
 2) 트렌딩 프로덕트
 3) 새로 조인한 메이커
 4) 트렌딩 메이커로그
 5) 커뮤니티
 6) 앱 설치
 7) 사이트 퀵메뉴 / 사업자 정보
6. 사이트 콘솔 - 컴플레인 마스코트