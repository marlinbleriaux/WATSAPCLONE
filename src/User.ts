import { identifierModuleUrl, UrlResolver } from "@angular/compiler";

const user = {
    id: null,
    name: null,
    Image: null,
    get: () => {
        return {
            id: user.id,
            name: user.name,
            image: user.Image,
        }
    },
    set: (data:any)=>{
        user.id= data.id ? data.id : user.id;
        user.name=data.name? data.name : user.name;
        user.Image=data.Image? data.Image : user.Image;
    }


}
export default user;