import crypto  from "crypto";
import multer from "multer";
import { resolve } from "path";


export default {

    upload(folder: string) {
        return {
            Storage: multer.diskStorage({
                destination: resolve(__dirname,"..","..", folder),
                filename: (request, file, callback) => {
                    const filehash = crypto.randomBytes(16).toString("hex");
                    const filename = `${filehash}-${file.originalname}`

                    return callback(null, filename);
                }  

                          
            })
        }

    }
}