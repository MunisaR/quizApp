import { Router } from "express";
const router = Router();


///import controllers
import * as controller from "../controllers/controller.js";


/** Questions Routes API */
router.route('/questions')
            .get(controller.getQuestions) //get
            .post(controller.insertQuestions) //post
            .delete(controller.dropQuestions) //delete

// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)
// router.delete('/questions', controller.dropQuestions)


// router.get('/result', controller.getResult)
// router.post('/result', controller.storeResult)
// router.delete('/result', controller.dropResult)


router.route('/result')
            .get(controller.getResult) //get 
            .post(controller.storeResult) //post
            .delete(controller.dropResult) //delete   

export default router;