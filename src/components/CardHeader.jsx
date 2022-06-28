import boltIcon from "../assets/images/boltIcon.svg";

export default function CardHeader({ originType }) {
	return (
		<div className="CommonCards__item--header">
			<div className={`${originType.toLowerCase()}`}>
				{originType.toLowerCase() === "automated" && (
					<img src={boltIcon} alt="" />
				)}{" "}
				{String(originType).charAt(0).toUpperCase() +
					String(originType).slice(1, -1)}{" "}
				Origin
			</div>
		</div>
	);
}
