import mongoose, { mongo } from 'mongoose'
const {Schema} = mongoose
const userSchema = new Scema ({
    name: {
        type: String,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: true,
    },
    Id: {
        type: Int16Array,
        trim: true,
        unique: true,
        require: true,
    },
    rating: {
        type: Int16Array,
        trim: true,
    },
    professor:{},
    alumn:{}, 
});

export default mongoose.model('User', userSchema);

