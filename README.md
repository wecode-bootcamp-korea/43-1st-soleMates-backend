# 43-1st-soleMates-backend

## soleMates 1차 프로젝트 Backend (최원식, 김승태)
- 영국 패션 브랜드, 샌들, 슈즈, 부츠 등 [닥터마틴](https://www.drmartens.co.kr/) 클론 프로젝트.
- 해당 브랜드의 웹페이지 기획과 디자인만 참고하여 진행함.
- 상품을 사고 파는 웹페이지에서 가장 필수적인 요소만을 담아보기 위한 프로젝트.


### 개발 인원 및 기간

- 개발 기간 : 2023/3/6 ~ 2023/3/17 (2주)
- 참여 인원 : 백엔드 2명, 프론트엔드 3명
  - `BACKEND`: 최원식, 김승태
  - `FRONTEND`: 이기태, 김수미, 홍태훈
  
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/43-1st-soleMates-backend)
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/43-1st-soleMates-frontend)

<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Back-End : Javascript, Node.js, Express.js, jwt, Bcrypt, MySQL, dbmate, nodemon
> - Common : RESTful API, vscode
> - 협업: Github, Slack, Notion, Trello, dbdiagram
### 구현 기능


| 기능                              | 구현 내용                                                                                                                                                                                        | 개발 담당          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| DB 모델링                        | <img src="https://cdn.discordapp.com/attachments/1086967476128067685/1086988017308287046/untitled_720.png" width = "500">                                                                                                            | 최원식 <br> 김승태 |
| ERD기반 테이블 생성            | - mysql 및 dbmate를 활용한 테이블 생성                                                                                                                                                          | 최원식 <br> 김승태      |
| 회원가입 <br> 로그인              | - 정규표현식을 활용한 email, password 유효성 검사 <br> - Bcrypt를 사용한 비밀번호 암호화 <br> - 암호화된 비밀번호 복호화하여 확인 후 jwt 토큰 발급 <br> - 페이지에 인가 API에 적용  <br>             | 김승태             |
| 제품 리스트 <br> 제품 상세 페이지 | - 상품 리스트 Read <br> - 상품 리스트 페이지 Category, Size, Color 필터 기능 <br> - 상품 상세 페이지 상품 Read <br> - 상품 상세 페이지 리뷰 Create <br> - 상품 상세 페이지 리뷰 Read                                                 | 최원식            |
| 장바구니                          | - 장바구니 Creat <br> - 장바구니 Read <br> - 장바구니 Update <br> - 장바구니 Delete                                                                  | 김승태             |






