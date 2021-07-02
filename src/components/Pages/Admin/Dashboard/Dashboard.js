import AddProduct from '../AddProduct/AddProduct'
import ProductList from '../ProductList/ProductList';
import './Dashboard.css';

const Dashboard = ({currentState}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center dashboard-root">
            {
                currentState == 'addProduct' && <AddProduct/>
            }
            {
                currentState == 'productList' && <ProductList/>
            }
            
        </div>
    );
};

export default Dashboard;