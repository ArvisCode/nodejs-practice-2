//1. Добавить
//2. Прочитать все
//3. Полутить один
//4. Обновить
//5. Удалить

const router = require("express").Router();
const DriversController = require("../controllers/DriversController");

router.post("/drivers", DriversController.save);

router.get("/drivers", DriversController.getAll);

router.get("/drivers/:id", DriversController.getOne);

router.patch("/drivers/:id", DriversController.update);

router.delete("/drivers/:id", DriversController.remove);

module.exports = router;
