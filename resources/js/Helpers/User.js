import Token from './Token';
import AppStorage from "./AppStorage";

class User{

     async login(data){
         try {
             const res = await axios.post('/api/auth/login', data);
            this.responseAfterLogin(res.data);
         }catch(err){
             alert('Oops! Login error . Please try again')
         }
    }

    responseAfterLogin(response){

        if(Token.isValid(response.access_token)){

            AppStorage.store(response.access_token,response.user);
        }

    }

    hasToken(){
         const token= AppStorage.getToken();
        if(token){
            return Token.isValid(token);
        }
        return  false;
    }

    loggedIn(){
         return this.hasToken();
    }

    logout(){
         AppStorage.clear();
    }

    name(){
         if(this.loggedIn()){
             return AppStorage.getUser();
         }
    }

    id(){
         if(this.loggedIn()){
             const payload=Token.payload(AppStorage.getToken());
            return payload.sub;
         }
    }
}

export default User=new User();
