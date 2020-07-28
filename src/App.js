import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import PlayTab from './components/PlayTabs'

function App() {

//   const[moviePosts, setMoviePosts]=useState([]);
// const[movieList, setMovieList]=useState([]);
// const [loading, setLoading]=useState(true);
// const [title, setTitle]=useState('');

//   const url="http://localhost:5000/api";
//   useEffect(() => {
//       fetch(url)
//       .then(response=> response.json())
//       .then(post=>{
//           setMoviePosts(post);
//       })
//       .catch(error => alert(error))
//       .finally(setLoading(false));
     
//   },[]);

  return (
    <div className="container-fluid">

      <div className="row">
        <div className=" col-12 col-sm-2 col-md-2 col-lg-2 ">
        <img className="img_logo_sm" src={`${process.env.PUBLIC_URL}/assets/images/logo_sm.png`} alt="Card image cap" />
        </div>
        <div className="main-section col-sm-8 col-md-8 col-lg-8">
          <NavBar />
          <PlayTab />
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2"></div>
      </div>
      </div>
  );
}

export default App;
