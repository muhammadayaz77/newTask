import {toast} from 'react-toastify'

window.toastify = (msg,type) => {
    switch (type) {
        case 'success':
            toast.success(msg,type)
            break;
            case 'error':
                toast.error(msg,type)
                break;
        default:
            break;
    }
}