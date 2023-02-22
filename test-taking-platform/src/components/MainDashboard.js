function MainDashboard() {
  return (
    <div>
      <Header/>
    </div>
  );
}

const Title = () => (
  <a href="/">
    {/* <img className='logo' src='https://play-lh.googleusercontent.com/CqgwRgtYMO9KkWLqpOu4_OXyXOkUd-fpwhkBXS_e5JeOsFfBAbZhG_RpQS2tXpHoZSJj' alt={"paper-img"}/> */}
  </a>
)

export const Header = () => {
  return (
      <div className="header">
          <Title />
          <div className="nav-items">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/teacher-dashboard">Create Test</a></li>
                  <li><a href="/student-dashboard">Give Test</a></li>
              </ul>
          </div>
      </div>
  );
};

export default MainDashboard;
