import {Client, ClientOptions} from "discord.js";
import {Module, ModuleWithProviders, InjectionToken} from "@ventricle/common";
import {Application} from "./application";
import {CLIENT_OPTIONS, CLIENT_TOKEN} from "./constants";

@Module({
    providers: [
        Application
    ]
})
export class DiscordModule {
    static forRoot(token: string, options: ClientOptions = {}): ModuleWithProviders {
        return {
            module: DiscordModule,
            providers: [
                {
                    provide: CLIENT_TOKEN,
                    useValue: token
                },
                {
                    provide: CLIENT_OPTIONS,
                    useValue: options
                },
                {
                    provide: Client,
                    useFactory: (options: ClientOptions) => {
                        return new Client(options);
                    },
                    deps: [CLIENT_OPTIONS]
                }
            ]
        }
    }
}