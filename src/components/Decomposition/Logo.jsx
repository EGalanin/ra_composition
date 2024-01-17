export default function Logo({ image }) {
    return (
        <div className="component logo">
            <img src={image} alt="Логотип" />
        </div>
    );
}