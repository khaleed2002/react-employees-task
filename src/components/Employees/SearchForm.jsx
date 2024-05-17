import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
    return (
        <form action="get" className="search-form">
            <div className="search">
                <FiSearch className="seach-icon" color="#23aaeb" />
                <input type="text" placeholder="Search" />
            </div>

        </form>
    )
}
export default SearchForm