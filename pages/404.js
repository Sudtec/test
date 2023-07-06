import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, []);
    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keywords" content="Ninjas" />
            </Head>
            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>That page can not be found</h2>
                <p>Go back to the <Link href={'/'}>Homepage</Link></p>
            </div>
        </>
    );
}

export default NotFound;