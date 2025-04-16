
import getRestaurantMenu from '../services/getRestaurantMenu'
import { useState, useEffect } from 'react'

const useRestaurantMenu = (resId) => {
    const [resMenu, setResmenu] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRestaurantMenu(resId);
                setResmenu(data);
            } catch (error) {
                console.log("Error fetching menu:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [resId]);
    return { resMenu, loading };
}

export default useRestaurantMenu