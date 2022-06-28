import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function CardBody({ title, subTitle }) {
	return (
		<div className="CommonCards__item--body">
			<h3>{title}</h3>
			<h5>{subTitle}</h5>
			<ButtonGroup>
				<Button variant="one">View</Button>
				<Button variant="two">Remove</Button>
			</ButtonGroup>
		</div>
	);
}
