const MainPage = () => {
  return (
    <div className="main_page">
      <label>githubUrl:</label>
      <a href="https://github.com/developerkimjh/shoppingmall">
        <label> https://github.com/developerkimjh/shoppingmall</label>
      </a>
      <h3>사용 스택</h3>
      <span>Vite APP(React-ts)</span>
      <br />
      <span>Router: vite-plugin-next-react-router 플러그인 사용</span>
      <br />
      <span>상태관리 라이브러리: Recoil</span>
      <br />
      <h3>웹 구조</h3>
      <span>
        client 서버 ={">"} vercel을 이용하여 배포 ={">"} server 에 graphql로
        정보 요청
      </span>
      <br />
      <span>Client githubUrl: </span>
      <a href="https://github.com/developerkimjh/shoppingmall/tree/main/client">
        <span>
          https://github.com/developerkimjh/shoppingmall/tree/main/client
        </span>
      </a>
      <br />
      <br />
      <span>
        graphql 서버 ={">"} heroku 이용하여 배포 ={">"} database로 정보를 가져옴
      </span>
      <br />
      <span>Server githubUrl:</span>
      <a href="https://github.com/developerkimjh/shoppingmall/tree/main/server">
        <span>
          https://github.com/developerkimjh/shoppingmall/tree/main/server
        </span>
      </a>
      <br />
      <br />
      <span>database 서버 ={">"} firebase 사용</span>
      <br />
      <h4>
        많은 부분을 거치다보니 웹페이지 속도가 느린점 양해 부탁드립니다 ㅠㅠ
      </h4>
    </div>
  );
};

export default MainPage;
