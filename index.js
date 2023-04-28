import fs from 'fs';
import crypto from 'crypto';

const encriptarPassword = password => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    return salt + ':' + hash;
}

const verificarPassword = (password, hashOriginal) => {
    const [salt, hash] = hashOriginal.split(':');
    const hashGenerado = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    return hash === hashGenerado;
}


class UserManager {
    constructor(){
        this.path = 'usuarios.json';
    }

    async crearUsuario(usuario){
        usuario.password = encriptarPassword(usuario.password)
        let usuarios = await fs.promises.readFile(this.path)
        let objUsuarios = JSON.parse(usuarios);
        objUsuarios.push(usuario)
        await fs.promises.writeFile(this.path, JSON.stringify(objUsuarios))
        return 'User created'
    }

    async validarUsuario(user, password) {
        let usuarios = await fs.promises.readFile(this.path);
        let objUsuarios = JSON.parse(usuarios);
        let user1 = objUsuarios.find(usuario => usuario.user == user)
        if(user1){
            if(await verificarPassword(password, user1.password)){
                return 'Logueado'
            }else{
                return 'Error'
            }
        }
    }
}

const manager = new UserManager();
let usuario = {
    nombre: 'Ana',
    apellido: 'Lopez',
    user: 'alopez',
    password: '123456'
}
let userCreated = await manager.crearUsuario(usuario);
console.log(userCreated);
let respuesta = await manager.validarUsuario('alopez', '123456')
console.log(respuesta)

