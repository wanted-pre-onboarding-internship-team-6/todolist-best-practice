# 원티드 프리온보딩 6팀 1주차 과제

# Best Practice 만들기

# 📝 과제 설명

>동료 학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice를 만들고 제출해 주세요.  

<br/>
<br/>

# 🕹️ **프로젝트 실행 방법**

1. 루트 경로에 `.env` 파일 생성

2. 아래의 환경변수 추가  
`REACT_APP_API_URL=https://pre-onboarding-selection-task.shop`

3. 스크립트 실행
```
npm install
npm start
```

<br/>
<br/>

# 🔗 배포 링크
https://todolist-best-practice.vercel.app/
- 테스트 아이디: `t@t.t`
- 테스트 비밀번호: `tttttttt`

<br/>
<br/>

# 🛠️ 기술 스택

📦 **상태 관리**
- React Context API     

🎨 **스타일링**
- styled-components    

🌐 **HTTP 요청**
- Axios

📡 **라우팅**
- React Router DOM


<br/>
<br/>

# 📂 폴더 구조

## [ 기능에 따른 폴더 구조 ]

폴더 구조는 기능에 따라 분리하기로 결정하였습니다. 따라서 작업시 해당 기능에 따른 폴더에서만 작업하기 때문에 파일을 찾기가 훨씬 수월합니다.               

또한 협업시 git collision이 줄어든다는 장점이 있습니다. 그래서 팀원들과 논의 결과 `src` 하위로 `commons`, `auth`, `todo` 폴더를 가지도록 하였습니다. `commons` 에는 공통적으로 가지는 컴포넌트 및 api 기능들을 넣었습니다.                

또한 회원가입과 로그인은 공통적인 기능이 많기 때문에 `auth`라는 기능으로 `/signin`, `/signup` 페이지를 묶을 수 있었습니다.
 

```
📦src
 ┣ 📂auth
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜actions.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📜authContext.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜useAuth.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂SignInPage
 ┃ ┃ ┃ ┣ 📜SignInPage.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📂SignUpPage
 ┃ ┃ ┃ ┣ 📜SignUpPage.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂reducers
 ┃ ┃ ┣ 📜authReducer.js
 ┃ ┃ ┗ 📜index.js
 ┣ 📂common
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📂NavBar
 ┃ ┃ ┃ ┣ 📜NavBar.jsx
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜ProtectedRoute.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜ErrorPage.jsx
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜RootPage.jsx
 ┃ ┣ 📂router
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📂styles
 ┃ ┃ ┗ 📜GlobalStyles.js
 ┣ 📂todo
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂TodoForm
 ┃ ┃ ┃ ┣ 📜styles.js
 ┃ ┃ ┃ ┗ 📜TodoForm.jsx
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┃ ┣ 📜styles.js
 ┃ ┃ ┃ ┗ 📜TodoItem.jsx
 ┃ ┃ ┣ 📂TodoList
 ┃ ┃ ┃ ┣ 📜styles.js
 ┃ ┃ ┃ ┗ 📜TodoList.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜actions.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜TodoContext.jsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜useTodo.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜styles.js
 ┃ ┃ ┗ 📜TodoPage.jsx
 ┃ ┗ 📂reducers
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜todoReducer.js
 ┣ 📜App.js
 ┗ 📜index.js
```
<br/>
<br/>

# 📈 Best Practice 도출방법 및 TOPIC

1. 팀원 각자의 코드 구현 방식을 한 명씩 코드리뷰를 하였습니다.

2. 코드리뷰 후 장점에 대해 토론한 후, `discord` 투표를 통해 Best Practice를 도출하였습니다.

3. `live share`를 이용한 페어 프로그래밍으로 코드를 완성했습니다. 

## [ axios vs fetch ]

API 설계 시 `axios`를 사용할 것인지 `fetch`를 사용할 것인지 논의가 있었습니다. 속도는 `fetch`가 빠르다는 것을 알게 됐지만, 두 방법 모두 비동기라 큰 의미는 없었으며, `Axios` 설계가 에러를 처리하는 방법이 `Fetch` 사용에 비해 더 간결하다는 결론을 내려 `axios`를 채택했습니다.        
추가적으로 `axios`의 `create`, `interceptors`를 사용해 코드의 중복을 줄이고 유지 보수성을 향상시켰습니다.

## [ styled-components ]

스타일 범위가 특정 컴포넌트로 지정되고 하나의 컴포넌트에 적용된 스타일이  다른 컴포넌트에 영향을 주지 않아 스타일을 더 쉽게 관리하고 유지 관리할 수 있어서 채택하였습니다.

## [ context API ]

현재는 작은 프로젝트지만, 프로젝트가 커질 경우 우려되는 Props Drilling 때문에 props를 전역적으로 관리해야 겠다는 의견이 나왔고, `context api`를 이용하여 props를 전역 관리한 코드가 있어 채택하게 되었습니다.

## [ gitmoji ]

깃 컨벤션과 gitmoji 사용에 관해 논의가 있었지만, 커밋 메세지를 보다 직관적으로 파악할 수 있는 장점이 있어 gitmoji 선택하였습니다.

## [ custom hooks ]

로그인/회원가입 컴포넌트에서 사용하는 공통적인 로직을 분리하기 위해 사용하였습니다. 인증 관련 컴포넌트는 공통적인 로직이 많기 때문에 custom hook을 사용하면 관심사를 분리시키고 동일한 논리를 재사용할 수 있기 때문에 코드 중복이 방지되고 유지 보수에 유리해집니다.         
또한 로그인/회원가입 외에 다른 인증 관련 페이지가 있는 경우에도 재사용이 가능한 장점이 있습니다.

## [ 폴더 별 index.js 파일 설정 ]

프로젝트의 규모가 커지고 여러 개의 파일을 `import`하는 경우에는 파일 개수만큼 `import`하므로 비효율적인 코드를  생성하는데, 이를 폴더 내부에 `index.js` 파일을 생성하여 불필요한 코드를 줄였습니다.

## [ useRef (focus) ]

`input` 요소를 클릭하지 않고 자동적으로 포커스가 되어 바로 키보드 입력을 할 수 있는 편리함에 사용하였습니다.

## [ async/await ]

비동기 로직을 처리하기 위해 `promise`, `then` 보다 `async/await` 을 사용하기로 하였습니다. 코드가 직관적이고 이해하기 쉬웠고 유지 보수에도 편리하다고 판단하여 `async/await`을 선택하였습니다.

## [ style 파일 분리 ]

style 로직을 분리하지 않은 팀원과 분리한 팀원이 있었는데, style 파일과 컴포넌트 로직을 분리하는 것이 유지 보수가 좋다고 판단하여 외부에 styles.js 파일을 따로 생성하였습니다.

## [ import * as S from './styles' ]

styles 파일을 import 할 시, `import { 컴포넌트1, 컴포넌트2, ... } from './styles'` 로 작성한 경우와 `import * as S from './styles'` 로 작성한 경우가 있었는데, 후자의 방법은 스타일 컴포넌트를 `<S.컴포넌트>` 로 사용할 수 있어 스타일 컴포넌트라는 것을 쉽게 이해할 수 있었습니다.             
        
직관적인 이해가 가능했기 때문에 import 할 시 `import * as S from './styles'` 와 같은 방식으로 사용하였습니다.



<br/>
<br/>


# 🤝🏼 **협업 방법 & 협업 툴**

- 공지사항 및 일반 채팅: `discord`
- 화상 미팅: `google meet`
- 페어 프로그래밍: `live share`
- documents 관리: `notion`


<br/>
<br/>

# 🎉 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ggongjukim"><img src="https://avatars.githubusercontent.com/u/75241542?v=4" width="100px;" alt=""/><br /><sub><b>김채현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/dong-geon-Lee"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" alt=""/><br /><sub><b>이동건</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/bymine"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" alt=""/><br /><sub><b>박수빈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Chun-gu"><img src="https://avatars.githubusercontent.com/u/60649092?v=4" width="100px;" alt=""/><br /><sub><b>이춘구</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/pji0219"><img src="https://avatars.githubusercontent.com/u/66911726?v=4" width="100px;" alt=""/><br /><sub><b>박종익</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/theo-jin"><img src="https://avatars.githubusercontent.com/u/83561523?v=4" width="100px;" alt=""/><br /><sub><b>진형빈</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dlwnstjrzz"><img src="https://avatars.githubusercontent.com/u/95525638?v=4" width="100px;" alt=""/><br /><sub><b>이준석</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Sungrinhan"><img src="https://avatars.githubusercontent.com/u/78065205?v=4" width="100px;" alt=""/><br /><sub><b>한성린</b></sub></a><br /></td>
     </tr>
  </tbody>
</table>

<br/>
<br/>



