

export const isDisabled = (email,password) => {

        if(email.length && password.length >= 1){
            return false
        } else {
            return true
        }

}
