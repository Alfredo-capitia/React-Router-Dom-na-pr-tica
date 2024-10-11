
import { Routes, Route}from'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Profile } from './pages/prifile';

export function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/Profile" element={<Profile />} /> 
            <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
    )

}


