'use server';

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7; // 1 week in seconds

// Create user account in Firestore
export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        const userRef = db.collection('users').doc(uid);
        const userRecord = await userRef.get();

        if (!userRecord.exists) {
            await userRef.set({
                name,
                email,
                createdAt: new Date().toISOString(),
            });

            console.log(`User record created for UID: ${uid}`);
        }

        return {
            success: true,
            message: 'Account created successfully. Please sign in.',
        };
    } catch (e: any) {
        console.error('Error creating a user:', e);

        if (e.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'This email is already in use.',
            };
        }

        return {
            success: false,
            message: 'Failed to create an account.',
        };
    }
}

// Sign in user and handle session
export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);

        if (!userRecord) {
            return {
                success: false,
                message: 'User does not exist. Create an account instead.',
                redirectToSignUp: true,
            };
        }

        await setSessionCookie(idToken);

        const userRef = db.collection('users').doc(userRecord.uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            console.log(`No Firestore record for UID: ${userRecord.uid}`);
            return {
                success: false,
                message: 'No user profile found. Please sign up to complete your account.',
                redirectToSignUp: true,
            };
        }

        return {
            success: true,
            message: 'Successfully signed in.',
        };
    } catch (e) {
        console.error('Error signing in:', e);

        return {
            success: false,
            message: 'Failed to log into an account.',
        };
    }
}

// Set session cookie
export async function setSessionCookie(idToken: string) {
    try {
        const cookieStore = await cookies(); // No await here!

        const sessionCookie = await auth.createSessionCookie(idToken, {
            expiresIn: ONE_WEEK * 1000, // milliseconds
        });

        cookieStore.set('session', sessionCookie, {
            maxAge: ONE_WEEK,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
        });

        console.log('Session cookie set successfully.');
    } catch (e) {
        console.error('Error setting session cookie:', e);
        throw new Error('Failed to set session cookie.');
    }
}

// Get the current authenticated user
export async function getCurrentUser(): Promise<User | null> {
    try {
        const cookieStore = await cookies(); // Await because inside async server component
        const sessionCookie = cookieStore.get('session')?.value;

        if (!sessionCookie) {
            console.log('No session cookie found.');
            return null;
        }

        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        console.log('Decoded claims:', decodedClaims);

        const userRecord = await db
            .collection('users')
            .doc(decodedClaims.uid)
            .get();

        if (!userRecord.exists) {
            console.log(`User record does not exist for UID: ${decodedClaims.uid}`);
            return null;
        }

        console.log(`User record found for UID: ${decodedClaims.uid}`);

        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (e) {
        console.error('Error verifying session cookie:', e);
        return null;
    }
}

// Check authentication
export async function isAuthenticated(): Promise<boolean> {
    try {
        const user = await getCurrentUser();
        console.log('Authenticated user:', user);
        return !!user;
    } catch (e) {
        console.error('Error checking authentication:', e);
        return false;
    }
}
