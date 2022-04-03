import { useEffect,useState } from "react";

function CleanupEfffect() {
    const [count,setCount] = useState(1);
    const [avatar,setAvatar] = useState()

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        // console.log(URL.createObjectURL(file));
    }
    useEffect(() => {
          
        //Cleanup function
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview);
         }
            
    },[avatar])

    
    return (
        <div>
           <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
            )

            }
        </div>
    ) 
}
export default CleanupEfffect;