// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

export default function readfiles (req, res) {
  const { serverRuntimeConfig } = getConfig()

  const dirRelativeToPublicFolder = 'img'

  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.status(200).json(images)
}
