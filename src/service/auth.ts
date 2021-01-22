import Auth from '@aws-amplify/auth'

export function getCurrentUser(): Promise<any> {
    return Auth.currentSession().then(
        user => user,
        err => null
    )
}

export function signOut(): Promise<any> {
    return Auth.signOut()
}

export function signIn(email: string, password: string): Promise<any> {
    return Auth.signIn(email, password)
                    .then(data => {
                            console.log(data)
                            return data
                        },
                        err => {
                            console.log(err)
                            return null
                        })
}

export function signUp(fullname: string, email: string, password: string): Promise<any> {
    return Auth.signUp({
	            username: email,
	            password: password,
	            attributes: {
                    nickname: fullname, 
	            }
            }).then(
                data => data,
                err => {
                    console.log(err)
                    return null
                })
	            
}

  // Auth.currentAuthenticatedUser()
  //   .then(user => {
        
  //       // console.log('successful reconnected')
  //       // console.log(user);
  //       setAuth(true)
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   });