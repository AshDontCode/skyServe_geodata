import NavBar from "@/components/NavBar";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <div className="bg-black h-screen text-gray-400">
       <NavBar />
      <AuthForm type="signup" />;
    </div>
  );
}
