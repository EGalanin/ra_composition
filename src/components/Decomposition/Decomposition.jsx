import News from "./News";
import CurrentDate from "./CurrentDate";
import AdUnit from "./AdUnit";
import reactIcon from './assets/react.svg';
import Informers from "./Informers";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import SearchExample from "./SearchExample";
import Banner from "./Banner";
import Widgets from "./Widgets";
import './decomposition.css';

const news = [
    {id: 1, name: 'Новость 1', icon: reactIcon, link: '/news/1'},
    {id: 2, name: 'Новость 2', icon: reactIcon, link: '/news/2'},
    {id: 3, name: 'Новость 3', icon: reactIcon, link: '/news/3'},
    {id: 4, name: 'Новость 4', icon: reactIcon, link: '/news/4'},
    {id: 5, name: 'Новость 5', icon: reactIcon, link: '/news/5'}
  ];

const adUnit = {
    image: reactIcon, 
    link: 'Ссылка', 
    title: 'Рекламный блок',
    text: 'Текст'
  };  


export default function Decomposition() {
    return (
        <div className="components">
            <div className="header-wrap">
                <News news={news} />
                <CurrentDate date={new Date().toISOString()}/>
                <AdUnit adUnit={adUnit} />
            </div>

            <Informers />

            <div className="search-wrap">
                <Logo image={reactIcon}/>

                <div>
                    <Menu />
                    <Search />
                    <SearchExample randomSearchQuery={"Композиция компонентов"} />
                </div>
            </div>

            <Banner>Баннер</Banner>

            <Widgets />
        </div>
    );
};