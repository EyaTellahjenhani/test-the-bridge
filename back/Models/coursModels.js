const mysql= require('mysql2/promise');



const dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'the_bridge'
}


// Recupération  des détails d'un cours
exports.getcours=async(id)=>{

    try{
       let connection = await mysql.createConnection(dbconfig);
        const [rows]=await connection.execute('SELECT *  FROM `coure`  WHERE id = ?',[id]);
        if(rows.length>0){ 
            return rows;
        }
    else{
         return null
        }
    }catch (error){
        console.log(error);
    }
}






exports.addcoursModel=async(title,image,price)=>{
    try{
        let connection = await mysql.createConnection(dbconfig);
    
        const [rows]=await connection.execute('INSERT INTO `coure` (title,image,price) VALUES (?,?,?)', [title,image,price]);
        if(rows.affectedRows>0){ 
            return rows;
        }
    else{
         return null;
        }
    }catch (error){
        console.log('Erreur:')
    }
}







// Suppression d'un cours

exports.deletecoursModel=async(id)=>{
    try{
        let connection = await mysql.createConnection(dbconfig);
        const [rows]=await connection.execute('DELETE FROM `coure` WHERE id=?', [id]);
        if(rows.affectedRows>0){ 
            return rows;
        }
    else{
         return null;
        }
    }catch (error){
        console.log('Erreur')
    }
}

exports.modifycoursModel=async(id,title,image,price)=>{
    try{
        let connection = await mysql.createConnection(dbconfig);
        const [rows]=await connection.execute('UPDATE `coure` SET title=?,image=?,price=? WHERE id=?', [title,image,price,id]);
        if(rows.affectedRows>0){ 
            return rows;
        }
    else{
         return null;
        }
    }catch (error){
        console.log('Erreur')
    }
}

exports.getAllcoursModel=async()=>{
    try{
        let connection = await mysql.createConnection(dbconfig);
        const [rows]=await connection.execute('SELECT * FROM `coure`');
        if(rows.length>0){ 
            return rows;
        }
    else{
         return null;
        }
    }catch (error){
        console.log('Erreur')
    }
}