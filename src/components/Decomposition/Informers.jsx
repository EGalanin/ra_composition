import Informer from "./Informer";

export default function Informers() {
    return (
        <div className="informers component">
            <Informer>USD</Informer>
            <Informer>EUR</Informer>
            <Informer>Нефть</Informer>
        </div>
    );
}