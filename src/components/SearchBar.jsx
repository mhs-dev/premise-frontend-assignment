import { BsSearch } from "react-icons/bs";
import { forwardRef } from "react/cjs/react.production.min";
import "../styles/SearchBar.scss";

function SearchBar({ ...restProps }, ref) {
	return (
		<div className="SearchBar">
			<span>
				<BsSearch />
			</span>
			<input type="text" {...restProps} ref={ref} />
		</div>
	);
}

export default forwardRef(SearchBar);
