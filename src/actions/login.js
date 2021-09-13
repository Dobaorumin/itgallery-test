import { types } from "../types/types"

export const login = (email) => {
    return {
        type:types.login,
        payload: {
            active:true,
            email:email
        }
    }
}

export const logout = () => ({
    type:types.logout
})