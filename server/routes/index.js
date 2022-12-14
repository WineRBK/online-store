import Router from "express";
import deviceRouter from "./device.routes.js";
import userRouter from "./user.routes.js";
import brandRouter from "./brand.routes.js";
import typeRouter from "./type.routes.js";

const router = new Router();

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

export default router;
