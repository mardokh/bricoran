import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import MyServices from '../../components/myServices/MyServices'
import AboutMe from '../../components/aboutMe/AboutMe'
import YourMessage from '../../components/yourMessage/YourMessage'
import Footer from '../../components/footer/Footer'


const Home = () => {

    return (
        <div>
            <Header/>
            <Banner/>
            <MyServices/>
            <AboutMe/>
            <YourMessage/>
            <Footer/>
        </div>
    )
}


export default Home