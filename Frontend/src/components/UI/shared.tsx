import { Card } from "./card";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import { Backend_url } from "../../config";
import { useNavigate } from "react-router-dom";
import { IoDocumentTextOutline, IoLink } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import LiquidChrome from "./LiquidBg";

interface content1{
    _id:string;
    type:string;
    title:string;
    link:string;
}
const icons = [
  { name: "twitter", logo: <FaXTwitter /> },
  { name: "youtube", logo: <AiOutlineYoutube /> },
  { name: "Document", logo: <IoDocumentTextOutline /> },
  { name: "Links", logo: <IoLink /> },
 
];

export const Shared =()=>{
    const {hash} =useParams() ; //url se hash lega
    console.log("received hash:",hash);
    const [content1,setContent1]=useState<content1[]>([]);
    const [loading,setLoading]=useState(true);
    const [username,setUsername]=useState("");
    const navigate=useNavigate();

    const fetchshared =async()=>{
        try{
        setLoading(true);
        const res=await axios.get(`${Backend_url}/api/v1/brain/${hash}`);
        setContent1(res.data.content);
        setUsername(res.data.username);

        }catch(e){
            console.error("error fetching shared content",e)
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(hash){
        fetchshared();
        }

    },[hash])

return (// Main container with relative position and min-height
        <div className="relative min-h-screen">
            {/* The background component with absolute positioning */}
            <div className="absolute inset-0 z-0">
                <LiquidChrome />
            </div>

            {/* The main content container with a higher z-index and transparent background */}

            {/*Normal Flow: Elements in the normal flow (static, relative, sticky) take up space. 
            The element below them starts where the first one ends.*/}

            {/*Absolute Flow: Elements with position: absolute don't take up any space. 
            Other elements on the page will behave as if the absolute element isn't there, 
            and they'll "collapse" into its space.*/}
            
             <div className="absolute z-10 p-8 text-white">  {/* making this child relative fixed the overlay part */}
                <div className="flex justify-end mb-4">
                    <button onClick={() => navigate("/")} className="text-white px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 shadow-lg shadow-cyan-500/50">
                        Go HOME
                    </button>
                </div>
                {loading ? (
                    <p className="text-center text-xl text-white">Loading Shared Notes...</p>
                ) : content1.length === 0 ? (
                    <p className="text-red-500 text-center text-white font-bold text-xl">No Notes found</p>
                ) : (
                    <div>
                        <h2 className="text-4xl font-bold text-white text-center mb-4">{username}'s Notes</h2>
                        <div className="pl-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {content1.map((items) => {
                                const icon = icons.filter((i) => items.type.toLowerCase() === i.name.toLowerCase());
                                return (
                                    <Card
                                        disabled={true}
                                        icon={icon ? icon[0].logo : <IoDocumentTextOutline />}
                                        onDelete={() => { return null; }}
                                        id={items._id}
                                        link={items.link}
                                        title={items.title}
                                        type={items.type}
                                        date={new Date().toLocaleDateString()}
                                    ></Card>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
       
       )
}