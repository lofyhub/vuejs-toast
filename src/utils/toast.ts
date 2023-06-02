import { useToast } from "vue-toastification";
import type { ToastID } from "vue-toastification/dist/types/types";

const toast = useToast();
const defaultToastMessage = "Please provide a toast message";

export function normalToast(message: string): ToastID {
    if (!message) {
        return toast(defaultToastMessage);
    }
    return toast(message);
}

export function success(message: string): ToastID {
    if (!message) {
        return toast(defaultToastMessage);
    }
    return toast.success(message, {timeout: false});
}

export function warning(message: string): ToastID {
    if (!message) {
        return toast(defaultToastMessage);
    }
    return toast.warning(message);
}

export function error(message: string): ToastID {
    if (!message) {
        return toast(defaultToastMessage);
    }
    return toast.error(message);
}

export function info(message: string): ToastID {
    if (!message) {
        return toast(defaultToastMessage);
    }
    return toast.info(message);
}
