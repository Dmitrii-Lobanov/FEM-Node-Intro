// FS Module

import fs from 'node:fs/promises'

const readFile = async () => {
    const data = await fs.readFile('./package.json', 'utf-8')
    console.log(data)
}

const writeFile = async () => {
    await fs.writeFile('./fs_module_output.js', `console.log('Hello World')`)
}

const appendFile = async () => {
    await fs.appendFile('./fs_module_output.js', `\n\nconst a = 1; \nconsole.log(a)`)
}

const deleteFile = async () => {
    await fs.unlink('./fs_module_output.js')
}

readFile()
writeFile()
appendFile()