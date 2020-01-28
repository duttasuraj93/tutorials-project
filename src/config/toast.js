import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({
    position: "top-right",
    autoClose: 5000,
    closeButton: false,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true,
    draggable: true,
});

export default toast;