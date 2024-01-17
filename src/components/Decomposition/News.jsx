import NewsItem from "./NewsItem";
import NewsNav from "./NewsNav";

export default function News({ news }) {
    return (
        <div className="news">
            <NewsNav />
            <ul className="component news__stories">
                {
                    news.map(item => <NewsItem key={item.id} name={item.name} icon={item.icon} link={item.link} />)
                }
            </ul>
        </div>
    );
}