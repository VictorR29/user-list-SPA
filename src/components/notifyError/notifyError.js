import { toast } from "react-hot-toast";

const notifyError = () => {
  toast.error("Usuario o contraseña incorrectos")
}

export { notifyError }