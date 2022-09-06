import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/inventory";

class InventoryService{

    getInventory(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

    createInventory(){
        return axios.post(INVENTORY_API_BASE_URL, inventory);
    }

    getBookByID(inventory_ID){
        return axios.get(INVENTORY_API_BASE_URL, '/' + bookID);
    }

    updateInventory(inventory, bookID){
        return axios.put(INVENTORY_API_BASE_URL, + '/' + bookID, inventory);
    }

    deleteEmployee(employeeID){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + bookID);
    }
}

export default new InventoryService();