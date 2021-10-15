import Person from "./Person";

type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
};

const PersonList: React.FC<PersonListProps> = ({ names }) => (
    <>
        {names.map((name, _idx) => <Person key={name.first} name={name} />)}
    </>
);

export default PersonList;