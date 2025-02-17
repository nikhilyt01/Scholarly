
interface props{
    open:boolean;
    onClose:()=> void;
    onConfirm: ()=>void;
}

export const Logout =({open,onClose,onConfirm}:props) =>{
    return <div>
       
        {open && (<div>
            <div className="fixed inset-0 bg-zinc-900 opacity-60 min-h-screen flex items-center justify-center "></div>
            <div className="fixed inset-0   min-h-screen flex items-center justify-center ">
            <div className="rounded-xl w-80 p-4 outline outline-1 outline-white bg-zinc-800 ">
                <h2 className="text-xl font-bold">LogOut</h2>
                <p className="mt-2">Do You Want To LogOut?</p>
                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="bg-zinc-200  px-4 py-2 rounded-xl cursor-pointer text-zinc-700 hover:bg-zinc-300">Cancle</button>
                    <button onClick={onConfirm} className="bg-blue-500 shadow shadow-lg shadow-cyan-500/50 px-4 py-2 rounded-xl cursor-pointer text-white hover:bg-red-600 hover:shadow-none">LogOut</button>

                </div>

            </div>


        </div>
</div>)}
    </div>

}