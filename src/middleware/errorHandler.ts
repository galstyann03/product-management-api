import { Request, Response, NextFunction } from 'express';

interface Error {
    status?: number;
    message: string;
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    res.status(status).json({
        status,
        message: err.message || 'Internal Server Error'
    });
}