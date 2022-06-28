import CommonCard from "../components/CommonCard";
import "../styles/CommonCards.scss";
import { sampleData } from "../data/sampleData";

export default function CommonCards({ search }) {
	return (
		<div className="CommonCards">
			{sampleData
				.filter((item) =>
					search ? item.name.toLowerCase().includes(search) : item
				)
				.map((data) => (
					<CommonCard key={data.id} data={data} />
				))}
		</div>
	);
}
