import {useState,useEffect} from 'react'
import toast from 'react-hot-toast'

const GetUser = () => {
  const [loading, setloading] = useState(false)
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const getProfile = async () => {
      setloading(true)
      try {
        const res = await fetch('/api/user')
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error)
        }
        setProfile(data)
      } catch (error) {
        toast.error(error.message)
      }
      finally{
        setloading(false)
      }
    }

    getProfile()
    
  }, [])
  return {loading,profile}
}

export default GetUser