import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import FAQ from "../components/FAQ";
import BlackFooter from "../components/BlackFooter";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import StoryChildren from "../components/StoryChildren";
import StoryDownload from "../components/StoryDownload";
import StoryEnjoy from "../components/StoryEnjoy";
import StoryWatch from "../components/StoryWatch";
import Welcome from "../components/Welcome";
import requests from "../constants/Request";
import { selectUser } from "../features/userSlice";
import "./Home.css";

function Home() {
  const user = useSelector(selectUser);
  const planData = localStorage.getItem('plan_checker')

  //console.log(process.env);

  return (
    <div className="home">
      {/* First check any user logged in or not , if any user then check user have any plans active, if any plan active then load the main home page 
            other wise load the welcome page and change "Sign in" & "Get start" buttons to "Sign out" & "Select a Plan" with respectively also remove the input field.
            If both user & plan are null the load the basic welcome page */}
      {user && planData === "1" ? (
        <>
          <NavBar />
          <Banner />
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargerRow
          />
          <Row title="Trending" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          <Divider />
          <BlackFooter />
        </>
      ) : (
        <>
          <Welcome user={user} />
          <Divider />
          <StoryEnjoy />
          <Divider />
          <StoryDownload />
          <Divider />
          <StoryWatch />
          <Divider />
          <StoryChildren />
          <Divider />
          <FAQ />
          <Divider />
          <BlackFooter />
        </>
      )}

      {/* {userPlanDetails.map(({ data: { Date_of_Ex, Email, Plan, uid } }) => (
        <h1>{uid}</h1>
      ))} */}
    </div>
  );
}

export default Home;
