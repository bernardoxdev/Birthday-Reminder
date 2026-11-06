interface Person {
    id: number;
    name: string;
    age: number;
    image: string;
}

interface ListProps {
    people: Person[];
}

const List = ({ people }: ListProps) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;

                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />

                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;