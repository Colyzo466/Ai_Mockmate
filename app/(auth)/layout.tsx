import { ReactNode } from 'react';
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (isUserAuthenticated) {
        redirect('/'); // Redirect to home page if authenticated
    }

    return (
        <div className="auth-layout">
            {children}
        </div>
    );
};

export default AuthLayout;