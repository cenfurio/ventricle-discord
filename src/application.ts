import {CoreEvents} from "@ventricle/core";
import {EventListener, Inject, Injectable} from "@ventricle/common";
import {Client} from "discord.js";

import {CLIENT_TOKEN} from "./constants";

@Injectable()
export class Application {
    constructor(
        private readonly client: Client,
        @Inject(CLIENT_TOKEN) private readonly token: string
    ) {}

    @EventListener(CoreEvents.INIT, -999)
    public async onInit() {
        await this.client.login(this.token);
    }

    @EventListener(CoreEvents.DESTROY)
    public async onDestroy() {
        await this.client.destroy();
    }
}