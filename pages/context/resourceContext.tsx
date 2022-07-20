import { createContext } from "react";
import * as PIXI from 'pixi.js';

export const ResourceContext = createContext<PIXI.utils.Dict<PIXI.LoaderResource>>({});