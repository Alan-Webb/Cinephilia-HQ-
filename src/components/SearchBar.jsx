import {useState} from "react";

const SearchBar = ({onSearch}) => {
	const [term, setTerm] = useState("");

	const handleSumbit = (e) => {
		e.preventDefault();
		onSearch(term);
	};

	return (
		<form>
			<input />
		</form>
	);
};

export default SearchBar;
