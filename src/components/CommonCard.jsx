import moment from "moment";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CommonCard({ data }) {
	return (
		<div className="CommonCards__item">
			<CardHeader originType={data.originType} />
			<CardBody title={data.name} subTitle={`${data.intents} Intents`} />
			<CardFooter
				text={`Last Upated: ${moment(data.dateUpdated).format("ll")} @ ${moment(
					data.dateUpdated
				).format("LT")}`}
			/>
		</div>
	);
}
