import Link from "next/link"
function Navigation({params}){
    return (
        <>
        <Link href="/" className="mr-4 text-blue-500">Home</Link>

        <Link href="/about" className="mr-4 text-blue-500">About</Link>

        <Link href="/blog/first-post" className="mr-4 text-blue-500">Blog</Link>
        </>
    )
}

export default Navigation;
