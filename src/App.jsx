import './App.css';
import logo from './assets/logo-white.png';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import BlogOverview from './pages/blog-overview/BlogOverview.jsx';
import ErrorPage from './pages/error-page/ErrorPage.jsx';
import NavBar from './components/nav-bar/NavBar.jsx';
import BlogPostDetails from './pages/blog-post-details/BlogPostDetails.jsx'

function App() {
    return (

        <div className="page-container">
            <section className="nav-outer-container">
                <img src={logo} alt="Company logo"/>
                <NavBar/>
            </section>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/blog-overview" element={<BlogOverview/>}/>
                <Route path="/404-page" element={<ErrorPage/>}/>
                <Route path="/blog-post/:id" element={<BlogPostDetails/>}/>
            </Routes>

        </div>
    )
}

export default App
