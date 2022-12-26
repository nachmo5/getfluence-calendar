const fs = require('fs');

let [_1, _2, type, name] = process.argv


if (!type || !name) {
    console.log("error: should have two arguments")
}

if (!["a", "m", "o", "p"].includes(type)) {
    console.log("error: invalid type arg (a, m, o, p)");
    throw new Error()
}

name = name.charAt(0).toUpperCase() + name.slice(1)
const argToFolder = {
    "a": "atoms",
    "m": "molecules",
    "o": "organisms",
    "p": "pages",
}
const folderPath = `./src/${argToFolder[type]}/${name}`;

const componentTemplate = `import c from './${name}.module.css';

interface Props {
}

function ${name}(props: Props) {
  return (
    <div className={c.${name}} >
    </div>
  );
}

export default ${name};
`;
const cssTemplate = `.${name} {
    width: 100%;
    height: 100%;
    display: flex;
}
`;

if (!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
}

fs.writeFile(`${folderPath}/${name}.tsx`, componentTemplate, function (err) {
    if (err) throw err;
    console.log(`${folderPath}/${name}.tsx created successfully`);
});


fs.writeFile(`${folderPath}/${name}.module.css`, cssTemplate, function (err) {
    if (err) throw err;
    console.log(`${folderPath}/${name}.module.css created successfully`);
});
