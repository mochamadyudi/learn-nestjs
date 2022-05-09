import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type UsersDocument = Users & Document

@Schema()
export class Users{
    @Prop({required:true})
    fullname: string;

    @Prop({required:true,unique:true})
    email: string;

    @Prop({required:true})
    username: string;

    @Prop({required:true})
    password: string;

    @Prop({default:null})
    salt:string

    @Prop({default:false})
    is_verify: boolean;

    @Prop({enum:['user','guest','admin'],default:'guest'})
    role: string

}
export const UsersSchema = SchemaFactory.createForClass(Users);
