const Geek = require("../model/modelG");


const listGeeks = (req, res) =>
 {
    const geeks = Geek.findAll();
    res.json(geeks);

    };


const getGeek = (req, res) => {

const { index } = req.params; // Captura o índice da URL
const geek = Geek.findById(index);

res.json(geek);

};

const addGeek = (req, res) => {

    const { name } = req.body; // Captura o nome do corpo da requisição
    const geeks = Geek.create(name);

    res.json(geeks);

    };

    const updateGeek = (req, res) => {

        const { index } = req.params;
        const { name } = req.body;
        const geeks = Geek.update(index, name);

        res.json(geeks);

        };

        const deleteGeek = (req, res) => {
            const { index } = req.params;
            Geek.deleteGeek(index);

            res.status(204).send(); // Resposta sem conteúdo, indicando sucesso

            };

    module.exports = {
    listGeeks,
    getGeek,
    addGeek,
    updateGeek,
    deleteGeek,
    };