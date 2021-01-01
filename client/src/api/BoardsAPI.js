import {useState, useEffect} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function BoardAPI() {
    const [boards, setBoards] = useState([])
    const [callback, setCallback] = useState(false)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getBoards = async () => {
            const res = await axios.get(`/api/boards?user_id=${typeof cookies.get('user') === "undefined" ? '' : cookies.get('user')._id}`)
            // console.log(res.data.boards)
            setBoards(res.data.boards)
            setResult(res.data.result)
        }
        getBoards()
    },[callback])
    
    return {
        boards: [boards, setBoards],
        callback: [callback, setCallback],
        result: [result, setResult]
    }
}

export default BoardAPI
