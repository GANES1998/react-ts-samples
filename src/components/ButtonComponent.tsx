const handleButtonClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>> = (event) => {
    event.preventDefault();
    console.log('Console logging the button click....');
}

const ButtonComponent: React.FC = ({ children }) => (
    <button onClick={handleButtonClick}>{children}</button>
)

export default ButtonComponent;