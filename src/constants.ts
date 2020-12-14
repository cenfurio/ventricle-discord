import {InjectionToken} from "@ventricle/common";
import {ClientOptions} from "discord.js";

export const CLIENT_OPTIONS = new InjectionToken<ClientOptions>('Client options');
export const CLIENT_TOKEN = new InjectionToken<string>('Client token');