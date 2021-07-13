import FundRequest from '../FundRequest/FundRequest';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <main>
                <SearchBar />
                <FundRequest />
                <footer>
                    <p style={{ textAlign: 'center', padding: '2em' }}>Developed by <a href="https://www.linkedin.com/in/ishtiak-ahmed-1606/">Ishtiak Ahmed</a></p>
                </footer>
            </main>
        </div>
    );
}

export default Dashboard;
