export default class Etudiant {
    constructor (nom,age,section){

        //La fonction utilisateur à un nom
        this.nom = nom 
        this.age = age 
        this.section = section 
        
    }
     
description(){
    return `${this.nom} (${this.age} ans) -Section : ${this.section}`;

}
}
