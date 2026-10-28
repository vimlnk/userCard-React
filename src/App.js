// import './App.css';
import UserCard from "./components/UserCard";
import userPhoto from './components/UserCard/userPhoto.webp';

function App() {
  const user = {
    image: userPhoto,
    userName:{
      firstName: 'Test',
      secondName: 'Testovych',
    },
    nickName: "test_testovych",
    isMale: false,
    stats: {
      posts: 120,
      followers: 1500,
      following: 280,
    },
  };
  return <UserCard {...user}/>;
}

export default App;


