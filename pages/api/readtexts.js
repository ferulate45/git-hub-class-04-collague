// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";
import getConfig from "next/config";

export default async function readtext(req, res) {
  let temp = [];
  const { serverRuntimeConfig } = getConfig();
  
  const dirRelativeToPublicFolder = "txt";
  
  const dir = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "./public",
    dirRelativeToPublicFolder
    );
    const filenames = fs.readdirSync(dir);
    const txt = filenames.map((name) => path.join("/", name));

   for (let index = 0; index < txt.length; index++) {
    const mensaje = fs.readFileSync(dir +  txt[index], "utf8")
    const separarString = (value) => value.split(/\r\n|\r|\n/, -1);
    temp.push(separarString(mensaje));
   }
  
  res.status(200).json(temp)
}
