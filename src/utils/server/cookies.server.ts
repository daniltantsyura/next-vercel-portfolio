import { cookies } from 'next/headers';

export async function getServerCookieTheme(): Promise<'light' | 'dark'> {
    try {
        const cookieStore = await cookies();
        const themeCookie = cookieStore.get('hospital-theme');
        return (themeCookie?.value as 'light' | 'dark') || 'light';
    } catch (error) {
        console.log(error);
        return 'light';
    }
}