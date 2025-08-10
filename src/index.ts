import { SimpleEnvironment } from "./environment";
import { Glider } from "./glider";

function boot() {
    const env = new SimpleEnvironment();
    const glider = new Glider();
    env.addCell(glider);
    env.start();
}

boot();
