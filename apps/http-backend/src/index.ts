import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from './middleware';
import {CreateUserSchema , SinginSchema, CreateRoomSchema} from '@repo/common/types';

const app = express();

app.get('/singup', (req, res) => {

    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){ 
        res.status(400).json({
            error: "Incorrect data"
        });
    }
    
    //db call

    res.json({
        userId: 1
    });
});

app.post('/singin', (req, res) => {
    
    const data = SinginSchema.safeParse(req.body);
    if(!data.success){ 
        res.status(400).json({
            error: "Incorrect data"
        });
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SECRET );

    res.json({
        token
    });
});

app.post('/room', middleware, (req, res) => {

    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){ 
        res.status(400).json({
            error: "Incorrect data"
        });
    }

    //db call

    res.json({
        roomId: 1
    });
});

app.listen(3001)