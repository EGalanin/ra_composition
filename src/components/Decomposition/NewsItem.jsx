export default function NewsItem( { name, icon, link }) {
    return (
        <li className="news__story component">
            <img className="news__img" src={icon} alt=""/>
            <a className="news__link" href={link}>{name}</a>
        </li>
    );
}