import "../styles/Button.scss";

export default function Button({ children, variant }) {
	return <button className={`Button ${variant}`}>{children}</button>;
}
