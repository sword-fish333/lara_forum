import Token from './Token';
import AppStorage from "./AppStorage";

class User{

     async login(data){
         try {
             const res = await axios.post('/api/auth/login', data);
          return   this.responseAfterLogin(res.data);
         }catch(err){
             console.log('err',err);
           if(err){
            alert(err.response.data.error);
           }else{
               alert('Oops! Login error . Please try again')

           }
         }
    }

    responseAfterLogin(response){

        if(Token.isValid(response.access_token)){
            AppStorage.store(response.access_token,response.user);
            window.location='/forum';

        }
return true;
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
    window.location='/login';
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

    owner(id){
         return this.id()===id;
    }

    admin(){
         return this.id()===44
    }
}

export default User=new User();
