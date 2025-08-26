import { NotebookPen, Database,Handshake } from 'lucide-react';
import SpotlightCard from './spotlightCard';

const features=[
    {
        logo:Handshake ,
        title:"Collaborative Learning",
        desc:"Help others and grow together."

     },
     {
        logo:NotebookPen ,
        title:"Seamless Note-Taking",
        desc:"Jot down your thoughts effortlessly with our smooth and user-friendly interface."

     },
     {
        logo: Database,
        title:"Smart Organization",
        desc:"Effortlessly sort and tag your notes for quick and easy access."

     },
]

export const About = () =>{
    return (
        <section className="py-20">
            <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bold  text-[4vw] mb-4  ">Why Choose Us?</h2>
                    <p className="text-sm md:text-md lg:text-xl text-zinc-300 max-w-2xl mx-auto">Scholarly is your creative haven—a digital canvas designed to capture, organize, and cultivate your ideas effortlessly. Our mission is to inspire innovation and enhance productivity through intuitive note-taking and seamless idea management.</p>

                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    { features.map((items,i)=>(
                        <SpotlightCard className='w-sm'
                        key={i}>
                            <items.logo className="h-10 w-10 text-blue-500 mb-4 mx-auto" />
                            <h3 className={"text-xl text-white font-semibold "}>{items.title}</h3>
                            <p className="text-zinc-300">{items.desc}</p>

                        </SpotlightCard>

                    )) }
                </div>

            </div>

        </section>
    )
}