import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const useAuth = () => {
    const { search } = useLocation();
    const navigate = useNavigate()
    const key = search.replace(`?key=`, "")
    const [auth, setAuth] = useState(false)

    useEffect(() => {

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const checkAuth = async (token: string) => {
            const { data: check } = await axios({
                method: "GET",
                url: `${process.env.REACT_APP_SERVER_ENDPOINT}/users/check-auth`,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                cancelToken: source.token
            })

            return check
        }

        const keyExist = async (key: string) => {
            try {

                const check = await checkAuth(key)
                await Cookies.set('key', key, {
                    expires: 1,
                    sameSite: 'Strict',
                    secure: true
                })

                if (check) {
                    navigate("/")
                    setAuth(true)
                } else {
                    window.location.href = process.env.REACT_APP_REDIRECT_URL || "";
                }

            } catch (error) {
                window.location.href = process.env.REACT_APP_REDIRECT_URL || ""
            }
        }

        const cookieExist = async (key: string) => {
            const check = await checkAuth(key)
            setAuth(check)
        }

        let cookie = Cookies.get("key")
        if (key) {
            keyExist(key)
        } else if (cookie) {
            cookieExist(cookie)
        } else {
            setAuth(false)
            window.location.href = process.env.REACT_APP_REDIRECT_URL || ""
        }

        return () => {
           source.cancel();
        }

    }, [key])

    return ({
        auth
    })
}

export default useAuth