import { Schema } from 'mongoose';
import { ICustomSchema } from '../../types/database';


const Comment: Schema = new Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: true }

});

const pubSchema:  ICustomSchema = {
    collection: 'pub', // mes tests : pub | test bdd proff : pubs
    definition: new Schema({
        name: { type: String, required: true },
        latLng: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        },
        comments: { type: [Comment], required: false }
    })
};

export default pubSchema;