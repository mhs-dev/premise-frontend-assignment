import { useState } from "react/cjs/react.development";
import SearchBar from "./components/SearchBar";
import CommonCards from "./containers/CommonCards";
import "./styles/variables.css";

function App() {
	const [search, setSearch] = useState("");

	return (
		<div className="App">
			{/* Add Responsive container component here. Render the card components inside of that component.  */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "20px 0",
				}}
			>
				<SearchBar
					value={search}
					onChange={({ target }) => setSearch(target.value)}
				/>
			</div>
			<CommonCards search={search} />
		</div>
	);
}

export default App;
