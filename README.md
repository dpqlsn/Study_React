# Study_React

### 01. 리액트 연동방법 

<html>
    <head>
        <title>예시코드</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>환영합니다</h1>
        <!-- DOM Container (Root DOM node) 즉, div 토드가 Dom container로 사용될 예정 -->
        <div id="root"></div>
        <!-- 스크립트 태그를 사용하여 리액트와 리액트 돔 파일 가져오기 -->
        <script src="https://unpkg.com/react@17/umd/react.development.js" crssorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crssorigin></script>
        <!-- 리액트 컴포넌트 가져오기 -->
        <script src="MyButton.js"></script>
    </body>
</html>

### 02. create-react-app (cra)
리액트로 웹애플리케이션을 제작할 떄 필요한 모든 설정이 되어 있는 어플
### 조건
1. Node.js v14.0.0 이상
2. npm v6.14.0 이상
3. Vs code 

### 실행방법
Vs code 터미널에서 실행 됨
<!-- npx는 곧바로 실행 및 엑스큐트까지 해주는 명령어 -->
$ npx create-reacr-app <your-project-name>
$ npx create-react-app my-app

### 간단한 명령어들
1. $ cd my-app 경로 변경
2. $ npm start 애플리케이션 실행 > 자동으로 앱이 열림


참고강의 https://www.inflearn.com/course/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8