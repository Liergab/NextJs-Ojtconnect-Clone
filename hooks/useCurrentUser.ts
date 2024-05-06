import { Heading1 } from 'lucide-react'
import {useSession} from 'next-auth/react'

export const useCurrentUser = () => {
    const {data:session} = useSession()

   
    return session?.user
}