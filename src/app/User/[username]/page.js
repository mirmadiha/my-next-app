//dynamic routing
"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation"
const useUser=()=>({user:"Jack", loading : false});

function Username({ username }) {
    const router=useRouter();
    const user=useUser();

    useEffect(()=>{
        if(user.user==null){
            router.replace('/');
        }
    },[])
    return (
        <>
            <h1>Hi this is {username}! page</h1>
            <button onClick={()=>{ß
                router.push(`${username}/settings`)
            }}>
                Home
            </button>
            <button onClick={(e)=>router.refresh()}>Reload</button>
        </>
    );
}

export default Username;