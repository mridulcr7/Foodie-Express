import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (name,email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://foodie-express.onrender/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            console.log(json);

            Cookies.set('jwt', json.token, { expires: 7 });


            dispatch({ type: 'LOGIN', payload: json })

            // update loading state
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}