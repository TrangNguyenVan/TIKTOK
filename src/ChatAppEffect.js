import { useEffect,useState } from "react";

const lessons = [
    {
        id : 1,
        name : 'ReactJs la gi ?'
    },
    {
        id : 2,
        name : 'NodeJs from zero to hero'
    },
    {
        id : 3,
        name : 'SPA/MPA la gi'
    },
    {
        id : 4,
        name : 'Arrow function'
    }
]


function ChatAppEffect() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        return() =>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])

    return(
        <div style={{padding:20}}>
            <ul>
                {lessons.map(lesson =>(
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red':'#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ChatAppEffect;