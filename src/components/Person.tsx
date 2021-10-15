type PersonProps = {
    name: {
        first: string;
        last: string;
    }
}

const Person: React.FC<PersonProps> = ({ name }) => (
    <div>{name.first} {name.last}</div>
);

export default Person;