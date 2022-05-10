
export default class SuperForms{

   /* static setIfAttributeExists(input, obj, attr){

        if(obj[attr] != undefined){
            input[attr]= obj[attr]
        }
    }*/

    static createHTMLInputElement(obj){
      
        let input = document.createElement('input')
     
        //this.setIfAttributeExists(input, obj, 'type')
        
        if(obj.name != undefined){
            input.classList.add(obj.name)
        }
        if(obj.placeholder != undefined){
            input.classList.add(obj.placeholder)
        }
        if(obj.id != undefined){
            input.classList.add(obj.id)
        }
        if(obj.classes != undefined){
            input.classList.add(obj.classes)
        }
        if(required){
            input.required = true
        }
        return input
    }
}