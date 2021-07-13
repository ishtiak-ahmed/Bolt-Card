import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const FundRequest = () => {
    const allRequest = useSelector((state) => state.fundRequest)
    const [searchResult, setSearchResult] = useState({status: false, result: []})
    const [query, setQuery] = useState('')
    const [queryType, setQueryType] = useState('name')
    const handleSearch = () => {
        const result = allRequest.filter(request => request[queryType].includes(query))
        setSearchResult({status: true, result: result})
    }
    return (
        <div>
            <h1 className="title">Fund Requests</h1>
            <div className="search-area">
                <input type="text" className="search_field" placeholder="search"
                 onChange={(e) => setQuery(e.target.value)}/>
                <select defaultValue='name' id="" onChange={(e)=> setQueryType(e.target.value)}>
                    <option value="name">By Name</option>
                    <option value="id">By ID</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>
                {
                    searchResult.status && (
                        <div className='result'>
                            <button onClick={() => setSearchResult({status: false, result: []})}>Close Result</button>
                            <span>Result Found: {searchResult.result.length}</span>
                        </div>
                    )
                }
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Amount Requested</td>
                        <td>Deadline</td>
                        <td>Reason for Requests</td>
                    </tr>
                </thead>
                <tbody>

                {
                    searchResult.status ? searchResult.result.map((item, index) => (
                            <TableRow key={item.id} data={item} index={index}/>)
                        )
                    : allRequest.map((item, index) => <TableRow key={item.id} data={item} index={index}/>)
                }

                </tbody>
            </table>
        </div>
    );
}

export default FundRequest;
