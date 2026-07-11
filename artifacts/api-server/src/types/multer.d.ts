declare module "multer" {
  import { Request } from "express";

  interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
  }

  interface MulterInstance {
    single(fieldName: string): (req: Request, res: any, next: any) => void;
  }

  interface MulterMemoryStorage {
    (): any;
  }

  export function memoryStorage(): any;

  interface MulterOptions {
    storage?: any;
    limits?: { fileSize?: number };
  }

  export default function multer(options?: MulterOptions): MulterInstance;
}

declare global {
  namespace Express {
    interface Request {
      file?: import("multer").MulterFile;
    }
  }
}
