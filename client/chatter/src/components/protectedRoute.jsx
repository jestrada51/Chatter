// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext.jsx'

const ProtectedRoute = ({children}) => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to ='/login' replace />
    
};

export default ProtectedRoute

/*
    what is replace?
    what is the difference of using const vs let in this example?

*/