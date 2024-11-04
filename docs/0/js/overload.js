;(function(
class Overload {
    static define
    constructor(...args) {

    }
}
function overload(...args) { // ['TypeName',()=>{}, ..., (...args)=>{}]
    return (...args)=>{
        const typeNames = [...args].map(a=>Type.getName(a))
        return ifel()
    }
}
window.overload = overload
)}();
