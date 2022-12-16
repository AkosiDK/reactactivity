import NewsFeed from "../components/home/Newsfeed";
import Time from "../components/home/Time"
import UserInfo from "../components/home/UserInfo"

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <UserInfo />
                    <Time />
                </div>
                <div className="col-8">
                    <NewsFeed />
                </div>
            </div>
        </div>
    )
}

export default Home;