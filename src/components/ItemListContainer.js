import Card from './card';

function ItemListContainer({greeting}) {
    return (
        <div className="home_container tarjeta">
            <h1> {greeting}</h1>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default ItemListContainer;