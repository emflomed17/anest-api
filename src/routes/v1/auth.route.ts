import { Router } from 'express';
import validate from '../../middleware/validate';
import { loginSchema, signupSchema } from '../../validations/auth.validation';
import * as authController from '../../controller/auth.controller';

const authRouter = Router();

authRouter.post('/signup', validate(signupSchema), authController.handleSignUp);

authRouter.post('/login', validate(loginSchema), authController.handleLogin);

export default authRouter;
