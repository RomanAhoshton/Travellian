
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const  useToast = () => {
  const successToast = () => {
    toast.success('Your account has been successfully created.', {
      position: 'top-right',
      autoClose: 5000, // milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: 'white', width:'100%',color:'green' },
    });
  };

  const errorToast = () => {
    toast.error('User with this data does not exist. Please check your email or password.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: 'white' ,width:'100%',color:'red'},
    });
  };

  const errorToastRegister = () => {
    toast.error('This data is not correct, or user with this data is already created', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: 'white',width:'100%',color:'red' },
    });
  };
  


  return {

      successToast,errorToast,errorToastRegister
  }
 
  
};

export default useToast ;
