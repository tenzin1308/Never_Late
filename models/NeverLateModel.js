import mongoose from "mongoose";

const neverLateSchema = new mongoose.Schema(
    {

        user: { 
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            require: true,
            default: ""
        },
        password: {
            type: String,
            require: true,
            default: ""
        },
        assignments: [
            {
                Subject: {
                    type: String,
                    require: true
                },
                StartTime: {
                    type: String,
                    require: true
                },
                EndTime: {
                    type: String,
                    require: true
                },
                IsAllDay: {
                    type: Boolean,
                    default: false,
                    require: true
                },
                IsReadonly: {
                    type: Boolean,
                    default: true,
                    require: true
                },
            }
        ]
            
        
    },
    {
        timestamps: true,
    }
);
const NeverLate = mongoose.model("NeverLate", neverLateSchema);
export default NeverLate;