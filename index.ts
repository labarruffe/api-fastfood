import {connect} from 'mongoose';
import {app} from './src/app';

async function initialize() {
    const url = 'mongodb://localhost:27017/fastfood_store';
    await connect(url, {useNewUrlParser: true});
    console.log('Conectado com sucesso em fastfood_store!');
    app.listen(3000, () => console.log('Executando na porta 3000.'));

} 

initialize();