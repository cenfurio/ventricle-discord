import {bootstrapFromModule} from "@ventricle/bootstrap";
import {Module} from "@ventricle/common";

import {DiscordModule} from "../src";

@Module({
    imports: [
        DiscordModule.forRoot('your-token')
    ]
})
class MainModule {
}

bootstrapFromModule(MainModule)