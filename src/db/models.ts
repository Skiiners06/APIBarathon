import { Model } from 'mongoose';
import schemas from './schemas'; // import par défaut
import { database } from "./index"; // import nomé
import { ICustomSchema } from "../types/database";

const initializedModels = {};

const getModel = (modelName: string): Model => {
    // Si en mémoire ==> version en mémoire
    if (initializedModels[modelName]){
        return initializedModels[modelName];
    }
    // sinon construction, mise en mémoire et retour

    // Ici on devrait aussi vérifier que schema existe
    const schema: ICustomSchema = schemas[modelName];
    console.log(`Creation du model pour ${modelName}...`);

    // Constructeur de model de l'api Mangoose
    const model = database.model(schema.collection, schema.definition, schema.collection);
    initializedModels[modelName] = model;

    return model;
    // sinon on initialize le model et on le met en mémoire et on le renvoie
};

export default getModel;