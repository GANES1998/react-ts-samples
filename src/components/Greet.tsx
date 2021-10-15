type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn?: boolean;
}

const Greet: React.FC<GreetProps> = ({ name, messageCount, isLoggedIn }) => isLoggedIn ? <div> Welcome {name}!You have {messageCount} unread messages</div > : <div>Welcome guest</div>;

export default Greet;