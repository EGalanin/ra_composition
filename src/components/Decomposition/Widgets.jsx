import Widget from "./Widget";

export default function Widgets() {
    return (
        <div className="widgets component">
           <Widget>Погода</Widget> 
           <Widget>Карта Германии</Widget> 
           <Widget>Посещаемое</Widget> 
           <Widget>Телепрограмма</Widget> 
           <Widget>Эфир</Widget> 
        </div>
    );
}